import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { Header, Segment, Icon, Table, Divider } from 'semantic-ui-react';

function AccountProgress({ user, ctx }) {
  // console.log(user.nane);
  const [BFData, setBFData] = useState('');
  const [BMIData, setBMIData] = useState('');
  const [CalorieData, setCalorieData] = useState('');
  const [GoalData, setGoalData] = useState('');
  const router: any = useRouter();

  async function getBF() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/bfAccount`;
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload);
    console.log(response.data);
    setBFData(response.data);
  }

  let BFArray = Object(Object(BFData).newBF);

  let BFapp = []

  for (let i = 0; i < BFArray.length; i++) {
    BFapp.push(BFArray[i].newBF);
  }

  let BF = BFapp.pop();

  async function getBMI() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/bmiAccount`;
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload);
    console.log(response.data);
    setBMIData(response.data);
  }

  let BMIArray = Object(Object(BMIData).newBMI);

  let BMIapp = []

  for (let i = 0; i < BMIArray.length; i++) {
    BMIapp.push(BMIArray[i].newBMI);
  }

  let BMI = BMIapp.pop();
  
  async function getCalories() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/caloriesAccount`;
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload);
    console.log(response.data);
    setCalorieData(response.data);
  }

  let CalorieArray = Object(Object(CalorieData).newCalorie);

  let Calorieapp = []

  for (let i = 0; i < CalorieArray.length; i++) {
    Calorieapp.push(CalorieArray[i].newCal);
  }

  let Calorie = Calorieapp.pop();

  async function getGoals() {
    const { token } = parseCookies(ctx);
    const url = `${baseUrl}/api/goalsAccount`;
    const payload = { headers: { Authorization: token } }
    const response = await axios.get(url, payload);
    console.log(response.data);
    setGoalData(response.data);
  }

  let GoalArray = Object(Object(GoalData).newGoal);

  let Goalapp = []

  for (let i = 0; i < GoalArray.length; i++) {
    Goalapp.push(GoalArray[i].newGoal);
  }

  let Goal = Goalapp.pop();

  useEffect(() => {
    if (user) {
      getBF(), 
      getBMI(), 
      getCalories(), 
      getGoals()
    } else {
      console.log('no user');
    }
  }, [])

  return (
    <>
      {/* <Button
        color='blue'
        onClick={() => {getBF(), getBMI(), getCalories(), getGoals()}}
      >
        Get User Data
      </Button> */}
      <Segment
        inverted
        tertiary
        color="grey"
        style={{ paddingTop: '30px'}}
      >
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '35px'
          }}
        >
          {user.name}{`'s`} History
        </div>
        <div
          style={{
            fontSize: '25px'
          }}
        >
          <ul>
            <span>
              Latest Body Fat:
            </span>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              {BF}%
            </span>
          </ul>
          <ul>
            <span>
              Latest BMI:
            </span>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              {BMI}
            </span>
          </ul>
          <ul>
            <span>
              Latest Caloric Intake:
            </span>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              {Calorie} Cal
            </span>
          </ul>
          <ul>
            <span>
              Latest Goal:
            </span>
            <span
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              {Goal}
            </span>
          </ul>
        </div> */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '35px'
          }}
        >
          {user.name}{`'s`} History
        </div>
        <div
          style={{
            paddingTop: '20px',
            marginBottom: '-20px'
          }}
        >
          <Divider />
        </div>
        <Table
          fixed
          style={{
            background: 'transparent',
            border: '0px solid transparent',
            display: 'flex',
            justifyContent: 'center',
            color: 'white',
            fontSize: '30px',
            fontWeight: '300',
            lineHeight: '30px'
          }}
        >
          <Table.Body>
            <Table.Row>
              <Table.Cell width={12}>
                Latest Body Fat:
              </Table.Cell>
              <Table.Cell width={4}>
                {BF}%
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={12}>
                Latest BMI:
              </Table.Cell>
              <Table.Cell width={4}>
                {BMI}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={12}>
                Latest Caloric Intake:
              </Table.Cell>
              <Table.Cell width={4}>
                {Calorie} <span style={{ fontSize: '17px' }}>Cal</span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell width={12}>
                Latest Goal:
              </Table.Cell>
              <Table.Cell width={4}>
                {Goal}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
      <Header as="h2">
        <Icon name="folder open" />
        User History
      </Header>
      <Segment 
        inverted
        tertiary
        color="grey"
        textAlign="center"
        style={{ paddingTop: '30px'}}
      >
        <Header icon>
          <Icon name="copy outline" />
          No user history.
        </Header>
      </Segment>
    </>
  );
}

export default AccountProgress;

AccountProgress.getInitialProps = async ctx => {
  const { token } = parseCookies(ctx);
  if (!token) {
    return { newGoals1: [] }
  }  
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/newGoals1`;
  const response = await axios.get(url, payload);
  return response.data;
}
