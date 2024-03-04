import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ReviewTextInput } from "../components/text-input.component";
import { EditIntensity, EditSelect } from "../components/edit-intensity.component";
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import { Next } from "../icons";
import { genderOptions } from "../features/profile/data/gender-options.data.json";
import { painDurationOptions } from "../features/profile/data/pain-duration-options.data.json";
import { activityLevelOptions } from "../features/profile/data/activity-level-options.data.json";
import { handleTrackEvent } from "../utils";

const QuestionWrapper = styled.View`
    border-top-color: hsl(218, 44%, 86%);
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
`;

const QuestionText = styled.Text`
    font-size: 12px;
    color: ${colors.text.secondary};
    font-family: Inter_500Medium;
`;

const ResponseText = styled.Text`
    font-size: 18px;
    margin-top: ${space[3]};
    font-family: Inter_400Regular;
`;

const QuestionButtonPressable = styled.Pressable`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    padding-bottom: 16px;
`;

const QuestionButtonText = styled.Text`
    font-family: Inter_600SemiBold;
    font-size: 18px;
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

export const SelectQuestion = ({ changeEntry, editing, entry }) => {
    const { max, question, response, state } = entry;
    const [textResponse, setTextResponse] = useState("");

    useEffect(() => {
        if (response === 0) {
            return setTextResponse("Choose not to provide")
        };

        switch (state) {
            case "gender":
              let genderResponse = genderOptions.find(
                (option) => option.id === response
              ).option;
              setTextResponse(genderResponse);
              break;
            case "activity_level":
              let activityResponse = activityLevelOptions.find(
                (option) => option.id === response
              ).option;
              setTextResponse(activityResponse);
              break;
            case "starting_pain_duration":
              let painResponse = painDurationOptions.find(
                (option) => option.id === response
              ).option;
              setTextResponse(painResponse);
              break;
            default:
          }

    }, [response]);

    return (
        <QuestionWrapper style={{ borderTopWidth: editing ? 0 : .5 }}>
            <QuestionText>{question}</QuestionText>
            {editing ? 
                <EditSelect 
                    changeEntry={changeEntry} 
                    max={max}
                    min={0}
                    response={response} 
                    state={state} 
                    textResponse={textResponse} 
                />
                : 
                <ResponseText>{textResponse}</ResponseText>
            }
        </QuestionWrapper>
    );
};

export const ReviewOptionButton = ({ destination, option, navigation, trackEvent }) => {

    return (
        <QuestionWrapper style={{ borderTopWidth: .5 }}>
            <QuestionButtonPressable
                onPress={() => (handleTrackEvent(trackEvent), navigation.navigate(destination))}
            >
                <QuestionButtonText>
                    {option}
                </QuestionButtonText>
                <Next />
            </QuestionButtonPressable>
        </QuestionWrapper>
    );
};