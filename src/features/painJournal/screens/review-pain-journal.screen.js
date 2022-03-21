import React from "react";
import { View, Text } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { JournalContainer } from "../components/pain-journal.styles";

export const ReviewPainJournal = (journal) => {
    return(
        <SafeArea>
            <JournalContainer>
                <Text>
                    {journal}
                </Text>
            </JournalContainer>
        </SafeArea>
    );
};