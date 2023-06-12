import React, { useState, useContext} from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { patchDailyPainScore, postDailyPainScore } from '../../../services/daily-pain/daily-pain.service';




export const DailyPainScoreComponent = ({ naviagtion }) => {
    const { dailyPainScore, dailyPain, setDailyPainScore, todaysPain, setTodaysPain } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)
    const uid = user.user.uid

    const handleDailyPainScore = () => {
        if (todaysPain) {
            patchDailyPainScore(uid, dailyPainScore, setDailyPainScore)
            console.log("hello")
        } else {
            postDailyPainScore(uid, dailyPainScore, setDailyPainScore)
            setTodaysPain(true) 
            console.log(dailyPainScore, todaysPain)
        }
        naviagtion.navigate("PainTrackerScreen")  
    }

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider value={dailyPainScore.score} onValueChange={dailyPain} state={"score"} />
            <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => {handleDailyPainScore()}}
                /> 
            </ButtonSection>  
        </>
    )

}