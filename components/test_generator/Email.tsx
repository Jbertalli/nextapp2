import styles from "../../styles/Test.module.css";
import { Divider, Container, Icon, Button } from "semantic-ui-react";

export default function Email(values) {

  const {
    openEmail,
    setOpenEmail,
    questionColor,
    finish,
    userEmail,
    setUserEmail,
    validEmail,
    isValid,
    send,
  } = values;
  
  return (
    <>
      <Divider />
      <div>
        {!openEmail ? (
          <>
            <div
              style={{
                transform: "translateY(-8px)",
                cursor: "pointer",
              }}
              onClick={() => {
                setOpenEmail(true);
              }}
            >
              <div
                style={{
                  marginLeft: "-25px",
                  display: "flex",
                  color: `${questionColor}`,
                  transform: "translateY(100%) scale(0.8)",
                }}
              >
                <Icon name="chevron down" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: `${questionColor}`,
                }}
              >
                Email Grade
              </div>
            </div>
          </>
        ) : (
          <>
            <Container
              style={{
                color: "red",
                display: "flex",
                justifyContent: "flex-end",
                cursor: "pointer",
                marginRight: "25px",
                transform: "translate(-1vw, -5px)",
              }}
              className={styles.open}
              onClick={() => setOpenEmail(false)}
            >
              <div
                style={{
                  transform: "scale(2)",
                  zIndex: "10",
                }}
              >
                x
              </div>
            </Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
              }}
            >
              <div>
                <h2>Email Recipient</h2>
                <div
                  style={{
                    color: "black",
                  }}
                >
                  <input
                    disabled={finish ? false : true}
                    type="email"
                    name="user_email"
                    placeholder="email address"
                    style={{
                      padding: "9px 14px 9px 14px",
                      fontSize: "14px",
                      fontWeight: "400",
                      cursor: "text",
                      width: "178.5px",
                      borderRadius: "4px",
                      border: "1px solid rgba(34, 36, 38. 0.15)",
                    }}
                    value={userEmail}
                    onChange={(e) => {
                      setUserEmail(e.target.value), validEmail(userEmail);
                    }}
                  />
                </div>
                {userEmail.length > 0 && !isValid ? (
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
                      Error: Email is invalid!
                    </div>
                  </>
                ) : null}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "25px",
                  }}
                >
                  <Button
                    disabled={!isValid}
                    onClick={send}
                    style={{
                      border: "2px solid #21BA45",
                      background: "transparent",
                      color: "#21BA45",
                    }}
                  >
                    Email Grade
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
