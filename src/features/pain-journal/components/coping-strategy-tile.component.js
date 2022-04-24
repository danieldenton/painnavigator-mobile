import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

const CopingStrategy = styled(TouchableOpacity)`
    padding: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CopingStrategyTile = ({ option, newPainJournal, setNewPainJournal }) => {
    const copingStrategies = newPainJournal.copingStrategies; 
    const isSelected = copingStrategies.find((selected) => selected === option.id);
    
    const add = (optionId) => {
        setNewPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: [...copingStrategies, optionId]
        }));
        console.log(String(copingStrategies));
    };
    
    const remove = (optionId) => {
        const newCopingStrategies = copingStrategies.filter(
          (x) => x !== optionId
        );

        setNewPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: newCopingStrategies
        }));    
    };

    return(
        <CopingStrategy 
            onPress={() => isSelected ? remove(option.id) : add(option.id)}
            style={{
                backgroundColor: isSelected && colors.bg.secondary
            }}
        >
            <Text>{option.option}</Text>
        </CopingStrategy>
    );
};