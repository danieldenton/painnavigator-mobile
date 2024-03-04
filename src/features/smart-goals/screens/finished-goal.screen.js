import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { FinishedGoalComponent } from "../components/finished-goal.component";

export const FinishedGoalScreen = ({ navigation, route }) => {
    const { goal } = route.params;

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} destination={"SmartGoalHome"} navigation={navigation} />
            <FinishedGoalComponent 
                goal={goal} 
             /> 
        </SafeView>
    )
}