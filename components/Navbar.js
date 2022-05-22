import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, Dropdown, Icon, Container, Sticky, Image, Card, Feed, Grid } from 'semantic-ui-react';
import styles from '../styles/Footer.module.css';
import { handleLogout } from '../utils/auth';
import { mediaPreview } from '../components/AccountHeader';
import Icons from '../components/Icons';

const Navbar = ({ user, mediaPreview }) => {
    console.log(user);
    // console.log(user.role);
    const router = useRouter();
    // const isRoot = user && user.role === 'root';
    // const isAdmin = user && user.role === 'admin';
    // const isRootOrAdmin = isRoot || isAdmin;                     pass to component ternary to specify permissions 

    function isActive(route) {
        return route === router.pathname;
    }

    return (
        // <Sticky style={{ position: 'relative' }}>
        <div style={{ padding: '2.5vh' }}>
            <Menu className={styles.nav} fixed='top' fluid stackable inverted>
                <Grid>
                    <Icons />
                </Grid>
                <Container>
                    <Link href="/">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/")}>
                            <Icon
                                name="home"
                                size="large"
                            />
                            Home
                        </Menu.Item>
                    </Link>
                    <Menu.Item as="h3" header active={isActive("/CalorieIntakeCalculator") || isActive("/BMICalculator") || isActive("/BodyFatCalculator")}>
                            <Icon 
                                name="calculator"
                                size="large"
                            />
                        <Dropdown text='Health Calculators' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/CalorieIntakeCalculator'><strong>Calorie Intake Calculator</strong></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='/BMICalculator'><strong>BMI Calculator</strong></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='/BodyFatCalculator'><strong>Body Fat Calculator</strong></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item> 
                    <Menu.Item as="h3" header active={isActive("/CompoundInterestCalculator") || isActive("/LoanCalculator")}>
                            <Icon 
                                name="dollar sign"
                                size="large"
                            />
                        <Dropdown text='Financial Calculators' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/LoanCalculator'><strong>Loan Calculator</strong></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='/CompoundInterestCalculator'><strong>Compound Interest Calculator</strong></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                    {/* <Link href="/TrackProgress">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/TrackProgress")}>
                            <Icon
                                name="chart line"
                                size="large"
                            />
                            Track Progress
                        </Menu.Item>
                    </Link> */}
                    <Link href="/goals">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/goals")}>
                            <Icon
                                name="target"
                                size="large"
                            />
                            Set Goals
                        </Menu.Item>
                    </Link>
                    {user ? (<> 
                    <Link href="/account">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/account")}>
                            <Icon
                                name="user outline"
                                size="large"
                            />
                            {/* <Image src={mediaPreview} centered size="small" style={{ borderRadius: '10%', width: '9vw' }} /> */}
                            {/* <Feed style={{ margin: '0em 1em 0em 0em' }}>
                                <Feed.Event>
                                    <Feed.Label image={mediaPreview} />
                                </Feed.Event>
                            </Feed> */}
                            Account
                        </Menu.Item>
                    </Link>
                    <Link href="/Login">
                        <Menu.Item onClick={handleLogout} className={styles.hover} as="h3" header>
                            <Icon
                                name="sign out"
                                size="large"
                            />
                            Logout
                        </Menu.Item>
                    </Link>
                    </>
                    ):(
                    <>
                    <Link href="/Login">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/Login")}>
                            <Icon
                                name="sign in"
                                size="large"
                            />
                            Login
                        </Menu.Item>
                    </Link>
                    <Link href="/Signup">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/Signup")}>
                            <Icon
                                name="signup"
                                size="large"
                            />
                            Signup
                        </Menu.Item>
                    </Link>
                    </>)}
                    {/* <Link href="/CrochetApp/Crochet">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/CrochetApp/Crochet")}>
                            <Icon
                                name="map pin"
                            />
                            Crochet App
                        </Menu.Item>
                    </Link> */}
                </Container>
            </Menu>
        {/* </Sticky> */}
        </div>
    );
}

export default Navbar;
