import React, { useContext} from "react";

import { JournalContainer, QuestionSection, ButtonSection } from "../components/pain-journal.styles";
import { PainScore } from "../components/pain-score.component";
import { PainSetting } from "../components/pain-setting.component";
import { CopingStrategies } from "../components/coping-strategies.component";
import { OtherNotes } from "../components/other-notes.component";
import { PainAfter } from "../components/pain-after.component";
import { SkipQuestion } from "../components/pain-journal.styles";
import { Button } from "../../../components/button/button.component";
import { JournalProgress } from "../components/journal-progress.component";

import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainJournalQuestion = () => {
    const { currentQuestion, nextQuestion, completePainJournal } = useContext(PainJournalContext);

    return(
        <>
            <JournalContainer>
                <QuestionSection>
                {currentQuestion === 1 && <PainScore />}
                {currentQuestion === 2 && <PainSetting />}
                {currentQuestion === 3 && <CopingStrategies />}
                {currentQuestion === 4 && <OtherNotes />}
                {currentQuestion === 5 && <PainAfter />}
                </QuestionSection>
                <ButtonSection>
                    {currentQuestion < 5 && <Button onPress={nextQuestion}>Next</Button>}
                    {currentQuestion === 5 && <Button onPress={completePainJournal}>Complete Pain Journal</Button>}
                    {currentQuestion === 5 && <SkipQuestion handlePress={completePainJournal} />}
                    <JournalProgress currentQuestion={currentQuestion} />
                </ButtonSection>
            </JournalContainer>        
        </>
    );
};