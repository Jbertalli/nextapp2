import React from 'react';
import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Radio, Grid } from 'semantic-ui-react';
import Link from 'next/link';

const CalorieIntakeCalculator = () => {

    let imperial=true;
    //const [metric, setMetric] = React.useState(false);

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
                />
                </>)}
                <Form>
                    <Segment size="huge" textAlign="left">
                        <Form.Input
                            fluid
                            icon="calendar"
                            size="large"
                            iconPosition="left"
                            label="Age"
                            placeholder="years"
                            name="Age"
                            type="number"
                        />
                        {/* ternary to switch from imperial to metric heigh and weight input*/}
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
                                        name="Feet"
                                        type="number"
                                    />
                                    
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Form.Input
                                        fluid
                                        icon="chart bar"
                                        size="large"
                                        iconPosition="left"
                                        label="&nbsp;"
                                        placeholder="inches"
                                        name="Inches"
                                        type="number"
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Form.Input
                            fluid
                            icon="balance scale"
                            size="large"
                            iconPosition="left"
                            label="Weight"
                            placeholder="lbs"
                            name="Pounds"
                            type="number"
                        />
                        </>
                        ) : (
                        <>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form.Input
                                        fluid
                                        icon="chart bar"
                                        size="large"
                                        iconPosition="left"
                                        label="Height"
                                        placeholder="cm"
                                        name="Centimeters"
                                        type="number"
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <div />
                        <Form.Input
                            fluid
                            icon="balance scale"
                            size="large"
                            iconPosition="left"
                            label="Weight"
                            placeholder="kg"
                            name="Kilograms"
                            type="number"
                        />
                        </>)}
                        <Form.Field>
                            <div />
                            Male&nbsp;&nbsp;
                            <Radio
                                style={{ width: '35px' }}
                                name='male'
                            />
                            Female&nbsp;&nbsp;
                            <Radio
                                style={{ width: '50px' }}
                                name='female'
                            />
                        </Form.Field>            
                        <Form.Field>
                            <span>
                            Lifestyle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            1&nbsp;&nbsp;
                            <Radio
                                style={{ width: '50px' }}
                                name='1'
                            />
                            2&nbsp;&nbsp;
                            <Radio
                                style={{ width: '50px' }}
                                name='2'
                            />
                            3&nbsp;&nbsp;
                            <Radio
                                style={{ width: '50px' }}
                                name='3'
                            />
                            4&nbsp;&nbsp;
                            <Radio
                                style={{ width: '50px' }}
                                name='4'
                            />
                            5&nbsp;&nbsp;
                            <Radio
                                name='5'
                            />
                            <div style={{ color: 'grey' }}>
                                1 = Low Activity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 = High Activity
                            </div>
                        </Form.Field>    
                        <Button
                            type="submit"
                            content="Calculate"
                            color="blue"
                        />
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
            </Container>
        </>
    );
}

export default CalorieIntakeCalculator;