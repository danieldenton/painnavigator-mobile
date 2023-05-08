import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

export const OutcomeEnjoyment = () => {
    const { outcomeData, setOutcomeData } = useContext(AuthenticationContext)
    const { enjoymentOfLife } = onboardingData;

    return (
        <>
            <JournalQuestion 
                question={"What number best describes how, during the past week, pain has interfered with your enjoyment of life?"}
                helpText={"0 is no pain, 10 is pain has taken away all enjoyment of life"}
            />
            <IntensitySlider 
                value={enjoymentOfLife} 
                onValueChange={changeOnboardEntry} 
                state={"enjoymentOfLife"}
            />
        </> 
    );

}