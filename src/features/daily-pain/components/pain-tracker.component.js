import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainGraph } from "./daily-pain-graph.component";
import { formatDateWithDay } from "../../../infrastructure/helpers";

export const PainTrackerComponent = ({ navigation }) => {
    const { setDailyPainScores, dailyPainScores, setDailyPainGraphData, dailyPainGraphData } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])

    const graphData = dailyPainScores.map((score, idx) => {
        return { score: score.score, idx: idx, date: formatDateWithDay(score.date_time_value)}
    })

    const scoresDetails = dailyPainScores.map((day) => {
        const date = formatDateWithDay(day.date_time_value)
        return (
            <Text>{day.score} {date} {day.id}</Text>
        )
    })

    return (
        <>
        <DailyPainGraph graphData={graphData} />
        {scoresDetails}
            <ButtonSection>
                <JournalButton 
                    title={"Back To Home"} 
                    onPress={() => navigation.navigate("Today")}
                />
            </ButtonSection>  
         </>
    )
}