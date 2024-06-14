import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Dob = () => {
  const { changeProfileEntry, profileData } = useContext(ProfileContext);
  const { dob } = profileData;

  function dobFormat() {
    const cleaned = ('' + dob).replace(/\D/g, '');
  
    const match = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
  
    if (match) {
      let formattedDob = '';
      if (match[1]) {
        formattedDob += `${match[1]}`;
      }
      if (match[2]) {
        formattedDob += `/${match[2]}`;
      }
      if (match[3]) {
        formattedDob += `/${match[3]}`;
      }
      return formattedDob;
    }
    return dob;
  }

  return (
    <>
      <JournalQuestion
        question={"What is your date of birth?"}
        helpText={"MM/DD/YYYY"}
      />
      <TextInput
        accessibilityLabel={"phone-number-input"}
        value={dobFormat()}
        onChangeText={(change) => changeProfileEntry(change, "dob")}
      />
    </>
  );
};
