import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon, MoodJournalIcon, FoodJournalIcon } from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";

export const JournalScreen = ({ navigation }) => {
    const { educationProgress } = useContext(EducationContext);
    const USER_COMPLETED_FOOD_UNIT = educationProgress > 23;
    const USER_COMPLETED_MOOD_UNIT = educationProgress > 26;

    const journals = [
        {
            "destination": "PainJournal",
            "icon": <PainJournalIcon />,
            "show": true
        },
        {
            "destination": "FoodJournal",
            "icon": <FoodJournalIcon />,
            "show": USER_COMPLETED_FOOD_UNIT
        },
        {
            "destination": "MoodJournal",
            "icon": <MoodJournalIcon />,
            "show": USER_COMPLETED_MOOD_UNIT
        }
    ];

    const journalTiles = journals.map((journal) => {
        const { destination, icon, show } = journal;
        const title = destination.replace(/[A-Z]/g, ' $&').trim();

        return (
            show ? 
                <DailyActivitiesTile 
                    title={title} 
                    destination={destination} 
                    navigation={navigation} 
                    icon={icon}
                    key={title}
                />
            :
                null
        );
    });

    return(
        <SafeView>
            <NavigationBarLeft 
                navigation={navigation} 
                destination={"Today"} 
                screen={"Journals"} 
            />
            {journalTiles}
        </SafeView>
    );
};