import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Container } from 'semantic-ui-react';
import styles from '../styles/404.module.css';
import Fishing from '../components/Fishing';
import { useMediaQuery } from 'react-responsive';

const NotFound = () => {
  const [desktop, setDesktop] = useState<boolean>(true);
  const router: any = useRouter();
  console.error('Page Not Found');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

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

  const isLaptop = useMediaQuery(
    { minWidth: 1290, maxWidth: 1450 }
  );

  const isTablet = useMediaQuery(
    { minWidth: 100, maxWidth: 1290 }
  );

  const isLandscapePhone = useMediaQuery(
    { minHeight: 200, maxHeight: 470 }
  );

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
          padding: desktop ? '15em 0em 5em 0em' : '10vh 0em 5em 0em'
        }}
      >
        <div
          style={{
            transform: isLandscapePhone ? 'scale(0.5) translateY(-600px)' : null
          }}
        >
          <Container
            className={styles.numbers}
            style={{
              backgroundColor: '#f2f2f2',
              padding: '0em 0em 7em 0em',
              borderRadius: '1%',
              transform: desktop ? (isTablet ? 'scale(0.7) translateY(-250px)' : null) : 'scale(0.8) translateY(-60px)'
            }}
          >
            <h1
              className={styles.spin}
              style={{
                fontSize: desktop ? '2000%' : '170px',
                color: '#3978f5',
                opacity: 0.9,
                marginBottom: desktop ? '0px' : '-30px'
              }}
            >
              404
            </h1>
            <h2
              style={{
                fontSize: '300%',
                color: 'black',
                opacity: 0.8,
                marginBottom: desktop ? '0px' : '-30px'
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
            <div style={{ marginBottom: desktop ? '0px' : '-30px' }}>
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
                  marginBottom: desktop ? '0px' : '-30px'
                }}
                onClick={() => router.push('/')}
              />
            </div>
          </Container>
        </div>
        {(isLaptop || isTablet || isLandscapePhone || !desktop) ? null : (
        <>
          <Fishing />
        </>
        )}
      </div>
    </>
  );
};

export default NotFound;
