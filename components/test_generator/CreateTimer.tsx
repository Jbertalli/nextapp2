import TimerUI from "../test_generator/TimerUI";
import { Divider, Icon, Container } from "semantic-ui-react";
import styles from "../../styles/Test.module.css";

export default function CreateTimer(values) {
  
  const {
    student,
    edit,
    setEdit,
    questionColor,
    setTimeClick,
    setIsTimed,
    timeClick,
    timed,
    minute,
    setMinute,
    second,
    setSecond,
  } = values;
  
  return (
    <>
      {!student ? (
        <>
          <div>
            <Divider />
            {!edit ? (
              <>
                <div
                  style={{
                    transform: "translateY(-8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setEdit(true);
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
                    Create Timer
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
                    transform: "translate(-1vw, -5px)",
                  }}
                  className={styles.open}
                  onClick={() => {
                    setEdit(false), setTimeClick(false), setIsTimed(false);
                  }}
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
                <TimerUI
                  timeClick={timeClick}
                  timed={timed}
                  minute={minute}
                  setMinute={setMinute}
                  second={second}
                  setSecond={setSecond}
                  setTimeClick={setTimeClick}
                  questionColor={questionColor}
                />
              </>
            )}
          </div>
        </>
      ) : null}
    </>
  );
}
