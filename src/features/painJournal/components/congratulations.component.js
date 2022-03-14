import React, { useContext }from "react";
import { Text, View } from "react-native";
import { Button } from "../../../components/button/button.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Congratulations = ({ navigation }) => {
    const { setJournalComplete } = useContext(PainJournalContext);

    return(
        <View>
            <Text>Congratulations</Text>
            <Button 
                onPress={() => {
                    navigation.navigate("PainJournal"); 
                    setTimeout(() => {setJournalComplete(false)}, 1000);
                }}>
                    Next
            </Button>
        </View>
    );
};