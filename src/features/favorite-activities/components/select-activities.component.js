import React, { useContext } from "react";
import styled from "styled-components/native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";
import { MultiSelectCheckBox } from "../../../components/multi-select-checkbox.component";
import { ScrollView } from "react-native";
import { options } from "../data/favorite-activity-data.json";

const MultiSelectScroll = styled(ScrollView)`
    flex: .75;
`;

export const SelectActivities = () => {
    const { addActivity, removeActivity, favoriteActivities } = useContext(FavoriteActivitiesContext);

    const favoriteActivityOptions = options.map((option) => {
        return (
            <MultiSelectCheckBox 
                add={addActivity}
                key={option.id}
                optionData={option} 
                remove={removeActivity}
                selectedOptions={favoriteActivities}
            />            
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Select all activities you’ve enjoyed or you’d like to try"} 
                helpText={"Tap the circles to select"} 
            />
            <MultiSelectScroll>
                {favoriteActivityOptions}
            </MultiSelectScroll>
        </>
    );
}; 