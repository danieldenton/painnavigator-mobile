import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import * as Haptics from 'expo-haptics';

const ResponseWrapper = styled.View`
    margin-top: ${space[3]};    
    flex-direction: row;
`;

const ResponseTextWrapper = styled.View`
    margin-right: 20px;
`;

const ResponseText = styled.Text`
    font-size: 18px;
`;

const ButtonSection = styled.View`
    flex-direction: row;
`;

const ButtonWrapper = styled.TouchableOpacity`
    margin-left: 8.5px;
    margin-right: 8.5px;
`;

export const EditIntensity = ({ response, changeEntry, state }) => {
    const [value, setValue] = useState(response);

    useEffect(() => {
        changeEntry(value, state);
    }, [value])

    const add = () => {
        setValue(prevValue => prevValue + 1);
    };

    const subtract = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <ResponseWrapper>
            <ResponseTextWrapper>
                <ResponseText>{value} out of 10</ResponseText>
            </ResponseTextWrapper>
            <ButtonSection>
                <ButtonWrapper 
                    onPress={() => {
                        subtract();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }} 
                    disabled={response === 0 && true}
                >
                    <AntDesign name="minuscircleo" size={22} color={response > 0 ? colors.text.secondary : colors.textInput.inactive} />
                </ButtonWrapper>
                <ButtonWrapper 
                    onPress={() => {
                        add();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }} 
                    disabled={response === 10 && true}
                >
                    <AntDesign name="pluscircleo" size={22} color={response < 10 ? colors.text.secondary : colors.textInput.inactive} />
                </ButtonWrapper>
            </ButtonSection>
        </ResponseWrapper>
    );
};

export const EditSelect = ({ response, changeEntry, state, textResponse, max }) => {
    const [value, setValue] = useState(response);

    useEffect(() => {
        changeEntry(value, state);
    }, [value])

    const add = () => {
        setValue(prevValue => prevValue + 1);
    };

    const subtract = () => {
        setValue(prevValue => prevValue - 1);
    };

    return (
        <ResponseWrapper>
            <ResponseTextWrapper>
                <ResponseText>{textResponse}</ResponseText>
            </ResponseTextWrapper>
            <ButtonSection>
                <ButtonWrapper 
                    onPress={() => {
                        subtract();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }}
                    disabled={response === 0 && true}>
                    <AntDesign name="minuscircleo" size={22} color={response > 0 ? colors.text.secondary : colors.textInput.inactive} />
                </ButtonWrapper>
                <ButtonWrapper 
                    onPress={() => {
                        add();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
                    }} 
                    disabled={response === max && true}
                >
                    <AntDesign name="pluscircleo" size={22} color={response < max ? colors.text.secondary : colors.textInput.inactive} />
                </ButtonWrapper>
            </ButtonSection>
        </ResponseWrapper>
    );
};