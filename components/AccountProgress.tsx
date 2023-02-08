import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { Header, Accordion, Segment, Icon, Button } from 'semantic-ui-react';

function AccountProgress({ ctx }) {
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

  return (
    <>
    <Button
      color='blue'
      onClick={getBF}
    >
      Get User Data
    </Button>
    {BF}
    <Button
      color='blue'
      onClick={getBMI}
    >
      Get User Data
    </Button>
    {BMI}
    <Button
      color='blue'
      onClick={getCalories}
    >
      Get User Data
    </Button>
    {Calorie}
    <Button
      color='blue'
      onClick={getGoals}
    >
      Get User Data
    </Button>
    {Goal}
      <Header as="h2">
        <Icon name="folder open" />
        Goal History
      </Header>
      <Segment inverted tertiary color="grey" textAlign="center">
        <Header icon>
          <Icon name="copy outline" />
          No goal history.
        </Header>
        <div>
          <Button onClick={() => router.push('/goals')} color="blue">
            Set Goals
          </Button>
        </div>
      </Segment>
      <Accordion
        fluid
        styled
        exclusive={false}
      />
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
