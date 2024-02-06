import React from "react";
import { JournalQuestion } from "../journal-question.component";
import { SingleSelectCheckBox } from "../checkbox/single-select-checkbox.component";
import { View } from "react-native";
import { options } from "./options.json";

export const LittleInterestOrPleasure = ({ setState, value }) => {
  const add = (optionId) => {
    setState((object) => ({
      ...object,
      littleInterestOrPleasure: optionId,
    }));
  };

  const opts = options.map((option) => {
    return (
      <SingleSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        selectedOption={value}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={
          "Over the last 2 weeks, how often have you been bothered by the following problem: little interest or pleasure in doing things?"
        }
        helpText={"Choose one"}
      />
      <View style={{ marginBottom: 140 }}>{opts}</View>
    </>
  );
};
