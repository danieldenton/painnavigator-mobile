import { useContext } from "react";
import { SmartGoalContext } from "../../../services/smart-goal/smart-goal.context";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SmartGoalReflectionComponent } from "../components/smart-goal-reflection.component";


export const SmartGoalReflectionScreen = ({ navigation }) => {
    const { reviewGoal } = useContext(SmartGoalContext)
    return (
         <SafeView>
                <NavigationBarLeft 
                    screen={"Smart Goal"} 
                    destination={"ReviewSmartGoal"} 
                    navigation={navigation}
                />
               {reviewGoal && <SmartGoalReflectionComponent navigation={navigation}/> }
        </SafeView>
    );
}