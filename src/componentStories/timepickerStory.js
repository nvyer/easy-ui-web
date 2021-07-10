import React from "react";
import { TimePicker } from "easy-ui-react-lib";
import "./styles.css";

const TimepickerStory = () => {
  const timePicker = `<TimePicker />`;

  return (
    <>
      <div style={{ alignItems: "center" }} className="component-container">
        <p className="component-header">Props: className, label, onChange</p>
        <p className="component-title">Time Picker</p>
        <TimePicker />
        <pre style={{ marginTop: "20px" }} className="component-code">
          {timePicker}
        </pre>
      </div>
    </>
  );
};

export default TimepickerStory;
