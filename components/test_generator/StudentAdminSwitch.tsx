import { Divider, Button, Icon } from "semantic-ui-react";

export default function StudentAdminSwitch({
  student,
  demo,
  setStudent,
  setFinish,
  setIsTimed,
  setOpenAnswerKey,
  setOpenQuestionKey,
  setOpenStudentAnswers,
  setEdit,
  setSave,
  setTimeClick,
  textColor,
  setOpenEmail,
  setOpenNameDate,
}) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {student ? (
              <>
                <h1>Student View</h1>
              </>
            ) : (
              <>
                <h1>Admin View</h1>
              </>
            )}
          </div>
          {!demo ? (
            <>
              <div
                style={{
                  width: "100%",
                }}
              >
                <Divider />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {student ? (
                  <>
                    <div>
                      <Button
                        onClick={() => {
                            setStudent(false),
                            setFinish(false),
                            setIsTimed(false),
                            setOpenAnswerKey(false),
                            setOpenQuestionKey(false),
                            setOpenStudentAnswers(false),
                            setEdit(false),
                            setSave(false),
                            setTimeClick(false);
                        }}
                        style={{
                          border: `2px solid ${textColor}`,
                          background: "transparent",
                          color: `${textColor}`,
                        }}
                      >
                        Switch to Admin
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Button
                        onClick={() => {
                            setStudent(true),
                            setFinish(false),
                            setSave(true),
                            setOpenEmail(false),
                            setOpenNameDate(false);
                        }}
                        style={{
                          border: `2px solid ${textColor}`,
                          background: "transparent",
                          color: `${textColor}`,
                        }}
                      >
                        Switch to Student&nbsp;&nbsp;&nbsp;
                        <span>
                          <Icon name="pencil" />
                        </span>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : null}
        </div>
        <Divider />
      </div>
    </>
  );
}
