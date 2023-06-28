import React, { useContext, useEffect } from "react";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";
import { PainGraph } from "./pain-graph.component";
import { formatDate, formatDateNoYear } from "../../../infrastructure/helpers";
import styled from "styled-components/native";
import { isAndroid } from "../../../utils";


export const DesriptionMessageWrapper = styled.View`
    align-items: center;
    margin-left: 4px;
    margin-right: 4px;
`;

export const DescriptionMessage = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    margin-bottom: 4px;
    line-height: 26px;
    text-align: center;
`;

export const DescriptionHelpMessage = styled.Text`
    font-family: Inter_400Regular;
    font-size: 14px;
    margin-top: 9px;
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

    const graphData = dailyPainScores.map((score) => {
        return { score: score.score, date: formatDateNoYear(score.date_time_value) }
    })

    return (
        <>
        <PainGraph graphData={graphData} />
        <DesriptionMessageWrapper>
            <DescriptionMessage>Your daily pain score progress since you began on {startDate}.</DescriptionMessage>
            <DescriptionHelpMessage>Scroll to the right to see all of the data.</DescriptionHelpMessage>
            <DescriptionHelpMessage>To adjust today's pain score use the arrow in the upper left corner.</DescriptionHelpMessage>
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