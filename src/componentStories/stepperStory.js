import React, { useState } from "react";
import { Stepper } from "easy-ui-react-lib";
import { Step } from "easy-ui-react-lib";
import { StepLabel } from "easy-ui-react-lib";
import { StepConnector } from "easy-ui-react-lib";
import { Button } from "easy-ui-react-lib";
import "./styles.css";

const StepperStory = () => {
  const [activeStep, setActiveStep] = useState(0);
  const basicStepper = `
  <Stepper activeStep={1}>
      <Step id={1}>
        <StepLabel>Step 1</StepLabel>
      </Step>
      <StepConnector />
      <Step id={2}>
        <StepLabel>Step 2</StepLabel>
      </Step>
      <StepConnector />
      <Step id={3}>
         <StepLabel>Step 3</StepLabel>
      </Step>
  </Stepper>
  `;

  return (
    <>
      <div className="component-container">
        <p className="component-header">
          Stepper props: className, activeStep(zero based index)
          <br />
          <br />
          Step props: className, id(required), error, checked, disabled
          <br />
          <br />
          StepLabel props: className
          <br />
          <br />
          StepConnector props: className
        </p>
        <p className="component-title">Stepper</p>
        <Stepper activeStep={activeStep}>
          <Step id={1}>
            <StepLabel>Step 1</StepLabel>
          </Step>
          <StepConnector />
          <Step id={2}>
            <StepLabel>Step 2</StepLabel>
          </Step>
          <StepConnector />
          <Step id={3}>
            <StepLabel>Step 3</StepLabel>
          </Step>
        </Stepper>
        {activeStep !== 3 ? (
          <Button onClick={() => setActiveStep(activeStep + 1)}>
            {activeStep === 2 ? "Finish" : "Next"}
          </Button>
        ) : (
          <Button onClick={() => setActiveStep(0)}>Back</Button>
        )}
        <pre className="component-code long">{basicStepper}</pre>
      </div>
    </>
  );
};

export default StepperStory;
