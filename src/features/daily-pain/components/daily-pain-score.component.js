import React, { useState, useContext} from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainContext } from '../../../services/daily-pain/daily-pain.context';

export const DailyPainScoreComponent = () => {
    const { dailyPainScore, setDailyPainScore, dailyPain } = useContext(DailyPainContext)

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider value={dailyPainScore.score} onValueChange={dailyPain} state={"score"} />
            <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    // onPress={() => {
                    // }} 
                />
            </ButtonSection>       
        </>
    )

}