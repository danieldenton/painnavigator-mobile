import React from "react";
import styled from "styled-components/native";
import { TextInput } from "../components/text-input.component";
import { EditIntensity } from "../components/edit-intensity.component";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";

const QuestionWrapper = styled.View`
    border-top: .5px hsl(218, 44%, 86%) solid;
    border-botton: .5px hsl(218, 44%, 86%) solid;
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
`;

const QuestionText = styled.View`
    font-size: 12px;
    color: ${colors.text.secondary};
`;

const ResponseText = styled.View`
    font-size: 18px;
    margin-top: ${space[3]};
`;

export const InputQuestion = ({ changeEntry, editing, entry }) => {
    const { question, response, state } = entry;

    return (
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {editing ? 
                <TextInput
                    value={response}
                    onChangeText={(change) => changeEntry(change, state)}
                />
                : 
                <ResponseText>{response}</ResponseText>
            }
        </QuestionWrapper>
    );
};

export const IntensityQuestion = ({ editing, entry }) => {
    const { question, response } = entry;

    return (
        <QuestionWrapper>
            <QuestionText>{question}</QuestionText>
            {editing ? 
                <EditIntensity value={response} />
                : 
                <ResponseText>{response}</ResponseText>
            }
        </QuestionWrapper>
    );
};