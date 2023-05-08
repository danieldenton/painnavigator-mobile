import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestionAndIntensitySlider } from '../../../components/JournalQuestionAndIntensitySlider';

export const OutcomeEnjoyment = () => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext);
    const { outcome_enjoyment_of_life } = outcomeData;

    return (
        <JournalQuestionAndIntensitySlider 
            question={"What number best describes how, during the past week, pain has interfered with your enjoyment of life?"}
            helpText={"0 is no pain, 10 is pain has taken away all enjoyment of life"}
            value={outcome_enjoyment_of_life}
            onValueChange={changeOutcomeEntry}
            state={"outcome_enjoyment_of_life"}
        />
    )
}