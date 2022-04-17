import React, { useEffect } from "react";
import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { FontAwesome5 } from '@expo/vector-icons';

const CheckBoxPressableArea = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
    margin-bottom:  22px;
    margin-left:  2px;
`;

const CheckCircleArea = styled.View`
    margin-right: 18px;
`;

const UncheckedCheckCircle = styled.View`
    border: 2px solid ${colors.brand.primary};
    border-radius: 100px;
    height: 36px;
    width: 36px;
`;

const CheckedCircle = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${colors.brand.primary};
    border-radius: 100px;
    height: 36px;
    width: 36px;
`;

const CheckBoxTextContentArea = styled.View`
    height: 100%;
    width: 75%;
`;

const Option = styled.Text`
    font-size: 18px;
`;

const HelpText = styled.Text`
    font-size: 14px;
    font-style: italic;
    margin-top: 4px;
`;

export const MultiSelectCheckBox = ({ add, optionData, remove, selectedOptions }) => {
    const { helpText, id, option } = optionData;
    const selected = selectedOptions.find((optionId) => optionId === id);
        
    return (
        <CheckBoxPressableArea
            activeOpacity={0.5}
            onPress={() => selected ? remove(id) : add(id)}
            role={"checkbox"}
        >
            <CheckCircleArea>
                {selected ? 
                    <CheckedCircle>
                        <FontAwesome5 name="check" size={16} color="white" />
                    </CheckedCircle> 
                    : 
                    <UncheckedCheckCircle />
                }
            </CheckCircleArea>
            <CheckBoxTextContentArea>
                <Option>{option}</Option>
                <HelpText>{helpText}</HelpText>
            </CheckBoxTextContentArea>
        </CheckBoxPressableArea>
    );
};