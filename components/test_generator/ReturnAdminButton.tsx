import styles from "../../styles/Test.module.css";

export default function ReturnAdminButton(values) {
    
  const {
    adminPassword,
    resetClicked,
    setNewModal,
    setSame,
  } = values;

  return (
    <>
      {adminPassword.length > 0 || resetClicked ? (
        <>
          <button
            className={styles.takeTest}
            onClick={() => {
              setNewModal(true), setSame(false);
            }}
            style={{
              padding: "7px 21px 7px 21px",
              fontWeight: "700",
              fontSize: "14px",
              fontFamily: "Nunito",
              borderRadius: ".28571429rem",
              border: "2px solid purple",
              background: "transparent",
              color: "purple",
            }}
          >
            Return to Admin Page
          </button>
        </>
      ) : null}
    </>
  );
}
