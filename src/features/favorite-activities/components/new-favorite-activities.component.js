import React, { useContext } from "react";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { SelectActivities } from "./select-activities.component";
import { AddActivities } from "./add-activities.component";
import { ReviewActivities } from "./review-activities.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";

export const NewFavoriteActivities = ({ navigation }) => {
    const { completeActivities, currentPage, nextPage } = useContext(FavoriteActivitiesContext);
    
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
                            (
                                completeActivities(),
                                navigation.navigate("FavoriteActivitiesCompleted")
                            )
                            :
                            nextPage()
                        }
                    }}
                />
                <SkipQuestion 
                    onPress={() => {
                        {   currentPage === 3 ? 
                            (
                                completeActivities(),
                                navigation.navigate("FavoriteActivitiesCreated")
                            )
                            :
                            nextPage()
                        }
                    }} 
                />
                <ProgressDots progress={currentPage} total={3} />
            </ButtonSection>
        </>
    );
};