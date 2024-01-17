import React, { useContext } from 'react'
import { JournalQuestion } from "../../../components/journal-question.component";
import { IntensitySlider } from "../../../components/slider.component";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { patchDailyPainScore, postDailyPainScore } from '../../../services/daily-pain/daily-pain.service';
import { track } from '@amplitude/analytics-react-native';
import { DAILY_PAIN_EVENTS } from '../../../amplitude-events';

export const DailyPainScoreComponent = () => {
    const { dailyPainScore, dailyPain, setDailyPainScore, setDailyPainStep } = useContext(DailyPainContext)
    const { uid } = useContext(AuthenticationContext)

    const handleDailyPainScore = () => {
        if (dailyPainScore.id) {
            setDailyPainScore(patchDailyPainScore(dailyPainScore))
            track(DAILY_PAIN_EVENTS.EDIT_DAILY_PAIN_SCORE)
        } else {
            setDailyPainScore(postDailyPainScore(uid, dailyPainScore))
            track(DAILY_PAIN_EVENTS.LOG_DAILY_PAIN_SCORE)
        }  
        setDailyPainStep(1)
    }

    return (
        <>
            <JournalQuestion question={"How is your pain today?"} helpText={"0 is no pain, 10 is pain as bad as you can imagine."} />
            <IntensitySlider setState={setDailyPainScore} objectKey={"score"} value={dailyPainScore.score} />
            <ButtonSection>
                <JournalButton 
                    title={"Log Pain Score"} 
                    onPress={() => handleDailyPainScore()}
                /> 
            </ButtonSection>  
        </>
    )
}