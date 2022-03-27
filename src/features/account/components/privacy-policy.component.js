import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SmallSpacer } from "../../../components/spacer.component";
import { Button } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const PrivacyPolicy = () => {
    const { completeProfile, nextQuestion } = useContext(ProfileContext);

    return(
        <View>
            <Text>
                PrivacyPolicy
            </Text>
            <SmallSpacer>
                <Button onPress={() => {nextQuestion(); completeProfile();}}>
                    Agree
                </Button>
            </SmallSpacer>
        </View>
    );
};