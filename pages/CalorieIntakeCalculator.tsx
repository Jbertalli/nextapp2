import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Container, Button, Form, Icon, Message, Segment, Grid, Modal, Item } from 'semantic-ui-react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid, Label, Legend } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import FocusLock from 'react-focus-lock';

const LOCAL_STORAGE_KEY = 'Calorie_progress';

const CalorieCalculator = ({ user }) => {
    //console.log(user);
    const [age, setAge] = useState<any>('');
    const [feet, setFeet] = useState<any>('');
    const [inches, setInches] = useState<any>('');
    const [weight, setWeight] = useState<any>('');
    const [centimeters, setCentimeters] = useState<any>('');
    const [kilograms, setKilograms] = useState<any>('');
    const [lifestyle, setLifestyle] = useState<any>('');
    const [imperial, setImperial] = useState<boolean>(true);
    const [male, setMale] = useState<boolean>(true);
    const [sex, setSex] = useState<string>('male');
    const [radio, setRadio] = useState<any>(''); 
    // const [modal, setModal] = useState(false);
    const [goals, setGoals] = useState<any>([]);                                              
    const [count, setCount] = useState<number>(0);
    const [data, setData] = useState<any>([]);
    const [numb, setNumb] = useState<number>(30);
    const [average, setAverage] = useState<any>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [checkedMale, setCheckedMale] = useState<boolean>(false);
    const Calories = useRef<any>();

    useEffect(() => {
        const storedCalories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))           //parse to turn into array
        if (storedCalories) setGoals(storedCalories)
        setData([]);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
    }, [goals]);
    
    useEffect(() => {
        setSex('');
    }, []);

    const handleInput = () => {
        if (imperial) {
            console.log("imperial", { age, feet, inches, weight, male, lifestyle, Calories });
        } else {
            console.log("metric", { age, centimeters, kilograms, male, lifestyle, Calories });
        }
    };
    
    const handleChange = (event) => {
        setSex(event.target.value);
    }

    const handleRadio = () => {
        setSex('');
    }

    const handleLifeChange = (event) => {
        setRadio(event.target.value);
    }

    const handleLife = () => {
        setRadio('');
    }

    function handleUnclick() {
        setChecked((c) => !c);
    }

    function handleMaleUnclick() {
        setCheckedMale((c) => !c);
    }

    if (goals.length > 0) {
            for(let i = 0; i < goals.length; i++) {
        }
        console.log((goals.length <= 1) ? '1 caloric intake calculation' : `%c ${goals.length} caloric intake calculations`, 'color: green');
    } else {
        console.log('%c caloric intake calculations', "color: red");
    }

    let counting: any = []                                                                   //IMPORTANT
    let avg: any = []

    for (let i = 0; i < goals.length; i++) {
        counting.push([goals[i].Calories]);
        // console.log("%c Array", "color: blue", counting[i]);
        console.table(counting);
        // console.log(counting);
            const flattened: any = counting.flat();
            // console.log(flattened);
            const reduced: any = flattened.reduce((total, current) => parseFloat(total) + parseFloat(current));
            // console.log(reduced);
            // const average = (reduced / goals.length).toFixed(0);
            avg = (reduced / goals.length).toFixed(0);
            console.log("%c average calories:", 'color: blue', avg);
    }

    console.log(avg);

    async function handleAddGoal(e) {
        const name: any = Calories.current?.innerText;                                            //append goal ---> get access to name with useRef hook (reference elements in html)
        if (name === '') return 
        setGoals(prevGoals => {
            return [...prevGoals, { Calories: name }]                                        //previous value and return new goals by spreading over array, then adding new goal to list
        })

        setCount(count + 1);
        console.log(count);
        setData([]);

        Calories.current?.innerText == null;                                                 //clear out input after clicking Update Calorie History

        const url: string = `${baseUrl}/api/CalorieIntakeCalculator`;
        const payload = [ caloric_intake ];
        const response = await axios.post(url, payload);
        console.log(response.data);
        console.log(caloric_intake);
    }

    async function clearAll() {
        setCount(0);
        setGoals([]);
        setData([]);
        console.clear();
        console.log('%c cleared all goals', 'color: red');

        const url: string = `${baseUrl}/api/CalorieIntakeCalculator`;
        const payload = [ caloric_intake ];
        const response = axios.delete(url, payload);
        console.log(response.data);
        console.log(caloric_intake);
    }

    let fruits: any = [];

    for (let i = 0; i < goals.length; i++) {
        fruits.push(counting.flat()[i]);
    }
    
    for (let num = numb; num >= 0; num--) {
        data.push({
            date: subDays(new Date(), num).toISOString().substr(0, 10), 
            value: fruits.shift(),
            average: average,
        });
    }

    // console.log(counting.flat());                                          //flatten out array
    const caloric_intake: any = counting.flat();
    console.log(caloric_intake);
    console.log(data);

    return (
      <>
        <Head>
            <title>HealthStat | Calorie Intake Calculator</title>
            <meta name="description" content="calories, calorie, caloric, calculator" />
        </Head>
        <FocusLock>
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
                    onClick={() => {setImperial(false), setAge(''), setFeet(''), setInches(''), setWeight(''), handleRadio(), handleLife(), setData([])}}
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
                    onClick={() => {setImperial(true), setAge(''), setCentimeters(''), setKilograms(''), handleRadio(), handleLife(), setData([])}}
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
                            autoFocus
                            value={age}
                            onChange={e => {setAge(e.target.value), setData([])}}
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
                        &nbsp;Sex&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Male
                        <input
                            type="radio"
                            name="rad"
                            value="male"
                            checked={sex === 'male' && checkedMale}
                            onChange={handleChange}
                            required
                            style={{ width: '30px' }}
                            onMouseUp={() => {setMale(true), handleMaleUnclick()}}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Female
                        <input
                            type="radio"
                            name="rad"
                            value="female"
                            checked={sex === 'female' && checkedMale}
                            onChange={handleChange}
                            required
                            style={{ width: '30px' }}
                            onMouseUp={() => {setMale(false), handleMaleUnclick()}}
                        />
                        <div>
                            &nbsp;
                        </div>
                        <span>
                            <div>
                                &nbsp;Lifestyle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
                                <input
                                    type="radio"
                                    name="lifestyle"
                                    required
                                    style={{ width: '30px' }}
                                    value={lifestyle}
                                    checked={radio === '1' && checked}
                                    onChange={handleLifeChange}
                                    onMouseUp={() => {setLifestyle(1), handleUnclick()}}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2
                                <input
                                    type="radio"
                                    name="lifestyle"
                                    required
                                    style={{ width: '30px' }}
                                    value={lifestyle}
                                    checked={radio === '2' && checked}
                                    onChange={handleLifeChange}
                                    onMouseUp={() => {setLifestyle(2), handleUnclick()}}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                                <input
                                    type="radio"
                                    name="lifestyle"
                                    required
                                    style={{ width: '30px' }}
                                    value={lifestyle}
                                    checked={radio === '3' && checked}
                                    onChange={handleLifeChange}
                                    onMouseUp={() => {setLifestyle(3), handleUnclick()}}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
                                <input
                                    type="radio"
                                    name="lifestyle"
                                    required
                                    style={{ width: '30px' }}
                                    value={lifestyle}
                                    checked={radio === '4' && checked}
                                    onChange={handleLifeChange}
                                    onMouseUp={() => {setLifestyle(4), handleUnclick()}}
                                />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5
                                <input
                                    type="radio"
                                    name="lifestyle"
                                    required
                                    style={{ width: '30px' }}
                                    value={lifestyle}
                                    checked={radio === '5' && checked}
                                    onChange={handleLifeChange}
                                    onMouseUp={() => {setLifestyle(5), handleUnclick()}}
                                />
                                <div style={{ color: 'grey', fontSize: '15px' }}>
                                    &nbsp;1 = Low Activity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5 = High Activity
                                </div>
                            </div>
                        </span>
                    <Segment color="blue" textAlign="center" size="massive">
                        {/* imperial to metric ternary */}
                        {/* Male (imperial) */}
                        {imperial ? (<>
                            {/* male/female ternary */}
                            {male ? (<>
                                <span ref={Calories}>
                                    {  
                                        (
                                            ((parseFloat(lifestyle) * 0.2) + 1)
                                            * ((66 + (parseFloat(weight) * 6.2))
                                            + (12.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                                            - (6.76 * parseFloat(age)))
                                        ).toFixed(0).replace('NaN', '')
                                    }
                                </span> Calories Per Day
                            </>
                            ) : (
                            <>
                            {/* Female (imperial) */}
                                <span ref={Calories}>
                                    {
                                        (
                                            ((parseFloat(lifestyle) * 0.2) + 1)
                                            * ((655.1 + (parseFloat(weight) * 4.35))
                                            + (4.7 * (parseFloat(feet * 12) + parseFloat(inches)))
                                            - (4.7 * parseFloat(age)))
                                        ).toFixed(0).replace('NaN', '')
                                    }
                                </span> Calories Per Day
                            </>)}
                        </>
                        ) : (
                        <>
                            {/* Male (metric): BMR = 66 + (13.7 x weight in kg) + (5 x height in cm) - (6.8 x age in years) */}
                            {/* male/female ternary */}
                            {male ? (<>
                                <span ref={Calories}>
                                    {  
                                        (
                                            ((parseFloat(lifestyle) * 0.2) + 1)
                                            * ((66 + (parseFloat(kilograms) * 13.7))
                                            + (5 * (parseFloat(centimeters)))
                                            - (6.76 * parseFloat(age)))
                                        ).toFixed(0).replace('NaN', '')
                                    }
                                </span> Calories Per Day
                            </>
                            ) : (
                            <>
                            {/* Female (metric): BMR = 655 + (9.6 x weight in kg) + (1.8 x height in cm) - (4.7 x age in years) */}
                                <span ref={Calories}>
                                    {  
                                        (
                                            ((parseFloat(lifestyle) * 0.2) + 1)
                                            * ((655 + (parseFloat(kilograms) * 9.6))
                                            + (1.8 * (parseFloat(centimeters)))
                                            - (4.7 * parseFloat(age)))
                                        ).toFixed(0).replace('NaN', '')
                                    }
                                </span> Calories Per Day
                            </>)}
                        </>)}
                    </Segment>
                </Segment>
            </Form>
            {user ? (<>
                {/* <Segment style={{ textAlign: 'left', margin: '0 0 0', padding: '2em 2em 2em 2em' }}>
                    <Button
                        size="large"
                        type="submit"
                        content="Update Progress"
                        color="blue"
                        onClick={() => setModal(true)}
                    />
                </Segment> */}
                <Segment style={{ textAlign: 'left', margin: '0 0 0', padding: '2em 2em 2em 2em' }}>
                    <Button size="big" onClick={() => handleAddGoal()} color="blue">Update Calorie History</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    {/* <Button size="big" onClick={handleClear}>Clear Checked BF%</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    <Button size="big" onClick={() => {setAverage(avg), setData([])}} onDoubleClick={() => {setAverage(''), setData([])}} color="blue">Calculate Average</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button size="big" onClick={() => {clearAll(), setAge(''), setFeet(''), setInches(''), setWeight(''), setCentimeters(''), setKilograms(''), handleRadio(), handleLife(), setData([])}}>Clear All</Button>
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
            <pre>{JSON.stringify({ age, feet, inches, weight, male, centimeters, kilograms, lifestyle }, null, 2)}</pre> */}
            </Container>
            {user ? (<>
                <Container textAlign="center" as="h3" style={{ margin: '3em', display: counting.length ? 'block' : 'none' }}>
                    <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
                        <Message
                            attached
                            compact
                            icon="chart line"
                            header="Track Progress"
                            content="View Your Recommended Daily Caloric Intake"
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
                                        {/* <linearGradient id="color" x1="0" y1="0" x2="0" y1="1"> */}
                                        <linearGradient id="color" x1="0" y1="0" x2="0">
                                            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.05} />
                                            <stop offset="75%" stopColor="#2451B7" stopOpacity={1} />
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="value" stroke="#2451B7" fill="url(#color)" key={`a_${data.length}`} />
                                    <Area dataKey="average" stroke="#2451B7" fillOpacity={1} fill="url(#colorPv)" key={`avg_${data.length}`}/>              {/* goal line */}
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
                                            value={"Calories"}
                                            position='insideTop'
                                        /> */}
                                    </YAxis>
                                    <Tooltip content={<CustomTooltip />} />
                                    {/* <Legend verticalAlign="top" iconType="plainline" /> */}
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
        </FocusLock>
      </>
    );
  }

  function CustomTooltip({ active, payload, label }) {
    // console.log(payload[0]);
    // console.log(payload[0]?.payload?.value);               //hover over graph to see
    // console.log(payload[0]?.payload?.line);                //goal line
    // console.log(payload[0]?.payload?.average);             //average line

    if(active) {
        return (
            <div style={{ color: '#fff', background: '#26313c', borderRadius: '.25rem', textAlign: 'center', padding: '1em 1.5em 1em 1.5em' }} >
                <h3>{format(parseISO(label), "eeee, MMM d, yyy")}</h3>
                <p style={{ display: payload[0]?.payload?.value ? 'block' : 'none' }}>
                    Calories:&nbsp;&nbsp;{payload[0]?.payload?.value}
                </p>
                <p style={{ display: payload[0]?.payload?.average ? 'block' : 'none' }}>
                    Average:&nbsp;&nbsp;{payload[0]?.payload?.average}
                </p>
            </div>
        );
    }
    return null;
  }

export default CalorieCalculator;
