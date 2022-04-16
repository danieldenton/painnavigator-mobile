import React, { useContext} from "react";
import { ButtonSection, JournalContainer, QuestionSection, SkipQuestion } from "../../../components/journals/journal.styles";
import Feeling from "./feeling.component";
import Intensity from "./intensity.component";
import Situation from "./situation.component";
import PrimaryThought from "./primary-thought.component";
import CognitiveDistortions from "./cognitive-distortions.component";

export const MoodJournalEntryPage = () => {
    return (
        <JournalContainer>
            <QuestionSection>
                {currentPage === 1 && <Feeling />}
                {currentPage === 2 && <Intensity />}
                {currentPage === 3 && <Situation />}
                {currentPage === 4 && <PrimaryThought />}
                {currentPage === 5 && <CognitiveDistortions />}


            </QuestionSection>
        </JournalContainer>
    );
};