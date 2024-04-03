import React, { useContext } from "react";
import {
  ButtonSection,
  QuestionSection,
} from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { Goal } from "./goal.component";
import { Steps } from "./steps.component";

export const NewSmartGoal = ({ navigation }) => {
  const { postSmartGoal, currentPage, smartGoal, nextPage } =
    useContext(SmartGoalContext);
  const { goal, steps, reward } = smartGoal;

  pages = [
    {
      component: <Goal />,
      submitCondition: goal,
    },
    {
      component: <Steps />,
      submitCondition: steps && reward,
    },
  ];

  const handleCreateSmartGoal = () => {
    track(pages[currentPage].trackEvent);
    postSmartGoal();
    navigation.navigate("SmartGoalCreated");
  };

  return (
    <>
      <QuestionSection>{pages[currentPage].component}</QuestionSection>
      <ButtonSection>
        <JournalButton
          disabled={pages[currentPage].submitCondition ? false : true}
          title={"Next"}
          onPress={() => {
            {
              currentPage === 1 ? handleCreateSmartGoal() : nextPage();
            }
          }}
        />
        <ProgressDots progress={currentPage + 1} total={3} />
      </ButtonSection>
    </>
  );
};
