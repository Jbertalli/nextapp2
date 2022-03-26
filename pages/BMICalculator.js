import React, { Component } from 'react'
import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Grid } from 'semantic-ui-react';
import Link from 'next/link';
class BMICalculator extends Component {

  state = { feet: '', inches: '', weight: '', centimeters: '', kilograms: '', submittedFeet: '', submittedInches: '', submittedWeight: '', submittedCentimeters: '', submittedKilograms: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { feet, inches, weight, centimeters, kilograms } = this.state;
    
    this.setState({ submittedFeet: feet, submittedInches: inches, submittedWeight: weight, submittedCentimeters: centimeters, submittedKilograms: kilograms });
    //console result object
    console.log(this.state)
  }

  //show state of input on screen
  render() {
    const { feet, inches, weight, centimeters, kilograms, submittedFeet, submittedInches, submittedWeight, submittedCentimeters, submittedKilograms } = this.state

    let imperial=true;
    // let output=true;

    return (
      <>
        <Head>
            <title>HealthStat | BMI Calculator</title>
            <meta name="keywords" content="BMI, calculator, body mass index" />
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
        <Form onSubmit={this.handleSubmit}>
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
                                    onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                        onChange={this.handleChange}
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
                                    onChange={this.handleChange}
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
                        onChange={this.handleChange}
                    />
                </>)}
                <Button
                    type="submit"
                    content="Calculate"
                    color="blue"
                />
                <Segment color="blue" textAlign="center" size="massive">
                    {/* imperial to metric ternary */}
                        {imperial ? (<>
                        {/* BMI (imperial): US units: BMI = (weight (lb) ÷ height^2 (in)) * 703 */}
                            <div>
                                {
                                    (
                                        ((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703
                                    ).toFixed(1)
                                }
                                <span> BMI</span>
                            </div>
                        </>
                        ) : (
                        <>
                        {/* BMI (metric): Metric units: BMI = weight (kg) ÷ height^2 (m) */}
                            <div>
                                {
                                    (
                                        ((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2))
                                    ).toFixed(1)
                                }
                                <span> BMI</span>
                            </div>
                        </>)}
                </Segment>
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
        <pre>{JSON.stringify({ feet, inches, weight, centimeters, kilograms }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedFeet, submittedInches, submittedWeight, submittedCentimeters, submittedKilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
  }
}

export default BMICalculator;
