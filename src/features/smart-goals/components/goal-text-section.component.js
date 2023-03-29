import React from "react";
import styled from "styled-components/native";
import { ReviewTextInput } from "../../../components/text-input.component";

const GoalTextWrapper = styled.View`
    margin-top: 16px;
`;

const Header = styled.Text`
    font-family: Inter_700Bold;
    font-size: 18px;
`;

const Body = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    margin-top: 4px;
`;

const HeaderNoBody = styled.Text`
    padding: 16px
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
        return <Body key={idx}>{update}</Body>
    })

    return (
        <GoalTextWrapper>
            <Header>
                {header}
            </Header>
                {updates.length > 0 ? updates : <Body></Body>}
        </GoalTextWrapper>
    );
};
