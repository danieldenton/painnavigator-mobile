import React from "react";
import styled from "styled-components/native";

// TODO: add styles
const GreetingWrapper = styled.View`
    margin-bottom: ${(props) => props.theme.space[3]};
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`;

const GreetingText = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 31px;
`;

export const Greeting = ({ timeOfDay, name }) => {
    return(
        <GreetingWrapper>
            <GreetingText>Good {timeOfDay},</GreetingText>
            <GreetingText>{name}</GreetingText>
        </GreetingWrapper> 
    )
};