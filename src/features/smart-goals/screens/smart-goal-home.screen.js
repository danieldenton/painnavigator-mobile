import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SubHeader } from "../../../components/typography.component"
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { OngoingGoalTile } from "../components/ongoing-goal-tile.component";
import { CompletedItemCard } from "../../../components/card/completed-card.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
  import { Add } from "../../../icons";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const SmartGoalHomeScreen = ({ navigation }) => {
    const { activeGoal, finishedGoals } = useContext(SmartGoalContext);
    
    const finishedGoalElements = finishedGoals?.map((finishedGoal) => {
        console.log(finishedGoal)
        return (
            <OngoingGoalTile
                navigation={navigation} 
                destination={"FinishedGoal"}
                goal={finishedGoal} 
            />
        );
    });
   
    return (
        <SafeView>
            <NavigationBarLeft destination={"Today"} screen={"Smart Goals"} navigation={navigation} />
            <SubHeader title={"ONGOING GOALS"} size={14} marginTop={32} marginBottom={14} />
            {activeGoal ? 
                <OngoingGoalTile 
                    navigation={navigation} 
                    destination={"ReviewSmartGoal"}
                    goal={activeGoal} 
                    trackEvent={SMART_GOAL_EVENTS.SELECT_SMART_GOAL_TO_UPDATE}
                />
                :
                <DailyActivitiesTile 
                    title={"Create a Smart Goal"} 
                    destination={"NewSmartGoal"} 
                    navigation={navigation} 
                    icon={<Add />}
                />
            }
            {finishedGoals.length > 0 && <SubHeader title={"FINISHED GOALS"} size={14} marginBottom={14} />}
            {finishedGoalElements}
        </SafeView>
    );
};  