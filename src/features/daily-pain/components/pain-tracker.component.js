import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { formatDate } from "../../../infrastructure/helpers";

export const PainTrackerComponent = ({ navigation }) => {
    const { setDailyPainScores, dailyPainScores } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])

    const scores = dailyPainScores.map((day) => {
        const date = formatDate(day.date_time_value)
        return (
            <Text>{day.score} {date} {day.id}</Text>
        )
    })

    return (
        <>
        {scores}
            <ButtonSection>
                <JournalButton 
                    title={"Back To Home"} 
                    onPress={() => navigation.navigate("Today")}
                />
            </ButtonSection>  
         </>
    )
}