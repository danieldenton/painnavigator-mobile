import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Phone = () => {
  const { changeProfileEntry, profileData } = useContext(ProfileContext);
  const { phone } = profileData;

  function phoneFormat() {
    const cleaned = ('' + phone).replace(/\D/g, '');
  
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  
    if (match) {
      let formattedNumber = '';
      if (match[1]) {
        formattedNumber += `(${match[1]}`;
      }
      if (match[2]) {
        formattedNumber += `)${match[2]}`;
      }
      if (match[3]) {
        formattedNumber += `-${match[3]}`;
      }
      return formattedNumber;
    }
    return phone;
  }

  return (
    <>
      <JournalQuestion
        question={"What is your phone number?"}
        helpText={"(XXX)XXX-XXXX"}
      />
      <TextInput
        accessibilityLabel={"phone-number-input"}
        value={phoneFormat()}
        onChangeText={(change) => changeProfileEntry(change, "phone")}
        keyboardType={"phone-pad"}
        returnKeyType={"done"}
      />
    </>
  );
};
