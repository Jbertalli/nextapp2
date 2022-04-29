import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, Dropdown, Icon, Container, Sticky } from 'semantic-ui-react';
import styles from '../styles/Footer.module.css';
import { handleLogout } from '../utils/auth';

const Navbar = ({ user }) => {
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
        <Sticky style={{ position: 'relative' }}>
            <Menu className={styles.nav} fluid stackable inverted>
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
                    <Menu.Item as="h3" header active={isActive("/CalorieIntakeCalculator")}>
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
                    <Menu.Item as="h3" header active={isActive("/CompoundInterestCalculator")}>
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
                    <Link href="/TrackProgress">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/TrackProgress")}>
                            <Icon
                                name="chart line"
                                size="large"
                            />
                            Track Progress
                        </Menu.Item>
                    </Link>
                    <Link href="/goals">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/goals")}>
                            <Icon
                                name="target"
                                size="large"
                            />
                            Goals
                        </Menu.Item>
                    </Link>
                    {user ? (<> 
                    <Link href="/account">
                        <Menu.Item className={styles.hover} as="h3" header active={isActive("/account")}>
                            <Icon
                                name="user outline"
                                size="large"
                            />
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
        </Sticky>
    );
}

export default Navbar;
