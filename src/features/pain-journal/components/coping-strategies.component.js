import React, { useContext } from "react";
import styled from "styled-components/native";
import { JournalQuestion } from "../../../components/journal-question.component";
import { MultiSelectCheckBox } from "../../../components/multi-select-checkbox.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";
import { ScrollView } from "react-native";

const MultiSelectScroll = styled(ScrollView)`
    flex: .65;
`;

export const CopingStrategies = () => {
    const { currentPageData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { options } = currentPageData;
    const selectedCopingStrategies = painJournal.copingStrategies;

    const add = (optionId) => {
        setPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: [...selectedCopingStrategies, optionId]
        }));
    };
    
    const remove = (optionId) => {
        const newCopingStrategies = selectedCopingStrategies.filter(
          (x) => x !== optionId
        );

        setPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: newCopingStrategies
        }));    
    };

    const copingStrategies = options.map((option) => {
        return (
            <MultiSelectCheckBox 
                add={add}
                key={option.id}
                optionData={option} 
                remove={remove}
                selectedOptions={selectedCopingStrategies}
            />            
        );
    });

    return (
        <>
            <JournalQuestion question={currentPageData.question} helpText={currentPageData.helpText} />
            <MultiSelectScroll>
                {copingStrategies}
            </MultiSelectScroll>
        </>
    );
}; 