import React from "react";
import { View, Text, Button } from "react-native";

type StepOneProps = {
  onNextStepClick: () => void;
  onPreviousStepClick: () => void;
};

const StepOne = ({ onNextStepClick, onPreviousStepClick }: StepOneProps) => {
  return (
    <View>
      <Text>Step One</Text>
      <Button title="Previous" onPress={onPreviousStepClick} />
      <Button title="Save and Next" onPress={onNextStepClick} />
    </View>
  );
};

export default StepOne;
