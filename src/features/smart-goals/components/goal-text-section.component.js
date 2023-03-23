import React from "react";

import styled from "styled-components/native";
import { ReviewTextInput } from "../../../components/text-input.component";

const GoalTextWrapper = styled.View`
    margin-top: 16px;
`;

const UpdateGoalTextWrapper = styled.View`
    margin-top: 8px;
`;

const Header = styled.Text`
    font-family: Inter_700Bold;
    font-size: 18px;
`;

const Body = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    margin-top: 4px;
    border: black solid 1px;
`;

export const GoalTextSection = ({ edit, editing, header, body, state }) => {

    return (
        <GoalTextWrapper>
            <Header>
                {header}
            </Header>
            {editing ? 
                <ReviewTextInput 
                    value={body} 
                    onChangeText={(change) => edit(change, state)}
                />
            :
                <Body>
                    {body}
                </Body>
            }
        </GoalTextWrapper>
    );
};

export const UpdateGoalTextSection = ({ header, body }) => {

    const updates = body.map((update, idx) => {
        return {update}
    })

    return (
        <UpdateGoalTextWrapper>
            <Header>
                {header}
            </Header>
            {updates}
        </UpdateGoalTextWrapper>
    );
};
