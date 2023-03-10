import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { Header, Segment, Icon, Table, Divider, Button } from 'semantic-ui-react';

function AccountProgress({ user, ctx }) {
  const [BFData, setBFData] = useState('');
  const [BMIData, setBMIData] = useState('');
  const [CalorieData, setCalorieData] = useState('');
  const [GoalData, setGoalData] = useState('');
  const [desktop, setDesktop] = useState<boolean>(true);
  const router: any = useRouter();

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
      {((String(BF).length !== 9) || (String(BMI).length !== 9) || (String(Calorie).length !== 9) || (String(Goal).length !== 9)) ? (
      <>
        <Segment
          inverted
          tertiary
          color="grey"
          style={{ paddingTop: '30px'}}
        >
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
              paddingTop: '10px',
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
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    Latest Body Fat:
                  </div>
                </Table.Cell>
                <Table.Cell width={4}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    {(String(BF).length !== 9) ? (
                    <>
                      <div
                        style={{
                          transform: desktop ? 'translateY(2px)': null
                        }}
                      >
                        <span>
                          {BF}
                        </span>
                        <span
                          style={{ 
                            fontSize: '17px',
                            transform: desktop ? null : 'translateY(3.9px)'
                          }}
                        >
                          %
                        </span>
                      </div>
                    </>
                    ):(
                    <>
                      <Button
                        style={{
                          border: '3px solid white',
                          background: 'transparent',
                          color: 'white'
                        }}
                        onClick={() => router.push('/BodyFatCalculator')}
                      >
                        Calculate
                      </Button>
                    </>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={12}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    Latest BMI:
                  </div>
                </Table.Cell>
                <Table.Cell width={4}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    {(String(BMI).length !== 9) ? (
                    <>
                      {BMI}
                    </>
                    ): (
                    <>
                      <Button
                        style={{
                          border: '3px solid white',
                          background: 'transparent',
                          color: 'white'
                        }}
                        onClick={() => router.push('/BMICalculator')}
                      >
                        Calculate
                      </Button>
                    </>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={12}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    Latest {desktop ? 'Caloric' : null} Intake:
                  </div>
                </Table.Cell>
                <Table.Cell width={4}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    {(String(Calorie).length !== 9) ? (
                    <>
                      <div
                        style={{
                          transform: desktop ? 'translateY(2.3px)': null
                        }}
                      >
                        <span>
                          {Calorie}
                        </span>
                        <span
                          style={{ 
                            fontSize: '17px',
                            transform: desktop ? null : 'translateY(3.9px)'
                          }}
                        >
                          Cal
                        </span>
                      </div>
                    </>
                    ):(
                    <>
                      <Button
                        style={{
                          border: '3px solid white',
                          background: 'transparent',
                          color: 'white'
                        }}
                        onClick={() => router.push('/CalorieIntakeCalculator')}
                      >
                        Calculate
                      </Button>
                    </>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={12}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    Latest Goal:
                  </div>
                </Table.Cell>
                <Table.Cell width={4}>
                  <div
                    style={{
                      display: desktop ? null : 'flex',
                      justifyContent: desktop ? null :  'center'
                    }}
                  >
                    {(String(Goal).length !== 9) ? (
                    <>
                      {Goal}
                    </>
                    ):(
                    <>
                      <Button
                        style={{
                          border: '3px solid white',
                          background: 'transparent',
                          color: 'white'
                        }}
                        onClick={() => router.push('/goals')}
                      >
                        Calculate
                      </Button>
                    </>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </>
      ):(
      <>
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
      )}
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
