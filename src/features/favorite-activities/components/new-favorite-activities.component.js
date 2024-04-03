import React, { useContext } from "react";
import {
  ButtonSection,
  QuestionSection,
} from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { SelectActivities } from "./select-activities.component";
import { AddActivities } from "./add-activities.component";
import { ReviewActivities } from "./review-activities.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";

export const NewFavoriteActivities = ({ navigation }) => {
  const { completeActivities, currentPage, nextPage } = useContext(
    FavoriteActivitiesContext
  );

  const pages = [<SelectActivities />, <AddActivities />, <ReviewActivities />];

  const handleCompleteActivities = () => {};

  return (
    <>
      <QuestionSection>{pages[currentPage]}</QuestionSection>
      <ButtonSection>
        <JournalButton
          title={"Next"}
          onPress={() => {
            {
              currentPage === 2
                ? (completeActivities(),
                  navigation.navigate("FavoriteActivitiesCompleted"))
                : nextPage();
            }
          }}
        />
        <SkipQuestion
          onPress={() => {
            {
              currentPage === 2
                ? (completeActivities(),
                  navigation.navigate("FavoriteActivitiesCompleted"))
                : nextPage();
            }
          }}
        />
        <ProgressDots progress={currentPage + 1} total={3} />
      </ButtonSection>
    </>
  );
};
