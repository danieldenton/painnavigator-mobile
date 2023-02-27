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
        if (currentPage === 0) {
            return feeling ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 2) {
            return situation ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };     
    }, [moodJournal, currentPage]);

    pages = [
        {
            page: <Feeling />,
            trackEvent: MOOD_JOURNAL_EVENTS.HOW_ARE_YOU_FEELING_TODAY,
            trackSkipEvent: null
        },
        {
            page: <Intensity />,
            trackEvent: MOOD_JOURNAL_EVENTS.HOW_INTENSE_IS_THIS_FEELING,
            trackSkipEvent: null
        },
        {
            page: <Situation />,
            trackEvent: MOOD_JOURNAL_EVENTS.SITUATION,
            trackSkipEvent: null
        },
        {
            page: <PrimaryThought />,
            trackEvent: MOOD_JOURNAL_EVENTS.PRIMARY_THOUGHT,
            trackSkipEvent: null
        },
        {
            page: <CognitiveDistortions />,
            trackEvent: MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS,
            trackSkipEvent: MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS_SKIP
        },
    ]

    const handleNextPage = () => {
        track(pages[currentPage].trackEvent)
        nextPage();
      };
    
      const handleCompleteMoodJournal = () => {
        track(MOOD_JOURNAL_EVENTS.COMPLETE_MOOD_JOURNAL);
        completeMoodJournal();
        navigation.navigate("JournalCreated", { type: "MoodJournal" })
      };
    
    return (
        <>
            <QuestionSection>
                {pages[currentPage].page}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={submitDisabled} 
                    title={"Next"} 
                    onPress={() => {
                        {currentPage === 4 ?  
                            (handleCompleteMoodJournal(), track(pages[currentPage].trackEvent)) : handleNextPage()}
                    }}
                />
                {currentPage > 3 && 
                    <SkipQuestion 
                        onPress={() => {
                            {currentPage === 4 ? 
                                (handleCompleteMoodJournal(), track(pages[currentPage].trackSkipEvent)) : handleNextPage()}
                        }} 
                    />}
                <ProgressDots progress={currentPage} total={5} />
            </ButtonSection>
        </>
    );
};