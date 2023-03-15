import React from "react";
import { Next } from "../../../icons";
import { TouchableOpacity } from "react-native";
import { GoalCard, CardContentWrapper, GoalTextSection, GoalText } from "./goal.styles";
import { track } from "@amplitude/analytics-react-native";

export const OngoingGoalTile = ({ goal, navigation, trackEvent }) => {
    return ( 
        <TouchableOpacity onPress={() => (track(trackEvent), navigation.navigate("ReviewSmartGoal"))}> 
            <GoalCard>
                <CardContentWrapper>
                    <GoalTextSection>
                        <GoalText>
                            "{goal.goal}"
                        </GoalText>
                    </GoalTextSection>
                    <Next />
                </CardContentWrapper>
            </GoalCard>
        </TouchableOpacity>
    ); 
};