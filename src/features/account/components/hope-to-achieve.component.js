import React from "react";
import { View } from "react-native";
import { JournalQuestion } from "../../../components/journal-question.component";
import {
  MultiSelectCheckBox,
  MultiSelectScroll,
} from "../../../components/multi-select-checkbox.component";
import { hopesOptions } from "./../data/onboard-data.json";

export const HopeToAchieve = ({ setState, value }) => {
  const selectedHopes = value;

  const add = (option) => {
    setState((object) => ({
      ...object,
      hopesToAcheive: [...selectedHopes, option],
    }));
  };

  const remove = (option) => {
    const newHopes = selectedHopes.filter((x) => x !== option);
    setState((entry) => ({
      ...entry,
      ["hopesToAchieve"]: newHopes,
    }));
  };

  const hopes = hopesOptions.map((option) => {
    return (
      <MultiSelectCheckBox
        add={add}
        key={option.id}
        optionData={option}
        remove={remove}
        selectedOptions={selectedHopes}
      />
    );
  });

  return (
    <>
      <JournalQuestion
        question={"What do you hope to achieve by completing PainNavigator?"}
        helpText={
          "Tap the circle to select. You can select more then one of these."
        }
      />
      <MultiSelectScroll>
        <View style={{ marginTop: 10, marginBottom: 60 }}>{hopes}</View>
      </MultiSelectScroll>
    </>
  );
};
