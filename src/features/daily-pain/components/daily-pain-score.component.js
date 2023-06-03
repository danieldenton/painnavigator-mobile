import React, { useState, useContext} from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const DailyPainScoreComponent = () => {
    const { dailyPainScore, setDailyPainScore, dailyPain } = useContext(AuthenticationContext)

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider value={dailyPainScore.score} onValueChange={dailyPain} state={"score"} />
        </>
    )

}