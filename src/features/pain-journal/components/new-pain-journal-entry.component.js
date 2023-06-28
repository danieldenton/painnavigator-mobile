import React, { useContext } from "react";
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
    const { intensity, situation, copingStrategies, notes, intensityAfter } = painJournal;

    const pages = [
      {
       page: <Intensity />,
       trackEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_TODAY,
       trackSkipEvent: null,
       submitCondition: intensity
      },
      {
       page: <Situation />,
       trackEvent: PAIN_JOURNAL_EVENTS.PAIN_JOURNAL_DETAILS,
       trackSkipEvent: null,
       submitCondition: situation
      },
      {
       page: <CopingStrategies />,
       trackEvent: PAIN_JOURNAL_EVENTS.COPING_STRATEGIES,
       trackSkipEvent: PAIN_JOURNAL_EVENTS.COPING_STRATEGIES_SKIP,
       submitCondition: copingStrategies.length > 0
      },
      {
       page: <Notes />,
       trackEvent: PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT,
       trackSkipEvent: PAIN_JOURNAL_EVENTS.ADDITIONAL_TEXT_SKIP,
       submitCondition: notes
      },
      {
       page: <IntensityAfter />,
       trackEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE,
       trackSkipEvent: PAIN_JOURNAL_EVENTS.LOG_PAIN_AFTER_EPISODE_SKIP,
       submitCondition: intensityAfter
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
       completePainJournal()
       track(PAIN_JOURNAL_EVENTS.COMPLETE_PAIN_JOURNAL)
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
                    disabled={pages[currentPage].submitCondition ? false : true} 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 4 ? 
                            (track(pages[currentPage].trackEvent), handleCompletePainJournal())
                            : handleNextPage()
                        }
                    }} 
                />
                {currentPage > 2 && 
                    <SkipQuestion 
                        onPress={() => {
                            {   currentPage === 4 ? 
                                (track(pages[currentPage].trackSkipEvent), handleCompletePainJournal())
                                : handleSkipQuestion();
                            }
                        }} 
                    />}
                <ProgressDots progress={currentPage + 1} total={5}/>
            </ButtonSection>       
        </>
    );
};