import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { JournalQuestion } from "../../../components/journal-question.component";
import { AuthTextInput } from "../../../components/text-input.component";

export const Other = () => {
  const { onboardingData, setOnboardingData } = useContext(
    AuthenticationContext
  );
  const { typeOfPain } = onboardingData;

  return (
    <>
      <JournalQuestion
        question={"Please enter the location of your worst pain."}
      />
      <AuthTextInput
        accessibilityLabel={"type-of-pain-input"}
        value={typeOfPain}
        onChangeText={(typeOfPain) =>
          setOnboardingData((object) => ({ ...object, typeOfPain: typeOfPain }))
        }
      />
    </>
  );
};
