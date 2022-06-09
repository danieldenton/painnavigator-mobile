import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { TextInput } from "../../../components/text-input.component";
import { View, Text } from "react-native";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";
import styled from "styled-components/native";
import { Add } from "../../../icons";
import { Scroll } from "../../../components/scroll.component";

const AddButtonWrapper = styled.Pressable`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const AddButtonIconSection = styled.View`
`;

const AddButtonTextSection = styled.View`
    margin-left: 8px;
`;

const AddButtonText = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px; 
`;

const AddButton = ({ addInput }) => {
    return (
        <AddButtonWrapper
            onPress={addInput}
        >
            <AddButtonIconSection>
                <Add />
            </AddButtonIconSection>
            <AddButtonTextSection>
                <AddButtonText>
                    Add Another
                </AddButtonText>
            </AddButtonTextSection>
        </AddButtonWrapper>
    );
};

export const AddActivities = () => {
    const { addedFavoriteActivities, additionalActivities, addInput, changeAdditionalActivities, inputsShown } = useContext(FavoriteActivitiesContext);

    const inputElements = [...Array(inputsShown)].map((inputId, index) => {
            const id = index + 1;
            const activity = additionalActivities.find(item => item.id === id);

            return (
                <TextInput 
                    accessibilityLabel={`additional-activity-${id}`}
                    value={activity.option}
                    onChangeText={(change) => changeAdditionalActivities(change, id)}
                    key={id}
                />
            );
        }
    );

    return (
        <>
            <JournalQuestion 
                question={"Any activities that weren’t listed that you’d like to add to your list?"} 
            />
            <Scroll style={{ padding: 16 }}>
                <View style={{ marginBottom: 120 }}>
                    {inputElements}
                    {inputsShown < 5 && <AddButton addInput={addInput} />}
                </View>
            </Scroll>
        </>
    );
}; 