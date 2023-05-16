import React from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";

export const ActivityInterference = ({ onValueChange, data }) => {
    return (
        <JournalQuestionAndIntensitySlider
            question={"What number best describes how, during the past week, pain has interfered with your general activity?"}
            helpText={"0 is not at all, 10 is pain has made normal activities impossible"}
            value={data.activityInterference}
            onValueChange={onValueChange}
            state={"activityInterference"}
        />
    );
};