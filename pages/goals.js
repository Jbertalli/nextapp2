import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GoalList from '../components/GoalList';
import { Button, Container, Message, Segment, Placeholder, Card, Icon, Item } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';                                                      //Universally Unique Identifiers, or UUIDS, are 128 bit numbers, composed of 16 octets and represented as 32 base-16 characters, that can be used to identify information across a computer system
// import { ResponsiveContainer, AreaChart, XAxis, YAxis, Area, Tooltip, CartesianGrid } from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import styles from '../styles/Footer.module.css';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

// const data = [];
const LOCAL_STORAGE_KEY = 'goals';

function Goals({ user }) {
    // console.log(user);
    const [goals, setGoals] = useState([]);                                               //set array of goals when first loading
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [numb, setNumb] = useState(30);
    const goalNameRef = useRef();                                                         //access to html element

    //SAVE GOALS
    //useEffect to load goals right when component mounts
    useEffect(() => {
        const storedGoals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))           //parse to turn into array
        if (storedGoals) setGoals(storedGoals)
        setData([]);
    }, []);

    //save goals across page reloads by storing inside localStorage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))

        // if (count === 0) {
        //     console.log('zero');
        //     console.log([]);
        // } else if (count === 1) {
        //     console.log('one');
        //     console.log([goals[0].name]);
        //     console.table([goals[0].name]);
        // } else if (count === 2) {
        //     console.log('two');
        //     console.log([goals[0].name, goals[1].name]);
        //     console.table([goals[0].name, goals[1].name]);
        // } else if (count === 3) {
        //     console.log('three');
        //     console.log([goals[0].name, goals[1].name, goals[2].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name]);
        // } else if (count === 4) {
        //     console.log('four');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name]);
        // } else if (count === 5) {
        //     console.log('five');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name]);
        // } else if (count === 6) {
        //     console.log('six');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name]);
        // } else if (count === 7) {
        //     console.log('seven');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name]);
        // } else if (count === 8) {
        //     console.log('eight');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name]);
        // } else if (count === 9) {
        //     console.log('nine');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name]);
        // } else if (count === 10) {
        //     console.log('ten');
        //     console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name]);
        //     console.table([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name]);
        // } else if (count === 11) {
        //     // console.log('eleven');
        //     // console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name, goals[10].name]);
        //             const goalOne = [goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name, goals[10].name]
        //             console.log("regular", goalOne);
        //             //reverse array
        //             goalOne.reverse();
        //             console.log("reversed", goalOne);
        //             //concat array
        //             console.log("concat", goalOne.concat(goals[5].name));
        //             //sort array
        //             const sorted = goalOne.sort((a, b) => a > b ? -1 : 1);
        //             console.log("sorted", sorted);
        // } else {
        //     return;
        // }
    }, [goals]);

    useEffect(() => {
        if (user) {
            goalNameRef.current.focus();
        }
    }, [goals]);

    if (goals.length > 0) {
        for(let i = 0; i < goals.length; i++) {

        }
        console.log((goals.length <= 1) ? '1 goal' : `%c ${goals.length} goals`, 'color: green');
    } else {
        console.log('%c no goals', "color: red");
    }

    let counting = []

    for (let i = 0; i < goals.length; i++) {
        counting.push([goals[i].name]);
        // console.log("%c Array", "color: blue", counting[i]);
        console.table(counting);
        // console.log(counting);
    }
           
    //toggle from complete to incomplete, then pass to <GoalList toggleGoal={toggleGoal} />
    function toggleGoal(id) {
        const newGoals = [...goals]                                                       //copy of goals array to modify
        const goal = newGoals.find(goal => goal.id === id);
        goal.complete = !goal.complete;
        setGoals(newGoals);
        console.log(newGoals);
        setData([]);
    }

    async function handleAddGoal(e) {
        const name = goalNameRef.current.value;                                            //append goal ---> get access to name with useRef hook (reference elements in html)
        if (name === '') return 
        setGoals(prevGoals => {
            return [...prevGoals, { id: uuidv4(), name: name, complete: false }]           //previous value and return new goals by spreading over array, then adding new goal to list
        })

        setCount(count + 1);
        console.log(count);
        setData([]);
        console.log(goalNameRef.current.value);

        goalNameRef.current.value = null;                                                  //clear out input after clicking Add Goal Button
       
        e.preventDefault();
        const url = `${baseUrl}/api/goals`;
        const payload = [ goal_list ];                                     //pass in ARRAY
        // const payload = { goal_list }
        const response = await axios.post(url, payload);
        console.log(response.data);
        console.log(goal_list);
    }

    function handleClear() {
        const newGoals = goals.filter(goal => !goal.complete);
        setGoals(newGoals);
        setCount(newGoals.length);  
        setData([]);                                                       //fixed bug
        // console.log(newGoals);
        // console.log(newGoals.length);
        console.log('%c cleared some goals', 'color: orange');
    }

    async function clearAll(e) {
        setCount(0);
        setGoals([]);
        setData([]);
        console.clear();
        console.log('%c cleared all goals', 'color: red');

        e.preventDefault();
        const url = `${baseUrl}/api/goals`;
        const payload = [ goal_list ];
        const response = axios.delete(url, payload);
        console.log(response.data);
        console.log(goal_list);
    }

    // let fruits = [1, 2, 3, 2, 1, 3, 5, 3, 1, 5, 7, 5, 1, 9, 11, 9, 4, counting.flat()]
    // let fruits = [counting.flat()[0], counting.flat()[1], counting.flat()[2], counting.flat()[3], counting.flat()[4], 
    // counting.flat()[5], counting.flat()[6], counting.flat()[7], counting.flat()[8], counting.flat()[9], counting.flat()[10], 
    // counting.flat()[11], counting.flat()[12], counting.flat()[13], counting.flat()[14], counting.flat()[15], counting.flat()[16], 
    // counting.flat()[17], counting.flat()[18], counting.flat()[19], counting.flat()[20], counting.flat()[21], counting.flat()[22], 
    // counting.flat()[23], counting.flat()[24], counting.flat()[25], counting.flat()[26], counting.flat()[27], counting.flat()[28], 
    // counting.flat()[29], counting.flat()[30]]

    let fruits = []

    for (let i = 0; i < goals.length; i++) {
        fruits.push(counting.flat()[i]);
    }
    
    for (let num = numb; num >= 0; num--) {
        data.push({
            date: subDays(new Date(), num).toISOString().substr(0, 10), 
            value: fruits.shift(),
        });
    }

    //console.log(counting.flat());                                          //flatten out array
    const goal_list = counting.flat();
    console.log(goal_list);
    console.log(data);
    // console.log(data[0].date);
    
    return (
        <>
            <Head>
                <title>HealthStat | Goals</title>
                <meta name='description' content='goals' />
            </Head>
            <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
                <Message 
                    attached
                    compact
                    icon="target"
                    header="Goal Tracker"
                    content="Set and Track Your Goals"
                    color="black"
                />
                {user ? (<>
                    <Segment>
                        {/* ternary to show placeholder */}
                        {(goals.length < 1) ? (<>
                            <Placeholder>
                                <Card.Group itemsPerRow={1} stackable>
                                    <Card>
                                        <Card.Content>
                                            <Placeholder style={{ fontSize: '2em', textAlign: 'center', padding: '5em 2em 5em 4em', margin: '0vw -7.2vw 0vw 0vw', background: 'linear-gradient(to bottom, silver, white)' }}>
                                                <Icon
                                                    name="plus"
                                                />
                                                Add Some Goals
                                            </Placeholder>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                            </Placeholder>
                        </>
                        ) : (
                        <>
                            <GoalList goals={goals} toggleGoal={toggleGoal} count={count} />                              {/* pass goals to <GoalList /> */}
                        </>)}
                        <Segment style={{ display: 'flex', justifyContent: 'flex-start', margin: '.5em' }}>
                            <h2>{goals.filter(goal => !goal.complete).length} {(goals.length === 1) ? 'goal left to complete' : 'goals left to complete'}</h2>
                        </Segment>
                        <Segment style={{ border: 'none', padding: '2em 0em 3em 0em' }}>
                            <div>
                                <div style={{ textAlign: 'left', padding: '0em 1em 1em 1em', fontSize: '19px' }}>Add Goal to List</div>
                                <h1 style={{ display: 'flex', justifyContent: 'flex-start', margin: '-.4em 0em 0em .7em', fontSize: '23px' }}>
                                    <input ref={goalNameRef} className={styles.input} type="text" autoFocus placeholder="+ add goals" />
                                </h1>    {/* type="text" */}
                            </div>
                        </Segment>
                        <Segment color="blue" style={{ textAlign: 'left', margin: '1em 1em 1em', padding: '2em 2em 2em 2em' }}>
                            <Button size="big" onClick={handleAddGoal} color="blue">Add Goal</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                            <Button size="big" onClick={handleClear}>Clear Checked Goal</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Button size="big" onClick={clearAll}>Clear All</Button>
                        </Segment> 
                    </Segment> 
                </>
                ) : (
                <>
                    <Placeholder>
                        <Card.Group itemsPerRow={1} stackable>
                            <Card>
                                <Card.Content>
                                    <Placeholder style={{ fontSize: '2em', textAlign: 'center', padding: '5em 2em 5em 4em', margin: '0vw -7.2vw 0vw 0vw', background: 'linear-gradient(to bottom, silver, white)' }}>
                                        <Icon
                                            name="plus"
                                        />
                                        Add Some Goals
                                    </Placeholder>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Placeholder>
                    <Message style={{ textAlign: 'center', margin: '0 0 0' }}>
                        <Icon
                            name="sign in"
                            size="large"
                        />
                        <Link href="/Login">
                            <a style={{ color: '#3978f5' }}>Login</a>
                        </Link>{" "}
                        To Add Goals
                    </Message>
                </>)}
                {/* <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
                    <Message
                        attached
                        compact
                        icon="chart line"
                        header="Track Progress"
                        content="View Your Progression Over Time"
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
                                />
                                <YAxis
                                    dataKey="value"
                                    axisLine={false}
                                    tickLine={false}
                                    tickCount={8}
                                    tickFormatter={(number) => `${number}`}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <CartesianGrid opacity={0.1} vertical={false} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </Container> */}
            </Container>
        </>
    );
}

// function CustomTooltip({ active, payload, label }) {
//     // console.log(payload[0]?.payload?.value);               //hover over graph to see
//     // console.log(payload[0]);
//     if(active) {
//         return (
//             <div style={{ color: '#fff', background: '#26313c', borderRadius: '.25rem', textAlign: 'center', padding: '1em 1.5em 1em 1.5em' }} >
//                 <h3>{format(parseISO(label), "eeee, MMM d, yyy")}</h3>
//                 {/* <p>{payload[0].value} lbs</p> */}
//                 <p>{payload[0]?.payload?.value}</p>
//             </div>
//         );
//     }
//     return null;
// }

export default Goals;
