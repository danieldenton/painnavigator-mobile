import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

export const Recommend = () => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    const { outcome_recommendation } = outcomeData;

    return (
        <JournalQuestionAndIntensitySlider
            question={"On a scale of 1-10, how likely are you to recommend the PainNavigator app to others?"}
            helpText={"0 is not at all, 10 is very likely"}
            value={outcome_recommendation}
            onValueChange={changeOutcomeEntry}
            state={"outcome_recommendation"}
        />
    );
}