import React from 'react';
import { Button, Form, Message, Segment, Container } from "semantic-ui-react";
import Head from 'next/head';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';
import { handleLogin } from '../utils/auth';

const INITIAL_USER = {
    email: "",
    password: ""
};

const Login = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState<boolean>(true);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>('');

    React.useEffect(() => {
        const isUser: boolean = Object.values(user).every(el => Boolean(el))
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
            setError('');
            const url: string = `${baseUrl}/api/Login`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data);
            //console.log(user);
        } catch(error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <Head>
            <title>HealthStat | Login</title>
            <meta name="description" content="login" />
        </Head>
        <Container textAlign="left" as="h3" style={{ margin: '2em' }}>
            <Message 
                attached
                icon="privacy"
                header="Login"
                content="Log into your account"
                color="black"
            />
            <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
                <Message
                    error
                    header="Error"
                    content={error}
                />
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
