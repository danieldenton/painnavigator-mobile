import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Selected } from "../../../icons";

const DailyGoalCard = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 21px;
    padding-right: 22px;
    background-color: #CDEBE6;
`;

const DailyGoalCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
`;

const CardHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

const CardIconSection = styled.View`
    flex: .2;
    align-items: flex-end;
    justify-content: center;
`;

const DailyGoalMessageSection = styled.View`
    align-items: center;
    margin-top: 16px;
`;

const DailyGoalMessage = styled.Text`
    color: #606C81;
    font-size: 14px;
    font-family: Inter_400Regular;
`

export const DailyGoalCompleted = () => {
    return (
        <>
            <DailyGoalCard>
                <DailyGoalCardContent>
                    <CardTextSection>
                        <CardHeader>
                            PainNavigator Introduction
                        </CardHeader>
                    </CardTextSection>
                    <CardIconSection>
                        <Selected />
                    </CardIconSection>
                </DailyGoalCardContent>
            </DailyGoalCard>

            <DailyGoalMessageSection>
                <DailyGoalMessage>
                    Daily goal reached! Keep going?
                </DailyGoalMessage>
            </DailyGoalMessageSection>
        </>
    );
};