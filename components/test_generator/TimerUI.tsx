import { Button } from 'semantic-ui-react';

export default function TimerUI({ timeClick, timed, minute, setMinute, second, setSecond, setTimeClick, questionColor }) {
    return (
        <>
            <div>
                {timeClick ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            transform: 'translateY(-20px)'
                        }}
                    >
                        {!timed ? (
                        <>
                            <div
                                style={{
                                    transform: 'translateY(-10px)'
                                }}
                            >
                                <h2
                                    style={{
                                        marginBottom: '5px',
                                        marginTop: '40px'
                                    }}
                                >
                                    Minutes&nbsp;&nbsp;&nbsp;
                                </h2>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: 'black'
                                    }}
                                >
                                    <input
                                        placeholder='Minutes'
                                        type='number'
                                        min='0'
                                        max='59'
                                        value={minute}
                                        onChange={(e) => setMinute(e.target.value)}
                                        style={{
                                            padding: '9px 14px 9px 14px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            cursor: 'text',
                                            width: '80px',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(34, 36, 38. 0.15)',
                                            position: 'relative',
                                            zIndex: '100',
                                        }}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    transform: 'translateY(-10px)'
                                }}
                            >
                                <h2
                                    style={{
                                        marginBottom: '5px',
                                        marginTop: '40px'
                                    }}
                                >
                                    Seconds
                                </h2>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: 'black'
                                    }}
                                >
                                    <input
                                        placeholder='Seconds'
                                        type='number'
                                        min='0'
                                        max='59'
                                        value={second}
                                        onChange={(e) => setSecond(e.target.value)}
                                        style={{
                                            padding: '9px 14px 9px 14px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            cursor: 'text',
                                            width: '80px',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(34, 36, 38. 0.15)',
                                            position: 'relative',
                                            zIndex: '100',
                                        }}
                                    />
                                </div>
                            </div>
                        </>
                        ): null}
                    </div>
                </>
                ):(
                <>
                    {!timed ? (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '0px',
                                marginBottom: '30px'
                            }}
                        >
                            <Button
                                onClick={() => setTimeClick(true)}
                                style={{
                                    border: `2px solid ${questionColor}`,
                                    background: 'transparent',
                                    color: `${questionColor}`
                                }}
                            >
                                Set Timer (optional)
                            </Button>
                        </div>
                    </>
                    ): null}
                </>
                )}
            </div>
        </>
    );
}
