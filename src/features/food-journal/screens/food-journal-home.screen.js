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

export const FoodJournalHomeScreen = ({ navigation }) => {
    const { foodJournals, journaledToday } = useContext(FoodJournalContext);

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
            <NavigationBarLeft navigation={navigation} destination={"Journals"} screen={"Food Journal"} />
            <GraphicWrapper>
                <FoodGraphic />
            </GraphicWrapper>
            <TouchableOpacity 
                onPress={() => navigation.navigate("ReviewFoodJournal", 
                    { 
                        journal: journaledToday && foodJournals[0].attributes 
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