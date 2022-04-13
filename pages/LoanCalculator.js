import React, { useState, useRef } from 'react';
import Head from 'next/head';
import { Container, Button, Form, Message, Segment } from 'semantic-ui-react';

const LoanCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [years, setYears] = useState('');
    const term = (years * 12);
    const rate = ((interestRate / 100) / 12);

    const handleInput = () => {
            console.log("Loan Amount", { principal, interestRate, years, LoanAmount })
        };
    
    const LoanAmount = useRef();
    console.log(LoanAmount.current?.innerText);

    return (
      <>
        <Head>
            <title>HealthStat | Loan Calculator</title>
            <meta name="description" content="loan, calculator" />
        </Head>
        <Container textAlign="center" as="h3" style={{ margin: '3em' }}>
            <Message
                attached
                compact
                icon="calculator"
                header="Loan Calculator"
                content="Calculate Monthly Payment"
                color="black"
            />
        <Form onClick={() => handleInput()}>
            <Segment size="huge" textAlign="left">
                <Form.Input
                    fluid
                    icon="dollar sign"
                    size="large"
                    iconPosition="left"
                    label="Principal Amount"
                    placeholder="amount"
                    name="investment"
                    type="number"
                    min="0"
                    max="1000000000"
                    required
                    value={principal}
                    onChange={e => setPrincipal(e.target.value)}
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
                        <span ref={LoanAmount}>
                            {
                                (
                                    principal 
                                    * 
                                    (rate * (Math.pow((1 + rate), term)))
                                    /
                                    (Math.pow((1 + rate), term) - 1)
                                ).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                            }
                        </span>
                        <div ref={LoanAmount}>
                            {
                            `After ${years} years with a ${interestRate}% interest rate, your total interest paid will be ${
                                    (
                                        ((principal 
                                        * 
                                        (rate * (Math.pow((1 + rate), term)))
                                        /
                                        (Math.pow((1 + rate), term) - 1))
                                        * term)
                                        - principal
                                    ).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
                                }`
                            }
                        </div>
                        {/* <div>
                            {(LoanAmount.current?.innerText) * 2}
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
        <pre>{JSON.stringify({ principal, interestRate, years }, null, 2)}</pre> */}
        </Container>
      </>
    );
}

export default LoanCalculator;
