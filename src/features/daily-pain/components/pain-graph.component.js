import React, { useContext, useEffect, useState } from "react";
import { DailyPainContext } from "../../../services/daily-pain/daily-pain.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { getDailyPainScores } from "../../../services/daily-pain/daily-pain.service";

export const PainGraphComponent = () => {
    const { setDailyPainScores } = useContext(DailyPainContext)
    const { user } = useContext(AuthenticationContext)

useEffect(() => {
    getDailyPainScores(user.user.uid, setDailyPainScores)
}, [])

    return (
        <H1>PAIN GRAPH</H1>
    )
}