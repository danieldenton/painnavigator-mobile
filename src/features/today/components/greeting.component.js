import React from "react";
import styled from "styled-components/native";

// TODO: add styles
const GreetingWrapper = styled.View`
    margin: ${(props) => props.theme.space[3]};
`;

const GreetingText = styled.Text``;

export const Greeting = ({ timeOfDay, name }) => {
    return(
        <GreetingWrapper>
            <GreetingText>Good {timeOfDay},</GreetingText>
            <GreetingText>{name}</GreetingText>
        </GreetingWrapper> 
    )
};