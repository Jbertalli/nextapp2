import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Test.module.css';
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
// const LOCAL_STORAGE_KEY_MINUTE = 'Minute';
// const LOCAL_STORAGE_KEY_SECOND = 'Second'; 
// const LOCAL_STORAGE_KEY_TIMED = 'Timed';
// const LOCAL_STORAGE_KEY_TIME_CLICK = 'TimeClick';
// const LOCAL_STORAGE_KEY_OPEN_EMAIL = 'OpenEmail';
// const LOCAL_STORAGE_KEY_USER_EMAIL = 'UserEmail';
const LOCAL_STORAGE_KEY_IS_VALID = 'IsValid';
// const LOCAL_STORAGE_KEY_EDIT = 'Edit';
// const LOCAL_STORAGE_KEY_IS_TIMED = 'IsTimed';
// const LOCAL_STORAGE_KEY_OPEN_NAME_DATE = 'OpenNameDate';
const LOCAL_STORAGE_KEY_OPEN_MODAL = 'OpenModal';
const LOCAL_STORAGE_KEY_AUTH = 'Auth';
// const LOCAL_STORAGE_KEY_PASSWORD = 'Password';
// const LOCAL_STORAGE_KEY_ADMIN_PASSWORD = 'AdminPassword'; 
// const LOCAL_STORAGE_KEY_HIDE = 'Hide';
// const LOCAL_STORAGE_KEY_SHOW = 'Show';
// const LOCAL_STORAGE_KEY_CLICK_PASSWORD = 'ClickPassword';
// const LOCAL_STORAGE_KEY_HIDE_ADMIN = 'HideAdmin';
const LOCAL_STORAGE_KEY_NEW_MODAL = 'NewModal';
// const LOCAL_STORAGE_KEY_NEW_PASSWORD = 'NewPassword';
// const LOCAL_STORAGE_KEY_SAME = 'Same';
const LOCAL_STORAGE_KEY_LETTER_GRADE = 'LetterGrade';
const LOCAL_STORAGE_KEY_COLOR = 'Color';
const LOCAL_STORAGE_KEY_STUDENT = 'Student';
const LOCAL_STORAGE_KEY_FINISH = 'Finish';
const LOCAL_STORAGE_KEY_SAVE = 'Save';
const LOCAL_STORAGE_KEY_RESET = 'ResetPassword';
const LOCAL_STORAGE_KEY_ADMIN_EMAIL = 'AdminEmail';
const LOCAL_STORAGE_KEY_DEMO = 'Demo';
const LOCAL_STORAGE_KEY_CREATED = 'Created';

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
    const [auth, setAuth] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [adminPassword, setAdminPassword] = useState<string>('');
    const [hide, setHide] = useState<string>('password');
    const [show, setShow] = useState<boolean>(false);
    const [clickPassword, setClickPassword] = useState<boolean>(true);
    const [hideAdmin, setHideAdmin] = useState<boolean>(false);
    const [newModal, setNewModal] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState<string>('');
    const [same, setSame] = useState<boolean>(false);
    const [demo, setDemo] = useState<boolean>(false);
    const [creating, setCreating] = useState<boolean>(false);
    const [created, setCreated] = useState<boolean>(false);
    const [adminEmail, setAdminEmail] = useState<string>('');
    const [resetPassword, setResetPassword] = useState<string>('');
    const [sameReset, setSameReset] = useState<boolean>(false);
    const [isResetting, setIsResetting] = useState<boolean>(false);
    const [saveRipple, setSaveRipple] = useState<boolean>(false);
    const [errorCheck, setErrorCheck] = useState<boolean>(false);

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

    // // Minute
    // useEffect(() => {
    //     const storedMinute = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_MINUTE))
    //     if (storedMinute) setMinute(storedMinute)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_MINUTE, 
    //     JSON.stringify(minute))
    // }, [minute]);

    // // Second
    // useEffect(() => {
    //     const storedSecond = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SECOND))
    //     if (storedSecond) setSecond(storedSecond)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SECOND, 
    //     JSON.stringify(second))
    // }, [second]);

    // // Timed
    // useEffect(() => {
    //     const storedTimed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TIMED))
    //     if (storedTimed) setTimed(storedTimed)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_TIMED, 
    //     JSON.stringify(timed))
    // }, [timed]);

    // // TimeClick
    // useEffect(() => {
    //     const storedTimeClick = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TIME_CLICK))
    //     if (storedTimeClick) setTimeClick(storedTimeClick)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_TIME_CLICK, 
    //     JSON.stringify(timeClick))
    // }, [timeClick]);

    // // OpenEmail
    // useEffect(() => {
    //     const storedOpenEmail = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_EMAIL))
    //     if (storedOpenEmail) setOpenEmail(storedOpenEmail)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_OPEN_EMAIL, 
    //     JSON.stringify(openEmail))
    // }, [openEmail]);

    // // UserEmail
    // useEffect(() => {
    //     const storedUserEmail = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_EMAIL))
    //     if (storedUserEmail) setUserEmail(storedUserEmail)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_USER_EMAIL, 
    //     JSON.stringify(userEmail))
    // }, [userEmail]);

    // IsValid
    useEffect(() => {
        const storedIsValid = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IS_VALID))
        if (storedIsValid) setIsValid(storedIsValid)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IS_VALID, 
        JSON.stringify(isValid))
    }, [isValid]);

    // // Edit
    // useEffect(() => {
    //     const storedEdit = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_EDIT))
    //     if (storedEdit) setEdit(storedEdit)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_EDIT, 
    //     JSON.stringify(edit))
    // }, [edit]);

    // // IsTimed
    // useEffect(() => {
    //     const storedIsTimed = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IS_TIMED))
    //     if (storedIsTimed) setIsTimed(storedIsTimed)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_IS_TIMED, 
    //     JSON.stringify(isTimed))
    // }, [isTimed]);

    // // OpenNameDate
    // useEffect(() => {
    //     const storedOpenNameDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_NAME_DATE))
    //     if (storedOpenNameDate) setOpenNameDate(storedOpenNameDate)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_OPEN_NAME_DATE, 
    //     JSON.stringify(openNameDate))
    // }, [openNameDate]);

    // OpenModal
    useEffect(() => {
        const storedOpenModal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_MODAL))
        if (storedOpenModal) setOpenModal(storedOpenModal)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_OPEN_MODAL, 
        JSON.stringify(openModal))
    }, [openModal]);

    // // Auth
    // useEffect(() => {
    //     const storedAuth = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_AUTH))
    //     if (storedAuth) setAuth(storedAuth)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, 
    //     JSON.stringify(auth))
    // }, [auth]);

    // // Password
    // useEffect(() => {
    //     const storedPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_PASSWORD))
    //     if (storedPassword) setPassword(storedPassword)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_PASSWORD, 
    //     JSON.stringify(password))
    // }, [password]);

    // // AdminPassword
    // useEffect(() => {
    //     const storedAdminPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_PASSWORD))
    //     if (storedAdminPassword) setAdminPassword(storedAdminPassword)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_ADMIN_PASSWORD, 
    //     JSON.stringify(adminPassword))
    // }, [adminPassword]);

    // // Hide
    // useEffect(() => {
    //     const storedHide = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HIDE))
    //     if (storedHide) setHide(storedHide)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_HIDE, 
    //     JSON.stringify(hide))
    // }, [hide]);

    // // Show
    // useEffect(() => {
    //     const storedShow = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SHOW))
    //     if (storedShow) setShow(storedShow)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SHOW, 
    //     JSON.stringify(show))
    // }, [show]);

    // ClickPassword
    // useEffect(() => {
    //     const storedClickPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_PASSWORD))
    //     if (storedClickPassword) setClickPassword(storedClickPassword)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_CLICK_PASSWORD, 
    //     JSON.stringify(clickPassword))
    // }, [clickPassword]);

    // // HideAdmin
    // useEffect(() => {
    //     const storedHideAdmin = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_HIDE_ADMIN))
    //     if (storedHideAdmin) setHideAdmin(storedHideAdmin)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_HIDE_ADMIN, 
    //     JSON.stringify(hideAdmin))
    // }, [hideAdmin]);

    // NewModal
    useEffect(() => {
        const storedNewModal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NEW_MODAL))
        if (storedNewModal) setNewModal(storedNewModal)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NEW_MODAL, 
        JSON.stringify(newModal))
    }, [newModal]);

    // // NewPassword
    // useEffect(() => {
    //     const storedNewPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NEW_PASSWORD))
    //     if (storedNewPassword) setNewPassword(storedNewPassword)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_NEW_PASSWORD, 
    //     JSON.stringify(newPassword))
    // }, [newPassword]);

    // // Same
    // useEffect(() => {
    //     const storedSame = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAME))
    //     if (storedSame) setSame(storedSame)
    // }, [])
    
    // useEffect(() => {
    //     localStorage.setItem(LOCAL_STORAGE_KEY_SAME, 
    //     JSON.stringify(same))
    // }, [same]);

    // LetterGrade
    useEffect(() => {
        const storedLetterGrade = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_LETTER_GRADE))
        if (storedLetterGrade) setLetterGrade(storedLetterGrade)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_LETTER_GRADE, 
        JSON.stringify(letterGrade))
    }, [letterGrade]);

    // Color
    useEffect(() => {
        const storedColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_COLOR))
        if (storedColor) setColor(storedColor)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_COLOR, 
        JSON.stringify(color))
    }, [color]);

    // Student
    useEffect(() => {
        const storedStudent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_STUDENT))
        if (storedStudent) setStudent(storedStudent)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_STUDENT, 
        JSON.stringify(student))
    }, [student]);

    // Finish
    useEffect(() => {
        const storedFinish = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FINISH))
        if (storedFinish) setFinish(storedFinish)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_FINISH, 
        JSON.stringify(finish))
    }, [finish]);

    // Save
    useEffect(() => {
        const storedSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAVE))
        if (storedSave) setSave(storedSave)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_SAVE, 
        JSON.stringify(save))
    }, [save]);

    // ResetPassword
    useEffect(() => {
        const storedResetPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RESET))
        if (storedResetPassword) setResetPassword(storedResetPassword)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_RESET, 
        JSON.stringify(resetPassword))
    }, [resetPassword]);

    // AdminEmail
    useEffect(() => {
        const storedAdminEmail = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_EMAIL))
        if (storedAdminEmail) setAdminEmail(storedAdminEmail)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_ADMIN_EMAIL, 
        JSON.stringify(adminEmail))
    }, [adminEmail]);

    // Demo
    useEffect(() => {
        const storedDemo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DEMO))
        if (storedDemo) setDemo(storedDemo)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_DEMO, 
        JSON.stringify(demo))
    }, [demo]);

    // Created
    useEffect(() => {
        const storedCreated = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CREATED))
        if (storedCreated) setCreated(storedCreated)
    }, [])
    
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_CREATED, 
        JSON.stringify(created))
    }, [created]);
    
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

    function matchPass() {
        if ((password.length > 0) && (password === adminPassword)) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }

    function match() {
        if ((newPassword.length > 0) && (newPassword === adminPassword)) {
            setSame(true);
        } else {
            setSame(false);
        } 
    }

    function randomString(length) {
        let string = '';
        let options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
        let optionsLength = options.length;
        for (let i = 0; i < length; i++) {
            string += options.charAt(Math.floor(Math.random() * optionsLength));
        }
        return string;
    }

    let resetTemplateParams = {
        admin_email: `${adminEmail}`,
        resetPass: `${resetPassword}`
    };

    function sendResetEmail() {
        emailjs.send('service_jj71xm9', 'template_cfc61dq', resetTemplateParams, 'FlrSx29zmJDjwJhtt')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
    }

    console.log(resetPassword);
    console.log(password);
    console.log(adminEmail);

    function resetMatch() {
        if ((resetPassword.length > 0) && (resetPassword === password)) {
            setSameReset(true);
        } else {
            setSameReset(false);
        } 
    }

    let isEmpty = []

    for (let i = 0; i < serviceList.length; i++) {
        let valueLength = serviceList[i].student.length;
        let pushed = isEmpty.unshift(valueLength);
    }

    let allZero = isEmpty.every(num => num === 0);
    // console.log(isEmpty);
    // console.log(allZero);

    return (
        <>
            <Head>
                <title>Test Generator</title>
                <meta name='description' content='test' />
            </Head>
            {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '30px',
                    color: '#125CA1',
                    fontSize: '30px',
                    marginRight: '10%',
                    marginLeft: '10%'
                }}
            >
                <div
                    onClick={() => {setStudent(false), setFinish(false), setIsTimed(false), setOpenAnswerKey(false), setOpenQuestionKey(false), setOpenStudentAnswers(false), setEdit(false), setSave(false)}}
                    style={{
                        cursor: 'pointer',
                        textDecoration: `${(!student) ? 'underline' : 'none'}`
                    }}
                >
                    Admin
                </div>
                <div
                    onClick={() => {setStudent(true), setFinish(false), setSave(true), setOpenEmail(false), setOpenNameDate(false)}}
                    style={{
                        cursor: 'pointer',
                        textDecoration: `${(student) ? 'underline' : 'none'}`
                    }}
                >
                    Student
                </div>
                <div>
                    Demo Mode
                </div>
                <div>
                    End Demo
                </div>
            </div> */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '10px',
                    marginRight: '10px'
                }}
            >
                <Button
                    disabled={demo}
                    color='black'
                    onClick={() => {setOpenModal(true), setStudent(false)}}
                >
                    Demo Mode
                </Button>     
            </div>
            {!student ? (
            <>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '10px',
                        marginRight: '10px'
                    }}
                >
                    {(created && demo) ? (
                    <>
                        <div>
                            <button
                                className={styles.takeTest}
                                onClick={() => {setStudent(true), setOpenModal(false), setFinish(false), setSave(true), setDemo(true), setNewPassword('')}}
                                style={{
                                    background: 'purple',
                                    padding: '7px 21px 7px 21px',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    borderRadius: '.28571429rem',
                                    border: '0px solid transparent'
                                }}
                            >
                                Take Test
                            </button>
                        </div>
                    </>
                    ): null}
                </div>
            </>
            ): null}
            {demo ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '10px',
                        marginRight: '10px'
                    }}
                >
                    <Button
                        color='red'
                        onClick={() => {setDemo(false), setStudent(false), setEdit(false), setClickPassword(true), setPassword(''), setAdminPassword(''), setAdminEmail(''), setAuth(false), setIsResetting(false), setNewPassword(''), setSave(false), setCreated(false), setTitleClicked(false), setSaveRipple(false)}}
                    >
                        End Demo Mode
                    </Button>     
                </div>
            ): null}
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
                    {adminPassword.length > 0 ? (
                    <>
                        <button
                            className={styles.takeTest}
                            onClick={() => {setNewModal(true), setSame(false)}}
                            style={{
                                background: 'purple',
                                padding: '7px 21px 7px 21px',
                                color: 'white',
                                fontWeight: '700',
                                fontSize: '14px',
                                fontFamily: 'Nunito',
                                borderRadius: '.28571429rem',
                                border: '0px solid transparent'
                            }}
                        >
                            Return to Admin Page
                        </button>
                    </>
                    ): null}
                    <Modal 
                        dimmer
                        open={newModal}
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
                            onClick={() => {setNewModal(false), setErrorCheck(false)}}
                        >
                            x
                        </div>
                        {isResetting ? (
                        <>
                            <div>
                                <h1
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '20px'
                                    }}
                                >
                                    Forgot Password?
                                </h1>
                                <h3
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        color: 'red'
                                    }}
                                >
                                    Send a new Admin Password to my Email
                                </h3>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '30px',
                                        marginBottom: '30px'
                                    }}
                                >
                                    <Button
                                        color='red'
                                        onClick={() => {randomString(20), setResetPassword(randomString(20)), setAdminPassword('')}}
                                    >
                                        Reset Password
                                    </Button>
                                    {/* <Button
                                        onClick={() => setPassword(resetPassword)}
                                    >
                                        Change old password
                                    </Button> */}
                                    <Button
                                        color='green'
                                        onClick={() => {sendResetEmail(), setPassword(resetPassword)}}
                                    >
                                        Email New Password
                                    </Button>
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                </div>
                                <h4
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '10px'
                                    }}
                                >
                                    Enter New Admin Password
                                </h4>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <input
                                        type={hide}
                                        placeholder='New Admin Password'
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
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {(!sameReset && errorCheck) ? (
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
                                        Error: Password is Invalid   
                                    </div>
                                </>
                                ): null}
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginBottom: '15px'
                                    }}
                                >
                                    {show ? (
                                    <>
                                        <Checkbox
                                            onClick={() => {setHide('password'), setShow(false)}}
                                            label={
                                                <label>
                                                    Hide Password
                                                </label>
                                            }
                                            style={{
                                                marginTop: '15px'
                                            }}
                                        />
                                    </>
                                    ):(
                                    <>
                                        <Checkbox
                                            onClick={() => {setHide('text'), setShow(true)}}
                                            label={
                                                <label>
                                                    Show Password
                                                </label>
                                            }
                                            style={{
                                                marginTop: '15px'
                                            }}
                                        />
                                    </>
                                    )}
                                </div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Button
                                        color='blue'
                                        onClick={() => {resetMatch(), setCreated(false), setErrorCheck(true)}}
                                    >
                                        Submit
                                    </Button>
                                    {sameReset ? (
                                    <>
                                        <Button
                                            onClick={() => {setStudent(false), setHideAdmin(false), setSave(false), setNewModal(false), setClickPassword(true), setAuth(false), setErrorCheck(false)}}
                                        >
                                            Go to Admin
                                        </Button>
                                    </>
                                    ): null}
                                </div>
                            </div> 
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '30px'
                                }}
                            >
                                OR
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '30px'
                                }}
                            >
                                <Button
                                    color='red'
                                    onClick={() => {setIsResetting(false), setErrorCheck(false)}}
                                >
                                    Enter Password?
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
                                Enter Admin Password
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
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
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
                            {(!same && errorCheck) ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        transform: 'translate(-5px, 50%)',
                                        color: 'red',
                                        fontSize: '20px',
                                        fontWeight: '500',
                                        marginTop: '10px',
                                        marginBottom: '10px'
                                    }}
                                >
                                    Error: Admin Password is Invalid
                                </div>
                            ): null}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                {show ? (
                                <>
                                    <Checkbox
                                        onClick={() => {setHide('password'), setShow(false)}}
                                        label={
                                            <label>
                                                Hide Password
                                            </label>
                                        }
                                        style={{
                                            marginTop: '15px'
                                        }}
                                    />
                                </>
                                ):(
                                <>
                                    <Checkbox
                                        onClick={() => {setHide('text'), setShow(true)}}
                                        label={
                                            <label>
                                                Show Password
                                            </label>
                                        }
                                        style={{
                                            marginTop: '15px'
                                        }}
                                    />
                                </>
                                )}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '20px'
                                }}
                            >
                                <Button
                                    color='blue'
                                    onClick={() => {match(), setCreated(false), setErrorCheck(true)}}
                                >
                                    Submit
                                </Button>
                                {same ? (
                                <>
                                    <Button
                                        onClick={() => {setStudent(false), setHideAdmin(false), setSave(false), setNewModal(false), setClickPassword(true), setAuth(false), setErrorCheck(false)}}
                                    >
                                        Go to Admin
                                    </Button>
                                </>
                                ): null}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '30px'
                                }}
                            >
                                OR
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '30px'
                                }}
                            >
                                <Button
                                    color='red'
                                    onClick={() => {setIsResetting(true), setErrorCheck(false)}}
                                >
                                    Forgot Password?
                                </Button>
                            </div>
                        </>
                        )}
                    </Modal>
                </>
                ): null}  
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
                    onClick={() => {setOpenModal(false), setAuth(false)}}
                >
                    x
                </div>
                <div>
                    {/* {created ? (
                    <>
                        <div>
                            <Button
                                color='purple'
                                onClick={() => {setStudent(true), setOpenModal(false), setFinish(false), setSave(true)}}
                            >
                                Take a Test
                            </Button>
                        </div>
                    </>
                    ): null} */}
                    {/* <div>
                        <Button
                            color='green'
                            onClick={() => setCreating(true)}
                        >
                            Create a Test
                        </Button>
                    </div> */}
                    {creating ? (
                    <>
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
                            Set Admin Password
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <input
                                placeholder='Admin Email'
                                value={adminEmail}
                                onChange={(e) => {setAdminEmail(e.target.value), validEmail(adminEmail)}}
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
                        {(adminEmail.length > 0 && password.length > 0 && !isValid) ? (
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    transform: 'translateY(8px)',
                                    color: 'red',
                                    fontSize: '15px'
                                }}
                            >
                                Error: Email is Invalid
                            </div>
                        ): null}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '15px'
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
                                disabled={((password.length > 0) && isValid) ? false : true}
                                onClick={() => setClickPassword(false)}
                            >
                                Set Admin Email & Password
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
                        {(!auth && errorCheck) ? (
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
                                Error: Password is Invalid   
                            </div>
                        </>
                        ): null}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center', 
                                marginTop: '15px'
                            }}
                        >
                            <Button
                                color='blue'
                                disabled={adminPassword.length > 0 ? false : true}
                                onClick={() => {matchPass(), setErrorCheck(true)}}
                            >
                                Submit
                            </Button>
                            <Button
                                onClick={() => {setClickPassword(true), setPassword(''), setAdminPassword(''), setAdminEmail(''), setAuth(false), setErrorCheck(false)}}
                            >
                                Reset Admin Email & Password
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
                                onClick={() => {setHide('password'), setShow(false)}}
                                label={
                                    <label>
                                        Hide Password
                                    </label>
                                }
                                style={{
                                    marginTop: '15px'
                                }}
                            />
                        </>
                        ):(
                        <>
                            <Checkbox
                                onClick={() => {setHide('text'), setShow(true)}}
                                label={
                                    <label>
                                        Show Password
                                    </label>
                                }
                                style={{
                                    marginTop: '15px'
                                }}
                            />
                        </>
                        )}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '15px'
                        }}
                    >
                        {auth ? (
                        <>
                            {/* <Button
                                onClick={() => {setStudent(true), setHideAdmin(true), setSave(true), setOpenModal(false), setSame(false), setFinish(false), setDemo(true)}}
                            >
                                Take Test
                            </Button> */}
                            <Button
                                color='green'
                                onClick={() => {setOpenModal(false), setFinish(false), setDemo(true), setServiceList([{ service: '', answer: '', student: '' }]), setSave(false), setCreated(false), setTitle(''), setTitleClicked(false), setSaveRipple(true), setErrorCheck(false)}}
                            >
                                Create New Test
                            </Button>
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
                                transform: 'translateY(20vh)'
                            }}
                        >
                            <Button
                                color='green'
                                onClick={() => setCreating(true)}
                            >
                                Create a Test
                            </Button>
                        </div>
                    </>
                    )}
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
                Test Generator {demo ? 'Demo': null}
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
                        {!demo ? (
                        <>
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
                        </>
                        ): null}
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
                                    disabled={allZero}
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
                                    {(userEmail.length > 0 && !isValid) ? (
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
                                    transform: 'translate(-1vw, -8px)',
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
                                            marginBottom: '30px'
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
                <Divider /> 
                {!student ? (
                <>
                    <div>
                        {serviceList.length > 0 ? (
                        <>
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
                                        onClick={() => {setSave(false), setCreated(false), setTitleClicked(false)}}
                                    >
                                        Edit Questions and Answers
                                    </Button>
                                </>
                                ):(
                                <>
                                    <button
                                        className={saveRipple ? styles.saveButton : null}
                                        onClick={() => {setSave(true), setCreated(true), setTitleClicked(true)}}
                                        style={{
                                            background: '#21BA45',
                                            padding: '7px 21px 7px 21px',
                                            color: 'white',
                                            fontWeight: '700',
                                            fontSize: '14px',
                                            fontFamily: 'Nunito',
                                            borderRadius: '.28571429rem',
                                            border: '0px solid transparent'
                                        }}
                                    >
                                        Save Questions and Answers
                                    </button>
                                </>
                                )}
                            </div>
                            <Divider />
                        </>
                        ): null}
                    </div>
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
                                        value={title}
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
                                    <div
                                        style={{
                                            transform: 'translateY(-5px)'
                                        }}
                                    >
                                        <Divider />
                                    </div>
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
                                        {!save ? (
                                        <>
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
