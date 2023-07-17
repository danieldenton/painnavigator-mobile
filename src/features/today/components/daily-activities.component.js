import React from "react";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon } from "../../../icons";


export const DailyPainScore = ({ navigation }) => {
    return (
        <DailyActivitiesTile 
            navigation={navigation} 
            destination={"DailyPainScore"} 
            title={"Log Your Daily Pain Score"}
            icon={<PainJournalIcon />}
        />
    );
};