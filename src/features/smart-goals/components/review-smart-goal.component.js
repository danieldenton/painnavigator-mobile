import React, { useContext } from "react";
import { Add } from "../../../icons";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { GoalProgress } from "./goal-progress.component";
import { GoalTextSection } from "./goal-text-section.component";
import { SubHeader } from "../../../components/typography.component";
import { ScrollView } from "react-native";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { GoalWrapper, UpdateWrapper, KeyboardView } from "./goal.styles";
import { formatDate } from '../../../infrastructure/helpers'
import { track } from "@amplitude/analytics-react-native";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const ReviewSmartGoal = ({ editing, goal, navigation, setEditing }) => {
    const { goal: activeGoal, steps: activeSteps, reward: activeReward, date_time_value, goal_updates: activeUpdates } = goal;
    const { editGoal, editGoalUpdate, reviewGoal, saveEdits } = useContext(SmartGoalContext);
    const { goal: editingGoal, steps: editSteps, reward: editReward, goal_updates: editUpdates } = reviewGoal;
    
    
    const updateElements = activeUpdates?.map((update, idx) => {
        const date = formatDate(update.date_time_value);
        let editUpdate = update.goal_update
        return (
            <GoalTextSection 
                edit={editGoalUpdate}
                editing={editing}
                header={date} 
                body={editing ? editUpdate : update.goal_update} 
                key={update.id} 
                state={idx}
            />
        );
    });

    return (
        <>
            <KeyboardView>
                <GoalWrapper>
                    <GoalTextSection 
                        edit={editGoal} 
                        editing={editing} 
                        header={"Your SMART goal is:"} 
                        body={editing ? editingGoal : activeGoal} 
                        state={"goal"} 
                    />
                    <GoalTextSection 
                        edit={editGoal} 
                        editing={editing} 
                        header={"Your steps to work up to this goal are:"} 
                        body={editing ? editSteps : activeSteps} 
                        state={"steps"} 
                    />
                    <GoalTextSection 
                        edit={editGoal} 
                        editing={editing} 
                        header={"Your reward will be:"} 
                        body={editing ? editReward : activeReward} 
                        state={"reward"} 
                    />
                </GoalWrapper>
                <SubHeader title={"UPDATES"} size={14} />
                {!editing && 
                    <DailyActivitiesTile 
                        title={"Add New Update"} 
                        destination={"NewSmartGoalUpdate"} 
                        screenParams={"SmartGoal"}
                        navigation={navigation} 
                        icon={<Add />}
                    />
                }
                <UpdateWrapper>
                    <ScrollView style={{ marginBottom: 8 }}>
                        {updateElements}
                    </ScrollView>
                </UpdateWrapper>
            </KeyboardView>
            
                <ButtonSection>
                {editing ?
                    <JournalButton 
                        title={"Save Changes"} 
                        onPress={() => {
                            saveEdits(); 
                            setEditing(false);
                            track(SMART_GOAL_EVENTS.SAVE_CHANGES_TO_SMART_GOAL_EDIT);
                        }}
                    />
                :
                <JournalButton 
                        title={"Smart Goal Reached"} 
                        onPress={() => {
                            navigation.navigate("SmartGoalCompleted")
                            track(SMART_GOAL_EVENTS.COMPLETE_SMART_GOAL);
                        }}
                    />
                 }
                </ButtonSection>
        </>
    );
};