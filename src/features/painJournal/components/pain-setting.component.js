import React, { useContext } from "react";

import { Question, Input } from "./pain-journal.styles";

import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainSetting = () => {
    
    const { 
        currentQuestionData,
        painSetting, 
        setPainSetting, 
        painFeeling, 
        setPainFeeling, 
        whoWith, 
        setWhoWith } = useContext(PainJournalContext);

    const { questions } = currentQuestionData;
    const painSettingQuestion = questions[0];
    const painFeelingQuestion = questions[1];
    const whoWithQuestion = questions[2];

    return(
        <>
            <Question question={painSettingQuestion.question} helpText={painSettingQuestion.helpText} />
            <Input 
                value={painSetting}
                onChangeText={(text) => {
                    setPainSetting(text);
                }}
            />
            <Question question={painFeelingQuestion.question} helpText={painFeelingQuestion.helpText} />
            <Input
                value={painFeeling}
                onChangeText={(text) => {
                    setPainFeeling(text);
                }}
            />
            <Question question={whoWithQuestion.question} helpText={whoWithQuestion.helpText} />
            <Input 
                value={whoWith}
                onChangeText={(text) => {
                    setWhoWith(text);
                }}
            />
        </>
    );
};