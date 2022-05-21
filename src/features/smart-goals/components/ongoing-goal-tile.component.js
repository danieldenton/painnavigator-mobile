import React from "react";
import styled from "styled-components/native";
import { Next } from "../../../icons";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const GoalCard = styled(Card)`
    border-radius: 15px;
    margin-top: 12px;
`;

const CardContentWrapper = styled(Card.Content)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 21px;
`;

const GoalTextSection = styled.View`
    flex: .9;
`;

const GoalText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

export const OngoingGoalTile = ({ goal, navigation }) => {
    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("ReviewSmartGoal", {
            goal: goal
        })}> 
            <GoalCard>
                <CardContentWrapper>
                    <GoalTextSection>
                        <GoalText>
                            "{goal.attributes.goal}"
                        </GoalText>
                    </GoalTextSection>
                    <Next />
                </CardContentWrapper>
            </GoalCard>
        </TouchableOpacity>
    ); 
};