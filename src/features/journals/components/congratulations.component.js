import React, { useContext } from "react";
import { Text } from "react-native";
import { Button } from "../../../components/button.component";
import { JournalContainer } from "./journal.styles";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

export const Congratulations = ({ navigation, setJournalComplete, loadJournals }) => {
    const { todaysJournal } = useContext(FoodJournalContext);
    return(
        <JournalContainer>
            <Text>{todaysJournal}</Text>
            <Button 
                onPress={() => {
                    loadJournals();
                    navigation.navigate("Today"); 
                    setTimeout(() => {setJournalComplete(false)}, 1000);
                }}>
                    Return Home
            </Button>
        </JournalContainer>
    );
};