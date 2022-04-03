import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text, View } from "react-native";
import { OutlineButton } from "../../../../components/button.component";
import { AntDesign } from '@expo/vector-icons';

const EntryCard = styled(Card)`
    flex: 1;
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
    border-radius: 15px;
`;

const EntryInfoSection = styled.View`
    flex: 1;
`;

const FeelingDiagram = styled.View`
    flex-direction: row;
`;

const BottomSection = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const EditButton = styled(OutlineButton)`
    height: 28px;
`;

export const FoodJournalEntryCard = ({ meal }) => {
    const {food, feelingBefore, feelingAfter} = JSON.parse(meal.entry);

    return (
        <EntryCard>
            <EntryInfoSection>
                <Text>
                    {meal.meal}
                </Text> 
                <Text>
                    {food}
                </Text> 
            </EntryInfoSection>
            <BottomSection>
                <FeelingDiagram>
                    <Text>
                        {feelingBefore}
                    </Text> 
                    <AntDesign name="arrowright" size={24} color="black" />
                    <Text>
                        {feelingAfter}
                    </Text> 
                </FeelingDiagram>
                <EditButton>
                    Edit
                </EditButton>
            </BottomSection>
        </EntryCard>
    );
};