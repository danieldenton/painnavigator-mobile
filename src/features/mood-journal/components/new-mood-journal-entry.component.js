import React, { useContext } from "react";
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
    const { feeling, situation, primaryThought, cognitiveDistortions } = moodJournal;

    pages = [
        {
            page: <Feeling />,
            trackEvent: MOOD_JOURNAL_EVENTS.HOW_ARE_YOU_FEELING_TODAY,
            trackSkipEvent: null,
            submitCondition: feeling
        },
        {
            page: <Intensity />,
            trackEvent: MOOD_JOURNAL_EVENTS.HOW_INTENSE_IS_THIS_FEELING,
            trackSkipEvent: null,
            submitCondition: null
        },
        {
            page: <Situation />,
            trackEvent: MOOD_JOURNAL_EVENTS.SITUATION,
            trackSkipEvent: null,
            submitCondition: situation
        },
        {
            page: <PrimaryThought />,
            trackEvent: MOOD_JOURNAL_EVENTS.PRIMARY_THOUGHT,
            trackSkipEvent: MOOD_JOURNAL_EVENTS.PRIMARY_THOUGHT_SKIP,
            submitCondition: primaryThought
        },
        {
            page: <CognitiveDistortions />,
            trackEvent: MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS,
            trackSkipEvent: MOOD_JOURNAL_EVENTS.COGNITIVE_DISTORTIONS_SKIP,
            submitCondition: cognitiveDistortions
        },
    ]

    const handleNextPage = () => {
        track(pages[currentPage].trackEvent)
        nextPage();
      };

    const handleSkipQuestion = () => {
        track(pages[currentPage].trackSkipEvent)
        nextPage()
    }
    
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
                    disabled={pages[currentPage].submitCondition ? false : true} 
                    title={"Next"} 
                    onPress={() => {
                        {currentPage === 4 ?  
                            (handleCompleteMoodJournal(), track(pages[currentPage].trackEvent)) : handleNextPage()}
                    }}
                />
                {currentPage > 2 && 
                    <SkipQuestion 
                        onPress={() => {
                            {currentPage === 4 ? 
                                (handleCompleteMoodJournal(), track(pages[currentPage].trackSkipEvent)) : handleSkipQuestion()}
                        }} 
                    />}
                <ProgressDots progress={currentPage} total={5} />
            </ButtonSection>
        </>
    );
};