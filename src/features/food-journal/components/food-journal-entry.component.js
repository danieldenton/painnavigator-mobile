import React, { useContext } from "react";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { FoodJournalQuestionSection } from "./food-journal-question-section.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const FoodJournalEntry = ({ journalId, navigation }) => {
  const {
    updateFoodJournal,
    changeEntry,
    completeFoodJournal,
    meal,
    foodJournal,
  } = useContext(FoodJournalContext);
  const { uid } = useContext(AuthenticationContext);
  const { food, feelingBefore, feelingAfter } = foodJournal;

  const handleUpdateFoodJournal = () => {
    updateFoodJournal(journalId);
    navigation.navigate("JournalUpdated", { type: "FoodJournal" });
  };

  const handleCompleteFoodJournal = () => {
    completeFoodJournal(uid);
    navigation.navigate("JournalCreated", { type: "FoodJournal" });
  };

  return (
    <>
      <FoodJournalQuestionSection
        meal={meal}
        changeEntry={changeEntry}
        foodJournal={foodJournal}
      />
      <ButtonSection>
        <JournalButton
          title={"Log Meal"}
          onPress={() => {
            journalId ? handleUpdateFoodJournal() : handleCompleteFoodJournal();
          }}
          disabled={
            (food.length > 0) &
            (feelingBefore.length > 0) &
            (feelingAfter.length > 0)
              ? false
              : true
          }
        />
      </ButtonSection>
    </>
  );
};
