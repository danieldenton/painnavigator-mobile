import React from "react";
import { Text } from "react-native";
import { KeyboardView, GoalWrapper } from "./goal.styles"
import { GoalTextSection } from "./goal-text-section.component"
import { formatDate } from "../../../infrastructure/helpers"

export const FinishedGoalComponent = ({ goal }) => {
    // console.log(goal)
    const goalDetails = [
        {
            header: "Your goal begaon on:",
            body: formatDate(goal.date_time_value)
        },
        {
            header: "Your SMART goal was:",
            body: goal.goal,
        },
        {
            header: "Your steps to work up to this goal were:",
            body: goal.steps,
            state: "steps"
        },
        {
            header: "Your reward was:",
            body: goal.reward
        },
        {
            header: "The updates were:",
            body: goal.goal_updates
        },
        {
            header: "What it meant to you:",
            body: goal.meaning
        },
        {
            header: "The challenges were:",
            body: goal.challenges
        },
        {
            header: "Your goal was completed on:",
            body: goal.end_date
        }
    ]

    const smartGoalDetails = goalDetails.map((goalDetail, idx) => {
        return <GoalTextSection 
                header={goalDetail.header} 
                body={goalDetail.body} 
                key={idx} 
            />
    })
    return (
        <KeyboardView>
                <GoalWrapper>
                    {smartGoalDetails}
                </GoalWrapper>
        </ KeyboardView>
    )
}