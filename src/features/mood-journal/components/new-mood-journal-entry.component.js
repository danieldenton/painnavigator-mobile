import React, { useEffect, useContext, useState } from "react";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { Feeling } from "./feeling.component";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { PrimaryThought } from "./primary-thought.component";
import { CognitiveDistortions } from "./cognitive-distortions.component";
import { MoodJournalContext } from "../../../services/mood-journal/mood-journal.context";
import { track } from "@amplitude/analytics-react-native";
import { MOOD_JOURNAL_EVENTS } from "../../../amplitude-events";

export const NewMoodJournalEntry = ({ navigation }) => {
    const { completeMoodJournal, currentPage, moodJournal, nextPage } = useContext(MoodJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    
    useEffect(() => {
        const { feeling, situation } = moodJournal;
        if (currentPage === 1) {
            return feeling ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 3) {
            return situation ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };
    }, [moodJournal, currentPage]);

    const handleNextPage = () => {
        if (currentPage === 1) {
          track(MOOD_JOURNAL_EVENTS.HOW_ARE_YOU_FEELING_TODAY);
        } else if (currentPage === 2) {
          track(MOOD_JOURNAL_EVENTS.HOW_INTENSE_IS_THIS_FEELING);
        } else if (currentPage === 3) {
          track(MOOD_JOURNAL_EVENTS.SITUATION);
        } else if (currentPage === 4) {
          track(MOOD_JOURNAL_EVENTS.PRIMARY_THOUGHT);
        }
        nextPage();
      };
    
      const handleCompleteMoodJournal = () => {
        track(MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS);
        track(MOOD_JOURNAL_EVENTS.COMPLETE_MOOD_JOURNAL);
        completeMoodJournal();
      };
    
    return (
        <>
            <QuestionSection>
                {currentPage === 1 && <Feeling />}
                {currentPage === 2 && <Intensity />}
                {currentPage === 3 && <Situation />}
                {currentPage === 4 && <PrimaryThought />}
                {currentPage === 5 && <CognitiveDistortions />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={submitDisabled} 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 5 ? 
                            (
                                handleCompleteMoodJournal(),
                                navigation.navigate("JournalCreated", { type: "MoodJournal" })
                            )
                            :
                            handleNextPage()
                        }
                    }}
                />
                {currentPage > 3 && 
                    <SkipQuestion 
                        onPress={() => {
                            {   currentPage === 5 ? 
                                (
                                    track(MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS_SKIP),
                                    completeMoodJournal(),
                                    navigation.navigate("JournalCreated", {
                                        type: "MoodJournal"
                                    })
                                )
                                : (track(MOOD_JOURNAL_EVENTS.PRIMARY_THOUGHT_SKIP),
                                nextPage())
                            }
                        }} 
                    />}
                <ProgressDots progress={currentPage} total={5} />
            </ButtonSection>
        </>
    );
};