import React from "react";
import { Select } from "easy-ui-react-lib";
import { Option, GroupOption } from "easy-ui-react-lib";
import "./styles.css";

const SelectStory = () => {
  const selectOneOption = `
  <Select placeholder="Select">
    <Option>Google</Option>
    <Option>Facebook</Option>
  </Select>
  `;

  const selectMultypleOptionList = `
  <Select placeholder="Select" multypleType="list">
    <Option id={1}>Google</Option>
    <Option id={2}>Facebook</Option>
  </Select>
  `;

  const selectMultypleOptionBlock = `
  <Select placeholder="Select" multypleType="block">
    <Option id={1}>Google</Option>
    <Option id={2}>Facebook</Option>
  </Select>
  `;

  const groupOptions = `
  <Select placeholder="Select">
    <GroupOptions title="Select">
      <Option>Google</Option>
      <Option>Facebook</Option>
    </GroupOptions>
    <GroupOptions title="Select-2">
      <Option>Google</Option>
      <Option>Facebook</Option>
    </GroupOptions>
  </Select>
  `;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, placeholder, value, onChange, id, multypleType = list,block{" "}
        </p>
        <p className="component-title">Select one Option</p>
        <Select placeholder="Select">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <pre className="component-code long">{selectOneOption}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Select multyple Options(List)</p>
        <Select placeholder="Select" multypleType="list">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <pre className="component-code long">{selectMultypleOptionList}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Select multyple Options(block)</p>
        <Select placeholder="Select" multypleType="block">
          <Option id={1}>Google</Option>
          <Option id={2}>Facebook</Option>
        </Select>
        <pre className="component-code long">{selectMultypleOptionBlock}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Group Options</p>
        <Select placeholder="Select">
          <GroupOption title="Select">
            <Option>Google</Option>
            <Option>Facebook</Option>
          </GroupOption>
          <GroupOption title="Select-2">
            <Option>Google</Option>
            <Option>Facebook</Option>
          </GroupOption>
        </Select>
        <pre className="component-code long">{groupOptions}</pre>
      </div>
    </>
  );
};

export default SelectStory;
