import Head from 'next/head';
import { Container, Button, Form, Icon, Message, Segment, Radio, Grid } from 'semantic-ui-react';
import Link from 'next/link';

const CalorieIntakeCalculator = () => {

    let imperial=true;

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
                        <a>Login</a>
                    </Link>{" "}
                    To Track Progress
                </Message>
            </Container>
        </>
    );
}

export default CalorieIntakeCalculator;

{/* <body>
    <div id="output">Complete JavaScript Course</div>
    <form id="myForm">
        <div> Female
            <input id="f" type="radio" name="gender"> Male
            <input id="m" type="radio" name="gender"> </div>
        <div> Weight
            <input id="weight" type="number" value="150"> lbs </div>
        <div> Height
            <input id="heightFeet" type="number" value="5"> Feet
            <input id="heightInches" type="number" value="6" max="11" min="0"> Inches </div>
        <div> Age
            <input id="age" type="number" value="30"> years </div>
        <div> LifeStyle
            <input id="lifeStyle" type="number" value="1" min="1" max="5"> 1=low activity 5 = High Activity </div>
    </form>
    <script>
        //BMR = 66 + ( 6.2 × weight in pounds ) + ( 12.7 × height in inches ) – ( 6.76 × age in years )
        //BMR = 655.1 + ( 4.35 × weight in pounds ) + ( 4.7 × height in inches ) - ( 4.7 × age in years )
        //document.forms.myForm.addEventListener('change',outputCal);
        document.forms.myForm.onchange = outputCal;

        function outputCal() {
            console.log(event.target);
            function docId() {
                let r = document.querySelector(arguments[0]);
                r = (r.value == 'on') ? r.checked : Number(r.value);
                return r;
            }
            let age = docId('#age');
            let height = (docId('#heightFeet') * 12) + docId('#heightInches');
            let weight = docId('#weight');
            let lifeStyle = (docId('#lifeStyle') * 0.2) + 1;
            let result = docId('#m') ? lifeStyle * (66 + (6.2 * weight) + (12.7 * height) - (6.76 * age)) : lifeStyle * (655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age))
            let finalResult = document.getElementById('output').innerHTML = Math.round(result) + " calories needed per day.";
            console.log(finalResult);
        }
    </script>
</body> */}



// function calculateCartTotal(products) {
//     const total = products.reduce((acc, el) => {
//       acc += el.product.price * el.quantity;
//       return acc;
//     }, 0);
//     const cartTotal = ((total * 100) / 100).toFixed(2);
//     const stripeTotal = Number((total * 100).toFixed(2));
  
//     return { cartTotal, stripeTotal };
//   }
  
//   export default calculateCartTotal;
