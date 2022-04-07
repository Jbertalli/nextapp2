import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Container, Message, Form, Segment, Input, Card, Icon, Modal, Grid } from 'semantic-ui-react';
import Counter from '../../components/CrochetApp/Counter';
import { useStopwatch } from 'react-timer-hook';

const Crochet = () => {

const { seconds, minutes, hours, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
const [save, setSave] = useState(false);
const [upload, setUpload] = useState(false);
const [share, setShare] = useState(false);

//console.log(isRunning, seconds);
//IIFE
(function(){
    if (seconds === 0) {
        console.log('New Timer')
    } else {
        console.log('Timer Running')
    } 
})();

async function handleSave() {
    try {

    } catch {

    }
}

async function handleUpload() {
    try {

    } catch {

    }
}

async function handleShare() {
    try {

    } catch {

    }
}

    return (
        <>
            <Head>
                <title>Crochet Counter</title>
                <meta name="description" content="crochet, knitting, counter" />
            </Head>
            <Container textAlign="center" as="h2" style={ { margin: '3em', border: '1px solid black' } }>                                   {/* *background: "linear-gradient(#e66465, #9198e5);", */}
                    <Message
                        color="violet"
                        icon="gift"
                        header="Crochet Counter"
                        content="Count Your Stitches!"
                    />
                    <Segment>
                        <Form>
                            <Form.Field
                                as="h2"
                                placeholder="Name"
                                content="Name Project"
                            />
                            <Input
                                icon="pencil"
                                placeholder="Name"
                            />
                        </Form>
                    </Segment>
                    <Card raised stackable style={ { width: "100%", paddingTop: '1em' } } >                                                 {/* *background: "linear-gradient(#e66465, #9198e5);", */}
                        Main Counter
                        <div />
                        <Counter />
                    </Card>
                    <div />
                    <Card.Group raised centered stackable>
                        <Card style={ { width: "30%" } } >
                            <Card.Content>
                                Counter #1
                                <div />
                                <Counter />
                            </Card.Content>
                        </Card>
                        <Card style={ { width: "30%" } }>
                            <Card.Content>
                                Counter #2
                                <div />
                                <Counter />
                            </Card.Content>
                        </Card>
                        <Card style={ { width: "30%" } }>
                            <Card.Content>
                                Counter #3
                                <div />
                                <Counter />
                            </Card.Content>
                        </Card>
                    </Card.Group>
                    <Segment style={{ padding: '3em' }}>
                            <Button onClick={start} color="violet" size="huge" circular>
                                <Icon
                                    name="play"
                                />
                                Start Timer
                            </Button>
                            <Button onClick={pause} onDoubleClick={start} color="violet" size="huge" circular>
                                <Icon
                                    name="pause"
                                />
                                Pause
                            </Button>
                            <Button onClick={reset} color="violet" size="huge" circular>
                                <Icon
                                    name="undo"
                                />
                                Reset
                            </Button>
                        <div style={{ textAlign: 'center', padding: '3em' }}>
                            <div style={{fontSize: '100px'}}>
                               <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                            </div>
                            <h1 style={{ padding: '1em' }}>{isRunning ? 'Running' : 'Paused'}</h1>
                        </div>
                    </Segment>
                    <Message>
                        <Button
                            onClick={() => setSave(true)}
                            icon="save"
                            color="blue"
                            size="massive"
                            content="Save Project"
                        />
                        <Button
                            onClick={() => setUpload(true)}
                            icon="upload"
                            color="blue"
                            size="massive"
                            content="Upload Pictures"
                        />
                        <Button
                            onClick={() => setShare(true)}
                            icon="share"
                            color="blue"
                            size="massive"
                            content="Share Project"
                        />
                    </Message>
                    <Modal open={save} dimmer='blurring' size='small'>
                        <Modal.Header><h1>Save Project</h1></Modal.Header>
                        <h3 style={{ padding: '15px' }}>Are you sure you want to save your project?</h3>
                        <Modal.Actions>
                            <Button
                                size="large"
                                content="Cancel"
                                onClick={() => setSave(false)}
                            />
                            <Button
                                size="large"
                                content="Save Project"
                                color="blue"
                                // onClick={handleSave}
                            />
                        </Modal.Actions>
                    </Modal>
                    <Modal open={upload} dimmer='blurring' size='small'>
                        <Modal.Header><h1>Upload Pictures</h1></Modal.Header>
                        <h3 style={{ padding: '15px' }}>Are you sure you want to upload pictures?</h3>
                        <Modal.Actions>
                            <Button
                                size="large"
                                content="Cancel"
                                onClick={() => setUpload(false)}
                            />
                            <Button
                                size="large"
                                content="Upload"
                                color="blue"
                                //onClick={handleUpload}
                            />
                        </Modal.Actions>
                    </Modal>
                    <Modal open={share} dimmer='blurring' size='large'>
                        <Modal.Header><h1>Share Project</h1></Modal.Header>
                        <Grid columns='equal' style={{ margin: '2em' }}>
                            <Grid.Column >
                                <Button color='facebook' size="massive">
                                    <Icon name='facebook' /> Facebook
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='twitter' size="massive">
                                    <Icon name='twitter' /> Twitter
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='linkedin' size="massive">
                                    <Icon name='linkedin' /> LinkedIn
                                </Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button color='instagram' size="massive">
                                    <Icon name='instagram' /> Instagram
                                </Button>
                            </Grid.Column>
                        </Grid>
                        <Modal.Actions>
                            <Button
                                size="huge"
                                content="Cancel"
                                onClick={() => setShare(false)}
                            />
                        </Modal.Actions>
                    </Modal>
            </Container>
        </>
    );
}

export default Crochet;