import { Button, Icon } from "semantic-ui-react";

export default function NightMode(values) {

  const {
    night,
    setNight,
    setBackground,
    setTextColor,
    setQuestionColor,
    resize
  } = values;

  return (
    <>
      {!night ? (
        <>
          <Button
            onClick={() => {
                setNight(true),
                setBackground("#202020"),
                setTextColor("#f2f2f2"),
                setQuestionColor("#f2f2f2");
            }}
            style={{
              position: "absolute",
              marginTop: "20px",
              marginLeft: "20px",
              background: "black",
              color: "white",
            }}
          >
            <Icon name="moon" />
            {resize ? "Night Mode" : "Dark"}
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
                setNight(false),
                setBackground("white"),
                setTextColor(""),
                setQuestionColor("#125CA1");
            }}
            style={{
              position: "absolute",
              marginTop: "20px",
              marginLeft: "20px",
              background: "white",
              color: "black",
            }}
          >
            <Icon name="sun" />
            {resize ? "Day Mode" : "Light"}
          </Button>
        </>
      )}
    </>
  );
}
