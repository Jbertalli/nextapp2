import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import GoalList from '../components/GoalList';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/Footer.module.css';
import { Button, Container, Message, Segment, Icon } from 'semantic-ui-react';

const LOCAL_STORAGE_KEY = 'goals';

function Goals({ user }) {
  const [goals, setGoals] = useState<any>([]);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>([]);
  const [desktop, setDesktop] = useState<boolean>(true);
  const goalNameRef = useRef<any>();

  useEffect(() => {
    const storedGoals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedGoals) setGoals(storedGoals);
    setData([]);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    if (user) {
      goalNameRef.current.focus();
    }
  }, [goals]);

  let counting: any = [];

  for (let i = 0; i < goals.length; i++) {
    counting.push([goals[i].name]);
  }

  function toggleGoal(id) {
    const newGoals = [...goals];
    const goal: any = newGoals.find((goal) => goal.id === id);
    goal.complete = !goal.complete;
    setGoals(newGoals);
    setData([]);
  }

  async function handleAddGoal() {
    const name: any = goalNameRef.current.value;
    const userId = user._id;
    if (name === '') return;
    setGoals((prevGoals) => {
      return [...prevGoals, { id: uuidv4(), userId: userId, name: name, complete: false }];
    });

    setCount(count + 1);
    setData([]);

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

  return (
    <>
      <Head>
        <title>HealthStat | Goals</title>
        <meta name="description" content="goals" />
      </Head>
      <Container 
        textAlign="center" 
        as="h3" 
        style={{ margin: desktop ? '3em' : '1em' }}
      >
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
                      marginBottom: '10px'
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
                  margin: '.5em'
                }}
              >
                <h2>
                  {goals.filter((goal) => !goal.complete).length}{' '}
                  {goals.length === 1 ? 'goal left to complete' : 'goals left to complete'}
                </h2>
              </Segment>
              <Segment style={{ border: 'none', padding: desktop ? '2em 0em 3em 0em' : '1em 0em 2em 0em' }}>
                <div>
                  <div
                    style={{
                      textAlign: 'left',
                      padding: '0em 1em 1em 1em',
                      fontSize: '19px'
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
                  margin: desktop ? '1em 1em 1em' : null,
                  padding: desktop ? '2em 2em 2em 2em' : null,
                  display: 'flex',
                  justifyContent: desktop ? 'space-around' : 'space-between'
                }}
              >
                <Button
                  fluid={desktop ? false : true}
                  size={desktop ? 'big' : 'small'}
                  // onClick={() => {postData(), getData(), handleAddGoal()}}
                  onClick={() => handleAddGoal()}
                  style={{
                    border: desktop ? '3px solid #125CA1' : '2px solid #125CA1',
                    background: 'transparent',
                    color: '#125CA1',
                    height: desktop ? null : '45px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Add Goal
                </Button>
                <Button
                  fluid={desktop ? false : true}
                  size={desktop ? 'big' : 'small'}
                  onClick={() => handleClear()}
                  style={{
                    border: desktop ? '3px solid red' : '2px solid red',
                    background: 'transparent',
                    color: 'red',
                    lineHeight: desktop ? null : '11px',
                    height: desktop ? null : '45px',
                    padding: desktop ? null : '0px 10px 0px 10px'
                  }}
                >
                  Clear Checked Goal
                </Button>
                <Button
                  fluid={desktop ? false : true}
                  size={desktop ? 'big' : 'small'}
                  onClick={() => {
                    clearAll()
                  }}
                  style={{
                    border: desktop ? '3px solid red' : '2px solid red',
                    background: 'transparent',
                    color: 'red',
                    height: desktop ? null : '45px',
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
                marginBottom: '10px'
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
