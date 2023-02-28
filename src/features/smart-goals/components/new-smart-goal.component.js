import React, { useEffect, useContext, useState } from "react";
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
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const { goal, steps } = smartGoal;

    pages = [
        {
            page: <Goal />,
            trackEvent: SMART_GOAL_EVENTS.ENTER_SMART_GOAL,
            submitCondition: goal
        },
        {
            page: <Steps />,
            trackEvent: SMART_GOAL_EVENTS.ENTER_SMART_GOAL_DETAILS,
            submitCondition: steps
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

    useEffect(() => {
        pages[currentPage].submitCondition
            ? setSubmitDisabled(false)
            : setSubmitDisabled(true) 
    }, [pages]);
    
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
                        {currentPage === 1 ?  handleCreateSmartGoal() : handleNextPage()}
                    }}
                />
                <ProgressDots progress={currentPage} total={3} />
            </ButtonSection>
        </>
    );
};