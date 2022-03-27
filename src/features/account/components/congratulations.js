import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SmallSpacer } from "../../../components/spacer.component";
import { Button } from "../../../components/button.component";
import { ProfileContext } from "../../../services/profile/profile-context";

export const Congratulations = () => {
    const { completeOnboarding } = useContext(ProfileContext);

    return(
        <View>
            <Text>
                Congratulations
            </Text>
            <SmallSpacer>
                <Button onPress={completeOnboarding}>
                    Get Started!
                </Button>
            </SmallSpacer>
        </View>
    );
};