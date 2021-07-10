import React from "react";
import { Slider } from "easy-ui-react-lib";
import "./styles.css";

const SliderStory = () => {
  const primarySlider = `<Slider sliderColor="primary"/>`;
  const destructiveSlider = `<Slider sliderColor="destructive"/>`;
  const stepSlider = `<Slider step={10} min={0} max={100} sliderColor="destructive" marks label/>`;
  const disabledSlider = `<Slider disabled />`;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, step, min, max, defaultValue, onChange disabled, marks, label,
          sliderColor
        </p>
        <p className="component-title">Primary</p>
        <Slider sliderColor="primary" />
        <pre className="component-code">{primarySlider}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <Slider sliderColor="destructive" />
        <pre className="component-code">{destructiveSlider}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Step, Min, Max, Marks, Label</p>
        <Slider
          step={10}
          min={0}
          max={100}
          sliderColor="destructive"
          marks
          label
        />
        <pre className="component-code">{stepSlider}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Disabled</p>
        <Slider
          step={10}
          min={0}
          max={100}
          sliderColor="destructive"
          marks
          label
          disabled
        />
        <pre className="component-code">{disabledSlider}</pre>
      </div>
    </>
  );
};

export default SliderStory;
