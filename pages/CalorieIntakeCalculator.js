import React, { Component } from 'react';
import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Radio, Grid } from 'semantic-ui-react';
import Link from 'next/link';
class CalorieCalculator extends Component {

  state = { age: '', feet: '', inches: '', weight: '', sex: '', lifestyle: '', centimeters: '', kilograms: '', submittedAge: '', submittedFeet: '', submittedInches: '', submittedWeight: '', submittedSex: '', submittedLifestyle: '', submittedCentimeters: '', submittedKilograms: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { age, feet, inches, weight, sex, lifestyle, centimeters, kilograms } = this.state;
    
    this.setState({ submittedAge: age, submittedFeet: feet, submittedInches: inches, submittedWeight: weight, submittedSex: sex, submittedLifestyle: lifestyle, submittedCentimeters: centimeters, submittedKilograms: kilograms });
    //console result object
    console.log(this.state)
  }

  //show state of input on screen
  render() {
    const { age, feet, inches, weight, sex, lifestyle, centimeters, kilograms, submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedLifestyle, submittedCentimeters, submittedKilograms } = this.state

    let imperial=true;
    let male=true;
    // let output=true;

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
        <Form onSubmit={this.handleSubmit}>
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
                        onChange={this.handleChange}
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
                    <Form.Input
                        label="Sex"
                        placeholder='sex'
                        name='sex'
                        //required
                        value={sex}
                        onChange={this.handleChange}
                    />
                    {/* <Form.Field>
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
                    </Form.Field>     */}
                    <Form.Input
                        label="Lifestyle"
                        placeholder='lifestyle'
                        name='lifestyle'
                        type="number"
                        min="1"
                        max="5"
                        required
                        value={lifestyle}
                        onChange={this.handleChange}
                    />
                    {/* <Form.Field>
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
                        </Form.Field>  */}
                <Button
                    type="submit"
                    content="Calculate"
                    color="blue"
                />
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
        <pre>{JSON.stringify({ age, feet, inches, weight, sex, lifestyle, centimeters, kilograms }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedLifestyle, submittedCentimeters, submittedKilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
  }
}

export default CalorieCalculator;
