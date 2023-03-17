import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { FinishedGoalComponent } from "../components/finished-goal.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";

export const FinishedGoalScreen = ({ navigation, goal }) => {
    console.log(goal)

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"SmartGoalHome"} navigation={navigation} />
            <FinishedGoalComponent 
                goal={goal} 
                navigation={navigation} 
             /> 
        </SafeView>
    )
}