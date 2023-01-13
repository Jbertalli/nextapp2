import { Button, Divider, Icon, Modal } from "semantic-ui-react";

export default function ReturnAdminModal({
  newModal,
  setNewModal,
  isResetting,
  setIsResetting,
  errorCheck,
  setErrorCheck,
  hide,
  setHide,
  eye,
  setEye,
  setResetTernary,
  resetTernary,
  sendResetEmail,
  setPassword,
  resetPassword,
  randomString,
  setResetPassword,
  setAdminPassword,
  setResetClicked,
  setShow,
  sameReset,
  resetMatch,
  setCreated,
  setStudent,
  setHideAdmin,
  setSave,
  setClickPassword,
  setAuth,
  resize,
  newPassword,
  setNewPassword,
  same,
  match,
}) {
  return (
    <>
      <Modal
        dimmer
        open={newModal}
        size="small"
        style={{
          transform: isResetting ? "translateY(-300px)" : "translateY(-200px)",
          borderRadius: "20px",
          position: "fixed",
          height: isResetting ? "580px" : "380px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
            fontSize: "40px",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => {
              setNewModal(false),
              setErrorCheck(false),
              setHide("password"),
              setEye(true),
              setResetTernary(false);
          }}
        >
          x
        </div>
        {isResetting ? (
          <>
            <div>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                Forgot Password?
              </h1>
              <h3
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                }}
              >
                Send a new Admin Password to my Email
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                {resetTernary ? (
                  <>
                    <Button
                      onClick={() => {
                          sendResetEmail(),
                          setPassword(resetPassword),
                          setResetTernary(false);
                      }}
                      style={{
                        border: "2px solid #21BA45",
                        background: "transparent",
                        color: "#21BA45",
                      }}
                    >
                      Email New Password
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                          randomString(20),
                          setResetPassword(randomString(20)),
                          setAdminPassword(""),
                          setResetClicked(true),
                          setResetTernary(true);
                      }}
                      style={{
                        border: "2px solid red",
                        background: "transparent",
                        color: "red",
                      }}
                    >
                      Reset Password
                    </Button>
                  </>
                )}
              </div>
              <Divider />
              <h2
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                Enter New Admin Password
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <input
                  type={hide}
                  placeholder="New Admin Password"
                  style={{
                    padding: "9px 14px 9px 14px",
                    fontSize: "14px",
                    fontWeight: "400",
                    cursor: "text",
                    width: "220px",
                    borderRadius: "4px",
                    border: "1px solid rgba(34, 36, 38. 0.15)",
                    position: "relative",
                    zIndex: "100",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {eye ? (
                  <>
                    <Icon
                      name="eye"
                      onClick={() => {
                        setEye(false), setHide("text"), setShow(true);
                      }}
                      style={{
                        transform: "translate(90px, 14px) scale(1.1)",
                        color: "#80808099",
                        position: "absolute",
                        zIndex: "100",
                        cursor: "pointer",
                      }}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      name="eye"
                      onClick={() => {
                        setEye(true), setHide("password"), setShow(false);
                      }}
                      color="blue"
                      style={{
                        transform: "translate(90px, 14px) scale(1.1)",
                        color: "#80808099",
                        position: "absolute",
                        zIndex: "100",
                        cursor: "pointer",
                      }}
                    />
                  </>
                )}
              </div>
              {!sameReset && errorCheck ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      transform: "translate(-5px, 50%)",
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    Error: Password is Invalid
                  </div>
                </>
              ) : null}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                {/* {show ? (
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
                            )} */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={() => {
                    resetMatch(), setCreated(false), setErrorCheck(true);
                  }}
                  style={{
                    border: "2px solid #125CA1",
                    background: "transparent",
                    color: "#125CA1",
                  }}
                >
                  Submit
                </Button>
                {sameReset ? (
                  <>
                    <Button
                      onClick={() => {
                          setStudent(false),
                          setHideAdmin(false),
                          setSave(false),
                          setNewModal(false),
                          setClickPassword(true),
                          setAuth(false),
                          setErrorCheck(false);
                      }}
                      style={{
                        border: "2px solid black",
                        background: "transparent",
                        color: "black",
                      }}
                    >
                      Go to Admin
                    </Button>
                  </>
                ) : null}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              OR
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Button
                onClick={() => {
                    setIsResetting(false),
                    setErrorCheck(false),
                    setEye(true),
                    setHide("password");
                }}
                style={{
                  border: "2px solid red",
                  background: "transparent",
                  color: "red",
                }}
              >
                Enter Password?
              </Button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: resize ? "35px" : "28px",
                fontWeight: "700",
                marginBottom: "20px",
                marginTop: "3vh",
              }}
            >
              Enter Admin Password
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <input
                type={hide}
                placeholder="Admin Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{
                  padding: "9px 14px 9px 14px",
                  fontSize: "14px",
                  fontWeight: "400",
                  cursor: "text",
                  width: "178.5px",
                  borderRadius: "4px",
                  border: "1px solid rgba(34, 36, 38. 0.15)",
                  position: "relative",
                  zIndex: "100",
                }}
              />
              {eye ? (
                <>
                  <Icon
                    name="eye"
                    onClick={() => {
                      setEye(false), setHide("text"), setShow(true);
                    }}
                    style={{
                      transform: "translate(72px, 14px) scale(1.1)",
                      color: "#80808099",
                      position: "absolute",
                      zIndex: "100",
                      cursor: "pointer",
                    }}
                  />
                </>
              ) : (
                <>
                  <Icon
                    name="eye"
                    onClick={() => {
                      setEye(true), setHide("password"), setShow(false);
                    }}
                    color="blue"
                    style={{
                      transform: "translate(72px, 14px) scale(1.1)",
                      color: "#80808099",
                      position: "absolute",
                      zIndex: "100",
                      cursor: "pointer",
                    }}
                  />
                </>
              )}
            </div>
            {!same && errorCheck ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  transform: "translate(-5px, 50%)",
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "10px",
                }}
              >
                Error: Admin Password is Invalid
              </div>
            ) : null}
            {/* <div
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
                    </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                onClick={() => {
                  match(), setCreated(false), setErrorCheck(true);
                }}
                style={{
                  border: "2px solid #125CA1",
                  background: "transparent",
                  color: "#125CA1",
                }}
              >
                Submit
              </Button>
              {same ? (
                <>
                  <Button
                    onClick={() => {
                        setStudent(false),
                        setHideAdmin(false),
                        setSave(false),
                        setNewModal(false),
                        setClickPassword(true),
                        setAuth(false),
                        setErrorCheck(false);
                    }}
                    style={{
                      border: "2px solid black",
                      background: "transparent",
                      color: "black",
                    }}
                  >
                    Go to Admin
                  </Button>
                </>
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              OR
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <Button
                onClick={() => {
                    setIsResetting(true),
                    setErrorCheck(false),
                    setEye(true),
                    setHide("password");
                }}
                style={{
                  border: "2px solid red",
                  background: "transparent",
                  color: "red",
                }}
              >
                Forgot Password?
              </Button>
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
