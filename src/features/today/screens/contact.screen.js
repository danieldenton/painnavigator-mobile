import React, { useContext, useState } from "react";
import axios from 'axios';
import { API_URL } from "@env";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { JournalQuestion } from "../../../components/journal-question.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { TextInputLarge } from "../../../components/text-input.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const ContactScreen = ({ navigation }) => {
    const [body, setBody] = useState("");
    const { userInfo } = useContext(ProfileContext);

    const send = () => {
        axios.post(`${API_URL}/api/v1/contact_us`, { body: body, email: userInfo.email, name: userInfo.first_name })
        .then((response) => {})
        .catch(resp => console.log(response));
    };

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
            <TextInputLarge 
                onChangeText={(change) => setBody(change)}
            />
            <ButtonSection>
                <JournalButton 
                    title={"Send"}
                    onPress={() => {
                        send();
                        navigation.navigate("Sent")
                    }}
                />
            </ButtonSection>
        </SafeView>
    );
};