import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Test.module.css';
import { Button, Divider, Icon, Container, Checkbox } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';    
import emailjs from 'emailjs-com';
// import hash from 'object-hash';
import MyTimer from '../components/test_generator/MyTimer';
import DemoModal from '../components/test_generator/DemoModal';
import ReturnAdminModal from '../components/test_generator/ReturnAdminModal';
import NightMode from '../components/test_generator/NightMode';
import DemoMode from '../components/test_generator/DemoMode';
import TakeTest from '../components/test_generator/TakeTest';
import MappedForm from '../components/test_generator/MappedForm';
import GradeCard from '../components/test_generator/GradeCard';
import EditTitle from '../components/test_generator/EditTitle';
import DropdownKeys from '../components/test_generator/DropdownKeys';
// import TimerUI from '../components/test_generator/TimerUI';
import Email from '../components/test_generator/Email';
import CreateTimer from '../components/test_generator/CreateTimer';

const LOCAL_STORAGE_KEY = 'list';
const LOCAL_STORAGE_KEY_NAME = 'Name';
const LOCAL_STORAGE_KEY_CLICK_NAME = 'ClickName';
const LOCAL_STORAGE_KEY_DATE = 'Date';
const LOCAL_STORAGE_KEY_CLICK_DATE = 'ClickDate';
const LOCAL_STORAGE_KEY_TITLE = 'Title';
const LOCAL_STORAGE_KEY_CLICK_TITLE = 'ClickTitle';
const LOCAL_STORAGE_KEY_USER_EMAIL = 'UserEmail';
const LOCAL_STORAGE_KEY_IS_VALID = 'IsValid';
const LOCAL_STORAGE_KEY_OPEN_NAME_DATE = 'OpenNameDate';
const LOCAL_STORAGE_KEY_OPEN_MODAL = 'OpenModal';
const LOCAL_STORAGE_KEY_AUTH = 'Auth';
// const LOCAL_STORAGE_KEY_PASSWORD = 'Password';
const LOCAL_STORAGE_KEY_ADMIN_PASSWORD = 'AdminPassword'; 
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
const LOCAL_STORAGE_KEY_SAVE_RIPPLE = 'Ripple';
const LOCAL_STORAGE_KEY_RESET_CLICKED = 'ResetClicked';
const LOCAL_STORAGE_KEY_NIGHT = 'Night';
const LOCAL_STORAGE_KEY_BACKGROUND = 'Background';
const LOCAL_STORAGE_KEY_TEXT_COLOR = 'TextColor';
const LOCAL_STORAGE_KEY_QUESTION_COLOR = 'QuestionColor';

export default function Services() {
    const [serviceList, setServiceList] = useState([{ id: '', service: '', answer: '', student: '' }]);
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
    const [resetClicked, setResetClicked] = useState<boolean>(false);
    const [eye, setEye] = useState<boolean>(false);
    const [night, setNight] = useState<boolean>(false);
    const [background, setBackground] = useState<string>('white');
    const [textColor, setTextColor] = useState<string>('black');
    const [questionColor, setQuestionColor] = useState<string>('#125CA1');
    const [resetTernary, setResetTernary] = useState<boolean>(false);
    const [resize, setResize] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 440) {
            setResize(true);
        } else {
            setResize(false);
        }

        const updateMedia = () => {
            if (window.innerWidth > 440) {
                setResize(true);
            } else {
                setResize(false);
            }
        };
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

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

    // UserEmail
    useEffect(() => {
        const storedUserEmail = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER_EMAIL))
        if (storedUserEmail) setUserEmail(storedUserEmail)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_USER_EMAIL, 
        JSON.stringify(userEmail))
    }, [userEmail]);

    // IsValid
    useEffect(() => {
        const storedIsValid = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_IS_VALID))
        if (storedIsValid) setIsValid(storedIsValid)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_IS_VALID, 
        JSON.stringify(isValid))
    }, [isValid]);

    // OpenNameDate
    useEffect(() => {
        const storedOpenNameDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_NAME_DATE))
        if (storedOpenNameDate) setOpenNameDate(storedOpenNameDate)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_OPEN_NAME_DATE, 
        JSON.stringify(openNameDate))
    }, [openNameDate]);

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

    // AdminPassword
    useEffect(() => {
        const storedAdminPassword = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_PASSWORD))
        if (storedAdminPassword) setAdminPassword(storedAdminPassword)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_ADMIN_PASSWORD, 
        JSON.stringify(adminPassword))
    }, [adminPassword]);

    console.log(adminPassword);

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

    // SaveRipple
    useEffect(() => {
        const storedSaveRipple = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAVE_RIPPLE))
        if (storedSaveRipple) setSaveRipple(storedSaveRipple)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_SAVE_RIPPLE, 
        JSON.stringify(saveRipple))
    }, [saveRipple]);

    // ResetClicked
    useEffect(() => {
        const storedResetClicked = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RESET_CLICKED))
        if (storedResetClicked) setResetClicked(storedResetClicked)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_RESET_CLICKED, 
        JSON.stringify(resetClicked))
    }, [resetClicked]);

    // Night
    useEffect(() => {
        const storedNight = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NIGHT))
        if (storedNight) setNight(storedNight)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_NIGHT, 
        JSON.stringify(night))
    }, [night])

    // Background
    useEffect(() => {
        const storedBackground = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_BACKGROUND))
        if (storedBackground) setBackground(storedBackground)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_BACKGROUND, 
        JSON.stringify(background))
    }, [background])

    // Text Color
    useEffect(() => {
        const storedTextColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TEXT_COLOR))
        if (storedTextColor) setTextColor(storedTextColor)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_TEXT_COLOR, 
        JSON.stringify(textColor))
    }, [textColor])

    // Question Color
    useEffect(() => {
        const storedQuestionColor = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_QUESTION_COLOR))
        if (storedQuestionColor) setQuestionColor(storedQuestionColor)
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY_QUESTION_COLOR, 
        JSON.stringify(questionColor))
    }, [questionColor])

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
        const id = uuidv4();
        setServiceList([...serviceList, { id: id, service: '', answer: '', student: '' }])
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
    // console.log('Is Timer Running?', isTimed);

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

    // console.log(password);
    // console.log(hash(password));

    return (
        <>
            <Head>
                <title>Test Generator</title>
                <meta name='description' content='test' />
            </Head>
            <div 
                style={{ 
                    background: `${background}`,
                    color: `${textColor}`,
                    minHeight: '100vh',
                    height: '100%',
                    transform: 'translateY(-10px)',
                    paddingBottom: '1px'
                }}
            >
                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: '30px',
                        color: `${questionColor}`,
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
                <NightMode night={night} setNight={setNight} setBackground={setBackground} setTextColor={setTextColor} setQuestionColor={setQuestionColor} />
                <DemoMode demo={demo} setDemo={setDemo} setStudent={setStudent} setEdit={setEdit} setClickPassword={setClickPassword} setPassword={setPassword} setAdminPassword={setAdminPassword} setAdminEmail={setAdminEmail} setAuth={setAuth} setIsResetting={setIsResetting} setNewPassword={setNewPassword} setSave={setSave} setCreated={setCreated} setTitleClicked={setTitleClicked} setSaveRipple={setSaveRipple} setResetClicked={setResetClicked} setEye={setEye} setHide={setHide} setUserEmail={setUserEmail} setOpenModal={setOpenModal} setResetTernary={setResetTernary} textColor={textColor} />
                <TakeTest student={student} created={created} demo={demo} setStudent={setStudent} setOpenModal={setOpenModal} setFinish={setFinish} setSave={setSave} setDemo={setDemo} setNewPassword={setNewPassword} setEye={setEye} setHide={setHide} />
                <div
                    style={{
                        marginRight: '1vw',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginBottom: '-50px'
                    }}
                >
                    {student ? (
                    <>
                        {(adminPassword.length > 0 || resetClicked) ? (
                        <>
                            <button
                                className={styles.takeTest}
                                onClick={() => {setNewModal(true), setSame(false)}}
                                style={{
                                    padding: '7px 21px 7px 21px',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    fontFamily: 'Nunito',
                                    borderRadius: '.28571429rem',
                                    border: '2px solid purple',
                                    background: 'transparent',
                                    color: 'purple'
                                }}
                            >
                                Return to Admin Page
                            </button>
                        </>
                        ): null}
                        <ReturnAdminModal newModal={newModal} setNewModal={setNewModal} isResetting={isResetting} setIsResetting={setIsResetting} errorCheck={errorCheck} setErrorCheck={setErrorCheck} hide={hide} setHide={setHide} eye={eye} setEye={setEye} setResetTernary={setResetTernary} resetTernary={resetTernary} sendResetEmail={sendResetEmail} setPassword={setPassword} resetPassword={resetPassword} randomString={randomString} setResetPassword={setResetPassword} setAdminPassword={setAdminPassword} setResetClicked={setResetClicked} setShow={setShow} sameReset={sameReset} resetMatch={resetMatch} setCreated={setCreated} setStudent={setStudent} setHideAdmin={setHideAdmin} setSave={setSave} setClickPassword={setClickPassword} setAuth={setAuth} resize={resize} newPassword={newPassword} setNewPassword={setNewPassword} same={same} match={match} />
                    </>
                    ): null}  
                </div>
                <DemoModal openModal={openModal} setOpenModal={setOpenModal} auth={auth} setAuth={setAuth} hide={hide} setHide={setHide} eye={eye} setEye={setEye} creating={creating} clickPassword={clickPassword} setClickPassword={setClickPassword} adminEmail={adminEmail} setAdminEmail={setAdminEmail} validEmail={validEmail} password={password} setPassword={setPassword} setShow={setShow} isValid={isValid} adminPassword={adminPassword} setAdminPassword={setAdminPassword} errorCheck={errorCheck} setErrorCheck={setErrorCheck} matchPass={matchPass} setFinish={setFinish} setDemo={setDemo} setServiceList={setServiceList} setCreating={setCreating} setSave={setSave} setCreated={setCreated} setTitle={setTitle} setTitleClicked={setTitleClicked} setSaveRipple={setSaveRipple} />
                {/* <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '65px',
                        marginBottom: '5vh',
                        marginTop: '8vh',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                    }}
                >
                    Test Generator {demo ? 'Demo': null}
                </div> */}
                <Container
                    style={{ 
                        border: `2px solid ${questionColor}`,
                        borderRadius: '10px',
                        padding: '3em',
                        marginTop: '9vh',
                        marginBottom: '100px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontSize: resize ? '65px' : '28px',
                            lineHeight: resize ? '0px' : '40px',
                            marginBottom: resize ? '7vh' : '3vh',
                            marginTop: resize ? '4vh' : '0vh',
                            fontFamily: 'sans-serif',
                            fontWeight: '300',
                            color: `${questionColor}`
                        }}
                    >
                        Test Generator {demo ? 'Demo': null}
                    </div>
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
                                                onClick={() => {setStudent(false), setFinish(false), setIsTimed(false), setOpenAnswerKey(false), setOpenQuestionKey(false), setOpenStudentAnswers(false), setEdit(false), setSave(false), setTimeClick(false), setIsTimed(false)}}
                                                style={{
                                                    border: `2px solid ${textColor}`,
                                                    background: 'transparent',
                                                    color: `${textColor}`
                                                }}
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
                                                style={{
                                                    border: `2px solid ${textColor}`,
                                                    background: 'transparent',
                                                    color: `${textColor}`
                                                }}
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
                                        onClick={() => setFinish(true)}
                                        style={{
                                            border: '2px solid #21BA45',
                                            background: 'transparent',
                                            color: '#21BA45'
                                        }}
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
                                        onClick={() => setFinish(false)}   
                                        style={{
                                            border: '2px solid red',
                                            background: 'transparent',
                                            color: 'red'
                                        }}                     
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
                        <Email openEmail={openEmail} setOpenEmail={setOpenEmail} questionColor={questionColor} finish={finish} userEmail={userEmail} setUserEmail={setUserEmail} validEmail={validEmail} isValid={isValid} send={send} />
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
                                    className={styles.open}
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
                                        <div
                                            style={{
                                                color: 'black'
                                            }}
                                        >
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
                                        </div>
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
                                                    onClick= {() => setNameClicked(true)}
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
                    <CreateTimer student={student} edit={edit} setEdit={setEdit} questionColor={questionColor} setTimeClick={setTimeClick} setIsTimed={setIsTimed} timeClick={timeClick} timed={timed} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} />
                    {/* {!student ? (
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
                                        Create Timer
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
                                        transform: 'translate(-1vw, -5px)'
                                    }}
                                    className={styles.open}
                                    onClick={() => {setEdit(false), setTimeClick(false), setIsTimed(false)}}
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
                                <TimerUI timeClick={timeClick} timed={timed} minute={minute} setMinute={setMinute} second={second} setSecond={setSecond} setTimeClick={setTimeClick} questionColor={questionColor} />
                            </>
                            )}
                        </div>
                    </>
                    ): null} */}

                    <div>
                        <MyTimer isTimed={isTimed} setIsTimed={setIsTimed} setTimed={setTimed} timed={timed} student={student} finish={finish} setFinish={setFinish} secondTime={secondTime} minuteTime={minuteTime} expiryTimestamp={time} timeClick={timeClick} edit={edit} questionColor={questionColor} setTimeClick={setTimeClick} />
                    </div>
                    <DropdownKeys student={student} openQuestionKey={openQuestionKey} setOpenQuestionKey={setOpenQuestionKey} questionColor={questionColor} serviceList={serviceList} openAnswerKey={openAnswerKey} setOpenAnswerKey={setOpenAnswerKey} openStudentAnswers={openStudentAnswers} setOpenStudentAnswers={setOpenStudentAnswers} />
                    <Divider /> 
                    <EditTitle student={student} serviceList={serviceList} save={save} setSave={setSave} setCreated={setCreated} titleClicked={titleClicked} setTitleClicked={setTitleClicked} saveRipple={saveRipple} setServiceList={setServiceList} setOpenAnswerKey={setOpenAnswerKey} setOpenQuestionKey={setOpenQuestionKey} setOpenStudentAnswers={setOpenStudentAnswers} setName={setName} setDate={setDate} setTitle={setTitle} setDateClicked={setDateClicked} setSecond={setSecond} setTimed={setTimed} setTimeClick={setTimeClick} setOpenEmail={setOpenEmail} setUserEmail={setUserEmail} setFinish={setFinish} title={title} setNameClicked={setNameClicked} questionColor={questionColor} />
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            transform: 'translateY(1em)'
                        }}
                    >
                        <div>
                            <GradeCard student={student} finish={finish} grade={grade} percent={percent} color={color} length={length} letterGrade={letterGrade} />
                            <MappedForm serviceList={serviceList} save={save} student={student} finish={finish} questionColor={questionColor} handleQuestionChange={handleQuestionChange} handleAnswerChange={handleAnswerChange} handleStudentAnswerChange={handleStudentAnswerChange} handleServiceRemove={handleServiceRemove} handleAddService={handleAddService} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
