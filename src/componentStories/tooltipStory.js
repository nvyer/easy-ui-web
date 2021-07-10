import React from "react";
import { Tooltip } from "easy-ui-react-lib";
import { Button } from "easy-ui-react-lib";
import "./styles.css";

const TooltipStory = () => {
  const primaryTooltip = `
  <Tooltip tooltipStyle="tooltip--primary" content="Hello" position="top">
   <Button>Easy-UI</Button>
  </Tooltip>
  `;

  const destructiveTooltip = `
  <Tooltip tooltipStyle="tooltip--destructive" content="Hello" position="bottom">
   <Button>Easy-UI</Button>
  </Tooltip>
  `;

  const neutralTooltip = `
  <Tooltip tooltipStyle="tooltip--neutral" content="Hello" position="top--right">
   <Button>Easy-UI</Button>
  </Tooltip>
  `;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Props: className, tooltipStyle, position(top, bottom, right, left, top--right,
          top--left, bottom--left, bottom--right), content
        </p>
        <p className="component-title">Primary</p>
        <Tooltip tooltipStyle="tooltip--primary" content="Hello" position="top">
          <Button>Easy-UI</Button>
        </Tooltip>
        <pre className="component-code long">{primaryTooltip}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Destructive</p>
        <Tooltip
          tooltipStyle="tooltip--destructive"
          content="Hello"
          position="bottom"
        >
          <Button>Easy-UI</Button>
        </Tooltip>
        <pre className="component-code long">{destructiveTooltip}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <Tooltip
          tooltipStyle="tooltip--neutral"
          content="Hello"
          position="top--right"
        >
          <Button>Easy-UI</Button>
        </Tooltip>
        <pre className="component-code long">{neutralTooltip}</pre>
      </div>
    </>
  );
};

export default TooltipStory;
