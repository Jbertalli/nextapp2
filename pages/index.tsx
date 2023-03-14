import Head from 'next/head';
import React from 'react';
import axios from 'axios';
import CalculatorList from '../components/CalculatorList';
import { Container } from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl';

export default function Home({ examples }) {
  return (
    <>
      <Head>
        <title>HealthStat | Home</title>
        <meta name="description" content="healthstat, calorie calculator" />
      </Head>
      <Container style={{ margin: '3em 0 3em' }}>
        <div style={{ transform: 'translateY(20px)' }}>
          <CalculatorList examples={examples} />
        </div>
      </Container>
    </>
  );
}

// server-side rendering
Home.getInitialProps = async () => {
  // const url = 'http://localhost:3000/api/hello';
  const url = `${baseUrl}/api/hello`;
  const response = await axios.get(url);
  return { examples: response.data };
};
