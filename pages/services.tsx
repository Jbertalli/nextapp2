import React, { useState } from 'react';
import { Button, Divider } from 'semantic-ui-react';

export default function Services() {
    const [serviceList, setServiceList] = useState([{ service: '', answer: '', student: '' }]);
    const [showAnswers, setShowAnswers] = useState<boolean>(false);
    const [showQuestions, setShowQuestions] = useState<boolean>(false);

    // console.log(serviceList[0].service);

    console.log('Full Test Array', serviceList);

    let questionArray = []

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].service);
        questionArray.push(serviceList[i].service);
    }

    console.log('%c Question Array', 'color: red', questionArray);

    let answerArray = []

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].answer);
        answerArray.push(serviceList[i].answer);
    }

    console.log('%c Answer Array', 'color: blue', answerArray);

    let studentAnswerArray = []

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].student);
        studentAnswerArray.push(serviceList[i].student);
    }

    console.log('%c Student Answer Array', 'color: green', studentAnswerArray);

    const handleServiceRemove = (index) => {
        const list = [...serviceList];
        list.splice(index, 1);
        setServiceList(list);
    }

    const handleQuestionChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    const handleAnswerChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    const handleStudentAnswerChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serviceList];
        list[index][name] = value;
        setServiceList(list);
    }

    const handleAddService = () => {
        setServiceList([...serviceList, { service: '', answer: '', student: '' }])
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'translateY(10vh)'
                }}
            >
                <form autoComplete='off'>
                    <div>
                        {serviceList.map((singleService, index) => (
                            <div key={index}>
                                <div>
                                    <h2>
                                        Test Question #{index + 1}
                                    </h2>
                                    <input
                                        name='service'
                                        type='text'
                                        id='service'
                                        required
                                        value={singleService.service}
                                        onChange={(e) => handleQuestionChange(e, index)}
                                        style={{
                                            padding: '9px 14px 9px 14px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            cursor: 'text',
                                            width: '178.5px',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(34, 36, 38. 0.15)',
                                            position: 'relative',
                                            zIndex: '100'
                                        }}
                                    />
                                    <h2>
                                        Test Answer #{index + 1}
                                    </h2>
                                    <input
                                        name='answer'
                                        type='text'
                                        id='answer'
                                        required
                                        value={singleService.answer}
                                        onChange={(e) => handleAnswerChange(e, index)}
                                        style={{
                                            padding: '9px 14px 9px 14px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            cursor: 'text',
                                            width: '178.5px',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(34, 36, 38. 0.15)',
                                            position: 'relative',
                                            zIndex: '100'
                                        }}
                                    />
                                    <h2>
                                        Student Answer #{index + 1}
                                    </h2>
                                    <input
                                        name='student'
                                        type='text'
                                        id='student'
                                        required
                                        value={singleService.student}
                                        onChange={(e) => handleStudentAnswerChange(e, index)}
                                        style={{
                                            padding: '9px 14px 9px 14px',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            cursor: 'text',
                                            width: '178.5px',
                                            borderRadius: '4px',
                                            border: '1px solid rgba(34, 36, 38. 0.15)',
                                            position: 'relative',
                                            zIndex: '100'
                                        }}
                                    />
                                    <Divider />
                                    {serviceList.length - 1 === index && (
                                        <button
                                            type='button'
                                            onClick={handleAddService}
                                        >
                                        <span>Add a Question</span>
                                        </button>
                                    )}
                                </div>
                                <div>
                                    {serviceList.length !== 1 && (
                                        <button
                                            type='button'
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* {showAnswers ? (
                    <>
                        <Button
                            color='red'
                            onClick={() => setShowAnswers(false)}
                        >
                            Hide Answer Key
                        </Button> */}
                        <div>
                            <h2>Answer Key</h2>
                            {serviceList &&
                                serviceList.map((singleService, index) => (
                                    <ul key={index}>
                                        {singleService.service && <li>{singleService.service}</li>}
                                    </ul>
                                ))
                            }
                        </div>
                    {/* </>
                    ):(
                    <>
                        <Button
                            color='blue'
                            onClick={() => setShowAnswers(true)}
                        >
                            Show Answer Key
                        </Button>
                    </>
                    )}
                    {showQuestions ? (
                    <>
                        <button
                            onClick={() => setShowQuestions(false)}
                        >
                            Hide Question Key
                        </button> */}
                        <div>
                            <h2>Question Key</h2>
                            {serviceList &&
                                serviceList.map((singleService, index) => (
                                    <ul key={index}>
                                        {singleService.answer && <li>{singleService.answer}</li>}
                                    </ul>
                                ))
                            }
                        </div>
                    {/* </>
                    ):(
                    <>
                        <button
                            onClick={() => setShowQuestions(true)}
                        >
                            Show Question Key
                        </button>
                    </>
                    )} */}
                    <div>
                        <h2>Student Answers</h2>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                                <ul key={index}>
                                    {singleService.student && <li>{singleService.student}</li>}
                                </ul>
                            ))
                        }
                    </div>
                </form>
            </div>
        </>
    )
}
