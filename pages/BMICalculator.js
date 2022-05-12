import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal, Item, Divider } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
// import GoalList from '../components/GoalList';
import styles from '../styles/Footer.module.css';
// import Chart from '../components/Chart';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

const LOCAL_STORAGE_KEY = 'BMI_progress';

const BMICalculator = ({ user }) => {
    //console.log(user);
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [centimeters, setCentimeters] = useState('');
    const [kilograms, setKilograms] = useState('');
    const [imperial, setImperial] = useState(true);
    // const [modal, setModal] = useState(false);
    const [goals, setGoals ] = useState([]);                                              
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [numb, setNumb] = useState(30);
    const [lined, setLined] = useState('');
    const BMI = useRef();

    useEffect(() => {
        const storedBMI = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))           //parse to turn into array
        if (storedBMI) setGoals(storedBMI)
        setData([]);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
    }, [goals]);

    const handleInput = () => {
        if (imperial) {
            console.log("imperial", { feet, inches, weight, BMI });
        } else {
            console.log("metric", { centimeters, kilograms, BMI });
        }
    };
    
    // console.log(goals);
    // console.log(goals[1]);
    // console.log(goals.length);

    if (goals.length > 0) {
        for(let i = 0; i < goals.length; i++) {

        }
        console.log((goals.length <= 1) ? '1 BMI calculation' : `%c ${goals.length} BMI calculations`, 'color: green');
    } else {
        console.log('%c no BMI calculations', "color: red");
    }

    let counting = []                                                                   //IMPORTANT

    for (let i = 0; i < goals.length; i++) {
        counting.push([goals[i].BMI]);
        // console.log("%c Array", "color: blue", counting[i]);
        console.table(counting);
        // console.log(counting);
    }
                    
    //toggle from complete to incomplete, then pass to <GoalList toggleGoal={toggleGoal} />
    // function toggleGoal(id) {
    //     const newGoals = [...goals]                                                  //copy of goals array to modify
    //     const goal = newGoals.find(goal => goal.id === id);
    //     goal.complete = !goal.complete;
    //     setGoals(newGoals);
    //     console.log(newGoals);
    //     setData([]);
    // }

    async function handleAddGoal(e) {
        const name = BMI.current?.innerText;                                            //append goal ---> get access to name with useRef hook (reference elements in html)
        if (name === '') return 
        setGoals(prevGoals => {
            return [...prevGoals, { BMI: name }]                                        //previous value and return new goals by spreading over array, then adding new goal to list
        })

        setCount(count + 1);
        console.log(count);
        setData([]);

        BMI.current?.innerText = null;                                                  //clear out input after clicking Add Goal Button

        e.preventDefault();
        const url = `${baseUrl}/api/BMICalculator`;
        const payload = [ body_mass_index ];
        const response = await axios.post(url, payload);
        console.log(response.data);
        console.log(body_mass_index);
    }

    // function handleClear() {
    //     const newGoals = goals.filter(goal => !goal.complete);
    //     setGoals(newGoals);
    //     setCount(newGoals.length);  
    //     setData([]);                                                       
    //     // console.log(newGoals);
    //     // console.log(newGoals.length);
    //     console.log('%c cleared some goals', 'color: orange');
    // }

    async function clearAll(e) {
        setCount(0);
        setGoals([]);
        setData([]);
        console.clear();
        console.log('%c cleared all calculations', 'color: red');
 
        const url = `${baseUrl}/api/BMICalculator`;
        const payload = [ body_mass_index ];
        const response = await axios.delete(url, payload);
        console.log(response.data);
        console.log(body_mass_index);
    }

    let fruits = []

    // for (let i = 0; i < BMI.current?.innerText.length; i++) {
    for (let i = 0; i < goals.length; i++) {
        fruits.push(counting.flat()[i]); 
        // console.log(lined - counting.flat()[i]);
    }
    
    for (let num = numb; num >= 0; num--) {
        data.push({
            date: subDays(new Date(), num).toISOString().substr(0, 10), 
            value: fruits.shift(),
            line: lined,
        });
    }

    // console.log(counting.flat());                                          //flatten out array
    const body_mass_index = counting.flat();
    console.log(body_mass_index);
    console.log(data);
    console.log("target BMI line:", lined);

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
                onClick={() => {setImperial(false), setFeet(''), setInches(''), setWeight(''), setLined(''), setData([])}}
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
                onClick={() => {setImperial(true), setCentimeters(''), setKilograms(''), setLined(''), setData([])}}
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
                                    onChange={e => {setFeet(e.target.value), setData([])}}
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
                                    onChange={e => {setInches(e.target.value), setData([])}}
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
                        onChange={e => {setWeight(e.target.value), setData([])}}
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
                                    onChange={e => {setCentimeters(e.target.value), setData([])}}
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
                        onChange={e => {setKilograms(e.target.value), setData([])}}
                    />
                </>)}
                <Divider style={{ margin: '1.5em' }} />
                <div attached size="large" textAlign="left">
                    <Form.Input 
                        fluid
                        icon="target"
                        size="big"
                        iconPosition="left"
                        label="Set BMI Target (optional)"
                        placeholder='target'
                        name='target'
                        type="number"
                        min="0"
                        max="100"
                        value={lined}
                        style={{ width: '35%', fontSize: '23px', margin: '0em 0em 1em 0em' }}
                        onChange={e => {setLined(e.target.value), setData([])}}
                    />
                </div>
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
                                    ).toFixed(1).replace('NaN', '')
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
                                    ).toFixed(1).replace('NaN', '')
                                }
                            </span> BMI
                        </>)}
                </Segment>
            </Segment>
        </Form>
        {user ? (<>
            {/* <Segment style={{ textAlign: 'left', margin: '0 0 0' }}>
                <Button
                    size="large"
                    type="submit"
                    content="Update Progress"
                    color="blue"
                    onClick={() => setModal(true)}
                />
            </Segment> */}
            <Segment style={{ textAlign: 'left', margin: '0 0 0', padding: '2em 2em 2em 2em' }}>
                <Button size="big" onClick={handleAddGoal} color="blue">Update BMI</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                {/* <Button size="big" onClick={handleClear}>Clear Checked BMI</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <Button size="big" onClick={() => {clearAll(), setFeet(''), setInches(''), setWeight(''), setCentimeters(''), setKilograms(''), setLined(''), setData([])}}>Clear All</Button>
            </Segment>        
            {/* <Modal open={modal} dimmer="blurring" size="small">
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
            </Modal> */}
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
        {user ? (<>
            <Container textAlign="center" as="h3" style={{ margin: '3em', display: counting.length ? 'block' : 'none' }}>
                <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
                    <Message
                        attached
                        compact
                        icon="chart line"
                        header="Track Progress"
                        content="View Your BMI Progression Over Time"
                        color="black"
                        style={{ background: '#26313c' }}
                    />
                    <Item attached style={{ background: '#313e4c', display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            content="1D"
                            className={styles.underline}
                            style={{ padding: '0', margin: '1.2em', background: '#313e4c', color: 'white' }}
                            onClick={() => {setData([]), setNumb(1)}}
                        />
                        <Button 
                            content="7D"
                            className={styles.underline}
                            style={{ padding: '0', margin: '1.2em', background: '#313e4c', color: 'white' }}
                            onClick={() => {setData([]), setNumb(7)}}
                        />
                        <Button
                            content="1M"
                            className={styles.underline}
                            style={{ padding: '0', margin: '1.2em', background: '#313e4c', color: 'white' }}
                            onClick={() => {setData([]), setNumb(30)}}
                        />
                        <Button
                            content="6M"
                            className={styles.underline}
                            style={{ padding: '0', margin: '1.2em', background: '#313e4c', color: 'white' }}
                            onClick={() => {setData([]), setNumb(182)}}
                        />
                        <Button
                            content="1Y"
                            className={styles.underline}
                            style={{ padding: '0', margin: '0em 2.5em 0em 1.2em', background: '#313e4c', color: 'white' }}
                            onClick={() => {setData([]), setNumb(365)}}
                        />
                    </Item>
                    <div className={styles.chart} style={{ padding: '3rem' }}>
                        <ResponsiveContainer width="100%" height={500} key={`rc_${data.length}`}>
                            <AreaChart data={data} key={`ac_${data.length}`}>
                                <defs>
                                    <linearGradient id="color" x1="0" y1="0" x2="0" y1="1">
                                        <stop offset="0%" stopColor="#2451B7" stopOpacity={0.05} />
                                        <stop offset="75%" stopColor="#2451B7" stopOpacity={1} />
                                    </linearGradient>
                                </defs>
                                <Area type="monotone" dataKey="value" stroke="#2451B7" fill="url(#color)" key={`a_${data.length}`} />
                                <Area dataKey="line" stroke="#2451B7" fillOpacity={1} fill="url(#colorPv)" key={`ac_${data.length}`}/>              {/* goal line */}
                                <XAxis
                                    dataKey="date"
                                    axisLine={false}
                                    tickLine={false}
                                    tickFormatter={(str) => {
                                        const date = parseISO(str);
                                        if (date.getDate() % 7 === 0) {
                                            return format(date, "MMM, d");
                                        }
                                            return "";
                                    }}
                                >
                                    {/* <Label
                                        style={{
                                            textAnchor: "end",
                                            fontSize: "1em",
                                            fill: "gray",
                                            fillOpacity: ".7",
                                            fontWeight: "700"
                                        }}
                                        angle={0} 
                                        value={"Date"} 
                                        position='insideRight'
                                    /> */}
                                </XAxis>
                                <YAxis
                                    dataKey="value"
                                    axisLine={false}
                                    tickLine={false}
                                    tickCount={8}
                                    tickFormatter={(number) => `${number}`}
                                >
                                    {/* <Label
                                        style={{
                                            textAnchor: "middle",
                                            fontSize: "1em",
                                            fill: "gray",
                                            fillOpacity: ".7",
                                            fontWeight: "700"
                                        }}
                                        angle={0} 
                                        value={"BMI"}
                                        position='insideTop'
                                    /> */}
                                </YAxis>
                                <Tooltip content={<CustomTooltip />} />
                                <CartesianGrid opacity={0.1} vertical={false} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Container>
            </Container>
        </>
        ) : (
        <>
            
        </>)}
      </>
    );
  }

  function CustomTooltip({ active, payload, label }) {
    // console.log(payload[0]);
    // console.log(payload[0]?.payload?.value);               //hover over graph to see
    // console.log(payload[0]?.payload?.line);                //goal line

    if(active) {
        return (
            <div style={{ color: '#fff', background: '#26313c', borderRadius: '.25rem', textAlign: 'center', padding: '1em 1.5em 1em 1.5em' }} >
                <h3>{format(parseISO(label), "eeee, MMM d, yyy")}</h3>
                <p style={{ display: payload[0]?.payload?.value ? 'block' : 'none' }}>
                    BMI:&nbsp;&nbsp;{payload[0]?.payload?.value}
                </p>
                <p style={{ display: payload[0]?.payload?.line ? 'block' : 'none' }}>
                    Goal BMI:&nbsp;&nbsp;{payload[0]?.payload?.line}
                </p>
                <p style={{ display: payload[0]?.payload?.value && payload[0]?.payload?.line ? 'block' : 'none' }}>
                    Difference:&nbsp;&nbsp;{((payload[0]?.payload?.line) - (payload[0]?.payload?.value)).toFixed(1).replace('NaN', '')}
                </p>
            </div>
        );
    }
    return null;
}

export default BMICalculator;
