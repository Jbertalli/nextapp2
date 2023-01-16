import React, { useState, useRef } from 'react';
import { Container, Button, Message, Segment, Item } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, TooltipProps } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import styles from '../styles/Footer.module.css';

const Chart = () => {
  const [goals, setGoals] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [numb, setNumb] = useState<number>(30);
  const goalNameRef = useRef<any>();

  if (goals.length > 0) {
    for (let i = 0; i < goals.length; i++) {}
    console.log(
      goals.length <= 1 ? '1 goal' : `%c ${goals.length} goals`,
      'color: green'
    );
  } else {
    console.log('%c no goals', 'color: red');
  }

  let counting: any = [];

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].name]);
    // console.log("%c Array", "color: blue", counting[i]);
    console.table(counting);
    // console.log(counting);
  }

  function handleAddGoal(e) {
    const name: any = goalNameRef.current.value; //append goal ---> get access to name with useRef hook (reference elements in html)
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { name: name, complete: false }]; //previous value and return new goals by spreading over array, then adding new goal to list
    });

    setCount(count + 1);
    console.log(count);
    setData([]);

    goalNameRef.current.value = null; //clear out input after clicking Add Goal Button
  }

  function handleClear() {
    const newGoals: any = goals.filter((goal) => !goal.complete);
    setGoals(newGoals);
    setCount(newGoals.length);
    setData([]); //fixed bug
    // console.log(newGoals);
    // console.log(newGoals.length);
    console.log('%c cleared some goals', 'color: orange');
  }

  function clearAll() {
    setCount(0);
    setGoals([]);
    setData([]);
    console.clear();
    console.log('%c cleared all goals', 'color: red');
  }

  let fruits: any = [];

  for (let i = 0; i < goals.length; i++) {
    fruits.push(counting.flat()[i]);
  }

  for (let num = numb; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: fruits.shift(),
    });
  }

  console.log(counting.flat()); //flatten out array
  console.log(data);

  return (
    <>
      <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
        {/* <Message 
                    attached
                    compact
                    icon="target"
                    header="Goal Tracker"
                    content="Set and Track Your Goals"
                    color="black"
                /> */}
        <Segment>
          <Segment style={{ border: 'none', padding: '2em 0em 3em 0em' }}>
            <div>
              <div
                style={{
                  textAlign: 'left',
                  padding: '0em 1em 1em 1em',
                  fontSize: '19px',
                }}
              >
                Add Goal to List
              </div>
              <h1
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  margin: '-.4em 0em 0em .7em',
                  fontSize: '23px',
                }}
              >
                <input
                  ref={goalNameRef}
                  className={styles.input}
                  type="number"
                  autoFocus
                  placeholder="+ add goals"
                />
              </h1>
            </div>
          </Segment>
          <Segment
            color="blue"
            style={{
              textAlign: 'left',
              margin: '1em 1em 1em',
              padding: '2em 2em 2em 2em',
            }}
          >
            <Button size="big" onClick={handleAddGoal} color="blue">
              Add Goal
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="big" onClick={handleClear}>
              Clear Checked Goal
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button size="big" onClick={clearAll}>
              Clear All
            </Button>
          </Segment>
        </Segment>

        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
          <Message
            attached
            compact
            icon="chart line"
            header="Track Progress"
            content="View Your Progression Over Time"
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
                hover: 'red',
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
            {/* <div> */}
            <ResponsiveContainer
              width="100%"
              height={500}
              key={`rc_${data.length}`}
            >
              <AreaChart data={data} key={`ac_${data.length}`}>
                <defs>
                  {/* <linearGradient id="color" x1="0" y1="0" x2="0" y1="1"> */}
                  <linearGradient id="color" x1="0" y1="0" x2="0">
                    <stop offset="0%" stopColor="#2451B7" stopOpacity={0.05} />
                    <stop offset="75%" stopColor="#2451B7" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="value"
                  stroke="#2451B7"
                  fill="url(#color)"
                  key={`a_${data.length}`}
                />
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
                />
                <YAxis
                  dataKey="value"
                  axisLine={false}
                  tickLine={false}
                  tickCount={8}
                  tickFormatter={(number) => `${number}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Container>
      </Container>
    </>
  );
};

function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  // console.log(payload[0]?.payload?.value);               //hover over graph to see
  // console.log(payload[0]);
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
        {/* <p>{payload[0].value} lbs</p> */}
        <p>{payload[0]?.payload?.value} BMI</p>
      </div>
    );
  }
  return null;
}

export default Chart;
