import React from "react";
import { Text } from "react-native"
import { Button } from "../button.component";
import { JournalContainer } from "./journal.styles";

export const Congratulations = ({ navigation, setJournalComplete, loadJournals }) => {
    return(
        <JournalContainer>
            <Text>
                Congratulations
            </Text>
            <Button 
                onPress={() => {
                    loadJournals();
                    navigation.navigate("Today"); 
                    setTimeout(() => {setJournalComplete(false)}, 1000);
                }}>
                    RETURN HOME
            </Button>
        </JournalContainer>
    );
};