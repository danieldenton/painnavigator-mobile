import React, { useContext, useEffect, useState } from "react";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";
import { ButtonSection } from '../../../components/journals/journal.styles';
import { JournalButton } from "../../../components/button.component";

export const PainTrackerComponent = ({ navigation }) => {
    const { setDailyPainScores } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)

    useEffect(() => {
        getDailyPainScores(user.user.uid, setDailyPainScores)
    }, [])

    return (
        <>
            <ButtonSection>
                <JournalButton 
                    title={"Back To Home"} 
                    onPress={() => navigation.navigate("Today")}
                />
            </ButtonSection>  
         </>
    )
}