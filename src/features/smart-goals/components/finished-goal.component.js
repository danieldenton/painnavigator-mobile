import { KeyboardView, GoalWrapper } from "./goal.styles"

export const FinishedGoalComponent = ({ goal }) => {

    const goalDetails = [
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
            header: "the updates were",
            body: goal.goal_updates
        },
        {
            header: "What it meant to you:",
            body: goal.meaning
        },
        {
            header: "The challenges were:",
            body: goal.challenges
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