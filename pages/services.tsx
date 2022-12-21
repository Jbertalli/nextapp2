import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';

export default function Services() {
    const [serviceList, setServiceList] = useState([{ service: '', answer: '', student: '' }]);
    const [count, setCount] = useState<number>(0);
    // const [showAnswers, setShowAnswers] = useState<boolean>(false);
    // const [showQuestions, setShowQuestions] = useState<boolean>(false);

    // console.log(serviceList[0].service);

    console.log('Full Test Array', serviceList);

    let questionArray = [];

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].service);
        questionArray.push(serviceList[i].service);
    }

    console.log('%c Question Array', 'color: red', questionArray);

    let answerArray = [];

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].answer);
        answerArray.push(serviceList[i].answer);
    }

    console.log('%c Answer Array', 'color: blue', answerArray);

    let studentAnswerArray = [];

    for (let i = 0; i < serviceList.length; i++) {
        // console.log(serviceList[i].student);
        studentAnswerArray.push(serviceList[i].student);
    }

    console.log('%c Student Answer Array', 'color: green', studentAnswerArray);

    let gradeArray = [];

    for (let i = 0; i < serviceList.length; i++) {
        if (serviceList[i].answer === serviceList[i].student) {
            console.log('correct');
        } else {
            console.log('incorrect');
        }
    }
    
    console.log(gradeArray);

    console.log(count);

    const length = serviceList.length;

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

    // console.log(answerArray);
    // console.log(studentAnswerArray);

    const compare = (num1, num2) => {
        let counter = num1.reduce((total, el, index) => el.toLowerCase() === num2[index].toLowerCase() ? total + 1 : total, 0);
        return counter;
    }

    let grade = compare(answerArray, studentAnswerArray);

    console.log(grade);

    const comparePercent = (num1, num2) => {
        let counter = num1.reduce((total, el, index) => el.toLowerCase() === num2[index].toLowerCase() ? total + 1 : total, 0);
        const divide = Math.floor((counter / num1.length) * 100);
        const percent = (divide.toFixed(1));
        return percent;
    }

    let percent = comparePercent(answerArray, studentAnswerArray);

    console.log(percent);

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
                                        // required
                                        placeholder='Question'
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
                                        // required
                                        placeholder='Answer'
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
                                        // required
                                        placeholder='Student Question'
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
                                </div>
                                <div>
                                    {((singleService.answer).toLowerCase() === (singleService.student).toLowerCase()) ? (
                                    <>
                                        <div style={{ fontSize: '30px', fontWeight: '500', color: 'green' }}>
                                            <Icon
                                                name="check"
                                            />
                                            <span>
                                                Correct
                                            </span>  
                                        </div>
                                    </>
                                    ):(
                                    <>
                                        <div style={{ fontSize: '30px', fontWeight: '500', color: 'red' }}>
                                            <Icon
                                                name="plus"
                                                style={{ transform: 'rotate(45deg)' }}
                                            />
                                            <span>
                                                Incorrect
                                            </span>
                                        </div>
                                    </>
                                    )}
                                </div>
                                <Divider />
                                <div>
                                    {serviceList.length !== 1 && (
                                        <Button
                                            color='red'
                                            onClick={() => handleServiceRemove(index)}
                                        >
                                            <span>Remove Question #{index + 1}</span>
                                        </Button>
                                    )}
                                </div>
                                <Divider />
                                <div>
                                    {serviceList.length - 1 === index && (
                                        <Button
                                            color='blue'
                                            onClick={handleAddService}
                                        >
                                        <span>Add a Question</span>
                                        </Button>
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
                <div>
                    <h1>
                        Grade
                    </h1>    
                </div>
                <div
                    style={{
                        transform: 'translate(-60px, 40px)'
                    }}
                >
                    <h1>
                        {grade}/{length}
                    </h1>    
                </div>
                <div>
                    <h1>
                        {percent} %
                    </h1>
                </div>
            </div>
        </>
    )
}
