import { Button, Divider } from "semantic-ui-react";
import { useTimer } from "react-timer-hook";

export default function MyTimer(values) {

  const {
    expiryTimestamp,
    secondTime,
    minuteTime,
    finish,
    setFinish,
    student,
    timed,
    setTimed,
    timeClick,
    edit,
    isTimed,
    setIsTimed,
    questionColor,
    setTimeClick
  } = values;

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      console.warn("onExpire called"), setFinish(true);
    },
  });

  // console.log(minutes);
  // console.log(seconds);

  // let value = secondTime;
  // console.log(typeof value);

  const time = new Date();
  time.setSeconds(time.getSeconds() + secondTime);
  time.setMinutes(time.getMinutes() + minuteTime);

  // console.log('isRunning', isRunning);

  return (
    <div
      style={{
        textAlign: "center",
        transform: "translateY(50px)",
      }}
    >
      {!student ? (
        <>
          {timed ? (
            <>
              {edit ? (
                <>
                  <div
                    style={{
                      fontSize: "100px",
                      marginBottom: "15px",
                    }}
                  >
                    <span>{minutes}</span>:<span>{seconds}</span>
                  </div>
                  <Button
                    onClick={() => {
                      setTimed(false), setIsTimed(false);
                    }}
                    style={{
                      marginTop: "40px",
                      marginBottom: "55px",
                      border: `2px solid red`,
                      background: "transparent",
                      color: `red`,
                    }}
                  >
                    Reset Time Limit
                  </Button>
                </>
              ) : null}
            </>
          ) : (
            <>
              {timeClick ? (
                <>
                  <div
                    style={{
                      marginBottom: "10px",
                      transform: "translateY(-62px)",
                    }}
                  >
                    <div onClick={pause}>
                      <Button
                        onClick={() => {
                          setTimed(true), restart(time), setIsTimed(true);
                        }}
                        style={{
                          border: `2px solid ${questionColor}`,
                          background: "transparent",
                          color: `${questionColor}`,
                        }}
                      >
                        Set Time Limit
                      </Button>
                      <Button
                        onClick={() => {
                          setTimeClick(false), setIsTimed(false);
                        }}
                        style={{
                          border: "2px solid red",
                          background: "transparent",
                          color: "red",
                          marginTop: "10px",
                        }}
                      >
                        Delete Time Limit
                      </Button>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          )}
        </>
      ) : (
        <>
          {isTimed ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: "100",
                }}
              >
                {finish ? (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        transform: "translateY(-45px)",
                      }}
                    >
                      <Button
                        onClick={() => {
                          setFinish(false), restart(time);
                        }}
                        style={{
                          border: "2px solid red",
                          background: "transparent",
                          color: "red",
                        }}
                      >
                        Restart Test
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Button
                        style={{
                          border: "2px solid #125CA1",
                          background: "transparent",
                          color: "#125CA1",
                          transform: "translateY(-10px)",
                        }}
                        disabled={isRunning}
                        onClick={resume}
                      >
                        Start Test
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : null}
          {isTimed ? (
            <>
              {finish ? (
                <>
                  <h2
                    style={{
                      transform: "translateY(-50px)",
                    }}
                  >
                    Test Completed
                  </h2>
                </>
              ) : (
                <>
                  <div
                    style={{
                      fontSize: "100px",
                      marginBottom: "-105px",
                      transform: "translateY(42px)",
                    }}
                  >
                    <span>{minutes}</span>:<span>{seconds}</span>
                  </div>
                  {isRunning ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          transform: "translateY(190px)",
                        }}
                      >
                        <h3
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            position: "absolute",
                          }}
                        >
                          Test in progress...
                        </h3>
                      </div>
                    </>
                  ) : null}
                </>
              )}
            </>
          ) : null}
        </>
      )}
      {/* {student ? (
            <>
                {isTimed ? (
                <>
                    {!finish ? (
                    <>
                        <div
                            style={{
                                marginBottom: '230px'
                            }}
                        >
                            <Divider />
                        </div>
                    </>
                    ): null}
                </>
                ): null}
            </>
            ): null} */}
      {!finish && isTimed && student ? (
        <>
          <div
            style={{
              marginBottom: "230px",
            }}
          >
            <Divider />
          </div>
        </>
      ) : null}
    </div>
  );
}
