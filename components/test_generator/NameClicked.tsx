import { Button, Container } from "semantic-ui-react";
import styles from "../../styles/Test.module.css";

export default function NameClicked(values) {

  const {
    nameClicked,
    setName,
    name,
    setNameClicked,
    questionColor,
    setOpenNameDate,
  } = values;
  
  return (
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
        onClick={() => setOpenNameDate(false)}
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
      {!nameClicked ? (
        <>
          <div>
            <h2
              style={{
                marginBottom: "5px",
              }}
            >
              Name
            </h2>
            <div
              style={{
                color: "black",
              }}
            >
              <input
                placeholder="Name"
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
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {name.length > 0 ? (
              <>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    transform: "translate(40px, -44px) scale(0.8)",
                  }}
                >
                  <Button
                    onClick={() => setNameClicked(true)}
                    style={{
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
        </>
      ) : (
        <>
          <div style={{ transform: "translateY(25px)" }}>
            <span style={{ fontSize: "24px" }}>
              <span style={{ fontWeight: "500" }}>Name: </span>
              <span style={{ fontWeight: "300" }}>{name}</span>
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
                  setName(""), setNameClicked(false);
                }}
                style={{
                  border: `2px solid ${questionColor}`,
                  background: "transparent",
                  color: `${questionColor}`,
                }}
              >
                Edit Name
              </Button>
            </span>
          </div>
        </>
      )}
    </>
  );
}
