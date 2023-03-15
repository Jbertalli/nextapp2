import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import FocusLock from 'react-focus-lock';
import { parseCookies } from 'nookies';
import { Container, Button, Form, Icon, Message, Segment, Grid, Item } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, TooltipProps } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';

const LOCAL_STORAGE_KEY = 'Calorie_progress';

const CalorieCalculator = ({ user, ctx }) => {
  const [age, setAge] = useState<any>('');
  const [feet, setFeet] = useState<any>('');
  const [inches, setInches] = useState<any>('');
  const [weight, setWeight] = useState<any>('');
  const [centimeters, setCentimeters] = useState<any>('');
  const [kilograms, setKilograms] = useState<any>('');
  const [lifestyle, setLifestyle] = useState<any>('');
  const [imperial, setImperial] = useState<boolean>(true);
  const [male, setMale] = useState<boolean>(true);
  const [sex, setSex] = useState<string>('male');
  const [radio, setRadio] = useState<any>('');
  const [goals, setGoals] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [numb, setNumb] = useState<number>(30);
  const [average, setAverage] = useState<any>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [checkedMale, setCheckedMale] = useState<boolean>(false);
  const [desktop, setDesktop] = useState<boolean>(false);
  const [newData, setNewData] = useState<string>('');
  const Calories = useRef<any>();

  useEffect(() => {
    const storedCalories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //parse to turn into array
    if (storedCalories) setGoals(storedCalories);
    setData([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    setSex('');
  }, []);

  const handleInput = () => {
    if (imperial) {
      console.log('imperial', { age, feet, inches, weight, male, lifestyle, Calories });
    } else {
      console.log('metric', { age, centimeters, kilograms, male, lifestyle, Calories });
    }
  };

  const handleChange = (event) => {
    setSex(event.target.value);
  };

  const handleRadio = () => {
    setSex('');
  };

  const handleLifeChange = (event) => {
    setRadio(event.target.value);
  };

  const handleLife = () => {
    setRadio('');
  };

  function handleUnclick() {
    setChecked((c) => !c);
  }

  function handleMaleUnclick() {
    setCheckedMale((c) => !c);
  }

  if (goals.length > 0) {
    for (let i = 0; i < goals.length; i++) {}
  } else {
    console.log('%c caloric intake calculations', 'color: red');
  }

  let counting: any = [];
  let avg: any = [];

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].Calories]);
    const flattened: any = counting.flat();
    const reduced: any = flattened.reduce((total, current) => parseFloat(total) + parseFloat(current));
    avg = (reduced / goals.length).toFixed(0);
    console.log('%c average calories:', 'color: blue', avg);
  }

  console.log(avg);

  let newCal = counting.flat().pop();

  const caloric_intake: any = counting.flat();

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
    const url = `${baseUrl}/api/calAPI`;
    const payload = { user, newCal };
    const response = await axios.post(url, payload);
    console.log(response.data);
  }

  async function getData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newCalorie`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    setNewData(response.data);
  }

  async function deleteData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/calAPI`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  async function deleteAll() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newCalorie`;
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

  let CalArray = Object(Object(newData).newCalorie);
  // console.log(typeof CalArray);

  let app = []

  for (let i = 0; i < CalArray.length; i++) {
    app.push(CalArray[i].newCal);
  }

  // console.log(app);

  for (let num = numb; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: app.shift(),
      average: average,
    });
  }

  async function counter() {
    const name: any = Calories.current?.innerText;
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { Calories: name }];
    });

    setCount(count + 1);
    setData([]);

    Calories.current?.innerText == null; 
  }

  return (
    <>
      <Head>
        <title>HealthStat | Calorie Intake Calculator</title>
        <meta
          name="description"
          content="calories, calorie, caloric, calculator"
        />
      </Head>
      <FocusLock>
        <Container 
          textAlign="center" 
          as="h3" 
          style={{ margin: '3em' }} 
          onKeyUp={() => setData([])} 
          onMouseEnter={() => setData([])} 
          onMouseLeave={() => setData([])}
        >
          <Message
            attached
            compact
            icon="calculator"
            header="Calorie Calculator"
            content="Calculate Your Recommended Daily Caloric Intake"
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
                    handleLife(),
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
                    handleLife(),
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
              <div
                onClick={() => setData([])}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: desktop ? 'flex-start' : 'space-between',
                    marginBottom: '17px'
                  }}
                >
                  <span
                    style={{
                      marginRight: desktop ? '40px' : null
                    }}
                  >
                    Sex
                  </span>
                  <span
                    style={{
                      marginRight: desktop ? '30px' : null
                    }}
                  >
                    <span
                      style={{
                        marginRight: desktop ? null : '8px'
                      }}
                    >
                      Male
                    </span>
                    <input
                      type="radio"
                      name="rad"
                      value="male"
                      checked={sex === 'male' && checkedMale}
                      onChange={handleChange}
                      required
                      style={{ width: '30px', cursor: 'pointer' }}
                      onMouseUp={() => {
                        setMale(true), handleMaleUnclick();
                      }}
                    />
                  </span>
                  <span>
                    <span
                      style={{
                        marginRight: desktop ? null : '8px'
                      }}
                    >
                      Female
                    </span>
                    <input
                      type="radio"
                      name="rad"
                      value="female"
                      checked={sex === 'female' && checkedMale}
                      onChange={handleChange}
                      required
                      style={{ width: '30px', cursor: 'pointer' }}
                      onMouseUp={() => {
                        setMale(false), handleMaleUnclick();
                      }}
                    />
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: desktop ? 'flex-start' : null,
                    marginBottom: desktop ? null : '17px'
                  }}
                >
                  <span>
                    <div>
                      <span
                        style={{
                          marginRight: desktop ? '29px' : null,
                          display: desktop ? null : 'block'
                        }}
                      >
                        Lifestyle
                      </span>
                      <span
                        style={{
                          marginRight: desktop ? '51.9px' : '12px'
                        }}
                      >
                        <span
                          style={{
                            marginRight: desktop ? null : '8px'
                          }}
                        >
                          1
                        </span>
                        <input
                          type="radio"
                          name="lifestyle"
                          required
                          style={{ width: '30px', cursor: 'pointer' }}
                          value={lifestyle}
                          checked={radio === '1' && checked}
                          onChange={handleLifeChange}
                          onMouseUp={() => {
                            setLifestyle(1), handleUnclick();
                          }}
                        />
                      </span>
                      <span
                        style={{
                          marginRight: desktop ? '51.9px' : '12px'
                        }}
                      >
                        <span
                          style={{
                            marginRight: desktop ? null : '8px'
                          }}
                        >
                          2
                        </span>
                        <input
                          type="radio"
                          name="lifestyle"
                          required
                          style={{ width: '30px', cursor: 'pointer' }}
                          value={lifestyle}
                          checked={radio === '2' && checked}
                          onChange={handleLifeChange}
                          onMouseUp={() => {
                            setLifestyle(2), handleUnclick();
                          }}
                        />
                      </span>
                      <span
                        style={{
                          marginRight: desktop ? '51.9px' : '12px'
                        }}
                      >
                        <span
                          style={{
                            marginRight: desktop ? null : '8px'
                          }}
                        >
                          3
                        </span>
                        <input
                          type="radio"
                          name="lifestyle"
                          required
                          style={{ width: '30px', cursor: 'pointer' }}
                          value={lifestyle}
                          checked={radio === '3' && checked}
                          onChange={handleLifeChange}
                          onMouseUp={() => {
                            setLifestyle(3), handleUnclick();
                          }}
                        />
                      </span>
                      <span
                        style={{
                          marginRight: desktop ? '51.9px' : '12px'
                        }}
                      >
                        <span
                          style={{
                            marginRight: desktop ? null : '8px'
                          }}
                        >
                          4
                        </span>
                        <input
                          type="radio"
                          name="lifestyle"
                          required
                          style={{ width: '30px', cursor: 'pointer' }}
                          value={lifestyle}
                          checked={radio === '4' && checked}
                          onChange={handleLifeChange}
                          onMouseUp={() => {
                            setLifestyle(4), handleUnclick();
                          }}
                        />
                      </span>
                      <span>
                      <span
                          style={{
                            marginRight: desktop ? null : '8px'
                          }}
                        >
                          5
                        </span>
                        <input
                          type="radio"
                          name="lifestyle"
                          required
                          style={{ width: '30px', cursor: 'pointer' }}
                          value={lifestyle}
                          checked={radio === '5' && checked}
                          onChange={handleLifeChange}
                          onMouseUp={() => {
                            setLifestyle(5), handleUnclick();
                          }}
                        />
                      </span>
                      {desktop ? (
                        <>
                          <div style={{ color: 'grey', fontSize: '15px' }}>
                            &nbsp;1 = Low Activity{' '}
                            <div style={{ transform: 'translate(482px, -23px)' }}>
                              5 = High Activity
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                  </span>
                </div>

              </div>
              <Segment color="blue" textAlign="center" size="massive">
                {imperial ? (
                  <>
                    {male ? (
                      <>
                        <span ref={Calories}>
                          {(
                            (parseFloat(lifestyle) * 0.2 + 1) *
                            (66 +
                              parseFloat(weight) * 6.2 +
                              12.7 *
                                (parseFloat(feet) * 12 + parseFloat(inches)) -
                              6.76 * parseFloat(age))
                          )
                            .toFixed(0)
                            .replace('NaN', '')}
                        </span>{' '}
                        Calories Per Day
                      </>
                    ) : (
                      <>
                        <span ref={Calories}>
                          {(
                            (parseFloat(lifestyle) * 0.2 + 1) *
                            (655.1 +
                              parseFloat(weight) * 4.35 +
                              4.7 *
                                (parseFloat(feet) * 12 + parseFloat(inches)) -
                              4.7 * parseFloat(age))
                          )
                            .toFixed(0)
                            .replace('NaN', '')}
                        </span>{' '}
                        Calories Per Day
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {/* Male (metric): BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) */}
                    {male ? (
                      <>
                        <span ref={Calories}>
                          {(
                            (parseFloat(lifestyle) * 0.2 + 1) *
                            (66 +
                              parseFloat(kilograms) * 13.7 +
                              5 * parseFloat(centimeters) -
                              6.76 * parseFloat(age))
                          )
                            .toFixed(0)
                            .replace('NaN', '')}
                        </span>{' '}
                        Calories Per Day
                      </>
                    ) : (
                      <>
                        {/* Female (metric): BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years) */}
                        <span ref={Calories}>
                          {(
                            (parseFloat(lifestyle) * 0.2 + 1) *
                            (655 +
                              parseFloat(kilograms) * 9.6 +
                              1.8 * parseFloat(centimeters) -
                              4.7 * parseFloat(age))
                          )
                            .toFixed(0)
                            .replace('NaN', '')}
                        </span>{' '}
                        Calories Per Day
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
                  onMouseMove={() => setData([])}
                  style={{
                    border: desktop ? '3px solid #125CA1' : '2px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  {desktop ? 'Update Calorie History': 'Update'}
                </Button>
                <Button
                  size={desktop ? "big" : "small"}
                  onClick={() => {
                    setAverage(avg), setData([]);
                  }}
                  onDoubleClick={() => {
                    setAverage(''), setData([]);
                  }}
                  style={{
                    border: desktop ? '3px solid #125CA1' : '2px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Calculate Average
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
                    handleLife(),
                    setData([]);
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
                    deleteAll(),
                    setAge(''),
                    setFeet(''),
                    setInches(''),
                    setWeight(''),
                    setCentimeters(''),
                    setKilograms(''),
                    handleRadio(),
                    handleLife(),
                    setData([]);
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
              as="h3"
              style={{
                margin: '3em',
                display: counting.length ? 'block' : 'none'
              }}
              onMouseEnter={() => setData([])}
            >
              <Container 
                textAlign="center" 
                as={desktop ? "h3" : "h4"} 
                style={{ margin: '3em' }}>
                <Message
                  attached
                  compact
                  icon="chart line"
                  header="Track Progress"
                  content="View Your Recommended Daily Caloric Intake"
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
                    height={desktop ? 500 : 200}
                    key={`rc_${data.length}`}
                  >
                    <AreaChart data={data} key={`ac_${data.length}`}>
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
                        dataKey="average"
                        stroke="#2451B7"
                        fillOpacity={1}
                        fill="url(#colorPv)"
                        key={`avg_${data.length}`}
                      />{' '}
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
                      </XAxis>
                      <YAxis
                        dataKey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        tickFormatter={(number) => `${number}`}
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
          padding: '1em 1.5em 1em 1.5em',
        }}
      >
        <h3>{format(parseISO(label), 'eeee, MMM d, yyy')}</h3>
        <p style={{ display: payload[0]?.payload?.value ? 'block' : 'none' }}>
          Calories:&nbsp;&nbsp;{payload[0]?.payload?.value}
        </p>
        <p style={{ display: payload[0]?.payload?.average ? 'block' : 'none' }}>
          Average:&nbsp;&nbsp;{payload[0]?.payload?.average}
        </p>
      </div>
    );
  }
  return null;
}

export default CalorieCalculator;

CalorieCalculator.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newCalorie: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newCalorie`;
  const response = await axios.get(url, payload);
  return response.data;
}
