import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon, MoodJournalIcon, FoodJournalIcon } from "../../../icons";

export const JournalScreen = ({ navigation }) => {
    return(
        <SafeView>
            <NavigationBarLeft 
                navigation={navigation} 
                destination={"Today"} 
                screen={"Journals"} 
            />
            <DailyActivitiesTile 
                title={"Pain Journal"} 
                destination={"PainJournal"} 
                navigation={navigation} 
                icon={<PainJournalIcon />}
            />
            <DailyActivitiesTile 
                title={"Mood Journal"} 
                destination={"MoodJournal"} 
                navigation={navigation} 
                icon={<MoodJournalIcon />}
            />
            <DailyActivitiesTile 
                title={"Food Journal"} 
                destination={"FoodJournal"} 
                navigation={navigation} 
                icon={<FoodJournalIcon />}
            />
        </SafeView>
    );
};