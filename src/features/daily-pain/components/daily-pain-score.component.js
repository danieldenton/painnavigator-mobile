import React, { useState, useContext} from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { postDailyPainScore } from '../../../services/daily-pain/daily-pain.service';



export const DailyPainScoreComponent = ({ navigation }) => {
    const { dailyPainScore, dailyPain, setDailyPainScore, setDailyPainScores } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)
    const uid = user.user.uid

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider value={dailyPainScore.score} onValueChange={dailyPain} state={"score"} />
            <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => {(postDailyPainScore(uid, dailyPainScore, setDailyPainScore, setDailyPainScores),
                        navigation.navigate())}} 
                />
            </ButtonSection>       
        </>
    )

}