import React from "react";
import styled from "styled-components/native";
import { ReviewTextInput } from "../components/text-input.component";
import { EditIntensity } from "../components/edit-intensity.component";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";

const QuestionWrapper = styled.View`
    border-top-color: hsl(218, 44%, 86%);
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
`;

const QuestionText = styled.Text`
    font-size: 12px;
    color: ${colors.text.secondary};
`;

const ResponseText = styled.Text`
    font-size: 18px;
    margin-top: ${space[3]};
`;

export const InputQuestion = ({ changeEntry, editing, entry }) => {
    const { question, response, state } = entry;

    return (
        <QuestionWrapper style={{ borderTopWidth: editing ? 0 : .5 }}>
            <QuestionText>{question}</QuestionText>
            {editing ? 
                <ReviewTextInput
                    value={response}
                    onChangeText={(change) => changeEntry(change, state)}
                />
                : 
                <ResponseText>{response}</ResponseText>
            }
        </QuestionWrapper>
    );
};

export const IntensityQuestion = ({ changeEntry, editing, entry }) => {
    const { question, response, state } = entry;

    return (
        <QuestionWrapper style={{ borderTopWidth: editing ? 0 : .5 }}>
            <QuestionText>{question}</QuestionText>
            {editing ? 
                <EditIntensity response={response} changeEntry={changeEntry} state={state} />
                : 
                <ResponseText>{response} out of 10</ResponseText>
            }
        </QuestionWrapper>
    );
};