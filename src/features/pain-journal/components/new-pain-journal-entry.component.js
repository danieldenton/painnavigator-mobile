import React, { useContext, useEffect, useState } from "react";
import { QuestionSection, ButtonSection } from "../../../components/journals/journal.styles";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { CopingStrategies } from "./coping-strategies.component";
import { Notes } from "./notes.component";
import { IntensityAfter } from "./intensity-after.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { track } from '@amplitude/analytics-react-native'
import { PAIN_JOURNAL_EVENTS } from "../../../amplitude-events";

export const NewPainJournalEntry = ({ navigation }) => {
    const { completePainJournal, currentPage, painJournal, nextPage } = useContext(PainJournalContext);
    const [submitDisabled, setSubmitDisabled] = useState(false);

    useEffect(() => {
      let trackEvent
      let trackSkipEvent
        const { situation, copingStrategies, notes } = painJournal;
        if (currentPage === 1) {
          trackEvent = PAIN_JOURNAL_EVENTS.LOG_PAIN_TODAY
        } else if (currentPage === 2) {
          trackEvent =  PAIN_JOURNAL_EVENTS.PAIN_JOURNAL_DETAILS
          return situation.length
            ? setSubmitDisabled(false)
            : setSubmitDisabled(true);
        } else if (currentPage === 3) {
          trackEvent = PAIN_JOURNAL_EVENTS.COPING_STRATEGIES
          trackSkipEvent = PAIN_JOURNAL_EVENTS.COPING_STRATEGIES_SKIP
          return copingStrategies.length
            ? setSubmitDisabled(false)
            : setSubmitDisabled(true);
        } else if (currentPage === 4) {
          trackEvent = PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT
          trackSkipEvent = PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT_SKIP
          return notes ? setSubmitDisabled(false) : setSubmitDisabled(true);
        } else if (currentPage === 5) {
          trackEvent = PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE
          trackSkipEvent = PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE_SKIP
          return setSubmitDisabled(false);
        }
      }, [painJournal, currentPage]);

      const handleCompletePainJournal = () => {
        track(trackEvent);
        completePainJournal(),
          navigation.navigate("JournalCreated", {
            type: "PainJournal",
          });
      };
    
      const handleSkipQuestion = () => {
        if (trackSkipEvent) {
          track(trackSkipEvent);
        }
        nextPage();
      };
    
      const handleSkipFinalQuestion = () => {
        track(trackSkipEvent),
          completePainJournal(),
          navigation.navigate("JournalCreated", {
            type: "PainJournal",
          });
      };

    return(
        <>
            <QuestionSection>
                {currentPage === 1 && <Intensity />}
                {currentPage === 2 && <Situation />}
                {currentPage === 3 && <CopingStrategies />}
                {currentPage === 4 && <Notes />}
                {currentPage === 5 && <IntensityAfter />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={submitDisabled} 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 5 ? 
                            handleCompletePainJournal()
                            :
                            (track(trackEvent), nextPage())
                        }
                    }} 
                />
                {currentPage > 2 && 
                    <SkipQuestion 
                        onPress={() => {
                            {   currentPage === 5 ? 
                                handleSkipFinalQuestion()
                                : handleSkipQuestion();
                            }
                        }} 
                    />}
                <ProgressDots progress={currentPage} total={5}/>
            </ButtonSection>       
        </>
    );
};