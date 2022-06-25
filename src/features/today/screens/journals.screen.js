import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { DailyActivitiesTile, LockedActivity, LockedActivityText } from "../../../components/daily-activities-tile.component";
import { PainJournalIcon, MoodJournalIcon, FoodJournalIcon } from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";

export const JournalScreen = ({ navigation }) => {
    const { educationProgress } = useContext(EducationContext);
    const USER_COMPLETED_MOOD_UNIT = educationProgress > 12;
    const USER_COMPLETED_FOOD_UNIT = educationProgress > 24;

    const journals = [
        {
            "destination": "PainJournal",
            "icon": <PainJournalIcon />,
            "show": true
        },
        {
            "destination": "MoodJournal",
            "icon": <MoodJournalIcon />,
            "show": USER_COMPLETED_MOOD_UNIT
        },
        {
            "destination": "FoodJournal",
            "icon": <FoodJournalIcon />,
            "show": USER_COMPLETED_FOOD_UNIT
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
                <LockedActivity title={title} key={title} />
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
            {!USER_COMPLETED_FOOD_UNIT && <LockedActivityText />}
        </SafeView>
    );
};