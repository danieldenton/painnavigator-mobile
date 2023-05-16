import React from "react";
import { JournalQuestionAndIntensitySlider } from "../JournalQuestionAndIntensitySlider";

export const EnjoymentOfLife = ({ onValueChange, data }) => {
    return (
        <JournalQuestionAndIntensitySlider 
            question={"What number best describes how, during the past week, pain has interfered with your enjoyment of life?"}
            helpText={"0 is no pain, 10 is pain has taken away all enjoyment of life"}
            value={data.enjoymentOfLife}
            onValueChange={onValueChange}
            state={"enjoymentOfLife"}
        />
    )
};