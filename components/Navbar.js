import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { Menu, Dropdown, Icon, Container, Sticky } from 'semantic-ui-react';

const Navbar = () => {
    const router = useRouter();
    const user = false;

    function isActive(route) {
        return route === router.pathname;
    }

    return (
        <Sticky>
            <Menu fluid stackable id="nav" inverted>
                <Container text>
                    <Menu.Item as="h3" header active={isActive("/CalorieIntakeCalculator")}>
                            <Icon 
                                name="calculator"
                                size="large"
                            />
                        <Dropdown text='Calculators' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item href='/CalorieIntakeCalculator'><strong>Calorie Intake Calculator</strong></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='/BMICalculator'><strong>BMI Calculator</strong></Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href='/BodyFatCalculator'><strong>Body Fat Calculator</strong></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item> 
                    <Link href="/">
                        <Menu.Item as="h3" header active={isActive("/")}>
                            <Icon
                                name="home"
                                size="large"
                            />
                            Home
                        </Menu.Item>
                    </Link>
                    <Link href="/TrackProgress">
                        <Menu.Item as="h3" header active={isActive("/TrackProgress")}>
                            <Icon
                                name="chart line"
                                size="large"
                            />
                            Track Progress
                        </Menu.Item>
                    </Link>
                    {user ? (<> 
                    <Link href="/">
                        <Menu.Item as="h3" header active={isActive("/placeholder")}>
                            <Icon
                                name="user outline"
                                size="large"
                            />
                            Account
                        </Menu.Item>
                    </Link>
                    <Link href="/">
                        <Menu.Item as="h3" header>
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
                    <Link href="/">
                        <Menu.Item as="h3" header active={isActive("/placeholder")}>
                            <Icon
                                name="sign in"
                                size="large"
                            />
                            Login
                        </Menu.Item>
                    </Link>
                    <Link href="/">
                        <Menu.Item as="h3" header active={isActive("/placeholder")}>
                            <Icon
                                name="signup"
                                size="large"
                            />
                            Signup
                        </Menu.Item>
                    </Link>
                    </>)}
                </Container>
            </Menu>
        </Sticky>
    );
}

export default Navbar;