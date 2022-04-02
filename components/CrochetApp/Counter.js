import React from 'react';
import { Button, Message, Card } from 'semantic-ui-react';

const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [disabled, setDisabled] = React.useState(true);
    console.log(count);

    React.useEffect(() => {
        if (count === 0) {
            setDisabled(true);
        } else {
            setDisabled(false)
        }
    }, [count])

    React.useEffect(() => {
        if (count < 0) {
            setCount(0)
        } else {
            setCount(count)
        }
    }, [count])

    return (
        <Card raised centered fluid stackable>
            <span style={ { paddingTop: '1em' } }>
                <Button onClick={() => setCount(count - 1)} circular size="massive" style={ { width: '10%' } } >
                    <Button.Content
                        content="-"
                        as="h1"
                        style={ { transform: 'translateX(-.7vh)' } }
                    />
                </Button>
                <Button style={ { width: '10%' } } circular size="massive">
                    <Button.Content
                        content={count}
                        as="h1"
                        style={ { transform: 'translateX(-.7vh)' } }
                    />
                </Button>
                <Button onClick={() => setCount(count + 1)} circular size="massive" style={ { width: '10%' } } >
                    <Button.Content 
                        content="+"
                        as="h1"
                        style={ { transform: 'translateX(-.7vh)' } }
                    />
                </Button>
                <Message color="violet">
                    <Button
                        onClick={() => setCount(0)}
                        content="Reset Count"
                        color="violet"
                        value={count}
                        disabled={disabled}
                    />
                </Message>
            </span>
        </Card>
    );
}

export default Counter;