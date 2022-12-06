import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Dropdown, Icon, Container, Grid, Sticky, Modal, Divider } from 'semantic-ui-react';
import styles from '../styles/Footer.module.css';
import { handleLogout } from '../utils/auth';
import Icons from './Icons';
// import Image from 'next/image';
// import AccountHeader from './AccountHeader';
// import Avatar from 'react-avatar';

const Navbar = ({ user }): any => {
// const Navbar = ({ user, mediaPreview }) => {
    // console.log({mediaPreview});
    console.log(user);
    // console.log(user.role);
    const router: any = useRouter();
    // const isRoot = user && user.role === 'root';
    // const isAdmin = user && user.role === 'admin';
    // const isRootOrAdmin = isRoot || isAdmin;                     pass to component ternary to specify permissions 
    const [desktop, setDesktop] = useState<boolean>(true);
    const [menuModal, setMenuModal] = useState(false);
    const [percent, setPercent] = useState<number>(null);

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

    function isActive(route) {
        return route === router.pathname;
    }

    useEffect(() => {
        window.addEventListener('scroll', function() {
            let pixelsFromTop = window.scrollY;
            let documentHeight = document.body.scrollHeight;
            let windowHeight = window.innerHeight;
            let difference = documentHeight - windowHeight;
            let percentage = (100 * pixelsFromTop) / difference;
            setPercent(percentage);
        })
    }, []);
    
    return (
        <>
            {desktop ? (
            <>
                <div style={{ padding: '2.5vh' }}>
                    <Menu 
                        fixed='top' 
                        inverted
                        style={{ background: 'black' }}
                    >
                        <div style={{ position: 'absolute', transform: 'translate(50px)' }}>
                            <Grid>
                                <Icons />
                            </Grid>
                        </div>
                        <Container>
                            <Link href="/" passHref>
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
                            <Link href="/goals" passHref>
                                <Menu.Item className={styles.hover} as="h3" header active={isActive("/goals")}>
                                    <Icon
                                        name="target"
                                        size="large"
                                    />
                                    Set Goals
                                </Menu.Item>
                            </Link>
                            {user ? (
                            <> 
                                <Link href="/account" passHref>
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
                                        {/* <div>
                                            <Avatar 
                                                name="profile_pic"
                                                size="28"
                                                round={true}
                                                src={mediaPreview}
                                            />
                                        </div> */}
                                        Account
                                    </Menu.Item>
                                </Link>
                                <Link href="/Login" passHref>
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
                                <Link href="/Login" passHref>
                                    <Menu.Item className={styles.hover} as="h3" header active={isActive("/Login")}>
                                        <Icon
                                            name="sign in"
                                            size="large"
                                        />
                                        Login
                                    </Menu.Item>
                                </Link>
                                <Link href="/Signup" passHref>
                                    <Menu.Item className={styles.hover} as="h3" header active={isActive("/Signup")}>
                                        <Icon
                                            name="signup"
                                            size="large"
                                        />
                                        Signup
                                    </Menu.Item>
                                </Link>
                            </>)}
                        </Container>
                        {(router.pathname === '/footer/privacy-policy' || router.pathname === '/footer/terms') ? (
                        <>
                            <div
                                style={{  
                                    marginTop: '60px',
                                    width: `${percent}vw`,
                                    height: '6px',
                                    background: '#0066CC',
                                    opacity: '0.9',
                                    position: 'fixed',
                                }}
                            />
                        </>
                        ): null}
                    </Menu>
                </div>
            </>
            ):(
            <>
                {/* <div style={{ position: 'absolute', transform: 'scale(0.8) translateY(-22px)', right: '0px', zIndex: '10000', marginRight: '0px' }}>
                    <Icons />
                </div> */}
                {/* <Sticky> */}
                <Menu
                    fluid
                    style={{
                        height: '48px', 
                        position: 'relative', 
                        zIndex: '9999', 
                        fontSize: '17px', 
                        fontWeight: '400', 
                        background: '#000000',
                        opacity: '1',
                        fontFamily: 'SF Pro Text'
                    }}>
                    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ transform: 'translateY(-3px)' }}>
                            <Menu.Item 
                                style={{ color: '#F5F5F7' }} 
                                onClick={() => setMenuModal(true)}
                            >
                                <div style={{ transform: 'scaleX(1.8) translate(0.3px, -11px)', color: '#F5F5F7' }}>
                                    _
                                </div>
                                <div style={{ transform: 'scaleX(1.8) translate(-4.7px, -4px)', color: '#F5F5F7' }}>
                                    _
                                </div>
                                <div style={{ transform: 'scaleX(1.8) translate(-9.1px, 3px)', color: '#F5F5F7' }}>
                                    _
                                </div>
                            </Menu.Item>
                        </div>
                        {/* <div style={{ position: 'absolute', transform: 'scale(0.6) translateY(-26px)', right: '0px', zIndex: '10000', marginRight: '0px' }}>
                            <Icons />
                        </div> */}
                        <Modal className={styles.dropdown} open={menuModal} dimmer="blurring" size="small" style={{ position: 'fixed', background: 'black', width: '100%', height: '100%', transform: 'translateY(-14px)' }}>
                            <div
                                style={{ cursor: 'pointer' }}
                                onClick={() => setMenuModal(false)}
                            >
                                <div style={{ fontSize: '23px', fontWeight: '100', color: '#f5f5f7', transform: 'translate(18px, 10px) scaleX(1.3)', position: 'absolute', zIndex: '100', opacity: '0.6' }}>
                                    x
                                </div>
                            </div>
                            <div>
                                <Container  style={{ color: '#f5f5f7', fontWeight: '100', lineHeight: '14.6px', fontSize: '17px', width: '584px', cursor: 'pointer', padding: '0px 23px 0px 23px', transform: 'translateY(40px)' }}>
                                    <Link href="/" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Home
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/CalorieIntakeCalculator" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Calorie Intake Calculator
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/BMICalculator" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            BMI Calculator
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/BodyFatCalculator" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Body Fat Calculator
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/LoanCalculator" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Loan Calculator
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/CompoundInterestCalculator" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Compound Interest Calculator
                                        </div>
                                    </Link>
                                    <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                    <Link href="/goals" passHref>
                                        <div onClick={() => setMenuModal(false)}>
                                            Set Goals
                                        </div>
                                    </Link>
                                    {user ? (
                                    <>
                                        <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                        <Link href="/account" passHref>
                                            <div onClick={() => setMenuModal(false)}>
                                                Account
                                            </div>
                                        </Link>
                                        <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                        <Link href="/Login" passHref>
                                            <div onClick={() => setMenuModal(false)}>
                                                Logout
                                            </div>
                                        </Link>
                                    </>
                                    ):(
                                    <>
                                        <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                        <Link href="/Login" passHref>
                                            <div onClick={() => setMenuModal(false)}>
                                                Login
                                            </div>
                                        </Link>
                                        <Divider style={{ background: '#f5f5f7', opacity: '0.3' }} />
                                        <Link href="/Signup" passHref>
                                            <div onClick={() => setMenuModal(false)}>
                                                Signup
                                            </div>
                                        </Link>
                                    </>
                                    )}
                                </Container>
                            </div>
                        </Modal>
                    </Container>
                </Menu>
                {/* </Sticky> */}
            </>
            )}
        </>
    );
}

export default Navbar;
