import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Container, Button, Form, Icon, Message, Segment, Grid, Item, Divider } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label, Legend, TooltipProps } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import FocusLock from 'react-focus-lock';
import { parseCookies } from 'nookies';

const LOCAL_STORAGE_KEY = 'BF%_progress';

const BodyFatPercent = ({ user, ctx }) => {
  const [age, setAge] = useState<any>('');
  const [feet, setFeet] = useState<any>('');
  const [inches, setInches] = useState<any>('');
  const [weight, setWeight] = useState<any>('');
  const [centimeters, setCentimeters] = useState<any>('');
  const [kilograms, setKilograms] = useState<any>('');
  const [imperial, setImperial] = useState<boolean>(true);
  const [male, setMale] = useState<boolean>(true);
  const [sex, setSex] = useState<string>('male');
  const [goals, setGoals] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [numb, setNumb] = useState<number>(30);
  const [lined, setLined] = useState<any>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [desktop, setDesktop] = useState<boolean>(true);
  const [newData, setNewData] = useState<string>('');
  const BF = useRef<any>();

  useEffect(() => {
    const storedBF = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //parse to turn into array
    if (storedBF) setGoals(storedBF);
    setData([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  const handleInput = () => {
    if (imperial) {
      console.log('imperial', { age, feet, inches, weight, male, BF });
    } else {
      console.log('metric', { age, centimeters, kilograms, male, BF });
    }
  };

  // const BodyFatPercentage = useRef();
  // console.log(BodyFatPercentage.current?.innerText);

  useEffect(() => {
    setSex('');
  }, []);

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleRadio = () => {
    setSex('');
  };

  function handleUnclick() {
    setChecked((c) => !c);
  }

  if (goals.length > 0) {
    for (let i = 0; i < goals.length; i++) {}
    // console.log(goals.length <= 1 ? '1 body fat % calculation' : `%c ${goals.length} body fat % calculations`, 'color: green');
  } else {
    console.log('%c no body fat % calculations', 'color: red');
  }

  let counting: any = []; //IMPORTANT

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].BF]);
    // console.log("%c Array", "color: blue", counting[i]);
    // console.table(counting);
    // console.log(counting);
  }

  //console.log(counting.flat());                                          //flatten out array
  // const body_fat_percent: any = counting.flat();
  // console.log(body_fat_percent);
  console.log(data);
  console.log('target BF% line:', lined);

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

  let newBF = counting.flat().pop();
  console.log(newBF);

  async function postData() {
    const url = `${baseUrl}/api/bfAPI`;
    const payload = { user, newBF };
    const response = await axios.post(url, payload);
    console.log(response.data);
  }

  async function getData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newOrders1`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    setNewData(response.data);
  }

  async function deleteData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/bfAPI`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  async function deleteAll() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newOrders1`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  useEffect(() => {
    getData();
  }, []);

  let BFArray = Object(Object(newData).newOrders1);
  console.log(typeof BFArray);

  let app = []

  for (let i = 0; i < BFArray.length; i++) {
    app.push(BFArray[i].newBF);
  }

  console.log(app);

  for (let num = numb; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: app.shift(),
      line: lined,
    });
  }

  async function counter() {
    const name: any = BF.current?.innerText; //append goal ---> get access to name with useRef hook (reference elements in html)
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { BF: name }]; //previous value and return new goals by spreading over array, then adding new goal to list
    });

    setCount(count + 1);
    console.log(count);
    setData([]);

    BF.current?.innerText == null; 
  }

  return (
    <>
      <Head>
        <title>HealthStat | Body Fat Percent Calculator</title>
        <meta name="description" content="body fat, calculator" />
      </Head>
      <FocusLock>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
          <Message
            attached
            compact
            icon="calculator"
            header="Body Fat Percent Calculator"
            content="Calculate Your Body Fat Percentage"
            color="black"
          />
          {imperial ? (
            <>
              <Button
                attached
                compact
                icon="globe"
                content="Switch to Metric"
                color="grey"
                onClick={() => {
                    setImperial(false),
                    setAge(''),
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    handleRadio(),
                    setLined(''),
                    setData([]);
                }}
              />
            </>
          ) : (
            <>
              <Button
                attached
                compact
                icon="globe"
                content="Switch to Imperial"
                color="grey"
                onClick={() => {
                    setImperial(true),
                    setAge(''),
                    setCentimeters(''),
                    setKilograms(''),
                    handleRadio(),
                    setLined(''),
                    setData([]);
                }}
              />
            </>
          )}
          <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
              <Form.Input
                fluid
                icon="calendar"
                size="large"
                iconPosition="left"
                label="Age"
                placeholder="years"
                name="age"
                type="number"
                min="0"
                max="120"
                required
                autoFocus
                value={age}
                onChange={(e) => {
                  setAge(e.target.value), setData([]);
                }}
              />
              {imperial ? (
                <>
                  <Grid>
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
                  <div>&nbsp;</div>
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
                  {/* metric */}
                  <Grid>
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
                          value={centimeters}
                          onChange={(e) => {
                            setCentimeters(e.target.value), setData([]);
                          }}
                        />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <div>&nbsp;</div>
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
              &nbsp;Sex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male
              <input
                type="radio"
                name="rad"
                value="male"
                checked={sex === 'male' && checked}
                onChange={handleChange}
                required
                style={{ width: '30px' }}
                onMouseUp={() => {
                  setMale(true), handleUnclick();
                }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female
              <input
                type="radio"
                name="rad"
                value="female"
                checked={sex === 'female' && checked}
                onChange={handleChange}
                required
                style={{ width: '30px' }}
                onMouseUp={() => {
                  setMale(false), handleUnclick();
                }}
              />
              <Divider style={{ margin: '1.5em' }} />
              <div>
                <Form.Input
                  fluid
                  icon="target"
                  size="big"
                  iconPosition="left"
                  label="Set Body Fat % Target (optional)"
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
              <Segment color="blue" textAlign="center" size="massive">
                {imperial ? (
                  <>
                    {/* Men Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                    {male ? (
                      <>
                        <span ref={BF}>
                          {(
                            (parseFloat(weight) /
                              Math.pow(
                                parseFloat(feet) * 12 + parseFloat(inches),
                                2
                              )) *
                              703 *
                              1.2 +
                            0.23 * parseFloat(age) -
                            16.2
                          )
                            .toFixed(1)
                            .replace('NaN', '')}
                        </span>{' '}
                        {/* <div>
                          {(BodyFatPercentage.current?.innerText) * 2}
                        </div> */}
                      </>
                    ) : (
                      <>
                        {/* Female Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                        <span ref={BF}>
                          {(
                            (parseFloat(weight) /
                              Math.pow(
                                parseFloat(feet) * 12 + parseFloat(inches),
                                2
                              )) *
                              703 *
                              1.2 +
                            0.23 * parseFloat(age) -
                            5.4
                          )
                            .toFixed(1)
                            .replace('NaN', '')}
                        </span>{' '}
                        %
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {/* Male Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                    {male ? (
                      <>
                        <span ref={BF}>
                          {(
                            (parseFloat(kilograms) /
                              Math.pow(parseFloat(centimeters) / 100, 2)) *
                              1.2 +
                            0.23 * parseFloat(age) -
                            16.2
                          )
                            .toFixed(1)
                            .replace('NaN', '')}
                        </span>{' '}
                        %
                      </>
                    ) : (
                      <>
                        {/* Female Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                        <span ref={BF}>
                          {(
                            (parseFloat(kilograms) /
                              Math.pow(parseFloat(centimeters) / 100, 2)) *
                              1.2 +
                            0.23 * parseFloat(age) -
                            5.4
                          )
                            .toFixed(1)
                            .replace('NaN', '')}
                        </span>{' '}
                        %
                      </>
                    )}
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
                  style={{
                    border: '3px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Update Body Fat %
                </Button>
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {
                    deleteData(), 
                    setAge(''),
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    setCentimeters(''),
                    setKilograms(''),
                    handleRadio(),
                    setLined(''),
                    setData([]);
                  }}
                  style={{
                    border: '3px solid red',
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
                    setAge(''),
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    setCentimeters(''),
                    setKilograms(''),
                    handleRadio(),
                    setLined(''),
                    setData([]);
                  }}
                  style={{
                    border: '3px solid red',
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
          {/* <strong>onChange:</strong>
            <pre>{JSON.stringify({ age, feet, inches, weight, male, centimeters, kilograms }, null, 2)}</pre> */}
        </Container>
        {user ? (
          <>
            <Container
              textAlign="center"
              as="h3"
              style={{
                margin: '3em',
                display: counting.length ? 'block' : 'none',
              }}
            >
              <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
                <Message
                  attached
                  compact
                  icon="chart line"
                  header="Track Progress"
                  content="View Your Body Fat % Progression Over Time"
                  color="black"
                  style={{ background: '#26313c' }}
                />
                <Item
                  attached
                  style={{
                    background: '#313e4c',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    content="1D"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(1);
                    }}
                  />
                  <Button
                    content="7D"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(7);
                    }}
                  />
                  <Button
                    content="1M"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(30);
                    }}
                  />
                  <Button
                    content="6M"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(182);
                    }}
                  />
                  <Button
                    content="1Y"
                    className={styles.underline}
                    style={{
                      padding: '0',
                      margin: '0em 2.5em 0em 1.2em',
                      background: '#313e4c',
                      color: 'white',
                    }}
                    onClick={() => {
                      setData([]), setNumb(365);
                    }}
                  />
                </Item>
                <div className={styles.chart} style={{ padding: '3rem' }}>
                  <ResponsiveContainer
                    width="100%"
                    height={500}
                    key={`rc_${data.length}`}
                  >
                    <AreaChart data={data} key={`ac_${data.length}`}>
                      <defs>
                        {/* <linearGradient id="color" x1="0" y1="0" x2="0" y1="1"> */}
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
                      {/* goal line */}
                      <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(str) => {
                          const date = parseISO(str);
                          if (date.getDate() % 7 === 0) {
                            return format(date, 'MMM, d');
                          }
                          return '';
                        }}
                      >
                        {/* <Label
                            style={{
                                textAnchor: "end",
                                fontSize: "1em",
                                fill: "gray",
                                fillOpacity: ".7",
                                fontWeight: "700"
                            }}
                            angle={0} 
                            value={"Date"} 
                            position='insideRight'
                        /> */}
                      </XAxis>
                      <YAxis
                        dataKey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={(number) => `${number}`}
                      >
                        {/* <Label
                            style={{
                                textAnchor: "middle",
                                fontSize: "1em",
                                fill: "gray",
                                fillOpacity: ".7",
                                fontWeight: "700"
                            }}
                            angle={0} 
                            value={"Body Fat %"}
                            position='insideTop'
                        /> */}
                      </YAxis>
                      <Tooltip content={<CustomTooltip />} />
                      {/* <Legend verticalAlign="top" iconType="plainline" /> */}
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
  // console.log(payload[0]);
  // console.log(payload[0]?.payload?.value);               //hover over graph to see
  // console.log(payload[0]?.payload?.line);                //goal line

  if (active) {
    return (
      <div
        style={{
          color: '#fff',
          background: '#26313c',
          borderRadius: '.25rem',
          textAlign: 'center',
          padding: '1em 1.5em 1em 1.5em',
        }}
      >
        <h3>{format(parseISO(label), 'eeee, MMM d, yyy')}</h3>
        <p style={{ display: payload[0]?.payload?.value ? 'block' : 'none' }}>
          Body Fat %:&nbsp;&nbsp;{payload[0]?.payload?.value}
        </p>
        <p style={{ display: payload[0]?.payload?.line ? 'block' : 'none' }}>
          Goal Body Fat %:&nbsp;&nbsp;{payload[0]?.payload?.line}
        </p>
        <p
          style={{
            display:
              payload[0]?.payload?.value && payload[0]?.payload?.line
                ? 'block'
                : 'none',
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

export default BodyFatPercent;

BodyFatPercent.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newOrders1: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newOrders1`;
  const response = await axios.get(url, payload);
  return response.data;
}
