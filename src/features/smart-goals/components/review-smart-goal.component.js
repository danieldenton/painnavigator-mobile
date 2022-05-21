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
import format from 'date-fns/format';

export const ReviewSmartGoal = ({ editing, goal, navigation, setEditing }) => {
    const { goal: activeGoal, steps: activeSteps, reward: activeReward, end_date, start_date, smart_goal_updates: activeUpdates } = goal.attributes;
    const { editGoal, editGoalUpdate, reviewGoal, saveEdits } = useContext(SmartGoalContext);
    const { goal: editingGoal, steps: editSteps, reward: editReward, smart_goal_updates: editUpdates } = reviewGoal.attributes;
    
    const updates = editing ? editUpdates : activeUpdates;
    
    const updateElements = updates?.map((update) => {
        const date = format(new Date(update.created_at), 'M/dd/yyyy');
        return (
            <GoalTextSection 
                edit={editGoalUpdate}
                editing={editing}
                header={date} 
                body={update.goal_update} 
                key={update.id} 
                state={update.id}
            />
        );
    });

    return (
        <>
            <GoalProgress startDate={start_date} endDate={end_date} />
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
                        {updateElements.reverse()}
                    </ScrollView>
                </UpdateWrapper>
            </KeyboardView>
            {editing && 
                <ButtonSection>
                    <JournalButton 
                        title={"Save Changes"} 
                        onPress={() => {saveEdits(); setEditing(false);}}
                    />
                </ButtonSection>
            }
        </>
    );
};