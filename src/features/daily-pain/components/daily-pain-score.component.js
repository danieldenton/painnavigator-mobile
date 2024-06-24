import React, { useContext } from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const DailyPainScoreComponent = () => {
    const { dailyPainScore, setDailyPainScore, handleDailyPainScore } = useContext(DailyPainContext)  
    const { uid } = useContext(AuthenticationContext) 

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider setState={setDailyPainScore} objectKey={"score"} value={dailyPainScore.score} />
            <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => handleDailyPainScore(uid)}
                /> 
            </ButtonSection>  
        </>
    )
}