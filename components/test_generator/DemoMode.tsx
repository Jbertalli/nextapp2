import { Button } from "semantic-ui-react";

export default function DemoMode(values) {

  const {
    demo,
    setDemo,
    setStudent,
    setEdit,
    setClickPassword,
    setPassword,
    setAdminPassword,
    setAdminEmail,
    setAuth,
    setIsResetting,
    setNewPassword,
    setSave,
    setCreated,
    setTitleClicked,
    setSaveRipple,
    setResetClicked,
    setEye,
    setHide,
    setUserEmail,
    setOpenModal,
    setResetTernary,
    textColor
  } = values;

  return (
    <>
      {demo ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            <Button
              onClick={() => {
                  setDemo(false),
                  setStudent(false),
                  setEdit(false),
                  setClickPassword(true),
                  setPassword(""),
                  setAdminPassword(""),
                  setAdminEmail(""),
                  setAuth(false),
                  setIsResetting(false),
                  setNewPassword(""),
                  setSave(false),
                  setCreated(false),
                  setTitleClicked(false),
                  setSaveRipple(false),
                  setResetClicked(false),
                  setEye(true),
                  setHide("password"),
                  setUserEmail("");
              }}
              style={{
                border: "2px solid red",
                background: "transparent",
                color: "red",
                marginTop: '20px'
              }}
            >
              End Demo
            </Button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginRight: "10px"
            }}
          >
            <Button
              onClick={() => {
                setOpenModal(true), 
                setStudent(false), 
                setResetTernary(false);
              }}
              style={{
                border: `2px solid ${textColor}`,
                background: "transparent",
                color: `${textColor}`
              }}
            >
              Demo Mode
            </Button>
          </div>
        </>
      )}
    </>
  );
}
