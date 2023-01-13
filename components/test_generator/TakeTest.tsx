import styles from "../../styles/Test.module.css";

export default function TakeTest(values) {

  const {
    student,
    created,
    demo,
    setStudent,
    setOpenModal,
    setFinish,
    setSave,
    setDemo,
    setNewPassword,
    setEye,
    setHide
  } = values;
  
  return (
    <>
      {!student ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              marginRight: "10px",
            }}
          >
            {created && demo ? (
              <>
                <div>
                  <button
                    className={styles.takeTest}
                    onClick={() => {
                        setStudent(true),
                        setOpenModal(false),
                        setFinish(false),
                        setSave(true),
                        setDemo(true),
                        setNewPassword(""),
                        setEye(true),
                        setHide("password");
                    }}
                    style={{
                      padding: "7px 21px 7px 21px",
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily: "Nunito",
                      borderRadius: ".28571429rem",
                      border: `2px solid purple`,
                      background: "transparent",
                      color: "purple",
                    }}
                  >
                    Take Test
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}
