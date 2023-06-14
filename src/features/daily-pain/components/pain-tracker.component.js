import React, { useContext, useEffect } from "react";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { DailyPainGraph } from "./daily-pain-graph.component";
import { formatDate } from "../../../infrastructure/helpers";
import styled from "styled-components/native";


export const DesriptionMessageWrapper = styled.View`
    align-items: center;
    margin-top: 25px; 
    margin-left: 4px;
    margin-right: 4px;
`;

export const DescriptionMessage = styled.Text`
    font-family: Inter_400Regular;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 26px;
    text-align: center;
`;


export const PainTrackerComponent = ({ navigation }) => {
    const { dailyPainScores, setDailyPainScores } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)
   

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])
    


    const startDate = formatDate(dailyPainScores[0].date_time_value)

    // const graphData = dailyPainScores.map((score) => {
    //     return { score: score.score, date: formatDateNoYear(score.date_time_value) }
    // })

    const graphData = [
        {score: 1, date: "6/1"},
    ]

    return (
        <>
        <DailyPainGraph graphData={graphData} />
        <DesriptionMessageWrapper>
            <DescriptionMessage>This graph displays your daily pain score progress since you began on {startDate}.</DescriptionMessage>
        </DesriptionMessageWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"Back To Home"} 
                    onPress={() => navigation.navigate("Today")}
                />
            </ButtonSection>  
         </>
    )
}