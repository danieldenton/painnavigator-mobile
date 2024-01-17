import React from "react";
import { Selected } from "../../icons";
import { 
    CheckBoxPressableArea, 
    CheckCircleArea, 
    UncheckedCheckCircle, 
    CheckBoxTextContentArea, 
    Option,
    HelpText,
} from "./styles";
import * as Haptics from 'expo-haptics';
import { isAndroid } from "../../utils";

export const SingleSelectCheckBox = ({ add, optionData, selectedOption }) => {
    const { helpText, option } = optionData;
        
    return (
        <CheckBoxPressableArea
            activeOpacity={0.5}
            accessibilityLabel={`select-${option}`}
            onPress={() => {
                add(option);
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
            role={"checkbox"}
            style={{ marginBottom: isAndroid ? 12 : 20 }}
        >
            <CheckCircleArea>
                {selectedOption === option ? 
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