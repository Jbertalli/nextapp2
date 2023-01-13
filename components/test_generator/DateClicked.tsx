import { Button } from 'semantic-ui-react';

export default function DateClicked({ dateClicked, setDate, setDateClicked, questionColor, date }) {
    return (
        <>
            {!dateClicked ? (
            <>
                <div>
                    <h2 
                        style={{ 
                            marginBottom: '5px', 
                            marginTop: '20px' 
                        }}
                    >
                        Date
                    </h2>
                    <div
                        style={{
                            color: 'black'
                        }}
                    >
                        <input 
                            type="date"
                            placeholder="Date"
                            style={{ 
                                padding: '9px 14px 9px 14px',
                                fontSize: '14px',
                                fontWeight: '400',
                                cursor: 'text',
                                width: '178.5px',
                                borderRadius: '4px',
                                border: '1px solid rgba(34, 36, 38. 0.15)',
                                position: 'relative',
                                zIndex: '100',
                                marginBottom: '10px'
                            }}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    {(date.length > 0) ? (
                    <>
                        <span 
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'flex-end', 
                                transform: 'translate(40px, -57px) scale(0.8)' 
                            }}
                        >
                            <Button 
                                color="blue"
                                onClick={() => setDateClicked(true)}
                                style={{
                                    border: `2px solid ${questionColor}`,
                                    background: 'transparent',
                                    color: `${questionColor}`
                                }}
                            >
                                Save
                            </Button>
                        </span>
                    </>
                    ):null}
                </div>
            </>
            ):(
            <>
                <div style={{ transform: 'translateY(20px)' }}>
                    <span style={{ fontSize: '24px' }}>
                        <span style={{ fontWeight: '500' }}>
                            Date:{' '}
                        </span>
                        <span style={{ fontWeight: '300' }}>
                            {date}
                        </span>
                    </span>
                    <span 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'flex-end', 
                            transform: 'translate(40px, -32px) scale(0.8)' 
                        }}
                    >
                        <Button 
                            onClick={() => {setDate(''), setDateClicked(false)}}
                            style={{
                                border: `2px solid ${questionColor}`,
                                background: 'transparent',
                                color: `${questionColor}`
                            }}
                        >
                            Edit Date
                        </Button>
                    </span>
                </div>
            </>
            )}
        </>
    );
}
