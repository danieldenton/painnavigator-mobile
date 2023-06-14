import React, { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainGraph } from "./daily-pain-graph.component";
import { formatDateNoYear } from "../../../infrastructure/helpers";

export const PainTrackerComponent = ({ navigation }) => {
    const { setDailyPainScores, dailyPainScores, setDailyPainGraphData, dailyPainGraphData } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])

    // const graphData = dailyPainScores.map((score, idx) => {
    //     return { score: score.score, idx: idx, date: formatDateNoYear(score.date_time_value) }
    // })
    const graphData = [
        {score: 3, date: "6/1"},
        {score: 8, date: "6/2"},
        {score: 2, date: "6/3"},
        {score: 4, date: "6/4"},
        {score: 9, date: "6/5"},
        {score: 5, date: "6/6"},
        {score: 7, date: "6/7"},
        {score: 1, date: "6/8"},
        {score: 5, date: "6/9"},
        {score: 1, date: "6/10"},
        {score: 9, date: "6/11"},
        {score: 4, date: "6/12"},
    ]

    const scoresDetails = dailyPainScores.map((day) => {
        const date = formatDateNoYear(day.date_time_value)
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