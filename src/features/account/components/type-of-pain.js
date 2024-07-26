import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { SingleSelectCheckBox } from "../../../components/checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { typeOfPain } from "./../data/onboard-data.json";
import { isAndroid } from "../../../utils";
import { OnboardContext } from "../../../services/onboard/onboard.context";

export const TypeOfPain = () => {
  const { onboardingData, setOnboardingData } = useContext(OnboardContext);
  const add = (optionId) => {
    setOnboardingData((object) => ({
      ...object,
      typeOfPain: optionId,
    }));
  };

  const options = typeOfPain.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.option}
        optionData={option}
        selectedOption={onboardingData.typeOfPain}
      />
    );
  });

  return (
    <>
      <JournalQuestion question={"what location of pain are you currently working on managing most?"} />
      <View style={{ marginTop: isAndroid ? 5 : 20, marginBottom: 140 }}>
        {options}
      </View>
    </>
  );
};
