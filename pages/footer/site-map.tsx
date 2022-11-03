import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import { handleLogout } from '../../utils/auth';
import { Divider, Grid, Container } from 'semantic-ui-react';

const siteMap = ({ user }) => {
    const [size, setSize] = useState<string>('50px');

    useEffect(() => {
        if (window.innerWidth > 440) {
            setSize('50px');
        } else {
            setSize('30px');
        }
  
        const updateMedia = () => {
            if (window.innerWidth > 440) {
                setSize('50px');
            } else {
                setSize('30px');
            }
        };
          window.addEventListener('resize', updateMedia);
          return () => window.removeEventListener('resize', updateMedia);
      }, []);

    return (
        <>
            <Head>
                <title>HealthStat | Site Map</title>
                <meta name="description" content="site map, directory" />
            </Head>
            <h1 className={styles.siteMap} style={{ transform: 'translateY(20px)' }}>
                <div style={{ marginTop: '30px', fontSize: `${size}` }}>
                    HealthStat Site Map
                </div>
                <Container>
                    <Divider />
                    <div>
                        <Grid columns={3} padded='horizontally' stackable style={{ transform: 'translateY(-20px)' }}>
                            <Grid.Column style={{ margin: '0em 0em .8em' }}>
                                <div>
                                    <h1>
                                        Services
                                    </h1>
                                    <h3>
                                        <Link href="/CalorieIntakeCalculator"><a>Caloric Intake Calculator</a></Link>
                                    </h3>
                                    <h3>
                                        <Link href="/BMICalculator"><a>BMI Calculator</a></Link>
                                    </h3>
                                    <h3>
                                        <Link href="/BodyFatCalculator"><a>Body Fat % Calculator</a></Link>
                                    </h3>
                                    <h3>
                                        <Link href="/LoanCalculator"><a>Loan Calculator</a></Link>
                                    </h3>
                                    <h3>
                                        <Link href="/CompoundInterestCalculator"><a>Compound Interest Calculator</a></Link>
                                    </h3>
                                </div>
                            </Grid.Column>
                            {/* dynamic view based on user status */}
                            <Grid.Column>
                                <div>
                                    <h1>
                                        Account
                                    </h1>
                                    {user ? (<>
                                        <h3>
                                            <Link href="/account"><a>Profile</a></Link>
                                        </h3>
                                        <h3>
                                            <Link href="/goals"><a>Set Goals</a></Link>
                                        </h3>
                                        <h3 onClick={handleLogout} style={{ cursor: 'pointer' }}>
                                            Logout
                                        </h3>
                                    </>
                                    ) : (
                                    <>
                                        <h3>
                                            <Link href="/Login"><a>Login to View Account</a></Link>
                                        </h3>
                                    </>)}
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h1>
                                        Home
                                    </h1>
                                    <h3>    
                                        <Link href="/"><a>Return to Homepage</a></Link>
                                    </h3>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h1>
                                        Terms of Use 
                                    </h1>
                                    <h3>
                                        <Link href="/footer/terms"><a>Terms of Use</a></Link>
                                    </h3>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h1>
                                        Privacy Policy
                                    </h1>
                                    <h3>
                                        <Link href="/footer/privacy-policy"><a>Privacy Policy</a></Link>
                                    </h3>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h1>
                                        Languages
                                    </h1>
                                    <h3>
                                        <Link href="/Languages"><a>Languages</a></Link>
                                    </h3>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>
                </Container> 
            </h1>
        </>
    );
}

export default siteMap;
