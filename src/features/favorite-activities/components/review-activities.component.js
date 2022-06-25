import React, { useContext } from "react";
import { JournalQuestion } from "../../../components/journal-question.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";
import { AdditionalItemsCheckBox, MultiSelectCheckBox, MultiSelectScroll } from "../../../components/multi-select-checkbox.component";
import { options } from "../data/favorite-activity-data.json";

export const ReviewActivities = () => {
    const { 
        additionalActivities,
        reAddActivity,
        reAddAddedActivity,
        reviewActivities, 
        removeReviewActivity, 
        removeAddedActivity,
        selectedActivities, 
    } = useContext(FavoriteActivitiesContext);

    const selectedElements = selectedActivities.map((option) => {
        const optionData = options.find(item => item.id === option);

        return (
            <MultiSelectCheckBox 
                add={reAddActivity}
                key={option}
                optionData={optionData} 
                remove={removeReviewActivity}
                selectedOptions={reviewActivities}
            />            
        );
    });

    const newActivities = additionalActivities.filter(item => item.option !== "").map((activity, index) => {
        const selectedOptions = additionalActivities.filter(item => item.option !== "").filter(item => item.selected === true);

        return (
            <AdditionalItemsCheckBox 
                add={reAddAddedActivity}
                key={index}
                optionData={activity} 
                remove={removeAddedActivity}
                selectedOptions={selectedOptions}
            />
        );
    });

    return (
        <>
            <JournalQuestion 
                question={"Remove any activities that you can no longer do."} 
                helpText={"This means you were specifically told by a healthcare provider to avoid this activity or you can't tolerate this activity at all."} 
            />
            <MultiSelectScroll>
                {selectedElements}
                {newActivities}
            </MultiSelectScroll>
        </>
    );
}; 