import React from "react";
import { NativeSelect } from "easy-ui-react-lib";
import "./styles.css";

const NativeSelectStory = () => {
  const primaryNativeSelect = `
  <NativeSelect>
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>
  `;

  const neutralNativeSelect = `
  <NativeSelect selectStyle="native--select--neutral">
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>
  `;

  const darkNativeSelect = `
  <NativeSelect selectStyle="native--select--dark">
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>
  `;

  const normalNativeSelect = `
  <NativeSelect selectStyle="native--select--normal">
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>
  `;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, onChange, disabled, selectStyle, placeholder, form, multiple,
          name
        </p>
        <p className="component-title">Primary</p>
        <NativeSelect selectStyle="native--select--primary">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code long">{primaryNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <NativeSelect selectStyle="native--select--neutral">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code long">{neutralNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Dark</p>
        <NativeSelect selectStyle="native--select--dark">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code long">{darkNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Normal</p>
        <NativeSelect selectStyle="native--select--normal">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code long">{normalNativeSelect}</pre>
      </div>
    </>
  );
};

export default NativeSelectStory;
