import React, { useContext } from "react";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { SelectActivities } from "./select-activities.component";
import { AddActivities } from "./add-activities.component";
import { ReviewActivities } from "./review-activities.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";
import { track } from "@amplitude/analytics-react-native";
import { MY_ACTIVITIES_EVENTS } from "../../../amplitude-events";

export const NewFavoriteActivities = ({ navigation }) => {
    const { completeActivities, currentPage, nextPage } = useContext(FavoriteActivitiesContext);

    const handleNextPage = () => {
        if (currentPage === 1) {
          track(MY_ACTIVITIES_EVENTS.SELECT_ACTIVITIES_ENJOY);
        } else if (currentPage === 2) {
          track(MY_ACTIVITIES_EVENTS.ADD_CUSTOM_ACTIVITIES);
        }
        nextPage();
      };
    
      const handleSkipQuestion = () => {
        if (currentPage === 1) {
          track(MY_ACTIVITIES_EVENTS.SELECT_ACTIVITIES_ENJOY_SKIP);
        } else if (currentPage === 2) {
          track(MY_ACTIVITIES_EVENTS.ADD_CUSTOM_ACTIVITIES_SKIP);
        }
        nextPage();
      };
    
      const handleCompleteActivities = () => {
        track(MY_ACTIVITIES_EVENTS.REMOVE_ACTIVITIES);
        track(MY_ACTIVITIES_EVENTS.COMPLETE_MY_ACTIVITIES);
        completeActivities();
        navigation.navigate("FavoriteActivitiesCompleted");
      };
    
      const handleSkipLastQuestion = () => {
        track(MY_ACTIVITIES_EVENTS.REMOVE_ACTIVITIES_SKIP);
        track(MY_ACTIVITIES_EVENTS.COMPLETE_MY_ACTIVITIES);
        completeActivities();
        navigation.navigate("FavoriteActivitiesCompleted");
      };
    
    return (
        <>
            <QuestionSection>
                {currentPage === 1 && <SelectActivities />}
                {currentPage === 2 && <AddActivities />}
                {currentPage === 3 && <ReviewActivities />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 3 ? 
                            handleCompleteActivities() : handleNextPage();
                        }
                    }}
                />
                <SkipQuestion 
                    onPress={() => {
                        {   currentPage === 3 ? 
                            handleSkipLastQuestion() : handleSkipQuestion();
                        }
                    }} 
                />
                <ProgressDots progress={currentPage} total={3} />
            </ButtonSection>
        </>
    );
};