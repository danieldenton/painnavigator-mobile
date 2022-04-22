import React from "react";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../infrastructure/theme/colors";

const ResponseWrapper = styled.View`
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

export const EditIntensity = ({ response }) => {
    return (
        <ResponseWrapper>
            <ResponseTextWrapper>
                <ResponseText>{response} out of 10</ResponseText>
            </ResponseTextWrapper>
            <ButtonSection>
                <ButtonWrapper>
                    <AntDesign name="minuscircleo" size={20} color={colors.text.secondary} />
                </ButtonWrapper>
                <ButtonWrapper>
                    <AntDesign name="pluscircleo" size={20} color={colors.text.secondary} />
                </ButtonWrapper>
            </ButtonSection>
        </ResponseWrapper>
    );
};