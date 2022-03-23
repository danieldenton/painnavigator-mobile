import React, { useContext }from "react";
import { Text } from "react-native";
import { Button } from "../../../components/button.component";
import { JournalContainer } from "../components/pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Congratulations = ({ navigation }) => {
    const { loadPainJournals, setJournalComplete } = useContext(PainJournalContext);

    return(
        <JournalContainer>
            <Text>Congratulations</Text>
            <Button 
                onPress={() => {
                    loadPainJournals();
                    navigation.navigate("PainJournal"); 
                    setTimeout(() => {setJournalComplete(false)}, 1000);
                }}>
                    Next
            </Button>
        </JournalContainer>
    );
};