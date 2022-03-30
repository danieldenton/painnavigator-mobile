import React, { useContext} from "react";
import { JournalContainer, QuestionSection, ButtonSection } from "../../components/journal.styles";
import { Button } from "../../../../components/button.component";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

export const FoodJournalQuestion = () => {
    const { completeFoodJournal } = useContext(FoodJournalContext);

    return(
        <JournalContainer>
            <QuestionSection>
            </QuestionSection>
            <ButtonSection>
                <Button onPress={completeFoodJournal}>Log Meal</Button>
            </ButtonSection>
        </JournalContainer>        
    );
};