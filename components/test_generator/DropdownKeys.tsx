import { Divider, Icon, Container } from 'semantic-ui-react';
import styles from '../../styles/Test.module.css';

export default function DropdownKeys({ student, openQuestionKey, setOpenQuestionKey, questionColor, serviceList, openAnswerKey, setOpenAnswerKey, openStudentAnswers, setOpenStudentAnswers }) {
    return (
        <>
            {!student ? (
            <>
                <Divider />
                <div>
                    {!openQuestionKey ? (
                    <>
                        <div
                            style={{ 
                                transform: 'translateY(-8px)',
                                cursor: 'pointer' 
                            }}
                            onClick={() => {setOpenQuestionKey(true)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    color: `${questionColor}`,
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '20px', 
                                    fontWeight: '700',
                                    color: `${questionColor}`
                                }}
                            >
                                Open Question Key
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(-1vw, -5px)'
                            }}
                            className={styles.open}
                            onClick={() => setOpenQuestionKey(false)}
                        >
                            <div
                                style={{
                                    transform: 'scale(2)',
                                    zIndex: '10'
                                }}
                            >
                                x
                            </div>
                        </Container>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {!student ? (
                            <>
                                <div>
                                    <h1
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Question Key
                                    </h1>
                                    <h2
                                        style={{
                                            transform: 'translate(-20px)'
                                        }}
                                    >
                                        {serviceList &&
                                            serviceList.map((singleService, index) => (
                                                <ul key={index}>
                                                    {singleService.service && <div>{index + 1}.{' '}{singleService.service}</div>}
                                                </ul>
                                            ))
                                        }
                                    </h2>
                                </div>
                            </>
                            ): null}
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div>
                    {!openAnswerKey ? (
                    <>
                        <div
                            style={{ 
                                transform: 'translateY(-8px)',
                                cursor: 'pointer' 
                            }}
                            onClick={() => {setOpenAnswerKey(true)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    color: `${questionColor}`,
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '20px', 
                                    fontWeight: '700',
                                    color: `${questionColor}`
                                }}
                            >
                                Open Answer Key
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(-1vw, -5px)'
                            }}
                            className={styles.open}
                            onClick={() => setOpenAnswerKey(false)}
                        >
                            <div
                                style={{
                                    transform: 'scale(2)',
                                    zIndex: '10'
                                }}
                            >
                                x
                            </div>
                        </Container>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {!student ? (
                            <>
                                <div
                                    style={{
                                        color: 'red'
                                    }}
                                >
                                    <h1
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Answer Key
                                    </h1>
                                    <h2
                                        style={{
                                            transform: 'translate(-20px)'
                                        }}
                                    >
                                        {serviceList &&
                                            serviceList.map((singleService, index) => (
                                                <ul key={index}>
                                                    {singleService.answer && <div>{index + 1}.{' '}{singleService.answer}</div>}
                                                </ul>
                                            ))
                                        }
                                    </h2>
                                </div>
                            </>
                            ): null}
                        </div>
                    </>
                    )}
                </div>
                <Divider />
                <div>
                    {!openStudentAnswers ? (
                    <>
                        <div
                            style={{ 
                                transform: 'translateY(-8px)',
                                cursor: 'pointer' 
                            }}
                            onClick={() => {setOpenStudentAnswers(true)}}
                        >
                            <div 
                                style={{ 
                                    marginLeft: '-25px',
                                    display: 'flex',
                                    color: `${questionColor}`,
                                    transform: 'translateY(100%) scale(0.8)'
                                }}
                            >
                                <Icon
                                    name='chevron down'
                                />
                            </div>
                            <div
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                    fontSize: '20px', 
                                    fontWeight: '700',
                                    color: `${questionColor}`
                                }}
                            >
                                Open Student Answers
                            </div>
                        </div>
                    </>
                    ):(
                    <>
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(-1vw, -5px)'
                            }}
                            className={styles.open}
                            onClick={() => setOpenStudentAnswers(false)}
                        >
                            <div
                                style={{
                                    transform: 'scale(2)',
                                    zIndex: '10'
                                }}
                            >
                                x
                            </div>
                        </Container>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {!student ? (
                            <>
                                <div>
                                    <h1
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Student Answers
                                    </h1>
                                    <h2
                                        style={{
                                            transform: 'translate(-20px)'
                                        }}
                                    >
                                        {serviceList &&
                                            serviceList.map((singleService, index) => (
                                                <ul key={index}>
                                                    {singleService.student && <div>{index + 1}.{' '}{singleService.student}</div>}
                                                </ul>
                                            ))
                                        }
                                    </h2>
                                </div>
                            </>
                            ): null}
                        </div>
                    </>
                    )}
                </div>
            </>
            ): null}
        </>
    );
}
