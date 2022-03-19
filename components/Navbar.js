import Link from 'next/link';
// import Image from 'next/image';
import Router, { useRouter } from 'next/router';
import { Menu, Icon, Container } from 'semantic-ui-react';
//take out placeholders
//connect routes
//progress bar
//user
//active links

const user = false;

const Navbar = () => {
    const router = useRouter();

    function isActive(route) {
        return route === router.pathname;
    }

    return (
        <Menu fluid stackable id="nav" inverted>
            <Container text>
                <Link href="/">
                    <Menu.Item as="h3" header active={isActive("/placeholder")}>
                        <Icon 
                            name="calculator"
                            size="large"
                        />
                        Calculators
                    </Menu.Item>
                </Link>
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
                    <Menu.Item as="h3" header active={isActive("/placeholder")}>
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
        // <nav>
        //     <div className="logo">
        //         <Image src="/N&J-logo.png" width={128} height={128} />
        //     </div>
        //     <Link href="/"><a>Calculators (Insert dropdown)</a></Link>
        //     <Link href="/"><a>Home</a></Link>
        //     <Link href="/TrackProgress"><a>Track Progress</a></Link>
        //          <Link href="/"><a>Account</a></Link>
        //          <Link href="/"><a>Logout</a></Link>
        //          <Link href="/"><a>Login</a></Link>
        //          <Link href="/"><a>Signup</a></Link>

        //     <Link href="/about"><a>About</a></Link>
        //     <Link href="/ninjas"><a>Ninja Listing</a></Link>
        // </nav>
    );
}

export default Navbar;