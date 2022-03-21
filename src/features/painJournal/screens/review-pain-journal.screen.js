import React from "react";
import { View, Text } from "react-native";

export const ReviewPainJournal = ({journalData}) => {
    return(
        <View>
            <Text>
                {journalData.summary}
            </Text>
        </View>
    );
};