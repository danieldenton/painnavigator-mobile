import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { JournalQuestion } from "../../../components/journal-question.component";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { injectionsAndSurgery } from "./../data/onboard-data.json";

export const PainInjections = () => {
  const { onboardingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { painInjections } = onboardingData;
  const add = (optionId) => {
    setOnboardingData((object) => ({
      ...object,
      painInjections: optionId,
    }));
  };

  const options = injectionsAndSurgery.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        selectedOption={painInjections}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={
          "Are you currently undergoing pain injections as part of your treatment plan?"
        }
      />
      <View style={{ marginTop: 20, marginBottom: 140 }}>{options}</View>
    </>
  );
};
