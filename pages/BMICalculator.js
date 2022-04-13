import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal } from 'semantic-ui-react';

const BMICalculator = ({ user }) => {
    //console.log(user);
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [centimeters, setCentimeters] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [imperial, setImperial] = useState(true);
    const [modal, setModal] = useState(false);

    const handleInput = () => {
        if (imperial) {
            console.log("imperial", { feet, inches, weight, BMI });
        } else {
            console.log("metric", { centimeters, kilograms, BMI });
        }
    };
    
    const BMI = useRef();
    console.log(BMI.current?.innerText);

    return (
      <>
        <Head>
            <title>HealthStat | BMI Calculator</title>
            <meta name="description" content="BMI, calculator, body mass index" />
        </Head>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
            <Message
                attached
                compact
                icon="calculator"
                header="BMI Calculator"
                content="Calculate Your Body Mass Index"
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
                onClick={() => {setImperial(false), setFeet(''), setInches(''), setWeight('')}}
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
                onClick={() => {setImperial(true), setCentimeters(''), setKilograms('')}}
            />
            </>)}
        <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
            {/* imperial to metric ternary */}
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
                <Segment color="blue" textAlign="center" size="massive">
                    {/* imperial to metric ternary */}
                        {imperial ? (<>
                        {/* BMI (imperial): US units: BMI = (weight (lb) ÷ height^2 (in)) * 703 */}
                            <span ref={BMI}>
                                {
                                    (
                                        ((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703
                                    ).toFixed(1)
                                }
                            </span> BMI
                        </>
                        ) : (
                        <>
                        {/* BMI (metric): Metric units: BMI = weight (kg) ÷ height^2 (m) */}
                            <span ref={BMI}>
                                {
                                    (
                                        ((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2))
                                    ).toFixed(1)
                                }
                            </span> BMI
                        </>)}
                </Segment>
            </Segment>
        </Form>
        {user ? (<>
            <Segment style={{ textAlign: 'left', margin: '0 0 0' }}>
                <Button
                    size="large"
                    type="submit"
                    content="Update Progress"
                    color="blue"
                    onClick={() => setModal(true)}
                />
            </Segment>
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
        </>
        ) : (
        <>
            <Message style={{ textAlign: 'center', margin: '0 0 0' }}>
                <Icon
                    name="sign in"
                    size="large"
                />
                <Link href="/Login">
                    <a style={{ color: '#3978f5' }}>Login</a>
                </Link>{" "}
                To Track Progress
            </Message>
        </>)}
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ feet, inches, weight, centimeters, kilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
  }

export default BMICalculator;
