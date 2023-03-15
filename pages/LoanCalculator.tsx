import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Divider, Form, Message, Segment } from 'semantic-ui-react';
import FocusLock from 'react-focus-lock';

const LoanCalculator = () => {
  const [desktop, setDesktop] = useState<boolean>(true);
  const [principal, setPrincipal] = useState<any>('');
  const [interestRate, setInterestRate] = useState<any>('');
  const [years, setYears] = useState<any>('');
  const LoanAmount = useRef<any>();
  const term: number = years * 12;
  const rate: number = interestRate / 100 / 12;
  
  // console.log(LoanAmount.current?.innerText);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleInput = () => {
    console.log('Loan Amount', { principal, interestRate, years, LoanAmount });
  };

  return (
    <>
      <Head>
        <title>HealthStat | Loan Calculator</title>
        <meta name="description" content="loan, calculator" />
      </Head>
      <Container 
        textAlign="center" 
        as="h3"
        style={{ margin: desktop ? '3em' : '2em' }} 
      >
        <Message
          attached
          compact
          icon="calculator"
          header="Loan Calculator"
          content="Calculate Monthly Payment"
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
                label="Principal Amount"
                placeholder="amount"
                name="investment"
                type="number"
                min="0"
                max="1000000000"
                required
                autoFocus
                value={principal}
                style={{ marginBottom: '42px' }}
                onChange={(e) => setPrincipal(e.target.value)}
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
                onChange={(e) => setYears(e.target.value)}
              />
              <Segment
                color="blue"
                textAlign="center"
                size="massive"
                style={{
                  display:
                    principal && interestRate && years ? 'block' : 'none',
                }}
              >
                <span ref={LoanAmount}>
                  {(
                    (principal * (rate * Math.pow(1 + rate, term))) /
                    (Math.pow(1 + rate, term) - 1)
                  )
                    .toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                    .replace('NaN', '')}
                </span>{' '}
                <span style={{ fontSize: '15px' }}>
                  /month
                </span>
                <Divider />
                <div ref={LoanAmount}>
                  {`After ${years} year${years > 1 ? 's' : ''} with a ${interestRate}% interest rate, your total interest paid will be ${(
                    ((principal * (rate * Math.pow(1 + rate, term))) /
                      (Math.pow(1 + rate, term) - 1)) *
                      term - principal
                  )
                    .toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })
                    .replace('$NaN', '')}`}
                </div>
              </Segment>
            </Segment>
          </Form>
        </FocusLock>
      </Container>
    </>
  );
};

export default LoanCalculator;
