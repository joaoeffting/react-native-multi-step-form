import React from "react";
import { STEPS } from "../../constants";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepFinal from "./StepFinal";
import WelcomePage from "./WelcomePage";

const Steps = ({
  step,
  dispatch,
}: {
  step: string;
  dispatch: React.Dispatch<{ type: string }>;
}) => {
  if (step === STEPS.WELCOME_PAGE) {
    return (
      <WelcomePage onNextStepClick={() => dispatch({ type: STEPS.STEP_ONE })} />
    );
  }

  if (step === STEPS.STEP_ONE) {
    return (
      <StepOne
        onPreviousStepClick={() => dispatch({ type: STEPS.WELCOME_PAGE })}
        onNextStepClick={() => dispatch({ type: STEPS.STEP_TWO })}
      />
    );
  }

  if (step === STEPS.STEP_TWO) {
    return (
      <StepTwo
        onPreviousStepClick={() => dispatch({ type: STEPS.STEP_ONE })}
        onNextStepClick={() => dispatch({ type: STEPS.STEP_FINAL })}
      />
    );
  }

  return <StepFinal />;
};

export default Steps;
