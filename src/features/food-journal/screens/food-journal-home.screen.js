import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { TouchableOpacity } from "react-native";
import { FoodGraphic } from "../../../graphics";
import { GraphicWrapper } from "../../../components/journals/journal.styles";
import { NewJournalEntry } from "../../../components/journals/new-journal-entry.component";
import { JournalTile } from "../../../components/journal-tile.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { Scroll } from "../../../components/scroll.component";
import { SubHeader } from "../../../components/typography.component";
import { time_zoned_todays_date, formatDate } from "../../../infrastructure/helpers";

export const FoodJournalHomeScreen = ({ navigation, route }) => {
    const { foodJournals } = useContext(FoodJournalContext);
    const last_food_journal_date = formatDate(foodJournals[0]?.attributes.date_time_value);
    const NAVIGATE_BACK_DESTINATION = route ? "Today" : "Journals";
    
    const foodJournalElements = foodJournals?.map((journal) => {
        return (
            <JournalTile 
                navigation={navigation}
                destination={"ReviewFoodJournal"}
                journal={journal.attributes}
                key={journal.id}
            />
        );
    });

    return(
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={NAVIGATE_BACK_DESTINATION} screen={"Food Journal"} />
            <GraphicWrapper>
                <FoodGraphic />
            </GraphicWrapper>
            <TouchableOpacity 
                onPress={() => navigation.navigate("ReviewFoodJournal", 
                    { 
                        journal: last_food_journal_date === time_zoned_todays_date && foodJournals[0].attributes 
                    }
                )}
            > 
                <NewJournalEntry title={"Today's Food Journal"} />
            </TouchableOpacity>
            {foodJournals.length > 0 && <SubHeader title={"PREVIOUS ENTRIES"} size={14} marginTop={34} marginBottom={14} />}
            <Scroll style={{ marginBottom: 24 }}>
                {foodJournalElements}
            </Scroll>
        </SafeView>
    );
};