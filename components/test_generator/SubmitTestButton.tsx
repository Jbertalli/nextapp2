import { Button, Divider } from "semantic-ui-react";

export default function SubmitTestButton(values) {

  const {
    student,
    isTimed,
    finish,
    allZero,
    setFinish,
  } = values;
  
  return (
    <>
      {student ? (
        <>
          {!isTimed ? (
            <>
              <Divider />
              {!finish ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      disabled={allZero}
                      onClick={() => setFinish(true)}
                      style={{
                        border: "2px solid #21BA45",
                        background: "transparent",
                        color: "#21BA45",
                      }}
                    >
                      Submit Test
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      onClick={() => setFinish(false)}
                      style={{
                        border: "2px solid red",
                        background: "transparent",
                        color: "red",
                      }}
                    >
                      Edit Test
                    </Button>
                  </div>
                </>
              )}
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}
