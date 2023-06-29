import React from "react";
import { Text, View } from "react-native";
import { SafeView } from "../../../components/safe-area.component";
import { WelcomeGraphic } from "../../../graphics";
import { styles } from "../styles/account.styles"

export const AlmostThere = () => {
    return (
        <SafeView>
            <View style={styles.graphicWrapper}>
                <WelcomeGraphic />
            </View>
            <View style={styles.almostThereMessageWrapper}>
                <Text style={styles.referralMessage}>
                Almost there! The last few questions will customize the program for you so we can meet you where you're at! 
                </Text>
            </View>
      </SafeView>
    )
}