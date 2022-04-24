import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Question } from "./pain-journal.styles";
import { CopingStrategyTile } from "./coping-strategy-tile.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const CopingStrategies = () => {
    const { currentQuestionData, newPainJournal, setNewPainJournal } = useContext(PainJournalContext);
    const { question, options } = currentQuestionData;

    const copingStrategyOptions = options.map((option) => 
        <CopingStrategyTile 
            key={option.id}
            option={option} 
            newPainJournal={newPainJournal} 
            setNewPainJournal={setNewPainJournal} 
        />
    );

    return(
        <>
            <Question question={question} />
            <ScrollView>
                {copingStrategyOptions}
            </ScrollView>
        </>
    );
};