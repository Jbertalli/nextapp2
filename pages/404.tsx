import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Container } from 'semantic-ui-react';
import styles from '../styles/404.module.css';
import Fishing from '../components/Fishing';

const NotFound = () => {
  const [desktop, setDesktop] = useState<boolean>(true);
  const [font, setFont] = useState<string>('2000%');
  const [padding, setPadding] = useState<string>('15em');
  const [bottom, setBottom] = useState<string>('0px');
  const [scale, setScale] = useState<string>('1');
  const router: any = useRouter();
  console.error('Page Not Found');

  // useEffect(() => {
  //     setTimeout(() => {
  //         router.push('/');
  //     }, 5000)
  // }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    if (window.innerWidth > 440) {
      setDesktop(true);
      setFont('2000%');
      setPadding('15em');
      setBottom('0px');
      setScale('1');
    } else {
      setDesktop(false);
      setFont('170px');
      setPadding('10vh');
      setBottom('-30px');
      setScale('0.8');
    }

    const updateMedia = () => {
      if (window.innerWidth > 440) {
        setDesktop(true);
        setFont('2000%');
        setPadding('15em');
        setBottom('0px');
        setScale('1');
      } else {
        setDesktop(false);
        setFont('170px');
        setPadding('10vh');
        setBottom('-30px');
        setScale('0.8');
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="404, not found" />
      </Head>
      <div
        className={styles.notfound}
        style={{
          height: '100vh',
          textAlign: 'center',
          padding: `${padding} 0em 5em 0em`,
        }}
      >
        <Container
          className={styles.numbers}
          style={{
            backgroundColor: '#f2f2f2',
            padding: '0em 0em 7em 0em',
            borderRadius: '1%',
            transform: `scale(${scale})`,
          }}
        >
          <h1
            className={styles.spin}
            style={{
              fontSize: `${font}`,
              color: '#3978f5',
              opacity: 0.9,
              marginBottom: `${bottom}`,
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: '300%',
              color: 'black',
              opacity: 0.8,
              marginBottom: `${bottom}`,
            }}
          >
            Page Not Found
          </h2>
          <h3
            style={{
              fontSize: '200%',
              color: 'black',
              opacity: 0.8,
              padding: '1.2em',
            }}
          >{`Sorry, the webpage you're trying to reach doesn't exist`}</h3>
          <div style={{ marginBottom: `${bottom}` }}>
            <Button
              icon="home"
              content="Return to Homepage"
              basic
              color="blue"
              circular
              className={styles.button}
              style={{
                fontSize: '1.4em',
                cursor: 'pointer',
                padding: '1em',
                marginBottom: `${bottom}`,
              }}
              onClick={() => router.push('/')}
            />
          </div>
        </Container>
        {desktop ? <Fishing /> : null}
      </div>
    </>
  );
};

export default NotFound;
