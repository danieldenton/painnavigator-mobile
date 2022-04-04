import React from "react";
import { Button } from "../../../components/button.component";
import { JournalContainer } from "./journal.styles";

export const Congratulations = ({ navigation, setJournalComplete, loadJournals }) => {
    return(
        <JournalContainer>
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