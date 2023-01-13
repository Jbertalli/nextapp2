import { Icon } from "semantic-ui-react";

export default function OpenNameDate(values) {

  const {
    setOpenNameDate,
    questionColor
  } = values;
  
  return (
    <>
      <div
        style={{
          transform: "translateY(-8px)",
          cursor: "pointer",
        }}
        onClick={() => {
          setOpenNameDate(true);
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
          Open Name and Date
        </div>
      </div>
    </>
  );
}
