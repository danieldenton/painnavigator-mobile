import React, { useContext } from "react";
import styled from "styled-components/native";
import { Card, Text } from "react-native-paper";
import { FeelingsDiagram } from "./feelings-diagram.component";
import { EditButton } from "./edit-button.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

const EntryCard = styled(Card)`
    flex: 1;
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    min-height: 169px;
`;

const EntryInfoSection = styled.View`
    flex: 1;
`;

const BottomSection = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`;

export const CompletedEntryCard = ({ meal, navigation }) => {
    const { food, feelingBefore, feelingAfter } = JSON.parse(meal.entry);
    const { setMeal, setNewFoodJournalEntry } = useContext(FoodJournalContext);

    return (
        <EntryCard>
            <EntryInfoSection>
                <Text>{meal.meal}</Text> 
                <Text>{food}</Text> 
            </EntryInfoSection>
            <BottomSection>
                <FeelingsDiagram feelingBefore={feelingBefore} feelingAfter={feelingAfter}/>
                <EditButton 
                    meal={meal} 
                    navigation={navigation} 
                    setMeal={setMeal} 
                    setNewFoodJournalEntry={setNewFoodJournalEntry}
                />
            </BottomSection>
        </EntryCard>
    );
};