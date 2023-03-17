import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Container, Button, Form, Icon, Message, Segment, Grid, Item, Divider } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, TooltipProps, Label } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import FocusLock from 'react-focus-lock';
import { parseCookies } from 'nookies';
import { transform } from 'typescript';

const LOCAL_STORAGE_KEY = 'BMI_progress';

const BMICalculator = ({ user, ctx }) => {
  const [feet, setFeet] = useState<any>('');
  const [inches, setInches] = useState<any>('');
  const [weight, setWeight] = useState<any>('');
  const [centimeters, setCentimeters] = useState<any>('');
  const [kilograms, setKilograms] = useState<any>('');
  const [imperial, setImperial] = useState<boolean>(true);
  const [goals, setGoals] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [numb, setNumb] = useState<number>(30);
  const [lined, setLined] = useState<any>('');
  const [desktop, setDesktop] = useState<boolean>(true);
  const [newData, setNewData] = useState<string>('');
  const BMI = useRef<any>();

  useEffect(() => {
    const storedBMI = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //parse to turn into array
    if (storedBMI) setGoals(storedBMI);
    setData([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  const handleInput = () => {
    if (imperial) {
      console.log('imperial', { feet, inches, weight, BMI });
    } else {
      console.log('metric', { centimeters, kilograms, BMI });
    }
  };

  // if (goals.length > 0) {
  //   for (let i = 0; i < goals.length; i++) {}
  // } else {
  //   console.log('%c no BMI calculations', 'color: red');
  // }

  let counting: any = [];

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].BMI]);
  }

  let newBMI = counting.flat().pop();

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  async function postData() {
    const url = `${baseUrl}/api/bmiAPI`;
    const payload = { user, newBMI };
    const response = await axios.post(url, payload);
    console.log(response.data);
  }

  async function getData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newBMI1`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    setNewData(response.data);
  }

  async function deleteData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/bmiAPI`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  async function deleteAll() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newBMI1`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  useEffect(() => {
    if (user) {
      getData();
    } else {
      console.log('no user');
    }
  }, []);
  
  let BMIArray = Object(Object(newData).newBMI1);
  // console.log(typeof BMIArray);

  let app = []

  for (let i = 0; i < BMIArray.length; i++) {
    app.push(BMIArray[i].newBMI);
  }

  // console.log(app);

  for (let num = numb; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: app.shift(),
      line: lined,
    });
  }

  async function counter() {
    const name: any = BMI.current?.innerText;
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { BMI: name }];
    });

    setCount(count + 1);
    setData([]);

    BMI.current?.innerText == null; 
  }

  return (
    <>
      <Head>
        <title>HealthStat | BMI Calculator</title>
        <meta name="description" content="BMI, calculator, body mass index" />
      </Head>
      <FocusLock>
        <Container 
          textAlign="center"
          as={desktop ? "h3" : "h4"} 
          style={{ margin: desktop ? '3em' : '2em' }} 
          onKeyUp={() => setData([])} 
          onMouseEnter={() => setData([])} 
          onMouseLeave={() => setData([])}
        >
          <Message
            attached={'top'}
            compact
            icon="calculator"
            header="BMI Calculator"
            content="Calculate Your Body Mass Index"
            color="black"
          />
          {imperial ? (
            <>
              <Button
                attached={'top'}
                compact
                icon="globe"
                content="Switch to Metric"
                color="grey"
                onClick={() => {
                  setImperial(false),
                  setFeet(''),
                  setInches(''),
                  setWeight(''),
                  setLined(''),
                  setData([]);
                }}
              />
            </>
          ) : (
            <>
              <Button
                attached={'top'}
                compact
                icon="globe"
                content="Switch to Imperial"
                color="grey"
                onClick={() => {
                    setImperial(true),
                    setCentimeters(''),
                    setKilograms(''),
                    setLined(''),
                    setData([]);
                }}
              />
            </>
          )}
          <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
              {imperial ? (
                <>
                  <Grid style={{ marginBottom: '9px' }}>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <Form.Input
                          fluid
                          icon="chart bar"
                          size="large"
                          iconPosition="left"
                          label="Height"
                          placeholder="feet"
                          name="feet"
                          type="number"
                          min="0"
                          max="8"
                          required
                          autoFocus
                          value={feet}
                          onChange={(e) => {
                            setFeet(e.target.value), setData([]);
                          }}
                        />
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <Form.Input
                          fluid
                          icon="chart bar"
                          size="large"
                          iconPosition="left"
                          label=""
                          placeholder="inches"
                          name="inches"
                          type="number"
                          min="0"
                          max="12"
                          required
                          value={inches}
                          onChange={(e) => {
                            setInches(e.target.value), setData([]);
                          }}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Form.Input
                    fluid
                    icon="balance scale"
                    size="large"
                    iconPosition="left"
                    label="Weight"
                    placeholder="lbs"
                    name="weight"
                    type="number"
                    min="0"
                    max="800"
                    required
                    value={weight}
                    onChange={(e) => {
                      setWeight(e.target.value), setData([]);
                    }}
                  />
                </>
              ) : (
                <>
                  <Grid style={{ marginBottom: '9px' }}>
                    <Grid.Row>
                      <Grid.Column>
                        <Form.Input
                          fluid
                          icon="chart bar"
                          size="large"
                          iconPosition="left"
                          label="Height"
                          placeholder="cm"
                          name="centimeters"
                          type="number"
                          min="0"
                          max="270"
                          required
                          autoFocus
                          value={centimeters}
                          onChange={(e) => {
                            setCentimeters(e.target.value), setData([]);
                          }}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Form.Input
                    fluid
                    icon="balance scale"
                    size="large"
                    iconPosition="left"
                    label="Weight"
                    placeholder="kg"
                    name="kilograms"
                    type="number"
                    min="0"
                    max="360"
                    required
                    value={kilograms}
                    onChange={(e) => {
                      setKilograms(e.target.value), setData([]);
                    }}
                  />
                </>
              )}
              {user ? (
              <>
                <Divider style={{ margin: '1.5em' }} />
                <div>
                  <Form.Input
                    fluid
                    icon="target"
                    size="big"
                    iconPosition="left"
                    label="Set BMI Target (optional)"
                    placeholder="target"
                    name="target"
                    type="number"
                    min="0"
                    max="100"
                    value={lined}
                    style={{
                      width: desktop ? '35%' : '100%',
                      fontSize: '23px',
                      margin: '0em 0em 1em 0em',
                    }}
                    onChange={(e) => {
                      setLined(e.target.value), setData([]);
                    }}
                  />
                </div>
              </>
              ): null}
              <Segment color="blue" textAlign="center" size="massive">
                {imperial ? (
                  <>
                    {/* BMI (imperial): US units: BMI = (weight (lb) ÷ height^2 (in)) * 703 */}
                    <span ref={BMI}>
                      {(
                        (parseFloat(weight) /
                          Math.pow(
                            parseFloat(feet) * 12 + parseFloat(inches),
                            2
                          )) *
                        703
                      )
                        .toFixed(1)
                        .replace('NaN', '')}
                    </span>{' '}
                    BMI
                  </>
                ) : (
                  <>
                    {/* BMI (metric): Metric units: BMI = weight (kg) ÷ height^2 (m) */}
                    <span ref={BMI}>
                      {(
                        parseFloat(kilograms) /
                        Math.pow(parseFloat(centimeters) / 100, 2)
                      )
                        .toFixed(1)
                        .replace('NaN', '')}
                    </span>{' '}
                    BMI
                  </>
                )}
              </Segment>
            </Segment>
          </Form>
          {user ? (
            <>
              <Segment
                style={{
                  textAlign: 'left',
                  margin: '0',
                  padding: '2em 2em 2em 2em',
                  display: 'flex',
                  justifyContent: desktop ? 'space-around' : 'space-between'
                }}
              >
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {postData(), getData(), counter()}}
                  onMouseMove={() => setData([])}
                  style={{
                    border: desktop ? '3px solid #125CA1' : '2px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Update BMI
                </Button>
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {
                    deleteData(), 
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    setCentimeters(''),
                    setKilograms(''),
                    setLined(''),
                    setData([])
                  }}
                  style={{
                    border: desktop ? '3px solid red' : '2px solid red',
                    background: 'transparent',
                    color: 'red',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Delete Last
                </Button>
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {
                    deleteAll()
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    setCentimeters(''),
                    setKilograms(''),
                    setLined(''),
                    setData([])
                  }}
                  style={{
                    border: desktop ? '3px solid red' : '2px solid red',
                    background: 'transparent',
                    color: 'red',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Delete All
                </Button>
              </Segment>
            </>
          ) : (
            <>
              <Message style={{ textAlign: 'center', margin: '0 0 0' }}>
                <Icon name="sign in" size="large" />
                <Link href="/Login">
                  <a style={{ color: '#3978f5' }}>Login</a>
                </Link>{' '}
                To Track Progress
              </Message>
            </>
          )}
        </Container>
        {user ? (
          <>
            <Container
              textAlign="center"
              style={{
                margin: '3em',
                display: counting.length ? 'block' : 'none'
              }}
              onMouseEnter={() => setData([])}
            >
              <Container 
                textAlign="center"
                as={desktop ? "h3" : "h4"} 
                style={{ margin: '3em' }}
              >
                <Message
                  attached={'top'}
                  compact
                  icon="chart line"
                  header="Track Progress"
                  content="View Your BMI Progression Over Time"
                  color="black"
                  style={{ background: '#26313c' }}
                />
                <Item
                  attached={'top'}
                  style={{
                    background: '#313e4c',
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}
                >
                  <Button
                    content="10"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white'
                    }}
                    onClick={() => {
                      setData([]), setNumb(10);
                    }}
                  />
                  <Button
                    content="25"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white'
                    }}
                    onClick={() => {
                      setData([]), setNumb(25);
                    }}
                  />
                  <Button
                    content="50"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(50);
                    }}
                  />
                  <Button
                    content="100"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white'
                    }}
                    onClick={() => {
                      setData([]), setNumb(100);
                    }}
                  />
                  <Button
                    content="500"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '0em 2.5em 0em 1.2em',
                      background: '#313e4c',
                      color: 'white'
                    }}
                    onClick={() => {
                      setData([]), setNumb(500);
                    }}
                  />
                </Item>
                <div className={styles.chart} style={{ padding: '3rem' }}>
                  <ResponsiveContainer
                    width="100%"
                    height={desktop ? 500 : 200}
                    key={`rc_${data.length}`}
                  >
                    <AreaChart 
                      data={data} 
                      key={`ac_${data.length}`}
                      margin={{ bottom: 25, left: 25 }}
                    >
                      <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0">
                          <stop
                            offset="0%"
                            stopColor="#2451B7"
                            stopOpacity={0.05}
                          />
                          <stop
                            offset="75%"
                            stopColor="#2451B7"
                            stopOpacity={1}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#2451B7"
                        fill="url(#color)"
                        key={`a_${data.length}`}
                      />
                      <Area
                        dataKey="line"
                        stroke="#2451B7"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        key={`ac_${data.length}`}
                      />{' '}
                      <XAxis
                        tick={true}
                        minTickGap={20}
                        interval={"preserveStartEnd"}
                      >
                        <Label 
                          value="Entry Number" 
                          offset={-20} 
                          position="insideBottom" 
                          fill="rgb(102, 102, 102)"
                        />
                      </XAxis>
                      <YAxis
                        dataKey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={(number) => `${number}`}
                        label={{ 
                          value: 'BMI', 
                          angle: -90, 
                          position: 'insideLeft',
                          offset: '-15',
                          fill: 'rgb(102, 102, 102)'
                        }}
                      >
                      </YAxis>
                      <Tooltip content={<CustomTooltip />} />
                      <CartesianGrid opacity={0.1} vertical={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Container>
            </Container>
          </>
        ) : null}
      </FocusLock>
    </>
  );
};

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {

  if (active) {
    return (
      <div
        style={{
          color: '#fff',
          background: '#26313c',
          borderRadius: '.25rem',
          textAlign: 'center',
          padding: '1em 1.5em 0.1em 1.5em'
        }}
      >
        <p style={{ display: payload[0]?.payload?.value ? 'block' : 'none' }}>
          BMI:&nbsp;&nbsp;{payload[0]?.payload?.value}
        </p>
        <p style={{ display: payload[0]?.payload?.line ? 'block' : 'none' }}>
          Goal BMI:&nbsp;&nbsp;{payload[0]?.payload?.line}
        </p>
        <p
          style={{
            marginBottom: '1em',
            display:
              payload[0]?.payload?.value && payload[0]?.payload?.line
                ? 'block'
                : 'none'
          }}
        >
          Difference:&nbsp;&nbsp;
          {(payload[0]?.payload?.line - payload[0]?.payload?.value)
            .toFixed(1)
            .replace('NaN', '')}
        </p>
      </div>
    );
  }
  return null;
}

export default BMICalculator;

BMICalculator.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newBMI1: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newBMI1`;
  const response = await axios.get(url, payload);
  return response.data;
}
