import React from "react";
import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { Selected } from "../icons";
import * as Haptics from 'expo-haptics';
import { ScrollView } from "react-native";

export const MultiSelectScroll = styled(ScrollView).attrs({
    showsVerticalScrollIndicator: false
})`
    flex: .85;
    margin-right: -16px;
    padding-right: 16px;
`;

const CheckBoxPressableArea = styled.Pressable`
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

const CheckBoxTextContentArea = styled.View`
    flex: 1;
`;

const Option = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
    width: 80%;
`;

const HelpText = styled.Text`
    font-family: Inter_300Light;
    font-size: 14px;
    font-style: italic;
    margin-top: 4px;
    width: 80%;
`;

export const SelectedCheckBox = ({ value }) => {
    return (
        <CheckBoxPressableArea
            accessibilityLabel={`${value}-checkbox`}
            activeOpacity={0.5}
            role={"checkbox"}
        >
            <CheckCircleArea>
                <Selected />
            </CheckCircleArea>
            <CheckBoxTextContentArea>
                <Option>{value}</Option>
            </CheckBoxTextContentArea>
        </CheckBoxPressableArea>
    );
};

export const MultiSelectCheckBox = ({ add, optionData, remove, selectedOptions }) => {
    const { helpText, id, option } = optionData;

    const selected = selectedOptions.find((optionId) => optionId === id);
    
        
    return (
        <CheckBoxPressableArea
            accessibilityLabel={`${option}-checkbox`}
            activeOpacity={0.5}
            onPress={() => {
                selected ? remove(id) : add(id);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
            role={"checkbox"}
        >
            <CheckCircleArea>
                {selected ? 
                    <Selected />
                    : 
                    <UncheckedCheckCircle />
                }
            </CheckCircleArea>
            <CheckBoxTextContentArea>
                <Option>{option}</Option>
                {helpText && <HelpText>{helpText}</HelpText>}
            </CheckBoxTextContentArea>
        </CheckBoxPressableArea>
    );
};

export const AdditionalItemsCheckBox = ({ add, optionData, remove, selectedOptions }) => {
    const { helpText, id, option } = optionData;

    const selected = selectedOptions.find((optionId) => optionId.id === id);
        
    return (
        <CheckBoxPressableArea
            accessibilityLabel={`${option}-checkbox`}
            activeOpacity={0.5}
            onPress={() => {
                selected ? remove(id) : add(id);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
            role={"checkbox"}
        >
            <CheckCircleArea>
                {selected ? 
                    <Selected />
                    : 
                    <UncheckedCheckCircle />
                }
            </CheckCircleArea>
            <CheckBoxTextContentArea>
                <Option>{option}</Option>
                {helpText && <HelpText>{helpText}</HelpText>}
            </CheckBoxTextContentArea>
        </CheckBoxPressableArea>
    );
};