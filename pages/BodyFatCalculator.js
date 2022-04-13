import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal } from 'semantic-ui-react';

const BodyFatPercent = ({ user }) => {
    const [age, setAge] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [centimeters, setCentimeters] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [imperial, setImperial] = useState(true);
    const [male, setMale] = useState(true);
    const [sex, setSex] = useState('male');
    const [modal, setModal] = useState(false);

    const handleInput = () => {
        if (imperial) {
            console.log("imperial", { age, feet, inches, weight, male, BodyFatPercentage });
        } else {
            console.log("metric", { age, centimeters, kilograms, male, BodyFatPercentage });
        }
    };

    const BodyFatPercentage = useRef();
    console.log(BodyFatPercentage.current?.innerText);
    
    useEffect(() => {
        setSex('')
    }, [])

    const handleChange = (event) => {
        setSex(event.target.value)
    }

    const handleRadio = () => {
        setSex('')
    }
    
    return (
        <>
        <Head>
            <title>HealthStat | Body Fat Percent Calculator</title>
            <meta name="description" content="body fat, calculator" />
        </Head>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
            <Message
                attached
                compact
                icon="calculator"
                header="Body Fat Percent Calculator"
                content="Calculate Your Body Fat Percentage"
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
                onClick={() => {setImperial(false), setAge(''), setFeet(''), setInches(''), setWeight(''), handleRadio()}}
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
                onClick={() => {setImperial(true), setAge(''), setCentimeters(''), setKilograms(''), handleRadio()}}
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
                    &nbsp;Sex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male
                    <input
                        type="radio"
                        name="rad"
                        value="male"
                        checked={sex === 'male'}
                        onChange={handleChange}
                        required
                        style={{ width: '30px' }}
                        onMouseUp={() => setMale(true)}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female
                    <input
                        type="radio"
                        name="rad"
                        value="female"
                        checked={sex === 'female'}
                        onChange={handleChange}
                        required
                        style={{ width: '30px' }}
                        onMouseUp={() => setMale(false)}
                    />
                <Segment color="blue" textAlign="center" size="massive">
                    {imperial ? (<>
                        {/* male/female ternary */}
                        {/* Men Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                        {male ? (<>
                            <span ref={BodyFatPercentage}>
                                {  
                                    (
                                        ((((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703) * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 16.2
                                    ).toFixed(1)
                                }
                            </span> %
                            {/* Math manipulation with output value */}
                            {/* <div>
                                {(BodyFatPercentage.current?.innerText) * 2}
                            </div> */}
                        </>
                        ) : (
                        <>
                        {/* Female (imperial) */}
                        {/* Female Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                            <span ref={BodyFatPercentage}>
                                {
                                    (
                                        ((((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703) * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 5.4
                                    ).toFixed(1)
                                }
                            </span> %
                        </>)}
                    </>
                    ) : (
                    <>
                        {/* Male Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                        {/* male/female ternary */}
                        {male ? (<>
                            <span ref={BodyFatPercentage}>
                                {  
                                    (
                                        (((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2)) 
                                        * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 16.2
                                    ).toFixed(1)
                                }
                            </span> %
                        </>
                        ) : (
                        <>
                        {/* Female Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                            <span ref={BodyFatPercentage}>
                                {  
                                    (
                                        (((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2)) 
                                        * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 5.4
                                    ).toFixed(1)
                                }
                            </span> %
                        </>)}
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
        <pre>{JSON.stringify({ age, feet, inches, weight, male, centimeters, kilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
}

export default BodyFatPercent;
