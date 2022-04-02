import React from 'react';
import { Button, Form, Message, Segment, Container } from "semantic-ui-react";
import Head from 'next/head';
import Link from 'next/link';

const INITIAL_USER = {
    email: "",
    password: ""
};

const Login = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const isUser = Object.values(user).every(el => Boolean(el))
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user])

    function handleChange(event) {
        const {name, value} = event.target
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            setLoading(true);
        } catch(error) {

        } finally {
            setLoading(false)
        }
    }

    return (
        <>
        <Head>
            <title>HealthStat | Login</title>
            <meta name="keywords" content="login" />
        </Head>
        <Container textAlign="left" as="h3" style={{ margin: '2em' }}>
            <Message 
                attached
                icon="privacy"
                header="Login"
                content="Log into your account"
                color="black"
            />
            <Form loading={loading} onSubmit={handleSubmit}>
                <Segment>
                    <Form.Input
                        fluid
                        icon="envelope"
                        iconPosition="left"
                        label="Email"
                        placeholder="Email"
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <Form.Input
                        fluid
                        icon="lock"
                        iconPosition="left"
                        label="Password"
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <Button
                        disabled={disabled || loading}
                        icon="signup"
                        type="submit"
                        color="blue"
                        content="Login"
                    />
                </Segment>
            </Form>
            <Message attached="bottom">
                New user?&nbsp;&nbsp;
                <Link href="/Signup">
                    <a style={{ color: '#3978f5' }}>Sign up here</a>
                </Link>{" "}
                instead.
            </Message>
            </Container>
        </>
    );
}

export default Login;