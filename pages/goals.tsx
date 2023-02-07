import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import GoalList from '../components/GoalList';
import { Button, Container, Message, Segment, Icon } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'goals';

function Goals({ user, ctx }) {
  // console.log(user);
  const [goals, setGoals] = useState<any>([]); //set array of goals when first loading
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [desktop, setDesktop] = useState<boolean>(true);
  const [newData, setNewData] = useState<string>('');
  const goalNameRef = useRef<any>(); //access to html element

  //SAVE GOALS
  //useEffect to load goals right when component mounts
  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); //parse to turn into array
    if (storedGoals) setGoals(storedGoals);
    setData([]);
  }, []);

  //save goals across page reloads by storing inside localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    if (user) {
      goalNameRef.current.focus();
    }
  }, [goals]);

  if (goals.length > 0) {
    for (let i = 0; i < goals.length; i++) {}
    // console.log(goals.length <= 1 ? '1 goal' : `%c ${goals.length} goals`, 'color: green');
  } else {
    console.log('%c no goals', 'color: red');
  }

  let counting: any = [];

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].name]);
  }

  console.log(counting.flat);

  let newGoal = counting.flat().pop();
  console.log(newGoal);

  //toggle from complete to incomplete, then pass to <GoalList toggleGoal={toggleGoal} />
  function toggleGoal(id) {
    const newGoals = [...goals]; //copy of goals array to modify
    const goal: any = newGoals.find((goal) => goal.id === id);
    goal.complete = !goal.complete;
    setGoals(newGoals);
    console.log(newGoals);
    setData([]);
  }

  async function handleAddGoal() {
    const name: any = goalNameRef.current.value; //append goal ---> get access to name with useRef hook (reference elements in html)
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { id: uuidv4(), name: name, complete: false }]; //previous value and return new goals by spreading over array, then adding new goal to list
    });

    setCount(count + 1);
    console.log(count);
    setData([]);
    console.log(goalNameRef.current.value);

    goalNameRef.current.value = null;
  }

  function handleClear() {
    const newGoals: any = goals.filter((goal) => !goal.complete);
    setGoals(newGoals);
    setCount(newGoals.length);
    setData([]);
  }

  async function clearAll() {
    setCount(0);
    setGoals([]);
    setData([]);
    console.clear();
  }

  console.log(data);
  // console.log(data[0].date);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(true);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(true);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  async function postData() {
    const url = `${baseUrl}/api/goalAPI`;
    const payload = { user, newGoal };
    const response = await axios.post(url, payload);
    console.log(response.data);
  }

  async function getData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newOrders3`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.get(url, payload);
    console.log(response.data);
    setNewData(response.data);
  }
  
  async function deleteData() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/goalAPI`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  async function deleteAll() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/newOrders3`;
    const payload = { headers: { Authorization: token } };
    const response = await axios.delete(url, payload);
    console.log(response.data)
  }

  useEffect(() => {
    getData();
  }, []);

  let GoalArray = Object(Object(newData).newOrders3);
  console.log(typeof GoalArray);

  let app = []

  for (let i = 0; i < GoalArray.length; i++) {
    app.push(GoalArray[i].newGoal);
  }

  console.log(app);

  return (
    <>
      <Head>
        <title>HealthStat | Goals</title>
        <meta name="description" content="goals" />
      </Head>
      <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
        <Message
          attached
          compact
          icon="target"
          header="Goal Tracker"
          content="Set and Track Your Goals"
          color="black"
          style={{ transform: 'translateY(13px)' }}
        />
        {user ? (
          <>
            <Segment>
              {goals.length < 1 ? (
                <>
                  <div
                    style={{
                      fontSize: '2em',
                      textAlign: 'center',
                      background: 'linear-gradient(to bottom, silver, white)',
                      height: '30vh',
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{ transform: 'translateY(50%)' }}>
                      <Icon name="plus" />
                      Add Some Goals
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <GoalList
                    goals={goals}
                    toggleGoal={toggleGoal}
                    count={count}
                  />{' '}
                </>
              )}
              <Segment
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  margin: '.5em',
                }}
              >
                <h2>
                  {goals.filter((goal) => !goal.complete).length}{' '}
                  {goals.length === 1
                    ? 'goal left to complete'
                    : 'goals left to complete'}
                </h2>
              </Segment>
              <Segment style={{ border: 'none', padding: desktop ? '2em 0em 3em 0em' : '1em 0em 2em 0em' }}>
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
                      type="text"
                      autoFocus
                      placeholder="+ add goals"
                      style={{ width: desktop ? '50%' : '95%' }}
                    />
                  </h1>{' '}
                </div>
              </Segment>
              <Segment
                color="blue"
                style={{
                  textAlign: 'left',
                  margin: '1em 1em 1em',
                  padding: '2em 2em 2em 2em',
                  display: 'flex',
                  justifyContent: desktop ? 'space-around' : 'space-between'
                }}
              >
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {postData(), getData(), handleAddGoal()}}
                  style={{
                    border: '3px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Add Goal
                </Button>
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() =>{
                    deleteData(),
                    handleClear()
                  }}
                  style={{
                    border: '3px solid red',
                    background: 'transparent',
                    color: 'red',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Clear Checked Goal
                </Button>
                <Button
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {
                    deleteAll(),
                    clearAll()
                  }}
                  style={{
                    border: '3px solid red',
                    background: 'transparent',
                    color: 'red',
                    height: desktop ? null : '40px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Clear All
                </Button>
              </Segment>
            </Segment>
          </>
        ) : (
          <>
            <div
              style={{
                fontSize: desktop ? '2em' : '1.5em',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, silver, white)',
                height: '40vh',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '10px',
              }}
            >
              <div style={{ transform: 'translateY(50%)' }}>
                <Icon name="plus" />
                Add Some Goals
              </div>
            </div>
            <Message style={{ textAlign: 'center', marginTop: '-9px' }}>
              <Icon name="sign in" size="large" />
              <Link href="/Login">
                <a style={{ color: '#3978f5' }}>Login</a>
              </Link>{' '}
              To Add Goals
            </Message>
          </>
        )}
      </Container>
    </>
  );
}

export default Goals;

Goals.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newOrders3: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newOrders3`;
  const response = await axios.get(url, payload);
  return response.data;
}
