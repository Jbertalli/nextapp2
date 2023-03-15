import Head from 'next/head';
import React, { useState, useRef } from 'react';
import { Container, Divider, Form, Message, Segment } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';

const CompoundInterestCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState<any>('');
  const [interestRate, setInterestRate] = useState<any>('');
  const [years, setYears] = useState<any>('');
  const CompoundInterest = useRef<any>();
  // console.log(CompoundInterest.current?.innerText);

  const handleInput = () => {
    console.log('Compound Interest', { initialInvestment, interestRate, years, CompoundInterest });
  };

  return (
    <>
      <Head>
        <title>HealthStat | Compound Interest Calculator</title>
        <meta
          name="description"
          content="compound, interest, calculator, rate"
        />
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
        <FocusLock>
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
                autoFocus
                value={initialInvestment}
                style={{ marginBottom: '42px' }}
                onChange={(e) => setInitialInvestment(e.target.value)}
              />
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
                style={{ marginBottom: '42px' }}
                onChange={(e) => setInterestRate(e.target.value)}
              />
              <Form.Input
                fluid
                icon="balance scale"
                size="large"
                iconPosition="left"
                label="Years"
                placeholder="years"
                name="years"
                type="number"
                min="0"
                max="100"
                required
                value={years}
                style={{ marginBottom: '42px' }}
                onChange={(e) => setYears(e.target.value)}
              />
              <Segment
                color="blue"
                textAlign="center"
                size="massive"
                style={{
                  display: initialInvestment && interestRate && years ? 'block' : 'none'
                }}
              >
                <span ref={CompoundInterest}>
                  {(
                    parseFloat(initialInvestment) *
                    Math.pow(1 + interestRate / 100, years * 1)
                  )
                    .toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                    .replace('NaN', '')}
                </span>
                <Divider />
                <span ref={CompoundInterest}>
                  {`After ${years} year${years > 1 ? 's' : ''}, your initial investment of $${initialInvestment} will be ${(
                    parseFloat(initialInvestment) *
                    Math.pow(1 + interestRate / 100, years * 1)
                  )
                    .toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                    .replace('NaN', '')}`}
                </span>
              </Segment>
            </Segment>
          </Form>
        </FocusLock>
      </Container>
    </>
  );
};

export default CompoundInterestCalculator;
