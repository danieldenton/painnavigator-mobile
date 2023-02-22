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
    const [trackEvent, setTrackEvent] = useState("")
    
    useEffect(() => {
        const { goal, steps, reward } = smartGoal;
        if (currentPage === 1) {
            return goal ? setSubmitDisabled(false) : setSubmitDisabled(true)
        }   else if (currentPage === 2) {
            return steps ? reward ? setSubmitDisabled(false) : setSubmitDisabled(true) : setSubmitDisabled(true)
        }   else {
            return setSubmitDisabled(false)
        };
    }, [smartGoal, currentPage]);
    
    return (
        <>
            <QuestionSection>
                {currentPage === 1 && <Goal />}
                {currentPage === 2 && <Steps />}
            </QuestionSection>
            <ButtonSection>
                <JournalButton 
                    disabled={submitDisabled} 
                    title={"Next"} 
                    onPress={() => {
                        {   currentPage === 2 ? 
                            (
                                track(SMART_GOAL_EVENTS.ENTER_SMART_GOAL_DETAILS),
                                createSmartGoal(),
                                navigation.navigate("SmartGoalCreated")
                            )
                            :
                            track(SMART_GOAL_EVENTS.ENTER_SMART_GOAL)
                            nextPage()
                        }
                    }}
                />
                <ProgressDots progress={currentPage} total={3} />
            </ButtonSection>
        </>
    );
};