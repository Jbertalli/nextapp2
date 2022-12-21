import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon, Card } from 'semantic-ui-react';

export default function Services() {
    const [serviceList, setServiceList] = useState([{ service: '', answer: '', student: '' }]);
    const [letterGrade, setLetterGrade] = useState<any>(null);
    const [color, setColor] = useState<string>('');

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

    let percent = Number(comparePercent(answerArray, studentAnswerArray));

    console.log(percent);

    useEffect(() => {
        switch(true) {
            case (percent >= 96.67 && percent <= 100.0):
              setLetterGrade('A+');
              break;
            case (percent >= 93.33 && percent <= 96.67):
              setLetterGrade('A');
              break;
            case (percent >= 90.0 && percent <= 93.33):
              setLetterGrade('A-');
              break;
            case (percent >= 86.67 && percent <= 90.0):
              setLetterGrade('B+');
              break;
            case (percent >= 83.33 && percent <= 86.67):
              setLetterGrade('B');
              break;
            case (percent >= 80.0 && percent <= 83.33):
              setLetterGrade('B-');
              break;
            case (percent >= 76.67 && percent <= 80.0):
              setLetterGrade('C+');
              break;
            case (percent >= 73.33 && percent <= 76.67):
              setLetterGrade('C');
              break;
            case (percent >= 70.0 && percent <= 73.33):
              setLetterGrade('C-');
              break;
            case (percent >= 60.0 && percent <= 70.0):
              setLetterGrade('D');
              break;
            case (percent >= 0.0 && percent <= 60.0):
              setLetterGrade('F');
              break;
            default:
              null;
        }
    }, [percent])

    useEffect(() => {
        switch(true) {
            case (letterGrade == 'A+' || letterGrade == 'A' || letterGrade == 'A-'):
              setColor('darkgreen');
              break;
            case (letterGrade == 'B+' || letterGrade == 'B' || letterGrade == 'B-'):
              setColor('green');
              break;
            case (letterGrade == 'C+' || letterGrade == 'C' || letterGrade == 'C-'):
              setColor('orange');
              break;
            case (letterGrade == 'D'):
              setColor('darkred');
              break;
            case (letterGrade == 'F'):
              setColor('red');
              break;
            default:
               null;
        }
    }, [letterGrade])

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
                    {/* <div>
                        <h2>Answer Key</h2>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                                <ul key={index}>
                                    {singleService.service && <li>{singleService.service}</li>}
                                </ul>
                            ))
                        }
                    </div> */}
                    {/* <div>
                        <h2>Question Key</h2>
                        {serviceList &&
                            serviceList.map((singleService, index) => (
                                <ul key={index}>
                                    {singleService.answer && <li>{singleService.answer}</li>}
                                </ul>
                            ))
                        }
                    </div> */}
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
                <Card
                    style={{
                        height: '300px'
                    }}
                >
                    <div
                        style={{
                            transform: 'translateY(20%)'
                        }}
                    >
                        <h2 
                            style={{ 
                                marginBottom: '5px'
                            }}
                        >
                            {(percent) ? (
                            <>
                                <h1 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'center'
                                    }}
                                >
                                    Grade Report
                                </h1>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    Grade: {grade}/{length}
                                </div>
                            </>
                            ): null}
                        </h2>
                        <h2>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                {percent} %
                            </div>
                        </h2>
                        <h1 
                            style={{ 
                                color: `${color}`, 
                                paddingBottom: '30px' ,
                                display: 'flex',
                                justifyContent: 'center'
                                }}
                            >
                            {(length > 0) ? (
                            <>
                                {letterGrade}
                            </>
                            ): null}
                        </h1>
                    </div>
                </Card>
                <Card
                    style={{
                        height: '300px'
                    }}
                >
                    <div
                        style={{
                            transform: 'translateY(45.5px)'
                        }}
                    >
                        <div>
                            <h1
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Answer Key
                            </h1>
                            <h2>
                                {serviceList &&
                                    serviceList.map((singleService, index) => (
                                        <ul key={index}>
                                            {singleService.service && <li>{singleService.service}</li>}
                                        </ul>
                                    ))
                                }
                            </h2>
                        </div>
                    </div>
                </Card>
                <Card
                    style={{
                        height: '300px'
                    }}
                >
                    <div
                        style={{
                            transform: 'translateY(45.5px)'
                        }}
                    >
                        <div>
                            <h1
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                Question Key
                            </h1>
                            <h2>
                                {serviceList &&
                                    serviceList.map((singleService, index) => (
                                        <ul key={index}>
                                            {singleService.answer && <li>{singleService.answer}</li>}
                                        </ul>
                                    ))
                                }
                            </h2>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}
