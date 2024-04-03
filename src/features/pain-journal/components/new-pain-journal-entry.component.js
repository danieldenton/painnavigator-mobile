import React, { useContext } from "react";
import {
  QuestionSection,
  ButtonSection,
} from "../../../components/journals/journal.styles";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { CopingStrategies } from "./coping-strategies.component";
import { Notes } from "./notes.component";
import { IntensityAfter } from "./intensity-after.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { JournalButton } from "../../../components/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const NewPainJournalEntry = ({ navigation }) => {
  const { completePainJournal, currentPage, painJournal, nextPage } =
    useContext(PainJournalContext);
  const { intensity, situation, copingStrategies, notes, intensityAfter } =
    painJournal;

  const pages = [
    {
      page: <Intensity />,
      submitCondition: intensity,
    },
    {
      page: <Situation />,
      submitCondition: situation,
    },
    {
      page: <CopingStrategies />,
      submitCondition: copingStrategies.length > 0,
    },
    {
      page: <Notes />,
      submitCondition: notes,
    },
    {
      page: <IntensityAfter />,
      submitCondition: intensityAfter,
    },
  ];

  const handleCompletePainJournal = () => {};

  return (
    <>
      <QuestionSection>{pages[currentPage].page}</QuestionSection>
      <ButtonSection>
        <JournalButton
          disabled={pages[currentPage].submitCondition ? false : true}
          title={"Next"}
          onPress={() => {
            {
              currentPage === 4
                ? (completePainJournal(),
                  navigation.navigate("JournalCreated", {
                    type: "PainJournal",
                  }))
                : nextPage();
            }
          }}
        />
        {currentPage === 3 && (
          <SkipQuestion
            onPress={() => {
              {
                currentPage === 4
                  ? (completePainJournal(),
                    navigation.navigate("JournalCreated", {
                      type: "PainJournal",
                    }))
                  : nextPage();
              }
            }}
          />
        )}
        <ProgressDots progress={currentPage + 1} total={5} />
      </ButtonSection>
    </>
  );
};
