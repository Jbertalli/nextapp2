import Head from 'next/head';
import { useEffect } from 'react';
import { Router, useRouter } from 'next/router';
import { Button, Container } from 'semantic-ui-react';
import styles from '../styles/404.module.css';
import Fishing from '../components/Fishing';

const NotFound = () => {
    const router = useRouter();
    console.error('Page Not Found');

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push('/');
    //     }, 5000)
    // }, [])

    useEffect(() => {
        document.body.style.overflow = "hidden";
      }, []);
    
    return (
        <>
            <Head>
                <title>404 Not Found</title>
                <meta name="description" content="404, not found" />
            </Head>
            <div className={styles.notfound} style={{ height: '100vh', textAlign: 'center', padding: '15em 0em 5em 0em' }}>
                <Container className={styles.numbers} style={{ backgroundColor: '#f2f2f2', padding: '0em 0em 7em 0em', borderRadius: '1%' }}>
                    <h1 className={styles.spin} style={{ fontSize: '2000%', color: '#3978f5', opacity: .9 }}>404</h1>
                    <h2 style={{ fontSize: '300%', color: 'black', opacity: .8 }}>Page Not Found</h2>
                    <h3 style={{ fontSize: '200%', color: 'black', opacity: .8, padding: '1.2em' }}>Sorry, the webpage you're trying to reach doesn't exist</h3>
                    <Button
                        icon="home"
                        content="Return to Homepage"
                        basic
                        color='blue'
                        circular
                        className={styles.button}
                        style={{ fontSize: '1.4em', cursor: 'pointer', padding: '1em' }}
                        onClick={() => router.push('/')}
                    />
                </Container>
                <Fishing />
                {/* <Item 
                    style={{ width: '500px', height: '500px', background: 'blue', transform: 'rotate(45deg)', transform: 'translateX(100%)' }}
                /> */}
            </div>
        </>
    );
}

export default NotFound;
