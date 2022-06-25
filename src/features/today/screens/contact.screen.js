import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { TextInputLarge } from "../../../components/text-input.component";

export const ContactScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft 
                navigation={navigation} 
                destination={"Today"} 
                screen={"Contact"} 
            />
            <JournalQuestion 
                question={"We’d love to hear from you!"}
                helpText={"Send us a message with any questions, comments, or suggestions"}
            />
            <TextInputLarge />
            <ButtonSection>
                <JournalButton 
                    title={"Send"}
                />
            </ButtonSection>
        </SafeView>
    );
};