import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal } from 'semantic-ui-react';

const CalorieCalculator = () => {
    const [age, setAge] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [centimeters, setCentimeters] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [lifestyle, setLifestyle] = useState('');
    const [imperial, setImperial] = useState(true);
    const [male, setMale] = useState(true);
    const [modal, setModal] = useState(false);

    const handleInput = () => {
        if (imperial) {
            console.log("imperial", { age, feet, inches, weight, male, lifestyle });
        } else {
            console.log("metric", { age, centimeters, kilograms, male, lifestyle });
        }
    };

    return (
      <>
        <Head>
            <title>HealthStat | Calorie Intake Calculator</title>
            <meta name="keywords" content="calories, calorie, caloric, calculator" />
        </Head>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
            <Message
                attached
                compact
                icon="calculator"
                header="Calorie Calculator"
                content="Calculate Your Recommended Daily Caloric Intake"
                color="black"
            />
            {/* ternary to switch from imperial to metric button*/}
            {imperial ? (<>
            <Button 
                attached
                compact
                icon="globe"
                content="Switch to Metric"
                color="grey"
                onClick={() => {setImperial(false), setAge(''), setFeet(''), setInches(''), setWeight('')}}
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
                onClick={() => {setImperial(true), setAge(''), setCentimeters(''), setKilograms('')}}
            />
            </>)}
        <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
                    <Form.Input
                        fluid
                        icon="calendar"
                        size="large"
                        iconPosition="left"
                        label="Age"
                        placeholder='years'
                        name='age'
                        type="number"
                        min="0"
                        max="120"
                        required
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                {/* ternary to switch from imperial to metric heigh and weight input */}
                {imperial ? (<>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
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
                                    onChange={e => setFeet(e.target.value)}
                                />
                            </Grid.Column>
                            <Grid.Column width={6}>
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
                                    onChange={e => setInches(e.target.value)}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <div>
                        &nbsp;
                    </div>
                    <Form.Input
                        fluid
                        icon="balance scale"
                        size="large"
                        iconPosition="left"
                        label="Weight"
                        placeholder='lbs'
                        name='weight'
                        type="number"
                        min="0"
                        max="800"
                        required
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
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
                                    placeholder='cm'
                                    name='centimeters'
                                    type="number"
                                    min="0"
                                    max="270"
                                    required
                                    value={centimeters}
                                    onChange={e => setCentimeters(e.target.value)}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <div>
                        &nbsp;
                    </div>
                    <Form.Input
                        fluid
                        icon="balance scale"
                        size="large"
                        iconPosition="left"
                        label="Weight"
                        placeholder='kg'
                        name='kilograms'
                        type="number"
                        min="0"
                        max="360"
                        required
                        value={kilograms}
                        onChange={e => setKilograms(e.target.value)}
                    />
                </>)}
                    &nbsp;Sex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male
                    <input
                        type="radio"
                        name="rad"
                        required
                        style={{ width: '30px' }}
                        onClick={() => setMale(true)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female
                    <input
                        type="radio"
                        name="rad"
                        required
                        style={{ width: '30px' }}
                        onClick={() => setMale(false)}
                    />
                    <div>
                        &nbsp;
                    </div>
                    <span>
                        <div>
                            &nbsp;Lifestyle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
                            <input
                                type="radio"
                                name="lifestyle"
                                required
                                style={{ width: '30px' }}
                                value={lifestyle}
                                onClick={() => setLifestyle(1)}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
                            <input
                                type="radio"
                                name="lifestyle"
                                required
                                style={{ width: '30px' }}
                                value={lifestyle}
                                onClick={() => setLifestyle(2)}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                            <input
                                type="radio"
                                name="lifestyle"
                                required
                                style={{ width: '30px' }}
                                value={lifestyle}
                                onClick={() => setLifestyle(3)}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
                            <input
                                type="radio"
                                name="lifestyle"
                                required
                                style={{ width: '30px' }}
                                value={lifestyle}
                                onClick={() => setLifestyle(4)}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                            <input
                                type="radio"
                                name="lifestyle"
                                required
                                style={{ width: '30px' }}
                                value={lifestyle}
                                onClick={() => setLifestyle(5)}
                            />
                            <div style={{ color: 'grey', fontSize: '15px' }}>
                                &nbsp;1 = Low Activity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 = High Activity
                            </div>
                        </div>
                    </span>
                <Segment color="blue" textAlign="center" size="massive">
                    {/* imperial to metric ternary */}
                    {/* Male (imperial) */}
                    {imperial ? (<>
                        {/* male/female ternary */}
                        {male ? (<>
                            <div>
                                {  
                                    (
                                        ((parseFloat(lifestyle) * 0.2) + 1)
                                        * ((66 + (parseFloat(weight) * 6.2))
                                        + (12.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                                        - (6.76 * parseFloat(age)))
                                    ).toFixed(0)
                                }
                                <span> Calories Per Day</span>
                            </div>
                        </>
                        ) : (
                        <>
                        {/* Female (imperial) */}
                            <div>
                                {
                                    (
                                        ((parseFloat(lifestyle) * 0.2) + 1)
                                        * ((655.1 + (parseFloat(weight) * 4.35))
                                        + (4.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                                        - (4.7 * parseFloat(age)))
                                    ).toFixed(0)
                                }
                                <span> Calories Per Day</span>
                            </div>
                        </>)}
                    </>
                    ) : (
                    <>
                        {/* Male (metric): BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) */}
                        {/* male/female ternary */}
                        {male ? (<>
                            <div>
                                {  
                                    (
                                        ((parseFloat(lifestyle) * 0.2) + 1)
                                        * ((66 + (parseFloat(kilograms) * 13.7))
                                        + (5 * (parseFloat(centimeters)))
                                        - (6.76 * parseFloat(age)))
                                    ).toFixed(0)
                                }
                                <span> Calories Per Day</span>
                            </div>
                        </>
                        ) : (
                        <>
                        {/* Female (metric): BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years) */}
                            <div>
                                {  
                                    (
                                        ((parseFloat(lifestyle) * 0.2) + 1)
                                        * ((655 + (parseFloat(kilograms) * 9.6))
                                        + (1.8 * (parseFloat(centimeters)))
                                        - (4.7 * parseFloat(age)))
                                    ).toFixed(0)
                                }
                                <span> Calories Per Day</span>
                            </div>
                        </>)}
                    </>)}
                </Segment>
                <Button
                    size="large"
                    type="submit"
                    content="Update Progress"
                    color="blue"
                    onClick={() => setModal(true)}
                />
                <Modal open={modal} dimmer="blurring" size="small">
                    <Modal.Header><h1>Update Progress</h1></Modal.Header>
                    <h3 style={{ padding: "15px" }}>Are you sure you want to update your progress?</h3>
                    <Modal.Actions>
                        <Button 
                            content="Cancel" 
                            onClick={() => setModal(false)}
                        />
                        <Button
                            content="Update Progress"
                            color="blue"
                            //onClick={() => }
                        />
                    </Modal.Actions>
                </Modal>
            </Segment>
        </Form>
        <Message attached="bottom">
            <Icon
                name="sign in"
                size="large"
            />
            <Link href="/Login">
                <a style={{ color: '#3978f5' }}>Login</a>
            </Link>{" "}
            To Track Progress
        </Message>
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ age, feet, inches, weight, male, centimeters, kilograms, lifestyle }, null, 2)}</pre> */}
        </Container>
      </>
    );
  }

export default CalorieCalculator;
