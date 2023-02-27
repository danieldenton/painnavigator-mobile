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
          const { situation, copingStrategies, notes } = painJournal;
         if (currentPage === 1) {
            return situation.length
              ? setSubmitDisabled(false)
              : setSubmitDisabled(true);
          } else if (currentPage === 2) {
            return copingStrategies.length
              ? setSubmitDisabled(false)
              : setSubmitDisabled(true);
          } else if (currentPage === 3) {
            return notes ? setSubmitDisabled(false) : setSubmitDisabled(true);
          } else if (currentPage === 4) {
            return setSubmitDisabled(false);
          }
        }, [painJournal, currentPage]);

      const pages = [
       {
        page: <Intensity />,
        trackEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_TODAY,
        trackSkipEvent: null,
       },
       {
        page: <Situation />,
        trackEvent: PAIN_JOURNAL_EVENTS.PAIN_JOURNAL_DETAILS,
        trackSkipEvent: null
       },
       {
        page: <CopingStrategies />,
        trackEvent: PAIN_JOURNAL_EVENTS.COPING_STRATEGIES,
        trackSkipEvent: PAIN_JOURNAL_EVENTS.COPING_STRATEGIES_SKIP
       },
       {
        page: <Notes />,
        trackEvent: PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT,
        trackSkipEvent: PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT_SKIP
       },
       {
        page: <IntensityAfter />,
        trackEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE,
        trackSkipEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE_SKIP
       }
      ]

      const handleNextPage = () => {
        track(pages[currentPage].trackEvent)
        nextPage()
      }

      const handleSkipQuestion = () => {
        track(pages[currentPage].trackSkipEvent);
        nextPage();
      };

      const handleCompletePainJournal = () => {
        track(pages[currentPage].trackEvent);
        completePainJournal(),
          navigation.navigate("JournalCreated", {
            type: "PainJournal",
          });
      };
    
      const handleSkipFinalQuestion = () => {
        track(pages[currentPage].trackSkipEvent),
        completePainJournal(),
        navigation.navigate("JournalCreated", {
            type: "PainJournal",
          });
      };

    return(
        <>
            <QuestionSection>
                {pages[currentPage].page}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={submitDisabled} 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 4 ? 
                            handleCompletePainJournal()
                            :
                            handleNextPage()
                        }
                    }} 
                />
                {currentPage > 2 && 
                    <SkipQuestion 
                        onPress={() => {
                            {   currentPage === 4 ? 
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