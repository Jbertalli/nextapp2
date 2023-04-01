//map over current array and return element of goals
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { parseCookies } from 'nookies';
import React, { useState, useEffect } from 'react';
import { Label, Divider, Grid } from 'semantic-ui-react';

// const config: any = {
//   year: 'numeric',
//   month: 'short',
//   day: '2-digit',
// };

export default function Goal(values) {

  const { 
    goal,
    toggleGoal,
    ctx,
    newGoals1
  } = values;
  
  // const [newData, setNewData] = useState<any>([]);
  const [checked, setChecked] = useState<boolean>(false);
  // const [desktop, setDesktop] = useState<boolean>(true);

  // useEffect(() => {
  //   if (window.innerWidth > 440) {
  //     setDesktop(true);
  //   } else {
  //     setDesktop(false);
  //   }

  //   const updateMedia = () => {
  //     if (window.innerWidth > 440) {
  //       setDesktop(true);
  //     } else {
  //       setDesktop(false);
  //     }
  //   };
  //   window.addEventListener('resize', updateMedia);
  //   return () => window.removeEventListener('resize', updateMedia);
  // }, []);

  function handleGoalClick() {
    toggleGoal(goal.id);
    toggleGoal(newGoals1.id);
  }

  function handleUnclick() {
    setChecked((c) => !c);
  }

  // const date = new Date();
  // const year = date.getFullYear();

  // async function getData() {
  //   const { token } = parseCookies(ctx);
  //   const url = `${baseUrl}/api/newGoals1`;
  //   const payload = { headers: { Authorization: token } };
  //   const response = await axios.get(url, payload);
  //   console.log(response.data);
  //   setNewData(response.data);
  // }

  // useEffect(() => {
  //   if (user) {
  //     getData();
  //   } else {
  //     console.log('no user');
  //   }
  // }, []);

  return (
    <div>
      <Grid style={{ background: checked ? '#E0E1E2' : '#FFF' }}>
        {' '}
        <Grid.Row columns={3}>
          <Grid.Column>
            <Label
              size="massive"
              style={{
                fontSize: '21px',
                display: 'flex',
                justifyContent: 'flex-start',
                color: 'black',
                background: 'none'
              }}
            >
              <input
                type="radio"
                checked={goal.complete}
                style={{
                  transform: 'translateY(2px)'
                }}
                onClick={() => {
                  handleGoalClick(), handleUnclick();
                }}
              />
              <div
                style={{
                  marginLeft: '24.5px'
                }}
              >
                {goal.name}
              </div>
            </Label>
          </Grid.Column>
          <Grid.Column />
          {/* <Grid.Column
            style={{ 
              fontSize: '1em', 
              margin: '14px 0% 0% 0%', 
              color: 'gray',
              display: desktop ? 'flex' : null,
              justifyContent: desktop ? 'flex-end' : null,
              transform: desktop ? 'translate(-20px)' : 'translate(-10px)'
            }}
          >
            {goal.date ? (
            <>
              {(goal.date).slice(5, 10)}-{year}
            </>
            ): null}
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  );
}

Goal.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newGoals1: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newGoals1`;
  const response = await axios.get(url, payload);
  return response.data;
}
