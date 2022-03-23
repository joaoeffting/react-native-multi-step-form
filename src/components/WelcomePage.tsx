import React from "react";
import { View, Button } from "react-native";

type WelcomePageProps = {
  onNextStepClick: () => void;
};

const WelcomePage = ({ onNextStepClick }: WelcomePageProps) => {
  return (
    <View>
      Welcome Page
      <Button title="Start Registration" onPress={onNextStepClick} />
    </View>
  );
};

export default WelcomePage;
