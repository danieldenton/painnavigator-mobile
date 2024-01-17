import React from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthTextInput } from "../../../components/text-input.component";

export const OtherTypeOfPain = ({ setState, value }) => {
  return (
    <>
      <JournalQuestion
        question={"Please enter the location of your worst pain."}
      />
      <AuthTextInput
        accessibilityLabel={"type-of-pain-input"}
        value={typeOfPain}
        onChangeText={(value) =>
          setState((object) => ({ ...object, typeOfPain: value }))
        }
      />
    </>
  );
};
