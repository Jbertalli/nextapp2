import { Button, Divider } from "semantic-ui-react";
import styles from "../../styles/Test.module.css";

export default function EditTitle(values) {

  const {
    student,
    serviceList,
    save,
    setSave,
    setCreated,
    titleClicked,
    setTitleClicked,
    saveRipple,
    setServiceList,
    setOpenAnswerKey,
    setOpenQuestionKey,
    setOpenStudentAnswers,
    setName,
    setDate,
    setTitle,
    setDateClicked,
    setSecond,
    setTimed,
    setTimeClick,
    setOpenEmail,
    setUserEmail,
    setFinish,
    title,
    setNameClicked,
    questionColor
  } = values;

  return (
    <>
      {!student ? (
        <>
          <div>
            {serviceList.length > 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  {save ? (
                    <>
                      <Button
                        onClick={() => {
                          setSave(false),
                            setCreated(false),
                            setTitleClicked(false);
                        }}
                        style={{
                          border: "2px solid red",
                          background: "transparent",
                          color: "red",
                        }}
                      >
                        Edit Questions and Answers
                      </Button>
                    </>
                  ) : (
                    <>
                      <button
                        className={saveRipple ? styles.saveButton : null}
                        onClick={() => {
                            setSave(true),
                            setCreated(true),
                            setTitleClicked(true);
                        }}
                        style={{
                          background: "transparent",
                          padding: "7px 21px 7px 21px",
                          color: "#21BA45",
                          fontWeight: "700",
                          fontSize: "14px",
                          fontFamily: "Nunito",
                          borderRadius: ".28571429rem",
                          border: "2px solid #21BA45",
                        }}
                      >
                        Save Questions and Answers
                      </button>
                    </>
                  )}
                </div>
                <div>
                  {!student ? (
                    <>
                      <div
                        style={{
                          marginTop: "5px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {serviceList.length > 1 ? (
                          <>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                transform: "translateY(10px)",
                                marginBottom: "15px",
                              }}
                            >
                              <Button
                                onClick={() => {
                                  setServiceList([
                                    {
                                      id: "",
                                      service: "",
                                      answer: "",
                                      student: "",
                                    },
                                  ]),
                                    setOpenAnswerKey(false),
                                    setOpenQuestionKey(false),
                                    setOpenStudentAnswers(false),
                                    setSave(false),
                                    setName(""),
                                    setDate(""),
                                    setTitle(""),
                                    setNameClicked(false),
                                    setNameClicked(false),
                                    setDateClicked(false),
                                    setTitleClicked(false),
                                    setSecond("0"),
                                    setTimed(false),
                                    setTimeClick(false),
                                    setOpenEmail(false),
                                    setUserEmail(""),
                                    setFinish(false);
                                }}
                                style={{
                                  border: "2px solid red",
                                  background: "transparent",
                                  color: "red",
                                }}
                              >
                                Clear All Questions
                              </Button>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                </div>
                <Divider />
              </>
            ) : null}
          </div>
          <div>
            {!titleClicked ? (
              <>
                <div>
                  <h2
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "5px",
                    }}
                  >
                    Assignment Title
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      color: "black",
                    }}
                  >
                    <input
                      placeholder="Title"
                      value={title}
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
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  {title.length > 0 ? (
                    <>
                      <span
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          transform: "translate(40px, -40px) scale(0.8)",
                        }}
                      >
                        <Button
                          onClick={() => setTitleClicked(true)}
                          style={{
                            position: "absolute",
                            border: `2px solid ${questionColor}`,
                            background: "transparent",
                            color: `${questionColor}`,
                          }}
                        >
                          Save
                        </Button>
                      </span>
                    </>
                  ) : null}
                </div>
                <Divider />
              </>
            ) : (
              <>
                <div
                  style={{
                    transform: "translateY(20px)",
                  }}
                >
                  <span style={{ fontSize: "45px" }}>
                    <span
                      style={{
                        fontWeight: "500",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <b>{title}</b>
                    </span>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      transform: "translate(40px, -32px) scale(0.8)",
                    }}
                  >
                    <Button
                      onClick={() => {
                        setTitle(""), setTitleClicked(false);
                      }}
                      style={{
                        border: "2px solid #125CA1",
                        background: "transparent",
                        color: "#125CA1",
                      }}
                    >
                      Edit Title
                    </Button>
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <span
            style={{
              fontSize: "45px",
              display: title.length > 0 ? "block" : "none",
            }}
          >
            <span
              style={{
                fontWeight: "500",
                display: "flex",
                justifyContent: "center",
                transform: "translate(-13px)",
                marginTop: "40px",
                marginBottom: "20px",
              }}
            >
              <b>{title}</b>
            </span>
          </span>
        </>
      )}
    </>
  );
}
