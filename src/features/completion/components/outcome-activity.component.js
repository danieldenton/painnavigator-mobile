import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestionAndIntensitySlider } from '../../../components/JournalQuestionAndIntensitySlider'

export const OutcomeActivity = () => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    const { outcomeActivityInterference } = outcomeData;

    return (
        <JournalQuestionAndIntensitySlider
            question={"What number best describes how, during the past week, pain has interfered with your general activity?"}
            helpText={"0 is not at all, 10 is pain has made normal activities impossible"}
            value={outcomeActivityInterference}
            onValueChange={changeOutcomeEntry}
            state={"outcomeActivityInterference"}
        />
    );

}
