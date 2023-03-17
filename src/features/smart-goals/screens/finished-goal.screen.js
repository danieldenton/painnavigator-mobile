import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { FinishedGoalComponent } from "../components/finished-goal.component";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SMART_GOAL_EVENTS } from "../../../amplitude-events";
import { useContext } from "react";

export const FinishedGoalScreen = ({ navigation, key }) => {
    const { finishedGoals } = useContext(SmartGoalContext)

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"SmartGoalHome"} navigation={navigation} />
            <FinishedGoalComponent 
                key={key}
                navigation={navigation} 
             /> 
        </SafeView>
    )
}