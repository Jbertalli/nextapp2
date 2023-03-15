import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CalculatorList from '../components/CalculatorList';
import { Container } from 'semantic-ui-react';
import baseUrl from '../utils/baseUrl';

export default function Home({ examples }) {
  const [percent, setPercent] = useState<number>(null);
  const [desktop, setDesktop] = useState<boolean>(true);

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

  useEffect(() => {
    window.addEventListener('scroll', function () {
      let pixelsFromTop = window.scrollY;
      let documentHeight = document.body.scrollHeight;
      let windowHeight = window.innerHeight;
      let difference = documentHeight - windowHeight;
      let percentage = (100 * pixelsFromTop) / difference;
      setPercent(percentage);
    });
  }, []);

  return (
    <>
      <Head>
        <title>HealthStat | Home</title>
        <meta name="description" content="healthstat, calorie calculator" />
      </Head>
      {!desktop ? (
      <>
        <div
          style={{
            width: `${percent}vw`,
            height: '6px',
            background: '#0066CC',
            opacity: '0.9',
            position: 'fixed',
            top: '0px',
            zIndex: '10000'
          }}
        />
      </>
      ): null}
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
  const url = `${baseUrl}/api/hello`;
  const response = await axios.get(url);
  return { examples: response.data };
};
