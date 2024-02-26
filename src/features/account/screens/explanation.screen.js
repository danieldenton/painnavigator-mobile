import React from "react"
import { Text, View } from "react-native";
import { SafeView } from "../../../components/safe-area.component";
import { GraphGraphic } from "../../../graphics"
import { ButtonSection } from "../../../components/journals/journal.styles"
import { JournalButton } from "../../../components/button.component"
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { styles } from "../styles/account.styles"

export const ExplanationScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft 
                destination={"Onboard"} 
                navigation={navigation} 
                screen={"Sign Up"} 
                previousPage={null} 
            />
            <View style={styles.graphicWrapper}>
                <GraphGraphic />
            </View>
            <View style={styles.explanationMessageWrapper}>
                <Text style={styles.referralMessage}>
                The next set of questions will set your baseline scores for the program so you can measure your progress!
                </Text>
            </View>
            <ButtonSection>
            <JournalButton
                title={"Let's Get Started"}
                onPress={() => {
                navigation.navigate("ProfileSetup")
                }}
            />
        </ButtonSection>
      </SafeView>
    )
}