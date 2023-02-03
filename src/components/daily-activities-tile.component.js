import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Add, FoodJournalIcon, Locked } from "../icons";
import { View } from "react-native";

const DailyActivitiesCard = styled(Card)`
    margin-top: 16px;
    border-radius: 15px;
    padding: 21px;
`;

const ModuleCardContent = styled(Card.Content)`
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
    justify-content: flex-end;
`;


export const DailyActivitiesTile = ({ destination, title, navigation, icon, screen, screenParams }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination, { 
                screen: screen,
                params: { type: screenParams }
            }
        )}> 
            <DailyActivitiesCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{title}</CardHeader>
                    </CardTextSection>
                    <CardIconSection>
                        {title === "Add New Entry" && <Add />}
                        {title === "Today's Food Journal" && <FoodJournalIcon />}
                        {icon}
                    </CardIconSection>
                </ModuleCardContent>
            </DailyActivitiesCard>
        </TouchableOpacity>
    ); 
};

const Space = styled.View`
    margin-top: 8px;
`;

const DailyGoalMessageSection = styled.View`
    align-items: center;
    margin-top: 16px;
`;

const DailyGoalMessage = styled.Text`
    color: #606C81;
    font-size: 14px;
    font-family: Inter_400Regular;
    line-height: 22px;
    margin-left: 4px;
    margin-right: 4px;
`

export const LockedActivityText = () => {
    return (
        <DailyGoalMessageSection>
            <DailyGoalMessage>
                Locked journals will be unlocked when you complete their corresponding education units.
            </DailyGoalMessage>
        </DailyGoalMessageSection>
    )
};

export const LockedActivity = ({ title }) => {
    return (
        <DailyActivitiesCard
            style={{ backgroundColor: "#EDF1F5" }}
        >
            <Space />
            <ModuleCardContent>
                <CardTextSection>
                    <CardHeader>{title}</CardHeader>
                </CardTextSection>
                <CardIconSection>
                    <Locked />
                </CardIconSection>
            </ModuleCardContent>
            <Space />
        </DailyActivitiesCard>
    );
};