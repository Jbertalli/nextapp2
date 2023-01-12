import { Button, Icon } from 'semantic-ui-react';

export default function NightMode({ night, setNight, setBackground, setTextColor, setQuestionColor }) {
    return (
        <>
            {!night ? (
            <>
                <Button
                    onClick={() => {setNight(true), setBackground('#202020'), setTextColor('#f2f2f2'), setQuestionColor('#f2f2f2')}}
                    style={{
                        position: 'absolute',
                        marginTop: '20px',
                        marginLeft: '20px',
                        background: 'black',
                        color: 'white'
                    }}
                >
                    <Icon
                        name='moon'
                    />
                    Night Mode
                </Button>
            </>
            ):(
            <>
                <Button
                    onClick={() => {setNight(false), setBackground('white'), setTextColor(''), setQuestionColor('#125CA1')}}
                    style={{
                        position: 'absolute',
                        marginTop: '20px',
                        marginLeft: '20px',
                        background: 'white',
                        color: 'black'
                    }}
                >
                    <Icon
                        name='sun'    
                    />
                    Day Mode
                </Button>
            </>
            )}
        </>
    );
}
