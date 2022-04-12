import Head from 'next/head';
import styles from '../../styles/Footer.module.css';
import Link from 'next/link';
import { handleLogout } from '../../utils/auth';

const siteMap = ({ user }) => {
    return (
        <>
            <Head>
                <title>HealthStat | Site Map</title>
                <meta name="description" content="site map, directory" />
            </Head>
            <h1 className={styles.siteMap}>
                HealthStat Site Map
                <div>
                    <div className="ui grid">
                        <div className="four wide column">
                            <h2>
                                Services
                            </h2>
                            <h4>
                                <Link href="/CalorieIntakeCalculator"><a>Caloric Intake Calculator</a></Link>
                            </h4>
                            <h4>
                                <Link href="/BMICalculator"><a>BMI Calculator</a></Link>
                            </h4>
                            <h4>
                                <Link href="/BodyFatCalculator"><a>Body Fat % Calculator</a></Link>
                            </h4>
                            <h4>
                                <Link href="/LoanCalculator"><a>Loan Calculator</a></Link>
                            </h4>
                            <h4>
                                <Link href="/CompoundInterestCalculator"><a>Compound Interest Calculator</a></Link>
                            </h4>
                        </div>
                        {/* dynamic view based on user status */}
                        <div className="four wide column">
                                <h2>
                                    Account
                                </h2>
                            {user ? (<>
                                <h4>
                                    <Link href="/account"><a>Profile</a></Link>
                                </h4>
                                <h4>
                                    <Link href="/TrackProgress"><a>Track Progress</a></Link>
                                </h4>
                                <h4 onClick={handleLogout}>
                                    Sign Out
                                </h4>
                            </>
                            ) : (
                            <>
                                <h4>
                                    <Link href="/Login"><a>Login to View Account</a></Link>
                                </h4>
                            </>)}
                        </div>
                        <div className="four wide column">
                            <h2>
                                Home
                            </h2>
                            <h4>    
                                <Link href="/"><a>Return to Homepage</a></Link>
                            </h4>
                        </div>
                        <div className="four wide column">
                            <h2>
                                Terms of Use 
                            </h2>
                            <h4>
                                <Link href="/footer/terms"><a>Terms of Use</a></Link>
                            </h4>
                        </div>
                        <div className="four wide column">
                            <h2>
                                Privacy Policy
                            </h2>
                            <h4>
                                <Link href="/footer/privacy-policy"><a>Privacy Policy</a></Link>
                            </h4>
                        </div>
                        <div className="four wide column">
                            <h2>
                                Country
                            </h2>
                            <h4>
                                <Link href="/footer/countries"><a>Countries</a></Link>
                            </h4>
                            <h4>
                                <Link href="/Languages"><a>Languages</a></Link>
                            </h4>
                        </div>
                    </div>
                </div> 
            </h1>
        </>
    );
}

export default siteMap;