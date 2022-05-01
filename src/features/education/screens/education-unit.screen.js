import React, { useContext } from "react";
import { EducationUnit } from "../components/education-unit.component";
import { CompletionScreen } from "../components/completion-screen.component";
import { EducationContext } from "../../../services/education/education.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const EducationUnitScreen = ({ route }) => {
    const { navigation } = route.params;
    const { moduleComplete, resetModule } = useContext(EducationContext);
    
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            { !moduleComplete ? ( 
                <EducationUnit />
                ) : (
                <CompletionScreen 
                    navigation={navigation}
                    resetModule={resetModule}
                /> 
            )}
        </SafeView>
    );
};
