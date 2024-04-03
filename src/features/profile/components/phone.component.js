import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Phone = () => {
  const { changeProfileEntry, profileData, phoneFormat } =
    useContext(ProfileContext);

  return (
    <>
      <JournalQuestion
        question={"What is your phone number?"}
        helpText={"(XXX)XXX-XXXX"}
      />
      <TextInput
        accessibilityLabel={"phone-number-input"}
        value={phoneFormat(profileData.phone)}
        onChangeText={(change) => changeProfileEntry(change, "phone")}
        keyboardType={"phone-pad"}
        returnKeyType={"done"}
      />
    </>
  );
};
