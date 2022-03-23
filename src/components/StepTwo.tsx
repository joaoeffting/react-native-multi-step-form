import React from "react";
import { View, Text, Button } from "react-native";

type StepTwoProps = {
  onNextStepClick: () => void;
  onPreviousStepClick: () => void;
};

const StepTwo = ({ onNextStepClick, onPreviousStepClick }: StepTwoProps) => {
  return (
    <View>
      <Text>Step Two</Text>
      <Button title="Previous" onPress={onPreviousStepClick} />
      <Button title="Save and Next" onPress={onNextStepClick} />
    </View>
  );
};

export default StepTwo;
