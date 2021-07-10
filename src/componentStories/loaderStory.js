import React from "react";
import { Loader } from "easy-ui-react-lib";
import "./styles.css";

const LoaderStory = () => {
  const primaryLoader = `<Loader color="primary" size="small"/>`;
  const secondaryLoader = `<Loader color="secondary" size="medium" label="loading..." />`;
  const defaultLoader = `<Loader size="large"/>`;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, size(small, medium, large), color(primary,secondary), label
        </p>
        <p className="component-title">Primary</p>
        <Loader color="primary" size="small" />
        <pre className="component-code">{primaryLoader}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Secondary</p>
        <Loader color="secondary" size="medium" label="loading..." />
        <pre className="component-code">{secondaryLoader}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">{`Default & Large`}</p>
        <Loader size="large" />
        <pre className="component-code">{defaultLoader}</pre>
      </div>
    </>
  );
};

export default LoaderStory;
