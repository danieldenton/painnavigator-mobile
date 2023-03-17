import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SmartGoalReflectionComponent } from "../components/smart-goal-reflection.component";

export const SmartGoalReflectionScreen = ({ navigation }) => {
    return (
         <SafeView>
                <NavigationBarLeft 
                    screen={"Smart Goal"} 
                    destination={"ReviewSmartGoal"} 
                    navigation={navigation}
                />
                <SmartGoalReflectionComponent navigation={navigation}/>  
        </SafeView>
    );
}