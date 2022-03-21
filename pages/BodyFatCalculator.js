import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link';

let imperial=true;

const BodyFatCalculator = () => {
    return (
        <> 
            <Head>
                <title>HealthStat | Body Fat % Calculator</title>
                <meta name="keywords" content="body fat, calculator" />
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

export default BodyFatCalculator;

// (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage.