import React from 'react';
import { Button, Form, Message, Segment, Container } from "semantic-ui-react";
import Head from 'next/head';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import axios from 'axios';
import baseUrl from '../utils/baseUrl';
import { handleLogin } from '../utils/auth';

const INITIAL_USER = {
    name: "",
    email: "",
    password: ""
}

const Signup = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

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
            setError('');
            //console.log(user);
            const url = `${baseUrl}/api/Signup`;                //request to corresponding api
            const payload = { ...user };                        //payload to send over form data to endpoint ---> spread in captured user data (fields needed to create new user)
            const response = await axios.post(url, payload);
            handleLogin(response.data);                         //from utils > auth.js
        } catch(error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <Head>
            <title>HealthStat | Signup</title>
            <meta name="description" content="signup" />
        </Head>
        <Container textAlign="left" as="h3" style={{ margin: '2em' }}>
            <Message 
                attached
                icon="settings"
                header="Signup"
                content="Create a new account"
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
                        icon="user"
                        iconPosition="left"
                        label="Name"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
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
                        content="Signup"
                    />
                </Segment>
            </Form>
            <Message attached="bottom">
                Existing user?&nbsp;&nbsp;
                <Link href="/Login">
                    <a style={{ color: '#3978f5' }}>Log in here</a>
                </Link>{" "}
                instead.
            </Message>
            </Container>
        </>
    );
}

export default Signup;
