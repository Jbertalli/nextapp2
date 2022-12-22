import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon, Card, Container } from 'semantic-ui-react';

const LOCAL_STORAGE_KEY = 'list';

export default function Services() {
    const [serviceList, setServiceList] = useState([{ service: '', answer: '', student: '' }]);
    const [letterGrade, setLetterGrade] = useState<any>(null);
    const [color, setColor] = useState<string>('');
    const [student, setStudent] = useState<boolean>(false);
    const [finish, setFinish] = useState<boolean>(false);
    const [save, setSave] = useState<boolean>(false);
    const [openAnswerKey, setOpenAnswerKey] = useState<boolean>(false);
    const [openQuestionKey, setOpenQuestionKey] = useState<boolean>(false);
    const [openStudentAnswers, setOpenStudentAnswers] = useState<boolean>(false);
    // const [access, setAccess] = useState<boolean>(false);
    // const [password, setPassword] = useState<string>('');
    // const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedList) setServiceList(storedList)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, 
        JSON.stringify(serviceList))
    }, [serviceList])

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

    // console.log(grade);

    const comparePercent = (num1, num2) => {
        let counter = num1.reduce((total, el, index) => el.toLowerCase() === num2[index].toLowerCase() ? total + 1 : total, 0);
        const divide = Math.floor((counter / num1.length) * 100);
        const percent = (divide.toFixed(1));
        return percent;
    }

    let percent = Number(comparePercent(answerArray, studentAnswerArray));

    // console.log(percent);

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
            <Head>
                <title>Test Generator</title>
                <meta name='description' content='test' />
            </Head>
            {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    transform: 'translateY(20px)'
                }}
            >
                {access ? (
                <>
                    <Button
                        color='blue'
                        onClick={() => setAccess(false)}
                    >
                        Set Admin Access Code
                    </Button>
                </>
                ):(
                <>
                    <div>
                        <input
                            placeholder='access code'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    </div>
                    <Button
                        color='red'
                        onClick={() => setAccess(true)}
                    >
                        x
                    </Button>
                    <Button
                        color='blue'
                    >
                        Save
                    </Button>
                </>
                )}
            </div> */}
            <Container
                style={{ 
                    margin: '3em'
                }}
            >
                <div
                    style={{
                        transform: 'translateY(60px)',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '50px'
                    }}
                >
                    {student ? (
                    <>
                        <h1>
                            Student View
                        </h1>
                        <div>
                            <Button
                                onClick={() => setStudent(false)}
                            >
                                Switch to Admin
                            </Button>
                        </div>
                    </>
                    ):(
                    <>
                        <h1>
                            Admin View
                        </h1>
                        <div>
                            <Button
                                onClick={() => setStudent(true)}
                            >
                                Switch to Student&nbsp;&nbsp;&nbsp;
                                <span>
                                    <Icon
                                        name='pencil'
                                    />
                                </span>
                            </Button>
                        </div>
                    </>
                    )}
                    {!finish ? (
                    <>
                        <div>
                            <Button
                                color='blue'
                                onClick={() => setFinish(true)}
                            >
                                Finish Test
                            </Button>
                        </div>
                    </>
                    ):(
                        <div>
                            <Button
                                color='red'
                                onClick={() => setFinish(false)}                        
                            >
                                Edit Test
                            </Button>
                        </div>
                    )}
                </div>
                {save ? (
                <>
                    <Button
                        color='red'
                        onClick={() => setSave(false)}
                        style={{
                            transform: 'translate(50vw, 5vh)'
                        }}
                    >
                        Edit Questions and Answers
                    </Button>
                </>
                ):(
                <>
                    <Button
                        color='green'
                        onClick={() => setSave(true)}
                        style={{
                            transform: 'translate(50vw, -40px)'
                        }}
                    >
                        Save Questions and Answers
                    </Button>
                </>
                )}
                <Divider />
                <div>
                    {!openQuestionKey ? (
                    <>
                        {/* <Divider /> */}
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
                                    color: '#125CA1',
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
                                    color: '#125CA1'
                                }}
                            >
                                Open Question Key
                            </div>
                        </div>
                        {/* <Divider /> */}
                    </>
                    ):(
                    <>
                        {/* <Divider /> */}
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(0vw, -5px)'
                            }}
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
                        {/* <Divider /> */}
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
                                    color: '#125CA1',
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
                                    color: '#125CA1'
                                }}
                            >
                                Open Answer Key
                            </div>
                        </div>
                        {/* <Divider /> */}
                    </>
                    ):(
                    <>
                        {/* <Divider /> */}
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(0vw, -5px)'
                            }}
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
                                    color: '#125CA1',
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
                                    color: '#125CA1'
                                }}
                            >
                                Open Student Answers
                            </div>
                        </div>
                        {/* <Divider /> */}
                    </>
                    ):(
                    <>
                        {/* <Divider /> */}
                        <Container
                            style={{ 
                                color: 'red',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                cursor: 'pointer',
                                marginRight: '25px',
                                transform: 'translate(0vw, -5px)'
                            }}
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
                        {/* <Divider /> */}
                    </>
                    )}
                </div>
                <Divider />
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
                                        {save ? (
                                        <>
                                            <div
                                                style={{
                                                    fontSize: '25px'
                                                }}
                                            >
                                                {singleService.service}
                                            </div>
                                        </>
                                        ):(
                                        <>
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
                                        </>
                                        )}
                                        {!student ? (
                                        <>
                                            <h2>
                                                Test Answer #{index + 1}
                                            </h2>
                                            {save ? (
                                            <>
                                                <div
                                                    style={{
                                                        fontSize: '25px'
                                                    }}
                                                >
                                                    {singleService.answer}
                                                </div>
                                            </>
                                            ):(
                                            <>
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
                                            </>
                                            )}
                                        </>
                                        ): null}
                                        <div
                                            style={{
                                                display: (singleService.service.length > 0 && singleService.answer.length > 0) ? 'block' : 'none',
                                                marginTop: '20px'
                                            }}
                                        >
                                            <h2>
                                                Student Answer #{index + 1}
                                            </h2>
                                            {finish ? (
                                            <>
                                                <div
                                                    style={{
                                                        fontSize: '25px'
                                                    }}
                                                >
                                                    {singleService.student}
                                                </div>
                                            </>
                                            ):(
                                            <>
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
                                            </>
                                            )}
                                        </div>
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
                    </form>
                    {finish ? (
                    <>
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
                                <div 
                                    style={{ 
                                        marginBottom: '5px'
                                    }}
                                >
                                    <h1 
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Grade Report
                                    </h1>
                                    <h2
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        Grade: {grade}/{length}
                                    </h2>
                                </div>
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
                    </>
                    ): null}
                </div>
            </Container>
        </>
    )
}
