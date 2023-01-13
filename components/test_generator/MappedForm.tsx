import { Button, Divider, Icon } from "semantic-ui-react";

export default function MappedForm(values) {

  const {
    serviceList,
    save,
    student,
    finish,
    questionColor,
    handleQuestionChange,
    handleAnswerChange,
    handleStudentAnswerChange,
    handleServiceRemove,
    handleAddService
  } = values;

  return (
    <>
      <div>
        <form autoComplete="off">
          <div>
            {serviceList.map((singleService, index) => (
              <div key={singleService.id}>
                <div>
                  <h2>Question #{index + 1}</h2>
                  {save ? (
                    <>
                      <div
                        style={{
                          fontSize: "25px",
                        }}
                      >
                        {singleService.service}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        style={{
                          color: "black",
                        }}
                      >
                        <input
                          name="service"
                          type="text"
                          // id='service'
                          placeholder="Question"
                          value={singleService.service}
                          onChange={(e) => handleQuestionChange(e, index)}
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
                      </div>
                    </>
                  )}
                  {!student ? (
                    <>
                      <h2>Answer #{index + 1}</h2>
                      {save ? (
                        <>
                          <div
                            style={{
                              fontSize: "25px",
                            }}
                          >
                            {singleService.answer}
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              color: "black",
                            }}
                          >
                            <input
                              name="answer"
                              type="text"
                              // id='answer'
                              placeholder="Answer"
                              value={singleService.answer}
                              onChange={(e) => handleAnswerChange(e, index)}
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
                          </div>
                        </>
                      )}
                    </>
                  ) : null}
                  {student ? (
                    <>
                      <div
                        style={{
                          display:
                            singleService.service.length > 0 &&
                            singleService.answer.length > 0
                              ? "block"
                              : "none",
                          marginTop: "20px",
                        }}
                      >
                        <h2>Student Answer #{index + 1}</h2>
                        {finish ? (
                          <>
                            <div
                              style={{
                                fontSize: "25px",
                              }}
                            >
                              {singleService.student}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              style={{
                                color: "black",
                              }}
                            >
                              <input
                                name="student"
                                type="text"
                                // id='student'
                                placeholder="Student Question"
                                value={singleService.student}
                                onChange={(e) =>
                                  handleStudentAnswerChange(e, index)
                                }
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
                            </div>
                          </>
                        )}
                      </div>
                    </>
                  ) : null}
                  <Divider />
                </div>
                {singleService.student && singleService.student.length > 0 ? (
                  <>
                    <div>
                      {singleService.answer.toLowerCase() ===
                      singleService.student.toLowerCase() ? (
                        <>
                          <div
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              color: "green",
                            }}
                          >
                            <Icon name="check" />
                            <span>Correct</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            style={{
                              fontSize: "30px",
                              fontWeight: "500",
                              color: "red",
                            }}
                          >
                            <Icon
                              name="plus"
                              style={{ transform: "rotate(45deg)" }}
                            />
                            <span>Incorrect</span>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : null}
                <div
                  style={{
                    transform: "translateY(-5px)",
                  }}
                >
                  <Divider />
                </div>
                {!student ? (
                  <>
                    <div>
                      {serviceList.length !== 1 && (
                        <Button
                          onClick={() => handleServiceRemove(index)}
                          style={{
                            border: "2px solid red",
                            background: "transparent",
                            color: "red",
                          }}
                        >
                          <span>Remove Question #{index + 1}</span>
                        </Button>
                      )}
                    </div>
                    {serviceList.length > 1 ? <Divider /> : null}
                    {!save ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {serviceList.length - 1 === index && (
                            <Button
                              onClick={handleAddService}
                              style={{
                                border: `2px solid ${questionColor}`,
                                background: "transparent",
                                color: `${questionColor}`,
                              }}
                            >
                              Add a Question
                            </Button>
                          )}
                        </div>
                      </>
                    ) : null}
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}
