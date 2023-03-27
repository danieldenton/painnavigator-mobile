import React, { useContext} from "react";
import { ButtonSection, QuestionSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { ProgressDots } from "../../../components/progress-dots.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { Goal } from "./goal.component";
import { Steps } from "./steps.component";
import { track } from "@amplitude/analytics-react-native"
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const NewSmartGoal = ({ navigation }) => {
    const { createSmartGoal, currentPage, smartGoal, nextPage } = useContext(SmartGoalContext);
    const { goal, steps, reward } = smartGoal;

    pages = [
        {
            component: <Goal />,
            trackEvent: SMART_GOAL_EVENTS.ENTER_SMART_GOAL,
            submitCondition: goal
        },
        {
            component: <Steps />,
            trackEvent: SMART_GOAL_EVENTS.ENTER_SMART_GOAL_DETAILS,
            submitCondition: steps && reward
        }
    ]

    const handleNextPage = () => {
        track(pages[currentPage].trackEvent)
        nextPage()
    }

    const handleCreateSmartGoal = () => {
        track(pages[currentPage].trackEvent)
        createSmartGoal()
        navigation.navigate("SmartGoalCreated")
    }
    
    return (
        <>
            <QuestionSection>
                {pages[currentPage].component}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={pages[currentPage].submitCondition ? false : true} 
                    title={"Next"} 
                    onPress={() => {
                        {currentPage === 1 ?  handleCreateSmartGoal() : handleNextPage()}
                    }}
                />
                <ProgressDots progress={currentPage + 1} total={3} />
            </ButtonSection>
        </>
    );
};