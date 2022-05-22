import Head from 'next/head';
// import styles from '../styles/Home.module.css';
// import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import CalculatorList from '../components/CalculatorList';
import { Container, Icon } from 'semantic-ui-react';
import Icons from '../components/Icons';

// export default function Home() {
export default function Home({ examples }) {
  console.log(examples);

  //fetching data for client-rendered React app(valid, just not server-side)
  // React.useEffect(() => {
  //   getProducts()
  // }, [])

  // async function getProducts() {
  //   const url = 'http://localhost:3000/api/hello';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // }

  return (
    <>
      <Head>
        <title>HealthStat | Home</title>
        <meta name="description" content="healthstat, calorie calculator" />
      </Head>
      <h1 style={{ textAlign: 'center', fontSize: '50px'  }}>HealthStat</h1>
      <Container>

      </Container>
      <Container style={{ margin: '3em 0 6em' }}>
        <div>
          {/* <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
          <Link href='/ninjas'>
            <a className={styles.btn}>See Ninja Listing</a>
          </Link> */}
            <CalculatorList examples={examples} />
        </div>
      </Container>
    </>
  );
}

//server-side rendering
Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/hello';
  const response = await axios.get(url);
  return { examples: response.data };
  //return { hello: 'world'}
}