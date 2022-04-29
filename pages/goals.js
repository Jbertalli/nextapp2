import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import GoalList from '../components/GoalList';
import { Button, Container, Message, Segment, Placeholder, Card, Icon, Input } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';                                                      //Universally Unique Identifiers, or UUIDS, are 128 bit numbers, composed of 16 octets and represented as 32 base-16 characters, that can be used to identify information across a computer system

const LOCAL_STORAGE_KEY = 'goals';

function Goals() {
    const [goals, setGoals ] = useState([])                                               //set array of goals when first loading
    const [count, setCount] = useState(0);
    const goalNameRef = useRef();                                                         //access to html element

    //SAVE GOALS
    //useEffect to load goals right when component mounts
    useEffect(() => {
        const storedGoals = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))           //parse to turn into array
        if (storedGoals) setGoals(storedGoals)
    }, []);

    //save goals across page reloads by storing inside localStorage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(goals))
        // console.log(goals);
    
        if (goals.length > 0) {
            for(let i = 0; i < goals.length; i++) {

            }

            // console.log([goals[0].name, goals[1].name], goals[2].name);
            console.log((goals.length <= 1) ? '1 goal' : `${goals.length} goals`);
        } else {
            console.log('no goals');
        }

        if (count === 0) {
            console.log('zero');
            console.log([]);
        } else if (count === 1) {
            console.log('one');
            console.log([goals[0].name]);
        } else if (count === 2) {
            console.log('two');
            console.log([goals[0].name, goals[1].name]);
        } else if (count === 3) {
            console.log('three');
            console.log([goals[0].name, goals[1].name, goals[2].name]);
        } else if (count === 4) {
            console.log('four');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name]);
        } else if (count === 5) {
            console.log('five');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name]);
        } else if (count === 6) {
            console.log('six');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name]);
        } else if (count === 7) {
            console.log('seven');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name]);
        } else if (count === 8) {
            console.log('eight');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name]);
        } else if (count === 9) {
            console.log('nine');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name]);
        } else if (count === 10) {
            console.log('ten');
            console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name]);
        } else if (count === 11) {
            // console.log('eleven');
            // console.log([goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name, goals[10].name]);
                    const goalOne = [goals[0].name, goals[1].name, goals[2].name, goals[3].name, goals[4].name, goals[5].name, goals[6].name, goals[7].name, goals[8].name, goals[9].name, goals[10].name]
                    console.log("regular", goalOne);
                    //reverse array
                    goalOne.reverse();
                    console.log("reversed", goalOne);
                    //concat array
                    console.log("concat", goalOne.concat(goals[5].name));
                    //sort array
                    const sorted = goalOne.sort((a, b) => a > b ? -1 : 1);
                    console.log("sorted", sorted);
        } else {
            return;
        }
    }, [goals]);

    //toggle from complete to incomplete, then pass to <GoalList toggleGoal={toggleGoal} />
    function toggleGoal(id) {
        const newGoals = [...goals]                                                       //copy of goals array to modify
        const goal = newGoals.find(goal => goal.id === id);
        goal.complete = !goal.complete;
        setGoals(newGoals);
        console.log(newGoals);
    }

    function handleAddGoal(e) {
        const name = goalNameRef.current.value;                                           //append goal ---> get access to name with useRef hook (reference elements in html)
        if (name === '') return 
        setGoals(prevGoals => {
            return [...prevGoals, { id: uuidv4(), name: name, complete: false}]           //previous value and return new goals by spreading over array, then adding new goal to list
        })

        setCount(count + 1);
        console.log(count);

        goalNameRef.current.value = null;                                                  //clear out input after clicking Add Goal Button
    }

    function handleClear() {
        const newGoals = goals.filter(goal => !goal.complete);
        setGoals(newGoals);
        setCount(newGoals.length);                                                         //fixed bug
        // console.log(newGoals);
        // console.log(newGoals.length);
        console.log('cleared some goals');
    }

    function clearAll() {
        setCount(0);
        setGoals([]);
        console.log('cleared all goals');
    }

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
                        <GoalList goals={goals} toggleGoal={toggleGoal} />                              {/* pass goals to <GoalList /> */}
                    </>)}
                    <Segment style={{ display: 'flex', justifyContent: 'flex-start', margin: '.5em' }}>
                        <h2>{goals.filter(goal => !goal.complete).length} {(goals.length === 1) ? 'goal left to complete' : 'goals left to complete'}</h2>
                    </Segment>
                    <Segment style={{ border: 'none', padding: '2em 0em 3em 0em' }}>
                        <div>
                            <h3 style={{ textAlign: 'left', padding: '0em 1em 0em 1.2em' }}>+ Add Goal to List</h3>
                            <h1 style={{ display: 'flex', justifyContent: 'flex-start', margin: '-.4em 0em 0em .7em' }}><input ref={goalNameRef} type="text" autoFocus /></h1>
                        </div>
                        {/* <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <div>+Add Goal To List</div>
                            <Input
                                type="text"
                                icon="plus"
                                iconPosition="left"
                                placeholder="Goal"
                                ref={goalNameRef}
                            />
                        </div> */}
                    </Segment>
                    <Segment color="blue" style={{ textAlign: 'left', margin: '1em 1em 1em', padding: '2em 2em 2em 2em' }}>
                        <Button size="big" onClick={handleAddGoal} color="blue">Add Goal</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        <Button size="big" onClick={handleClear} >Clear Checked Goal</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button size="big" onClick={clearAll} >Clear All</Button>
                    </Segment>
                </Segment>
            </Container>
        </>
    );
}

export default Goals;
