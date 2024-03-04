import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const GoalWrapper = styled.View`
    margin-bottom: 16px;
`;

export const UpdateWrapper = styled.View`
    flex: 1;
    margin-right: -16px; 
    margin-top: 8px;
    margin-bottom: 120px;
    padding-right: 16px;
`;

export const KeyboardView = styled(KeyboardAwareScrollView)`
    margin-left: -16px;
    margin-right: -16px;
    padding-right: 16px; 
    padding-left: 16px; 
`; 

export const SmartGoalWrapper = styled.View`
    align-items: center;
    margin-top: 16px;
`;

export const SmartGoal = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
`;

export const GoalCard = styled(Card)`
    border-radius: 15px;
    margin-top: 12px;
`;

export const CardContentWrapper = styled(Card.Content)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 21px;
`;

export const GoalTextSection = styled.View`
    flex: .9;
`;

export const GoalText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;
