import React from "react";
import { Tag } from "easy-ui-react-lib";
import "./styles.css";

const TagStory = () => {
  const basicTag = `<Tag />`;
  const secondaryTag = `<Tag type="secondary" placeholder="Press Enter to submit" />`;

  return (
    <>
      <div className="component-container">
      <p className="component-header">
        Props: className, placeholder, type(primary,secondary)
      </p>
        <p className="component-title">Default</p>
        <Tag />
        <span className="component-code">{basicTag}</span>
      </div>
      <div className="component-container">
        <p className="component-title">Secondary</p>
        <Tag type="secondary" placeholder="Press Enter to submit" />
        <span className="component-code">{secondaryTag}</span>
      </div>
    </>
  );
};

export default TagStory;
