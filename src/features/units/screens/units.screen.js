import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { EducationModuleIcon, MovementModuleIcon } from "../../../icons";

export const UnitsScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft 
                screen={"Units"} 
                destination={"Today"} 
                navigation={navigation} 
            />
            <DailyActivitiesTile 
                destination={"EducationUnits"} 
                navigation={navigation} 
                title={"Education Units"} 
                icon={<EducationModuleIcon />}
            />
            <DailyActivitiesTile 
                destination={"MovementUnits"}
                navigation={navigation} 
                title={"Movement Units"} 
                icon={<MovementModuleIcon />}
            />
        </SafeView>
    );
};