import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Button, Divider, Icon, Card, Container, Modal, Checkbox } from 'semantic-ui-react';
import { useTimer } from 'react-timer-hook';
import emailjs from 'emailjs-com';

const LOCAL_STORAGE_KEY = 'list';
const LOCAL_STORAGE_KEY_NAME = 'Name';
const LOCAL_STORAGE_KEY_CLICK_NAME = 'ClickName';
const LOCAL_STORAGE_KEY_DATE = 'Date';
const LOCAL_STORAGE_KEY_CLICK_DATE = 'ClickDate';
const LOCAL_STORAGE_KEY_TITLE = 'Title';
const LOCAL_STORAGE_KEY_CLICK_TITLE = 'ClickTitle';

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
    const [name, setName] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [nameClicked, setNameClicked] = useState<boolean>(false);
    const [dateClicked, setDateClicked] = useState<boolean>(false);
    const [titleClicked, setTitleClicked] = useState<boolean>(false);
    const [minute, setMinute] = useState<string>('0');
    const [second, setSecond] = useState<string>('0');
    const [timed, setTimed] = useState<boolean>(false);
    const [timeClick, setTimeClick] = useState<boolean>(false);
    const [openEmail, setOpenEmail] = useState<boolean>(false);
    const [userEmail, setUserEmail] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [isTimed, setIsTimed] = useState<boolean>(false);
    const [openNameDate, setOpenNameDate] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [auth, setAuth] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [adminPassword, setAdminPassword] = useState<string>('');
    const [hide, setHide] = useState<string>('password');
    const [show, setShow] = useState<boolean>(false);
    const [clickPassword, setClickPassword] = useState<boolean>(true);
    const [hideAdmin, setHideAdmin] = useState<boolean>(false);

    // List
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedList) setServiceList(storedList)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, 
        JSON.stringify(serviceList))
    }, [serviceList])

    // Name
    useEffect(() => {
        const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME))
        if (storedName) setName(storedName)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NAME, 
        JSON.stringify(name))
    }, [name]);

    // Name Clicked
    useEffect(() => {
        const storedClickedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_NAME))
        if (storedClickedName) setNameClicked(storedClickedName)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_NAME, 
        JSON.stringify(nameClicked))
    }, [nameClicked]);

    // Date
    useEffect(() => {
        const storedDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DATE))
        if (storedDate) setDate(storedDate)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DATE, 
        JSON.stringify(date))
    }, [date]);

    // Date Clicked
    useEffect(() => {
        const storedClickDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_DATE))
        if (storedClickDate) setDateClicked(storedClickDate)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_DATE, 
        JSON.stringify(dateClicked))
    }, [dateClicked]);

    // Title
    useEffect(() => {
        const storedTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TITLE))
        if (storedTitle) setTitle(storedTitle)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TITLE, 
        JSON.stringify(title))
    }, [title]);

    // Title Clicked
    useEffect(() => {
        const storedClickTitle = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_TITLE))
        if (storedClickTitle) setTitleClicked(storedClickTitle)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_TITLE, 
        JSON.stringify(titleClicked))
    }, [titleClicked]);

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
    }, [percent]);

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
    }, [letterGrade]);    

    let secondTime = Number(second);
    console.log(secondTime);

    let minuteTime = Number(minute);
    console.log(minuteTime);

    // let hourTime = Number(hour);
    // console.log(hourTime);

    const time = new Date();
    time.setSeconds(time.getSeconds() + 60);

    let templateParams = {
        user_email: `${userEmail}`,
        name: 'Grade Report',
        score: `Grade: ${grade}/${length}`,
        percent: `${percent}%`,
        letter: `${letterGrade}`,
        to_name: `${name}`
    };

    // console.log(grade);
    // console.log(length);
    // console.log(percent);
    // console.log(letterGrade);
    // console.log(userEmail);
    // console.log('isTimed', isTimed);

    function send() {
        emailjs.send('service_jj71xm9', 'template_7hans9n', templateParams, 'FlrSx29zmJDjwJhtt')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
    }

    function validEmail(email) {
        let regEx = /[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/;
        if(!regEx.test(email)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        } 
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            if ((password.length > 0) && (password === adminPassword)) {
                setAuth(true);
            } else {
                setAuth(false);
            }
        } else {
            console.log('window == undefined');
        }
    }, [count])

    return (
        <>
            <Head>
                <title>Test Generator</title>
                <meta name='description' content='test' />
            </Head>
            <div
                style={{
                    marginRight: '1vw',
                    marginTop: '1vh',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '-50px'
                }}
            >
            {student ? (
            <>
                <Button
                    color='black'
                >
                    Return to Admin Mode
                </Button>
            </>
            ):(
            <>
                <Button
                    color='black'
                    onClick={() => setOpenModal(true)}
                >
                    Test Mode
                </Button> 
            </>
            )}   
            </div>
            <Modal 
                dimmer
                open={openModal}
                style={{
                    width: '50vw',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'center',
                    transform: 'translateY(-50%)'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginRight: '10px',
                        fontSize: '40px',
                        color: 'red',
                        cursor: 'pointer'
                    }}
                    onClick={() => setOpenModal(false)}
                >
                    x
                </div>
                <div>
                    {clickPassword ? (
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '35px',
                                fontWeight: '700',
                                marginBottom: '10px', 
                                marginTop: '3vh'
                            }}
                        >
                            Set Admin Password to Create Test
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <input
                                type={hide}
                                placeholder='Admin Password'
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
                            <Icon
                                name='eye'
                                style={{
                                    transform: 'translate(72px, 14px) scale(1.1)', 
                                    color: '#80808099', 
                                    position: 'absolute', 
                                    zIndex: '100'
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '20px'
                            }}
                        >
                            <Button
                                onClick={() => setClickPassword(false)}
                            >
                                Set Admin Password
                            </Button>
                        </div>
                    </>
                    ):(
                    <>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '35px',
                                fontWeight: '700',
                                marginBottom: '10px', 
                                marginTop: '3vh'
                            }}
                        >
                            Login
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <input
                                type={hide}
                                placeholder='Admin Password'
                                value={adminPassword}
                                onChange={(e) => setAdminPassword(e.target.value)}
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
                            <Icon
                                name='eye'
                                style={{
                                    transform: 'translate(72px, 14px) scale(1.1)', 
                                    color: '#80808099', 
                                    position: 'absolute', 
                                    zIndex: '100'
                                }}
                            />
                        </div>
                        <Divider />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Button
                                onClick={() => setCount(count + 1)}
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={() => {setClickPassword(true), setPassword(''), setAdminPassword(''), setAuth(false)}}
                            >
                                Reset Admin Password
                            </Button>
                        </div>
                    </>
                    )}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        {show ? (
                        <>
                            <Checkbox
                                color='red'
                                onClick={() => {setHide('password'), setShow(false)}}
                                label={
                                    <label>
                                        Hide Password
                                    </label>
                                }
                            />
                        </>
                        ):(
                        <>
                            <Checkbox
                                color='blue'
                                onClick={() => {setHide('text'), setShow(true)}}
                                label={
                                    <label>
                                        Show Password
                                    </label>
                                }
                            />
                        </>
                        )}
                    </div>
                    <Divider />
                    <Button
                        onClick={() => {setStudent(true), setHideAdmin(true), setSave(true), setOpenModal(false)}}
                    >
                        Take Test
                    </Button>
                </div>
            </Modal>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '65px',
                    marginBottom: '5vh',
                    marginTop: '8vh',
                    fontFamily: 'sans-serif',
                    fontWeight: '300'
                }}
            >
                Test Generator
            </div>
            <Container
                style={{ 
                    margin: '3em'
                }}
            >
                <Divider />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {student ? (
                            <>
                                <h1>
                                    Student View
                                </h1>
                            </>
                            ):(
                            <>
                                <h1>
                                    Admin View
                                </h1>
                            </>
                            )}
                        </div>
                        <div
                            style={{
                                width: '100%'
                            }}
                        >
                            <Divider />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            {student ? (
                            <>
                                <div>
                                    <Button
                                        disabled={hideAdmin}
                                        onClick={() => {setStudent(false), setFinish(false), setIsTimed(false), setOpenAnswerKey(false), setOpenQuestionKey(false), setOpenStudentAnswers(false), setEdit(false), setSave(false)}}
                                    >
                                        Switch to Admin
                                    </Button>
                                </div>
                            </>
                            ):(
                            <>
                                <div>
                                    <Button
                                        onClick={() => {setStudent(true), setFinish(false), setSave(true), setOpenEmail(false), setOpenNameDate(false)}}
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
                        </div>
                    </div>
                    <Divider />
                </div>
                {student ? (
                <>
                    {!isTimed ? (
                    <>
                        <Divider />
                        {!finish ? (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    color='blue'
                                    onClick={() => setFinish(true)}
                                >
                                    Submit Test
                                </Button>
                            </div>
                        </>
                        ):(
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    color='red'
                                    onClick={() => setFinish(false)}                        
                                >
                                    Edit Test
                                </Button>
                            </div>
                        </>
                        )}
                    </>
                    ): null}
                </>
                ): null}
                {student ? (
                <>
                    <Divider />
                    <div>
                        {!openEmail ? (
                        <>
                            <div
                                style={{ 
                                    transform: 'translateY(-8px)',
                                    cursor: 'pointer' 
                                }}
                                onClick={() => {setOpenEmail(true)}}
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
                                    Email Grade
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
                                    onClick={() => setOpenEmail(false)}
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
                                    justifyContent: 'center',
                                    marginTop: '0px'
                                }}
                            >
                                <div>
                                    <h2>
                                        Email Recipient
                                    </h2>
                                    <div>
                                        <input
                                            disabled={finish ? false : true}
                                            type='email'
                                            name='user_email'
                                            placeholder='email address'
                                            style={{ 
                                                padding: '9px 14px 9px 14px',
                                                fontSize: '14px',
                                                fontWeight: '400',
                                                cursor: 'text',
                                                width: '178.5px',
                                                borderRadius: '4px',
                                                border: '1px solid rgba(34, 36, 38. 0.15)'
                                            }}
                                            value={userEmail}
                                            onChange={(e) => {setUserEmail(e.target.value), validEmail(userEmail)}}
                                        />
                                    </div>
                                    {(userEmail.length > 0) && !isValid ? (
                                    <>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                transform: 'translate(-5px, 50%)',
                                                color: 'red',
                                                fontSize: '20px',
                                                fontWeight: '500'
                                            }}
                                        >
                                            Error: Email is invalid!
                                        </div>
                                    </>
                                    ): null}
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '25px'
                                        }}
                                    >
                                        <Button
                                            color='green'
                                            disabled={!isValid} 
                                            onClick={send}
                                        >
                                            Email Grade
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </>
                        )}
                    </div>
                    <Divider />
                    <div>
                        {!openNameDate ? (
                        <>
                            <div
                                style={{ 
                                    transform: 'translateY(-8px)',
                                    cursor: 'pointer' 
                                }}
                                onClick={() => {setOpenNameDate(true)}}
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
                                    Open Name and Date
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
                                    onClick={() => setOpenNameDate(false)}
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
                            {!nameClicked ? (
                            <>
                                <div>
                                    <h2 
                                        style={{ 
                                            marginBottom: '5px' 
                                        }}
                                    >
                                        Name
                                    </h2>
                                    <input 
                                        placeholder="Name"
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
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {(name.length > 0) ? (
                                    <>
                                        <span 
                                            style={{ 
                                                display: 'flex', 
                                                justifyContent: 'flex-end', 
                                                transform: 'translate(40px, -44px) scale(0.8)' 
                                            }}
                                        >
                                            <Button 
                                                color="blue"
                                                onClick= {() => setNameClicked(true)}
                                            >
                                                Save
                                            </Button>
                                        </span>
                                    </>
                                    ): null}
                                </div>
                            </>
                            ):(
                            <>
                                <div style={{ transform: 'translateY(25px)' }}>
                                    <span style={{ fontSize: '24px' }}>
                                        <span style={{ fontWeight: '500' }}>
                                            Name:{' '} 
                                        </span>
                                        <span style={{ fontWeight: '300' }}>
                                            {name}
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
                                            color="blue"
                                            onClick={() => {setName(''), setNameClicked(false)}}
                                        >
                                            Edit Name
                                        </Button>
                                    </span>
                                </div>
                            </>
                            )}
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
                                            color="blue"
                                            onClick={() => {setDate(''), setDateClicked(false)}}
                                        >
                                            Edit Date
                                        </Button>
                                    </span>
                                </div>
                            </>
                            )}
                        </>
                        )}
                    </div>
                </>
                ): null}
                {!student ? (
                <>
                    <div>
                        <Divider />
                        {!edit ? (
                        <>
                            <div
                                style={{ 
                                    transform: 'translateY(-8px)',
                                    cursor: 'pointer' 
                                }}
                                onClick={() => {setEdit(true)}}
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
                                    Edit Test
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
                                    transform: 'translate(-1vw, -10px)',
                                    position: 'absolute'
                                }}
                                    onClick={() => setEdit(false)}
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
                                {save ? (
                                <>
                                    <Button
                                        color='red'
                                        onClick={() => setSave(false)}
                                    >
                                        Edit Questions and Answers
                                    </Button>
                                </>
                                ):(
                                <>
                                    <Button
                                        color='green'
                                        onClick={() => setSave(true)}
                                    >
                                        Save Questions and Answers
                                    </Button>
                                </>
                                )}
                            </div>
                            <div>
                                {serviceList.length > 1 ? (
                                <>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            transform: 'translateY(20px)'
                                        }}
                                    >
                                        <Button
                                            color='red'
                                            onClick={() => {setServiceList([{ service: '', answer: '', student: '' }]), setOpenAnswerKey(false), setOpenQuestionKey(false), setOpenStudentAnswers(false), setSave(false), setName(''), setDate(''), setTitle(''), setNameClicked(false), setNameClicked(false), setDateClicked(false), setTitleClicked(false), setSecond('0'), setTimed(false), setTimeClick(false), setOpenEmail(false), setUserEmail(''), setFinish(false)}}
                                        >
                                            Clear All Questions
                                        </Button>
                                    </div>
                                </>
                                ): null}
                            </div>
                            <div>
                                {timeClick ? (
                                <>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center'
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
                                                        justifyContent: 'center'
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
                                                        justifyContent: 'center'
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
                                            <Container
                                                style={{ 
                                                    color: 'red',
                                                    display: 'flex',
                                                    justifyContent: 'flex-end',
                                                    cursor: 'pointer',
                                                    marginRight: '25px',
                                                    transform: 'translate(-1vw, 40px)',
                                                    position: 'absolute'
                                                }}
                                                    onClick={() => {setTimeClick(false), setIsTimed(false)}}
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
                                        </>
                                        ): null}
                                    </div>
                                </>
                                ):(
                                <>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '40px',
                                            marginBottom: '0px'
                                        }}
                                    >
                                        <Button
                                            color='blue'
                                            onClick={() => setTimeClick(true)}
                                        >
                                            Set Timer (optional)
                                        </Button>
                                    </div>
                                </>
                                )}
                            </div>
                        </>
                        )}
                    </div>
                </>
                ): null}
                <div>
                    <MyTimer isTimed={isTimed} setIsTimed={setIsTimed} setTimed={setTimed} timed={timed} student={student} finish={finish} setFinish={setFinish} secondTime={secondTime} minuteTime={minuteTime} expiryTimestamp={time} timeClick={timeClick} edit={edit} />
                </div>
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
                {!finish ? (
                <>
                    <Divider />   
                </>
                ): null}
                {!student ? (
                <>
                    <div
                        style={{
                            transform: 'translate(-13px)'
                        }}
                    >
                        {!titleClicked ? (
                        <>
                            <div>
                                <h2 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'center', 
                                        marginBottom: '5px' 
                                    }}
                                >
                                    Assignment Title
                                </h2>
                                <div 
                                    style={{ 
                                        display: 'flex', 
                                        justifyContent: 'center' 
                                    }}
                                >
                                    <input 
                                        placeholder="Title"
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
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                {(title.length > 0) ? (
                                <>
                                    <span 
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'flex-end', 
                                            transform: 'translate(40px, -40px) scale(0.8)'
                                        }}
                                    >
                                        <Button 
                                            color="blue"
                                            onClick={() => setTitleClicked(true)}
                                            style={{
                                                position: 'absolute'
                                            }}
                                        >
                                            Save
                                        </Button>
                                    </span>
                                </>
                                ): null}
                            </div>
                            <Divider />
                        </>
                        ):(
                        <>
                            <div 
                                style={{ 
                                    transform: 'translateY(20px)' 
                                }}
                            >
                                <span style={{ fontSize: '45px' }}>
                                    <span 
                                        style={{ 
                                            fontWeight: '500', 
                                            display: 'flex', 
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <b>
                                            {title}
                                        </b>
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
                                        color="blue"
                                        onClick={() => {setTitle(''), setTitleClicked(false)}}
                                    >
                                        Edit Title
                                    </Button>
                                </span>
                            </div>
                        </>
                        )}
                    </div>
                </>
                ):(
                <>
                    <span 
                        style={{ 
                            fontSize: '45px',
                            display: (title.length > 0) ? 'block' : 'none'
                        }}
                    >
                        <span 
                            style={{ 
                                fontWeight: '500', 
                                display: 'flex', 
                                justifyContent: 'center',
                                transform: 'translate(-13px)',
                                marginTop: '40px',
                                marginBottom: '20px'
                            }}
                        >
                            <b>
                                {title}
                            </b>
                        </span>
                    </span>
                </>
                )}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        transform: 'translateY(1em)'
                    }}
                >
                    <form autoComplete='off'>
                        <div>
                            {serviceList.map((singleService, index) => (
                                <div key={index}>
                                    <div>
                                        <h2>
                                            Question #{index + 1}
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
                                                Answer #{index + 1}
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
                                        {student ? (
                                        <>
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
                                        </>
                                        ): null}
                                        <Divider />
                                    </div>
                                    {(singleService.student && singleService.student.length > 0) ? (
                                    <>
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
                                    </>
                                    ): null}
                                    <Divider />
                                    {!student ? (
                                    <>
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
                                        {serviceList.length > 1 ? (
                                            <Divider />
                                        ): null}
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
                                    </>
                                    ): null}
                                </div>
                            ))}
                        </div>
                    </form>
                    {student ? (
                    <>
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
                                            {percent}%
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
                    </>
                    ): null}
                </div>
            </Container>
        </>
    )
}

function MyTimer({ expiryTimestamp, secondTime, minuteTime, finish, setFinish, student, timed, setTimed, timeClick, edit, isTimed, setIsTimed }) {
    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {console.warn('onExpire called'), setFinish(true)} });

    // console.log(minutes);
    // console.log(seconds);

    // let value = secondTime;
    // console.log(typeof value);

    const time = new Date();
    time.setSeconds(time.getSeconds() + secondTime);
    time.setMinutes(time.getMinutes() + minuteTime);

    // console.log('isRunning', isRunning);

    return (
        <div 
            style={{
                textAlign: 'center',
                transform: 'translateY(50px)'
            }}
        >
            {!student ? (
            <>
                {timed ? (
                <>
                    {edit ? (
                    <>
                        <div 
                            style={{
                                fontSize: '100px',
                                marginTop: '15px'
                            }}
                        >
                            {/* <span>{days}</span>:<span>{hours}</span>:<span>{secondTime}</span>:<span>{seconds}</span> */}
                            <span>{minutes}</span>:<span>{seconds}</span>
                        </div>
                        <Button
                            onClick={() => {setTimed(false), setIsTimed(false)}}
                            style={{
                                marginTop: '40px',
                                marginBottom: '55px'
                            }}
                        >
                            Reset Time Limit
                        </Button>
                    </>
                    ): null}
                </>
                ):(
                <>
                    {timeClick ? (
                    <>
                        <div
                            style={{
                                marginBottom: '0px',
                                transform: 'translateY(-50px)'
                            }}
                        >
                            <div
                                onClick={pause}
                            >
                                <Button 
                                    color='blue'
                                    onClick={() => {setTimed(true), restart(time), setIsTimed(true)}}
                                >
                                    Set Time Limit
                                </Button>
                            </div>
                            {/* <button onClick={pause}>
                                Pause
                            </button>
                            <button onClick={resume}>
                                Resume
                            </button>
                            <button onClick={() => {
                                const time = new Date();
                                time.setSeconds(time.getSeconds() + secondTime);
                                restart(time);
                            }}>
                                Restart
                            </button> */}
                        </div>
                    </>
                    ): null}
                </>
                )}
            </>
            ):(
            <>
                {finish ? (
                <>
                    <div
                        style={{
                            transform: 'translateY(-49px)'
                        }}
                    >
                        <Divider />    
                    </div>
                </>
                ): null}
                {isTimed ? (
                <>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: '100'
                        }}
                    >
                        {/* <div
                            style={{
                                position: 'absolute'
                            }}
                        >
                            {seconds}
                        </div> */}
                        {finish ? (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'translateY(-45px)'
                                }}
                            >
                                <Button
                                    color='red'
                                    onClick={() => {setFinish(false), restart(time)}}                        
                                >
                                    Restart Test
                                </Button>
                            </div>
                        </>
                        ):(
                        <>
                            <div>
                                <Button
                                    color='blue'
                                    style={{
                                        transform: 'translateY(-10px)'
                                    }}
                                    disabled={isRunning}
                                    onClick={resume}
                                >
                                    Start Test
                                </Button>
                            </div>
                        </>
                        )}
                    </div>
                </>
                ): null}
                {isTimed ? (
                <>
                    {finish ? (
                    <>
                        <h2
                            style={{
                                transform: 'translateY(-50px)'
                            }}
                        >
                            Test Completed
                        </h2>
                    </>
                    ):(
                    <>
                        <div 
                            style={{
                                fontSize: '100px',
                                marginBottom: '-105px',
                                transform: 'translateY(42px)'
                            }}
                        >
                            <span>{minutes}</span>:<span>{seconds}</span>
                        </div>
                        {isRunning ? (
                        <>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'translateY(190px)'
                                }}
                            >
                                <h3
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'absolute'
                                    }}
                                >
                                    Test in progress...
                                </h3>
                            </div>
                        </>
                        ): null}
                    </>
                    )}
                </>
                ): null}
            </>
            )}
            {student ? (
            <>
                {isTimed ? (
                <>
                    {!finish ? (
                    <>
                        <div
                            style={{
                                marginBottom: '230px'
                            }}
                        >
                            <Divider />
                        </div>
                    </>
                    ): null}
                </>
                ): null}
            </>
            ): null}
        </div>
    );
}
