import React from "react";
import styled from "styled-components/native";

// TODO: add styles
const GreetingWrapper = styled.View`
`;

const GreetingText = styled.Text`
    font-family: Poppins_500Medium;
    font-size: 31px;
`;

export const Greeting = ({ greeting, name }) => {
    return(
        <GreetingWrapper>
            <GreetingText>{greeting},</GreetingText>
            <GreetingText>{name}</GreetingText>
        </GreetingWrapper> 
    )
};