import React from "react";
import { Text } from "react-native";
import { KeyboardView, GoalWrapper } from "./goal.styles"
import { GoalTextSection, UpdateGoalTextSection } from "./goal-text-section.component"
import { formatDate } from "../../../infrastructure/helpers"

export const FinishedGoalComponent = ({ goal }) => {

    const smartGoalUpdates = goal.goal_updates.map((update, idx) => {
        return <GoalTextSection 
        body={update.goal_update}
        key={idx}
        />
    })

    const goalDetails = [
        {
            header: "Your goal began on:",
            body: formatDate(goal.date_time_value)
        },
        {
            header: "Your SMART goal was:",
            body: goal.goal,
        },
        {
            header: "Your steps to work up to this goal were:",
            body: goal.steps,
        },
        {
            header: "Your reward was:",
            body: goal.reward
        },
        {
            header: "The updates were:",
            body: smartGoalUpdates
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
        return (
            idx === 4 ?
                <UpdateGoalTextSection 
                header={goalDetail.header} 
                body={goalDetail.body} 
                key={idx} 
                />
                :
                <GoalTextSection 
                header={goalDetail.header} 
                body={goalDetail.body} 
                key={idx} 
                />
        )
    })

    
    return (
        <KeyboardView>
                <GoalWrapper>
                    {smartGoalDetails}
                </GoalWrapper>
        </ KeyboardView>
    )
}