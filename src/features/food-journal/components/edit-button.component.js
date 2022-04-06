import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

const EditButtonWrapper = styled.TouchableOpacity`
    border: 2px solid ${colors.brand.primary};
    border-radius: 6px;
    padding: 7px 10px;
`;

const EditButtonText = styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: ${colors.brand.primary};
`; 

export const EditButton = ({ meal, navigation, setMeal, setNewFoodJournalEntry }) => {
    const { food, feelingBefore, feelingAfter } = JSON.parse(meal.entry);

    return  (
        <EditButtonWrapper
            onPress={() => { 
                setMeal(meal.meal);
                setNewFoodJournalEntry({
                    food: food, 
                    feelingBefore: feelingBefore, 
                    feelingAfter: feelingAfter
                });
                navigation.navigate("FoodJournalEntry", { journalId: meal.id });
            }}
        >   
            <EditButtonText>EDIT</EditButtonText>
        </EditButtonWrapper>
    );
};