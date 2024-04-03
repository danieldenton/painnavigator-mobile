import React, { useContext } from "react";
import {
  ButtonSection,
  QuestionSection,
} from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestion } from "../../../components/skip-question.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { Feeling } from "./feeling.component";
import { Intensity } from "./intensity.component";
import { Situation } from "./situation.component";
import { PrimaryThought } from "./primary-thought.component";
import { CognitiveDistortions } from "./cognitive-distortions.component";
import { MoodJournalContext } from "../../../services/mood-journal.context";

export const NewMoodJournalEntry = ({ navigation }) => {
  const { completeMoodJournal, currentPage, moodJournal, nextPage } =
    useContext(MoodJournalContext);
  const {
    feeling,
    intensity,
    situation,
    primaryThought,
    cognitiveDistortions,
  } = moodJournal;

  pages = [
    {
      page: <Feeling />,
      submitCondition: feeling,
    },
    {
      page: <Intensity />,
      submitCondition: intensity,
    },
    {
      page: <Situation />,
      submitCondition: situation,
    },
    {
      page: <PrimaryThought />,
      submitCondition: primaryThought,
    },
    {
      page: <CognitiveDistortions />,
      submitCondition: cognitiveDistortions.length > 0,
    },
  ];

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
                ? (completeMoodJournal(),
                  navigation.navigate("JournalCreated", {
                    type: "MoodJournal",
                  }))
                : nextPage();
            }
          }}
        />
        {currentPage > 2 && (
          <SkipQuestion
            onPress={() => {
              {
                currentPage === 4
                  ? (completeMoodJournal(),
                    navigation.navigate("JournalCreated", {
                      type: "MoodJournal",
                    }))
                  : nextPage();
              }
            }}
          />
        )}
        <ProgressDots progress={currentPage} total={5} />
      </ButtonSection>
    </>
  );
};
