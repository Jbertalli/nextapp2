import React, { Component } from 'react';
import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal } from 'semantic-ui-react';
import Link from 'next/link';
class BodyFatPercent extends Component {

  state = { age: '', feet: '', inches: '', weight: '', sex: '', centimeters: '', kilograms: '', submittedAge: '', submittedFeet: '', submittedInches: '', submittedWeight: '', submittedSex: '', submittedCentimeters: '', submittedKilograms: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { age, feet, inches, weight, sex, centimeters, kilograms } = this.state;
    
    this.setState({ submittedAge: age, submittedFeet: feet, submittedInches: inches, submittedWeight: weight, submittedSex: sex, submittedCentimeters: centimeters, submittedKilograms: kilograms });
    //console result object
    console.log(this.state)
  }

  //class component ---> render()
  render() {
    const { age, feet, inches, weight, sex, centimeters, kilograms, submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedCentimeters, submittedKilograms } = this.state
    
    let imperial=true;
    let male=true;
    // let output=true;

    return (
      <>
        <Head>
            <title>HealthStat | Body Fat Percent Calculator</title>
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
        <Form onSubmit={this.handleSubmit}>
            <Segment size="huge" textAlign="left">
            {/* imperial to metric ternary */}
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
                <Button
                    type="submit"
                    content="Calculate"
                    color="blue"
                    // onClick={() => setModal(true)}
                />
                <Modal open={false} dimmer="blurring" size="tiny">
                    <Modal.Header>Confirm Upload</Modal.Header>
                    <p>Are you sure you want to update your progress?</p>
                    <Modal.Actions>
                        <Button content="Cancel" />
                        <Button
                            icon="upload"
                            labelPosition="right"
                            content="Upload"
                            color="blue"
                            // onClick={() => setModal(false)}
                        />
                    </Modal.Actions>
                </Modal>
                <Segment color="blue" textAlign="center" size="massive">
                    {imperial ? (<>
                        {/* male/female ternary */}
                        {/* Men Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                        {male ? (<>
                            <div>
                                {  
                                    (
                                        ((((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703) * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 16.2
                                    ).toFixed(1)
                                }
                                <span> %</span>
                            </div>
                        </>
                        ) : (
                        <>
                        {/* Female (imperial) */}
                        {/* Female Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                            <div>
                                {
                                    (
                                        ((((parseFloat(weight)) 
                                        / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
                                        * 703) * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 5.4
                                    ).toFixed(1)
                                }
                                <span> %</span>
                            </div>
                        </>)}
                    </>
                    ) : (
                    <>
                        {/* Male Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
                        {/* male/female ternary */}
                        {male ? (<>
                            <div>
                                {  
                                    (
                                        (((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2)) 
                                        * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 16.2
                                    ).toFixed(1)
                                }
                                <span> %</span>
                            </div>
                        </>
                        ) : (
                        <>
                        {/* Female Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
                            <div>
                                {  
                                    (
                                        (((parseFloat(kilograms)) 
                                        / Math.pow((parseFloat(centimeters) / 100), 2)) 
                                        * 1.20)
                                        + (0.23 * (parseFloat(age)))
                                        - 5.4
                                    ).toFixed(1)
                                }
                                <span> %</span>
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
        <pre>{JSON.stringify({ age, feet, inches, weight, sex, centimeters, kilograms }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedCentimeters, submittedKilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
  }
}

export default BodyFatPercent;
