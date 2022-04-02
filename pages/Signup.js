import React from 'react';
import { Button, Form, Message, Segment, Container } from "semantic-ui-react";
import Head from 'next/head';
import Link from 'next/link';

const INITIAL_USER = {
    name: "",
    email: "",
    password: ""
}

const Signup = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el))
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user])

    function handleChange(event) {
        const {name, value} = event.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
        } catch(error) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
        <Head>
            <title>HealthStat | Signup</title>
            <meta name="keywords" content="signup" />
        </Head>
        <Container textAlign="left" as="h3" style={{ margin: '2em' }}>
            <Message 
                attached
                icon="settings"
                header="Signup"
                content="Create a new account"
                color="black"
            />
            <Form loading={loading} onSubmit={handleSubmit}>
                <Segment>
                    <Form.Input
                        fluid
                        icon="user"
                        iconPosition="left"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <Button
                        disabled={disabled || loading}
                        icon="signup"
                        type="submit"
                        color="blue"
                        content="Signup"
                    />
                </Segment>
            </Form>
            <Message attached="bottom">
                Existing user?&nbsp;&nbsp;
                <Link href="/Login">
                    <a style={{ color: '#3978f5' }}>Log in here</a>
                </Link>{" "}
                instead.
            </Message>
            </Container>
        </>
    );
}

export default Signup;






















// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { Container, Button, Form, Icon, Message, Segment, Grid, Modal, Radio, Checkbox } from 'semantic-ui-react';

// const Signup = () => {
//     const [age, setAge] = useState('');
//     const [feet, setFeet] = useState('');
//     const [inches, setInches] = useState('');
//     const [weight, setWeight] = useState('');
//     const [centimeters, setCentimeters] = useState('');
//     const [kilograms, setKilograms] = useState('');
//     const [imperial, setImperial] = useState(true);
//     const [male, setMale] = useState(true);
//     const [modal, setModal]= useState(false);

//     const handleInput = () => {
//         console.log({ age, feet, inches, weight, centimeters, kilograms, male });
//     };

//     return (
//         // <>
//         //     <div style={{ flexDirection: 'column', display: 'flex' }}>
//         //         <input placeholder="years" onChange={e => setAge(e.target.value)} />
//         //         <input placeholder="feet" onChange={e => setFeet(e.target.value)} />
//         //         <input placeholder="inches" onChange={e => setInches(e.target.value)} />
//         //         <input placeholder="weight" onChange={e => setWeight(e.target.value)} />
//         //         <input placeholder="sex" onChange={e => setSex(e.target.value)} />
//         //         <input placeholder="centimeters" onChange={e => setCentimeters(e.target.value)} />
//         //         <input placeholder="kilograms" onChange={e => setKilograms(e.target.value)} />
//         //         <button onClick={() => handleInput()}>Submit</button>
//         //         {
//         //             age ? <p>Welcome {age}!</p>
//         //             :
//         //             ''
//         //         }
//         //     </div>
//         // </>
//         <>
//         <Head>
//             <title>HealthStat | Body Fat Percent Calculator</title>
//             <meta name="keywords" content="body fat, calculator" />
//         </Head>
//         <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
//             <Message
//                 attached
//                 compact
//                 icon="calculator"
//                 header="Body Fat Percent Calculator"
//                 content="Calculate Your Body Fat Percentage"
//                 color="black"
//             />
//             {/* ternary to switch from imperial to metric button*/}
//             {imperial ? (<>
//             <Button
//                 attached
//                 compact
//                 icon="globe"
//                 content="Switch to Metric"
//                 color="grey"
//                 onClick={() => setImperial(false)}
//             />
//             </>
//             ) : (
//             <>
//             <Button
//                 attached
//                 compact
//                 icon="globe"
//                 content="Switch to Imperial"
//                 color="grey"
//                 onClick={() => setImperial(true)}
//             />
//             </>)}
//         <Form onClick={() => handleInput()}>
//             <Segment size="huge" textAlign="left">
//                     <Form.Input
//                         fluid
//                         icon="calendar"
//                         size="large"
//                         iconPosition="left"
//                         label="Age"
//                         placeholder='years'
//                         name='age'
//                         type="number"
//                         min="0"
//                         max="120"
//                         required
//                         value={age}
//                         onChange={e => setAge(e.target.value)}
//                     />
//                 {/* imperial to metric ternary */}
//                 {imperial ? (<>
//                     <Grid>
//                         <Grid.Row>
//                             <Grid.Column width={10}>
//                                 <Form.Input
//                                     fluid
//                                     icon="chart bar"
//                                     size="large"
//                                     iconPosition="left"
//                                     label="Height"
//                                     placeholder="feet"
//                                     name="feet"
//                                     type="number"
//                                     min="0"
//                                     max="8"
//                                     required
//                                     value={feet}
//                                     onChange={e => setFeet(e.target.value)}
//                                 />
//                             </Grid.Column>
//                             <Grid.Column width={6}>
//                                 <Form.Input
//                                     fluid
//                                     icon="chart bar"
//                                     size="large"
//                                     iconPosition="left"
//                                     label=""
//                                     placeholder="inches"
//                                     name="inches"
//                                     type="number"
//                                     min="0"
//                                     max="12"
//                                     required
//                                     value={inches}
//                                     onChange={e => setInches(e.target.value)}
//                                 />
//                             </Grid.Column>
//                         </Grid.Row>
//                     </Grid>
//                     <div>
//                         &nbsp;
//                     </div>
//                     <Form.Input
//                         fluid
//                         icon="balance scale"
//                         size="large"
//                         iconPosition="left"
//                         label="Weight"
//                         placeholder='lbs'
//                         name='weight'
//                         type="number"
//                         min="0"
//                         max="800"
//                         required
//                         value={weight}
//                         onChange={e => setWeight(e.target.value)}
//                     />
//                 </>
//                 ) : (
//                 <>
//                     {/* metric */}
//                     <Grid>
//                         <Grid.Row>
//                             <Grid.Column>
//                                 <Form.Input
//                                     fluid
//                                     icon="chart bar"
//                                     size="large"
//                                     iconPosition="left"
//                                     label="Height"
//                                     placeholder='cm'
//                                     name='centimeters'
//                                     type="number"
//                                     min="0"
//                                     max="270"
//                                     required
//                                     value={centimeters}
//                                     onChange={e => setCentimeters(e.target.value)}
//                                 />
//                             </Grid.Column>
//                         </Grid.Row>
//                     </Grid>
//                     <div>
//                         &nbsp;
//                     </div>
//                     <Form.Input
//                         fluid
//                         icon="balance scale"
//                         size="large"
//                         iconPosition="left"
//                         label="Weight"
//                         placeholder='kg'
//                         name='kilograms'
//                         type="number"
//                         min="0"
//                         max="360"
//                         required
//                         value={kilograms}
//                         onChange={e => setKilograms(e.target.value)}
//                     />
//                 </>)}
//                 <Form.Field>
//                     <span>
//                         &nbsp;&nbsp;Sex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                     </span>
//                     &nbsp;&nbsp;&nbsp;&nbsp;Male&nbsp;&nbsp;
//                     <Radio
//                         style={{ width: '50px' }}
//                         name='male'
//                         onClick={() => setMale(true)}
//                     />
//                     Female&nbsp;&nbsp;
//                     <Radio
//                         style={{ width: '50px' }}
//                         name="female"
//                         onClick={() => setMale(false)}
//                     />
//                 </Form.Field>
//                 <Segment color="blue" textAlign="center" size="massive">
//                     {imperial ? (<>
//                         {/* male/female ternary */}
//                         {/* Men Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
//                         {male ? (<>
//                             <div>
//                                 {  
//                                     (
//                                         ((((parseFloat(weight)) 
//                                         / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
//                                         * 703) * 1.20)
//                                         + (0.23 * (parseFloat(age)))
//                                         - 16.2
//                                     ).toFixed(1)
//                                 }
//                                 <span> %</span>
//                             </div>
//                         </>
//                         ) : (
//                         <>
//                         {/* Female (imperial) */}
//                         {/* Female Body Fat % (imperial): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
//                             <div>
//                                 {
//                                     (
//                                         ((((parseFloat(weight)) 
//                                         / Math.pow((parseFloat(feet * 12) + parseFloat(inches)), 2))
//                                         * 703) * 1.20)
//                                         + (0.23 * (parseFloat(age)))
//                                         - 5.4
//                                     ).toFixed(1)
//                                 }
//                                 <span> %</span>
//                             </div>
//                         </>)}
//                     </>
//                     ) : (
//                     <>
//                         {/* Male Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 16.2 = Body Fat Percentage */}
//                         {/* male/female ternary */}
//                         {male ? (<>
//                             <div>
//                                 {  
//                                     (
//                                         (((parseFloat(kilograms)) 
//                                         / Math.pow((parseFloat(centimeters) / 100), 2)) 
//                                         * 1.20)
//                                         + (0.23 * (parseFloat(age)))
//                                         - 16.2
//                                     ).toFixed(1)
//                                 }
//                                 <span> %</span>
//                             </div>
//                         </>
//                         ) : (
//                         <>
//                         {/* Female Body Fat % (metric): (1.20 x BMI) + (0.23 x Age) - 5.4 = Body Fat Percentage */}
//                             <div>
//                                 {  
//                                     (
//                                         (((parseFloat(kilograms)) 
//                                         / Math.pow((parseFloat(centimeters) / 100), 2)) 
//                                         * 1.20)
//                                         + (0.23 * (parseFloat(age)))
//                                         - 5.4
//                                     ).toFixed(1)
//                                 }
//                                 <span> %</span>
//                             </div>
//                         </>)}
//                     </>)}
//                 </Segment>
//                 <Button
//                     size="large"
//                     type="submit"
//                     content="Update Progress"
//                     color="blue"
//                     onClick={() => setModal(true)}
//                 />
//                 <Modal open={modal} dimmer="blurring" size="small">
//                     <Modal.Header><h1>Update Progress</h1></Modal.Header>
//                     <h3 style={{ padding: "15px" }}>Are you sure you want to update your progress?</h3>
//                     <Modal.Actions>
//                         <Button 
//                             content="Cancel" 
//                             onClick={() => setModal(false)}
//                         />
//                         <Button
//                             content="Update Progress"
//                             color="blue"
//                         />
//                     </Modal.Actions>
//                 </Modal>
//             </Segment>
//         </Form>
//         <Message attached="bottom">
//             <Icon
//                 name="sign in"
//                 size="large"
//             />
//             <Link href="/Login">
//                 <a style={{ color: '#3978f5' }}>Login</a>
//             </Link>{" "}
//             To Track Progress
//         </Message>
//         {/* <strong>onChange:</strong>
//         <pre>{JSON.stringify({ age, feet, inches, weight, sex, centimeters, kilograms }, null, 2)}</pre>
//         <strong>onSubmit:</strong>
//         <pre>{JSON.stringify({ submittedAge, submittedFeet, submittedInches, submittedWeight, submittedSex, submittedCentimeters, submittedKilograms }, null, 2)}</pre> */}
//         </Container>
//       </>
//     );
// }

// export default Signup;
