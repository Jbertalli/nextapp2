import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Divider, Container } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import emailjs from "emailjs-com";
// import hash from 'object-hash';
import MyTimer from "../components/test_generator/MyTimer";
import DemoModal from "../components/test_generator/DemoModal";
import ReturnAdminModal from "../components/test_generator/ReturnAdminModal";
import NightMode from "../components/test_generator/NightMode";
import DemoMode from "../components/test_generator/DemoMode";
import TakeTest from "../components/test_generator/TakeTest";
import MappedForm from "../components/test_generator/MappedForm";
import GradeCard from "../components/test_generator/GradeCard";
import EditTitle from "../components/test_generator/EditTitle";
import DropdownKeys from "../components/test_generator/DropdownKeys";
import Email from "../components/test_generator/Email";
import CreateTimer from "../components/test_generator/CreateTimer";
import DateClicked from "../components/test_generator/DateClicked";
import NameClicked from "../components/test_generator/NameClicked";
import OpenNameDate from "../components/test_generator/OpenNameDate";
import SubmitTestButton from "../components/test_generator/SubmitTestButton";
import StudentAdminSwitch from "../components/test_generator/StudentAdminSwitch";
import TestHeader from "../components/test_generator/TestHeader";
import ReturnAdminButton from "../components/test_generator/ReturnAdminButton";
import Local from '../components/test_generator/Local';

export default function Services() {
  const [serviceList, setServiceList] = useState([
    { id: "", service: "", answer: "", student: "" },
  ]);
  const [letterGrade, setLetterGrade] = useState<any>(null);
  const [color, setColor] = useState<string>("");
  const [student, setStudent] = useState<boolean>(false);
  const [finish, setFinish] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [openAnswerKey, setOpenAnswerKey] = useState<boolean>(false);
  const [openQuestionKey, setOpenQuestionKey] = useState<boolean>(false);
  const [openStudentAnswers, setOpenStudentAnswers] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [nameClicked, setNameClicked] = useState<boolean>(false);
  const [dateClicked, setDateClicked] = useState<boolean>(false);
  const [titleClicked, setTitleClicked] = useState<boolean>(false);
  const [minute, setMinute] = useState<string>("0");
  const [second, setSecond] = useState<string>("0");
  const [timed, setTimed] = useState<boolean>(false);
  const [timeClick, setTimeClick] = useState<boolean>(false);
  const [openEmail, setOpenEmail] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [isTimed, setIsTimed] = useState<boolean>(false);
  const [openNameDate, setOpenNameDate] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [auth, setAuth] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [hide, setHide] = useState<string>("password");
  const [show, setShow] = useState<boolean>(false);
  const [clickPassword, setClickPassword] = useState<boolean>(true);
  const [hideAdmin, setHideAdmin] = useState<boolean>(false);
  const [newModal, setNewModal] = useState<boolean>(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [same, setSame] = useState<boolean>(false);
  const [demo, setDemo] = useState<boolean>(false);
  const [creating, setCreating] = useState<boolean>(false);
  const [created, setCreated] = useState<boolean>(false);
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [resetPassword, setResetPassword] = useState<string>("");
  const [sameReset, setSameReset] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [saveRipple, setSaveRipple] = useState<boolean>(false);
  const [errorCheck, setErrorCheck] = useState<boolean>(false);
  const [resetClicked, setResetClicked] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  const [night, setNight] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("white");
  const [textColor, setTextColor] = useState<string>("black");
  const [questionColor, setQuestionColor] = useState<string>("#125CA1");
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
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // console.log(serviceList[0].service);

  console.log("Full Test Array", serviceList);

  let questionArray = [];

  for (let i = 0; i < serviceList.length; i++) {
    // console.log(serviceList[i].service);
    questionArray.push(serviceList[i].service);
  }

  console.log("%c Question Array", "color: red", questionArray);

  let answerArray = [];

  for (let i = 0; i < serviceList.length; i++) {
    // console.log(serviceList[i].answer);
    answerArray.push(serviceList[i].answer);
  }

  console.log("%c Answer Array", "color: blue", answerArray);

  let studentAnswerArray = [];

  for (let i = 0; i < serviceList.length; i++) {
    // console.log(serviceList[i].student);
    studentAnswerArray.push(serviceList[i].student);
  }

  console.log("%c Student Answer Array", "color: green", studentAnswerArray);

  const length = serviceList.length;

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleQuestionChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleAnswerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleStudentAnswerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleAddService = () => {
    const id = uuidv4();
    setServiceList([
      ...serviceList,
      { id: id, service: "", answer: "", student: "" },
    ]);
  };

  // console.log(answerArray);
  // console.log(studentAnswerArray);

  const compare = (num1, num2) => {
    let counter = num1.reduce(
      (total, el, index) =>
        el.toLowerCase() === num2[index].toLowerCase() ? total + 1 : total,
      0
    );
    return counter;
  };

  let grade = compare(answerArray, studentAnswerArray);

  // console.log(grade);

  const comparePercent = (num1, num2) => {
    let counter = num1.reduce(
      (total, el, index) =>
        el.toLowerCase() === num2[index].toLowerCase() ? total + 1 : total,
      0
    );
    const divide = Math.floor((counter / num1.length) * 100);
    const percent = divide.toFixed(1);
    return percent;
  };

  let percent = Number(comparePercent(answerArray, studentAnswerArray));

  // console.log(percent);

  useEffect(() => {
    switch (true) {
      case percent >= 96.67 && percent <= 100.0:
        setLetterGrade("A+");
        break;
      case percent >= 93.33 && percent <= 96.67:
        setLetterGrade("A");
        break;
      case percent >= 90.0 && percent <= 93.33:
        setLetterGrade("A-");
        break;
      case percent >= 86.67 && percent <= 90.0:
        setLetterGrade("B+");
        break;
      case percent >= 83.33 && percent <= 86.67:
        setLetterGrade("B");
        break;
      case percent >= 80.0 && percent <= 83.33:
        setLetterGrade("B-");
        break;
      case percent >= 76.67 && percent <= 80.0:
        setLetterGrade("C+");
        break;
      case percent >= 73.33 && percent <= 76.67:
        setLetterGrade("C");
        break;
      case percent >= 70.0 && percent <= 73.33:
        setLetterGrade("C-");
        break;
      case percent >= 60.0 && percent <= 70.0:
        setLetterGrade("D");
        break;
      case percent >= 0.0 && percent <= 60.0:
        setLetterGrade("F");
        break;
      default:
        null;
    }
  }, [percent]);

  useEffect(() => {
    switch (true) {
      case letterGrade == "A+" || letterGrade == "A" || letterGrade == "A-":
        setColor("darkgreen");
        break;
      case letterGrade == "B+" || letterGrade == "B" || letterGrade == "B-":
        setColor("green");
        break;
      case letterGrade == "C+" || letterGrade == "C" || letterGrade == "C-":
        setColor("orange");
        break;
      case letterGrade == "D":
        setColor("darkred");
        break;
      case letterGrade == "F":
        setColor("red");
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
    name: "Grade Report",
    score: `Grade: ${grade}/${length}`,
    percent: `${percent}%`,
    letter: `${letterGrade}`,
    to_name: `${name}`,
  };

  // console.log(grade);
  // console.log(length);
  // console.log(percent);
  // console.log(letterGrade);
  // console.log(userEmail);
  // console.log('Is Timer Running?', isTimed);

  function send() {
    emailjs
      .send(
        "service_jj71xm9",
        "template_7hans9n",
        templateParams,
        "FlrSx29zmJDjwJhtt"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  function validEmail(email) {
    let regEx = /[a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-z0-9]@[a-z0-9][-\.]{0,1}([a-z][-\.]{0,1})*[a-z0-9]\.[a-z0-9]{1,}([\.\-]{0,1}[a-z]){0,}[a-z0-9]{0,}$/;
    if (!regEx.test(email)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function matchPass() {
    if (password.length > 0 && password === adminPassword) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }

  function match() {
    if (newPassword.length > 0 && newPassword === adminPassword) {
      setSame(true);
    } else {
      setSame(false);
    }
  }

  function randomString(length) {
    let string = "";
    let options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
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
    emailjs
      .send(
        "service_jj71xm9",
        "template_cfc61dq",
        resetTemplateParams,
        "FlrSx29zmJDjwJhtt"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  function resetMatch() {
    if (resetPassword.length > 0 && resetPassword === password) {
      setSameReset(true);
    } else {
      setSameReset(false);
    }
  }

  let isEmpty = [];

  for (let i = 0; i < serviceList.length; i++) {
    let valueLength = serviceList[i].student.length;
    let pushed = isEmpty.unshift(valueLength);
  }

  let allZero = isEmpty.every((num) => num === 0);
  // console.log(isEmpty);
  // console.log(allZero);

  // console.log(password);
  // console.log(hash(password));
  // console.log(resetPassword);
  // console.log(adminEmail);

  return (
    <>
      <Head>
        <title>Test Generator</title>
        <meta name="description" content="test" />
      </Head>
      <Local
        setServiceList={setServiceList} 
        serviceList={serviceList} 
        setName={setName} 
        name={name} 
        setNameClicked={setNameClicked} 
        nameClicked={nameClicked} 
        setDate={setDate} 
        date={date} 
        setDateClicked={setDateClicked} 
        dateClicked={dateClicked} 
        setTitle={setTitle} 
        title={title} 
        setTitleClicked={setTitleClicked} 
        titleClicked={titleClicked} 
        setUserEmail={setUserEmail} 
        userEmail={userEmail} 
        setIsValid={setIsValid} 
        isValid={isValid} 
        setOpenNameDate={setOpenNameDate} 
        openNameDate={openNameDate} 
        setOpenModal={setOpenModal} 
        openModal={openModal} 
        setAuth={setAuth} 
        auth={auth}
        setPassword={setPassword} 
        password={password} 
        setAdminPassword={setAdminPassword} 
        adminPassword={adminPassword} 
        setClickPassword={setClickPassword} 
        clickPassword={clickPassword} 
        setHideAdmin={setHideAdmin} 
        hideAdmin={hideAdmin} 
        setNewModal={setNewModal} 
        newModal={newModal} 
        setNewPassword={setNewPassword}
        newPassword={newPassword} 
        setSame={setSame} 
        same={same} 
        setLetterGrade={setLetterGrade} 
        letterGrade={letterGrade} 
        setColor={setColor} 
        color={color} 
        setStudent={setStudent} 
        student={student} 
        setFinish={setFinish} 
        finish={finish} 
        setSave={setSave} 
        save={save} 
        setResetPassword={setResetPassword}
        resetPassword={resetPassword} 
        setAdminEmail={setAdminEmail} 
        adminEmail={adminEmail} 
        setDemo={setDemo} 
        demo={demo} 
        setCreated={setCreated} 
        created={created} 
        setSaveRipple={setSaveRipple} 
        saveRipple={saveRipple} 
        setResetClicked={setResetClicked} 
        resetClicked={resetClicked}
        setNight={setNight} 
        night={night} 
        setBackground={setBackground} 
        background={background} 
        setTextColor={setTextColor} 
        textColor={textColor} 
        setQuestionColor={setQuestionColor} 
        questionColor={questionColor}
      />
      <div
        style={{
          background: `${background}`,
          color: `${textColor}`,
          minHeight: "100vh",
          height: "100%",
          transform: "translateY(-30px)",
          paddingBottom: "1px",
        }}
      >
        <NightMode
          night={night}
          setNight={setNight}
          setBackground={setBackground}
          setTextColor={setTextColor}
          setQuestionColor={setQuestionColor}
          resize={resize}
        />
        <DemoMode
          demo={demo}
          setDemo={setDemo}
          setStudent={setStudent}
          setEdit={setEdit}
          setClickPassword={setClickPassword}
          setPassword={setPassword}
          setAdminPassword={setAdminPassword}
          setAdminEmail={setAdminEmail}
          setAuth={setAuth}
          setIsResetting={setIsResetting}
          setNewPassword={setNewPassword}
          setSave={setSave}
          setCreated={setCreated}
          setTitleClicked={setTitleClicked}
          setSaveRipple={setSaveRipple}
          setResetClicked={setResetClicked}
          setEye={setEye}
          setHide={setHide}
          setUserEmail={setUserEmail}
          setOpenModal={setOpenModal}
          setResetTernary={setResetTernary}
          textColor={textColor}
        />
        <TakeTest
          student={student}
          created={created}
          demo={demo}
          setStudent={setStudent}
          setOpenModal={setOpenModal}
          setFinish={setFinish}
          setSave={setSave}
          setDemo={setDemo}
          setNewPassword={setNewPassword}
          setEye={setEye}
          setHide={setHide}
        />
        <div
          style={{
            marginRight: "1vw",
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "-50px",
          }}
        >
          {student ? (
            <>
              <ReturnAdminButton
                adminPassword={adminPassword}
                resetClicked={resetClicked}
                setNewModal={setNewModal}
                setSame={setSame}
              />
              <ReturnAdminModal
                newModal={newModal}
                setNewModal={setNewModal}
                isResetting={isResetting}
                setIsResetting={setIsResetting}
                errorCheck={errorCheck}
                setErrorCheck={setErrorCheck}
                hide={hide}
                setHide={setHide}
                eye={eye}
                setEye={setEye}
                setResetTernary={setResetTernary}
                resetTernary={resetTernary}
                sendResetEmail={sendResetEmail}
                setPassword={setPassword}
                resetPassword={resetPassword}
                randomString={randomString}
                setResetPassword={setResetPassword}
                setAdminPassword={setAdminPassword}
                setResetClicked={setResetClicked}
                setShow={setShow}
                sameReset={sameReset}
                resetMatch={resetMatch}
                setCreated={setCreated}
                setStudent={setStudent}
                setHideAdmin={setHideAdmin}
                setSave={setSave}
                setClickPassword={setClickPassword}
                setAuth={setAuth}
                resize={resize}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                same={same}
                match={match}
              />
            </>
          ) : null}
        </div>
        <DemoModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          auth={auth}
          setAuth={setAuth}
          hide={hide}
          setHide={setHide}
          eye={eye}
          setEye={setEye}
          creating={creating}
          clickPassword={clickPassword}
          setClickPassword={setClickPassword}
          adminEmail={adminEmail}
          setAdminEmail={setAdminEmail}
          validEmail={validEmail}
          password={password}
          setPassword={setPassword}
          setShow={setShow}
          isValid={isValid}
          adminPassword={adminPassword}
          setAdminPassword={setAdminPassword}
          errorCheck={errorCheck}
          setErrorCheck={setErrorCheck}
          matchPass={matchPass}
          setFinish={setFinish}
          setDemo={setDemo}
          setServiceList={setServiceList}
          setCreating={setCreating}
          setSave={setSave}
          setCreated={setCreated}
          setTitle={setTitle}
          setTitleClicked={setTitleClicked}
          setSaveRipple={setSaveRipple}
        />
        <Container
            style={{
                border: `2px solid ${questionColor}`,
                borderRadius: "10px",
                padding: "3em",
                marginTop: "12vh",
                marginBottom: "100px"
            }}
        >
          <TestHeader
            resize={resize}
            questionColor={questionColor}
            demo={demo}
          />
          <Divider />
          <StudentAdminSwitch
            student={student}
            demo={demo}
            setStudent={setStudent}
            setFinish={setFinish}
            setIsTimed={setIsTimed}
            setOpenAnswerKey={setOpenAnswerKey}
            setOpenQuestionKey={setOpenQuestionKey}
            setOpenStudentAnswers={setOpenStudentAnswers}
            setEdit={setEdit}
            setSave={setSave}
            setTimeClick={setTimeClick}
            textColor={textColor}
            setOpenEmail={setOpenEmail}
            setOpenNameDate={setOpenNameDate}
          />
          <SubmitTestButton
            student={student}
            isTimed={isTimed}
            finish={finish}
            allZero={allZero}
            setFinish={setFinish}
          />
          {student ? (
            <>
              <Email
                openEmail={openEmail}
                setOpenEmail={setOpenEmail}
                questionColor={questionColor}
                finish={finish}
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                validEmail={validEmail}
                isValid={isValid}
                send={send}
              />
              <Divider />
              <div>
                {!openNameDate ? (
                  <>
                    <OpenNameDate
                      setOpenNameDate={setOpenNameDate}
                      questionColor={questionColor}
                    />
                  </>
                ) : (
                  <>
                    <NameClicked
                      nameClicked={nameClicked}
                      setName={setName}
                      name={name}
                      setNameClicked={setNameClicked}
                      questionColor={questionColor}
                      setOpenNameDate={setOpenNameDate}
                    />
                    <DateClicked
                      dateClicked={dateClicked}
                      setDate={setDate}
                      setDateClicked={setDateClicked}
                      questionColor={questionColor}
                      date={date}
                    />
                  </>
                )}
              </div>
            </>
          ) : null}
          <CreateTimer
            student={student}
            edit={edit}
            setEdit={setEdit}
            questionColor={questionColor}
            setTimeClick={setTimeClick}
            setIsTimed={setIsTimed}
            timeClick={timeClick}
            timed={timed}
            minute={minute}
            setMinute={setMinute}
            second={second}
            setSecond={setSecond}
          />
          <div>
            <MyTimer
              isTimed={isTimed}
              setIsTimed={setIsTimed}
              setTimed={setTimed}
              timed={timed}
              student={student}
              finish={finish}
              setFinish={setFinish}
              secondTime={secondTime}
              minuteTime={minuteTime}
              expiryTimestamp={time}
              timeClick={timeClick}
              edit={edit}
              questionColor={questionColor}
              setTimeClick={setTimeClick}
            />
          </div>
          <DropdownKeys
            student={student}
            openQuestionKey={openQuestionKey}
            setOpenQuestionKey={setOpenQuestionKey}
            questionColor={questionColor}
            serviceList={serviceList}
            openAnswerKey={openAnswerKey}
            setOpenAnswerKey={setOpenAnswerKey}
            openStudentAnswers={openStudentAnswers}
            setOpenStudentAnswers={setOpenStudentAnswers}
          />
          <Divider />
          <EditTitle
            student={student}
            serviceList={serviceList}
            save={save}
            setSave={setSave}
            setCreated={setCreated}
            titleClicked={titleClicked}
            setTitleClicked={setTitleClicked}
            saveRipple={saveRipple}
            setServiceList={setServiceList}
            setOpenAnswerKey={setOpenAnswerKey}
            setOpenQuestionKey={setOpenQuestionKey}
            setOpenStudentAnswers={setOpenStudentAnswers}
            setName={setName}
            setDate={setDate}
            setTitle={setTitle}
            setDateClicked={setDateClicked}
            setSecond={setSecond}
            setTimed={setTimed}
            setTimeClick={setTimeClick}
            setOpenEmail={setOpenEmail}
            setUserEmail={setUserEmail}
            setFinish={setFinish}
            title={title}
            setNameClicked={setNameClicked}
            questionColor={questionColor}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              transform: "translateY(1em)",
            }}
          >
            <div>
              <GradeCard
                student={student}
                finish={finish}
                grade={grade}
                percent={percent}
                color={color}
                length={length}
                letterGrade={letterGrade}
              />
              <MappedForm
                serviceList={serviceList}
                save={save}
                student={student}
                finish={finish}
                questionColor={questionColor}
                handleQuestionChange={handleQuestionChange}
                handleAnswerChange={handleAnswerChange}
                handleStudentAnswerChange={handleStudentAnswerChange}
                handleServiceRemove={handleServiceRemove}
                handleAddService={handleAddService}
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
