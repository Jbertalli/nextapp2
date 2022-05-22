import Head from 'next/head';
import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import { handleLogout } from '../../utils/auth';
import { Divider, Grid, Container } from 'semantic-ui-react';

const siteMap = ({ user }) => {
    return (
        <>
            <Head>
                <title>HealthStat | Site Map</title>
                <meta name="description" content="site map, directory" />
            </Head>
            <h1 style={{ fontSize: "50px", margin: 'em 0 6em' }} className={styles.siteMap}>
                HealthStat Site Map
                <Container>
                <Divider style={{ margin: '2em'}} />
                    <div>
                        <Grid columns={3} padded='horizontally' stackable >
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
