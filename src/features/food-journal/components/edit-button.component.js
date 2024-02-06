import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";

const EditButtonWrapper = styled.TouchableOpacity`
    border: 2px solid ${colors.brand.primary};
    border-radius: 2px;
    height: 28px;
    width: 52px;
    align-items: center;
    justify-content: center;
`;

const EditButtonText = styled.Text`
    font-family: Poppins_600SemiBold;
    font-size: 13px;
    color: ${colors.brand.primary};
`; 

export const EditButton = ({ meal, navigation, setMeal, setFoodJournal }) => {
    const { food, feelingBefore, feelingAfter } = JSON.parse(meal.entry);

    return  (
        <EditButtonWrapper
            onPress={() => { 
                setMeal(meal.meal);
                setFoodJournal({
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