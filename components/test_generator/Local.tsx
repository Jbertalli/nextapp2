import React, { useEffect } from "react";

const LOCAL_STORAGE_KEY = "list";
const LOCAL_STORAGE_KEY_NAME = "Name";
const LOCAL_STORAGE_KEY_CLICK_NAME = "ClickName";
const LOCAL_STORAGE_KEY_DATE = "Date";
const LOCAL_STORAGE_KEY_CLICK_DATE = "ClickDate";
const LOCAL_STORAGE_KEY_TITLE = "Title";
const LOCAL_STORAGE_KEY_CLICK_TITLE = "ClickTitle";
const LOCAL_STORAGE_KEY_USER_EMAIL = "UserEmail";
const LOCAL_STORAGE_KEY_IS_VALID = "IsValid";
const LOCAL_STORAGE_KEY_OPEN_NAME_DATE = "OpenNameDate";
const LOCAL_STORAGE_KEY_OPEN_MODAL = "OpenModal";
const LOCAL_STORAGE_KEY_AUTH = "Auth";
// const LOCAL_STORAGE_KEY_PASSWORD = 'Password';
const LOCAL_STORAGE_KEY_ADMIN_PASSWORD = "AdminPassword";
// const LOCAL_STORAGE_KEY_CLICK_PASSWORD = 'ClickPassword';
// const LOCAL_STORAGE_KEY_HIDE_ADMIN = 'HideAdmin';
const LOCAL_STORAGE_KEY_NEW_MODAL = "NewModal";
// const LOCAL_STORAGE_KEY_NEW_PASSWORD = 'NewPassword';
// const LOCAL_STORAGE_KEY_SAME = 'Same';
const LOCAL_STORAGE_KEY_LETTER_GRADE = "LetterGrade";
const LOCAL_STORAGE_KEY_COLOR = "Color";
const LOCAL_STORAGE_KEY_STUDENT = "Student";
const LOCAL_STORAGE_KEY_FINISH = "Finish";
const LOCAL_STORAGE_KEY_SAVE = "Save";
const LOCAL_STORAGE_KEY_RESET = "ResetPassword";
const LOCAL_STORAGE_KEY_ADMIN_EMAIL = "AdminEmail";
const LOCAL_STORAGE_KEY_DEMO = "Demo";
const LOCAL_STORAGE_KEY_CREATED = "Created";
const LOCAL_STORAGE_KEY_SAVE_RIPPLE = "Ripple";
const LOCAL_STORAGE_KEY_RESET_CLICKED = "ResetClicked";
const LOCAL_STORAGE_KEY_NIGHT = "Night";
const LOCAL_STORAGE_KEY_BACKGROUND = "Background";
const LOCAL_STORAGE_KEY_TEXT_COLOR = "TextColor";
const LOCAL_STORAGE_KEY_QUESTION_COLOR = "QuestionColor";

export default function Local(values) {

  const {
    setServiceList, 
    serviceList, 
    setName, 
    name, 
    setNameClicked, 
    nameClicked, 
    setDate, 
    date, 
    setDateClicked, 
    dateClicked, 
    setTitle, 
    title, 
    setTitleClicked, 
    titleClicked, 
    setUserEmail,
    userEmail, 
    setIsValid, 
    isValid, 
    setOpenNameDate, 
    openNameDate, 
    setOpenModal, 
    openModal, 
    setAuth, 
    auth,
    setPassword, 
    password, 
    setAdminPassword, 
    adminPassword, 
    setClickPassword, 
    clickPassword, 
    setHideAdmin, 
    hideAdmin, 
    setNewModal, 
    newModal, 
    setNewPassword,
    newPassword, 
    setSame, 
    same, 
    setLetterGrade, 
    letterGrade, 
    setColor, 
    color, 
    setStudent, 
    student, 
    setFinish, 
    finish, 
    setSave, 
    save, 
    setResetPassword,
    resetPassword, 
    setAdminEmail, 
    adminEmail, 
    setDemo, 
    demo, 
    setCreated, 
    created, 
    setSaveRipple, 
    saveRipple, 
    setResetClicked, 
    resetClicked,
    setNight, 
    night, 
    setBackground, 
    background, 
    setTextColor, 
    textColor, 
    setQuestionColor, 
    questionColor
  } = values;

  // List
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedList) setServiceList(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(serviceList));
  }, [serviceList]);

  // Name
  useEffect(() => {
    const storedName = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_NAME));
    if (storedName) setName(storedName);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(name));
  }, [name]);

  // Name Clicked
  useEffect(() => {
    const storedClickedName = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_NAME)
    );
    if (storedClickedName) setNameClicked(storedClickedName);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CLICK_NAME,
      JSON.stringify(nameClicked)
    );
  }, [nameClicked]);

  // Date
  useEffect(() => {
    const storedDate = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DATE));
    if (storedDate) setDate(storedDate);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_DATE, JSON.stringify(date));
  }, [date]);

  // Date Clicked
  useEffect(() => {
    const storedClickDate = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_DATE)
    );
    if (storedClickDate) setDateClicked(storedClickDate);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CLICK_DATE,
      JSON.stringify(dateClicked)
    );
  }, [dateClicked]);

  // Title
  useEffect(() => {
    const storedTitle = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_TITLE)
    );
    if (storedTitle) setTitle(storedTitle);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_TITLE, JSON.stringify(title));
  }, [title]);

  // Title Clicked
  useEffect(() => {
    const storedClickTitle = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_CLICK_TITLE)
    );
    if (storedClickTitle) setTitleClicked(storedClickTitle);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_CLICK_TITLE,
      JSON.stringify(titleClicked)
    );
  }, [titleClicked]);

  // UserEmail
  useEffect(() => {
    const storedUserEmail = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_USER_EMAIL)
    );
    if (storedUserEmail) setUserEmail(storedUserEmail);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_USER_EMAIL,
      JSON.stringify(userEmail)
    );
  }, [userEmail]);

  // IsValid
  useEffect(() => {
    const storedIsValid = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_IS_VALID)
    );
    if (storedIsValid) setIsValid(storedIsValid);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_IS_VALID, JSON.stringify(isValid));
  }, [isValid]);

  // OpenNameDate
  useEffect(() => {
    const storedOpenNameDate = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_NAME_DATE)
    );
    if (storedOpenNameDate) setOpenNameDate(storedOpenNameDate);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_OPEN_NAME_DATE,
      JSON.stringify(openNameDate)
    );
  }, [openNameDate]);

  // OpenModal
  useEffect(() => {
    const storedOpenModal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_OPEN_MODAL)
    );
    if (storedOpenModal) setOpenModal(storedOpenModal);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_OPEN_MODAL,
      JSON.stringify(openModal)
    );
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
    const storedAdminPassword = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_PASSWORD)
    );
    if (storedAdminPassword) setAdminPassword(storedAdminPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_ADMIN_PASSWORD,
      JSON.stringify(adminPassword)
    );
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
    const storedNewModal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_NEW_MODAL)
    );
    if (storedNewModal) setNewModal(storedNewModal);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NEW_MODAL, JSON.stringify(newModal));
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
    const storedLetterGrade = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_LETTER_GRADE)
    );
    if (storedLetterGrade) setLetterGrade(storedLetterGrade);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_LETTER_GRADE,
      JSON.stringify(letterGrade)
    );
  }, [letterGrade]);

  // Color
  useEffect(() => {
    const storedColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_COLOR)
    );
    if (storedColor) setColor(storedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_COLOR, JSON.stringify(color));
  }, [color]);

  // Student
  useEffect(() => {
    const storedStudent = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_STUDENT)
    );
    if (storedStudent) setStudent(storedStudent);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_STUDENT, JSON.stringify(student));
  }, [student]);

  // Finish
  useEffect(() => {
    const storedFinish = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_FINISH)
    );
    if (storedFinish) setFinish(storedFinish);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_FINISH, JSON.stringify(finish));
  }, [finish]);

  // Save
  useEffect(() => {
    const storedSave = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_SAVE));
    if (storedSave) setSave(storedSave);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_SAVE, JSON.stringify(save));
  }, [save]);

  // ResetPassword
  useEffect(() => {
    const storedResetPassword = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_RESET)
    );
    if (storedResetPassword) setResetPassword(storedResetPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_RESET,
      JSON.stringify(resetPassword)
    );
  }, [resetPassword]);

  // AdminEmail
  useEffect(() => {
    const storedAdminEmail = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_EMAIL)
    );
    if (storedAdminEmail) setAdminEmail(storedAdminEmail);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_ADMIN_EMAIL,
      JSON.stringify(adminEmail)
    );
  }, [adminEmail]);

  // Demo
  useEffect(() => {
    const storedDemo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_DEMO));
    if (storedDemo) setDemo(storedDemo);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_DEMO, JSON.stringify(demo));
  }, [demo]);

  // Created
  useEffect(() => {
    const storedCreated = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_CREATED)
    );
    if (storedCreated) setCreated(storedCreated);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CREATED, JSON.stringify(created));
  }, [created]);

  // SaveRipple
  useEffect(() => {
    const storedSaveRipple = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_SAVE_RIPPLE)
    );
    if (storedSaveRipple) setSaveRipple(storedSaveRipple);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_SAVE_RIPPLE,
      JSON.stringify(saveRipple)
    );
  }, [saveRipple]);

  // ResetClicked
  useEffect(() => {
    const storedResetClicked = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_RESET_CLICKED)
    );
    if (storedResetClicked) setResetClicked(storedResetClicked);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_RESET_CLICKED,
      JSON.stringify(resetClicked)
    );
  }, [resetClicked]);

  // Night
  useEffect(() => {
    const storedNight = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_NIGHT)
    );
    if (storedNight) setNight(storedNight);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_NIGHT, JSON.stringify(night));
  }, [night]);

  // Background
  useEffect(() => {
    const storedBackground = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_BACKGROUND)
    );
    if (storedBackground) setBackground(storedBackground);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_BACKGROUND,
      JSON.stringify(background)
    );
  }, [background]);

  // Text Color
  useEffect(() => {
    const storedTextColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_TEXT_COLOR)
    );
    if (storedTextColor) setTextColor(storedTextColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_TEXT_COLOR,
      JSON.stringify(textColor)
    );
  }, [textColor]);

  // Question Color
  useEffect(() => {
    const storedQuestionColor = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_QUESTION_COLOR)
    );
    if (storedQuestionColor) setQuestionColor(storedQuestionColor);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_QUESTION_COLOR,
      JSON.stringify(questionColor)
    );
  }, [questionColor]);

    return (
        <>
            &nbsp;
        </>
    );
}
