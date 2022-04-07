import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { Container, Button, Form, Message, Segment } from 'semantic-ui-react';

const CompoundInterestCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');

    const handleInput = () => {
            console.log("Compound Interest", { initialInvestment, interestRate, years, CompoundInterest })
        };
    
    const CompoundInterest = useRef();
    console.log(CompoundInterest.current?.innerText);

    return (
      <>
        <Head>
            <title>HealthStat | Compound Interest Calculator</title>
            <meta name="description" content="compound, interest, calculator, rate" />
        </Head>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
            <Message
                attached
                compact
                icon="calculator"
                header="Compound Interest Calculator"
                content="Calculate Compound Interest"
                color="black"
            />
        <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
                <Form.Input
                    fluid
                    icon="dollar sign"
                    size="large"
                    iconPosition="left"
                    label="Initial Investment"
                    placeholder="amount"
                    name="investment"
                    type="number"
                    min="0"
                    max="1000000000"
                    required
                    value={initialInvestment}
                    onChange={e => setInitialInvestment(e.target.value)}
                />
                <div>
                    &nbsp;
                </div>
                <Form.Input
                    fluid
                    icon="percent"
                    size="large"
                    iconPosition="left"
                    label="Interest Rate"
                    placeholder="percent"
                    name="rate"
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={interestRate}
                    onChange={e => setInterestRate(e.target.value)}
                />
                <div>
                    &nbsp;
                </div>
                <Form.Input
                    fluid
                    icon="balance scale"
                    size="large"
                    iconPosition="left"
                    label="Years"
                    placeholder='years'
                    name='years'
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={years}
                    onChange={e => setYears(e.target.value)}
                />
                <Segment color="blue" textAlign="center" size="massive">
                    {/* Compound Interest Logic */}
                        <span ref={CompoundInterest}>
                            {
                            `After ${years} years, your initial investment will be ${
                                    (
                                        (parseFloat((initialInvestment))
                                        * Math.pow(
                                        (1 + (interestRate / 100)),
                                        ((years) * (1)))
                                    ).toLocaleString('en-US', {style: 'currency', currency: 'USD'}))
                                }`
                            }
                        </span>
                        {/* <div>
                            {(CompoundInterest.current?.innerText) * 2}
                        </div> */}
                </Segment>
                <Button
                    size="large"
                    type="submit"
                    content="Calculate"
                    color="blue"
                    //onClick={() => }
                />
            </Segment>
        </Form>
        {/* <strong>onChange:</strong>
        <pre>{JSON.stringify({ feet, inches, weight, centimeters, kilograms }, null, 2)}</pre> */}
        </Container>
      </>
    );
}

export default CompoundInterestCalculator;