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

    const pages = [
      {
        page: <SelectActivities />,
        trackEvent: MY_ACTIVITIES_EVENTS.SELECT_ACTIVITIES_ENJOY,
        trackSkipEvent: MY_ACTIVITIES_EVENTS.SELECT_ACTIVITIES_ENJOY_SKIP
      },
      {
        page: <AddActivities />,
        trackEvent: MY_ACTIVITIES_EVENTS.ADD_CUSTOM_ACTIVITIES,
        trackSkipEvent: MY_ACTIVITIES_EVENTS.ADD_CUSTOM_ACTIVITIES_SKIP
      },
      {
        page: <ReviewActivities />,
        trackEvent: MY_ACTIVITIES_EVENTS.REMOVE_ACTIVITIES,
        trackSkipEvent: MY_ACTIVITIES_EVENTS.REMOVE_ACTIVITIES_SKIP
      }
    ]

    const handleNextPage = () => {
      track(pages[currentPage].trackEvent)
      nextPage();
    };

    const handleSkipQuestion = () => {
      track(pages[currentPage].trackSkipEvent)
      nextPage();
    };
  
    const handleCompleteActivities = () => {
      track(MY_ACTIVITIES_EVENTS.COMPLETE_MY_ACTIVITIES);
      completeActivities();
      navigation.navigate("FavoriteActivitiesCompleted");
    };
    
    return (
        <>
            <QuestionSection>
                {pages[currentPage].page}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 2 ? 
                            (handleCompleteActivities(),track(pages[currentPage].trackEvent)) : handleNextPage();
                        }
                    }}
                />
                <SkipQuestion 
                    onPress={() => {
                        {   currentPage === 2 ? 
                          (handleCompleteActivities(), track(pages[currentPage].trackSkipEvent)) : handleSkipQuestion();
                        }
                    }} 
                />
                <ProgressDots progress={currentPage} total={3} />
            </ButtonSection>
        </>
    );
};