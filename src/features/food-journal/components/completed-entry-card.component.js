import React, { useContext } from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { FeelingsDiagram } from "./feelings-diagram.component";
import { EditButton } from "./edit-button.component";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

const EntryCard = styled(Card)`
    flex: 1;
    margin-top: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    min-height: 169px;
`;

const EntryInfoSection = styled.View`
    flex: 1;
    margin-left: 5px;
`;

const BottomSection = styled.View`
    flex-direction: row;
    margin-left: 5px;
    margin-right: 5px;
`;

const ButtonSection = styled.View`
    position: absolute;
    right: 7px;
    bottom: 5px;
`;

const Meal = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    margin-top: 8px;
`;

const Food = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    margin-top: 5px;
`;

export const CompletedEntryCard = ({ meal, navigation }) => {
    const { food, feelingBefore, feelingAfter } = JSON.parse(meal.entry);
    const { setMeal, setFoodJournal } = useContext(FoodJournalContext);

    return (
        <EntryCard>
            <EntryInfoSection>
                <Meal>{meal.meal}</Meal> 
                <Food>{food}</Food> 
            </EntryInfoSection>
            <BottomSection>
                <FeelingsDiagram feelingBefore={feelingBefore} feelingAfter={feelingAfter}/>
                <ButtonSection>
                    <EditButton 
                        meal={meal} 
                        navigation={navigation} 
                        setMeal={setMeal} 
                        setFoodJournal={setFoodJournal}
                    />
                </ButtonSection>
            </BottomSection>
        </EntryCard>
    );
};