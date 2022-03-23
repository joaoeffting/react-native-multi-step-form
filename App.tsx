import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { STEPS } from "./constants";
import Steps from "./src/components/Steps";

const initialState = { step: STEPS.WELCOME_PAGE };

type State = {
  step: string;
};

type Action = {
  type: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case STEPS.WELCOME_PAGE:
      return { ...state, step: STEPS.WELCOME_PAGE };
    case STEPS.STEP_ONE:
      return { ...state, step: STEPS.STEP_ONE };
    case STEPS.STEP_TWO:
      return { ...state, step: STEPS.STEP_TWO };
    case STEPS.STEP_FINAL:
      return { ...state, step: STEPS.STEP_FINAL };
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step } = state;

  return (
    <View style={styles.container}>
      <Steps step={step} dispatch={dispatch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
