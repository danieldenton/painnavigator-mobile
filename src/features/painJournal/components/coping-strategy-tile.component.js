import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";


const CopingStrategy = styled(TouchableOpacity)`
    padding: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const CopingStrategyTile = ({ option, painJournal, setPainJournal }) => {
    const isSelected = painJournal.copingStrategies.find((selected) => selected === option.id)
    const copingStrategies = painJournal.copingStrategies; 
    
    const add = (optionId) => {
        setPainJournal(journal => ({
            ...journal,
            ["copingStrategies"]: [...copingStrategies, optionId]
        }));
        //setCopingStrategies([...copingStrategies, optionId]);
    };
    
    const remove = (optionId) => {
        const newCopingStrategies = copingStrategies.filter(
          (x) => x !== optionId
        );

        setPainJournal(journal => ({
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