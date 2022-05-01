import React from "react";
import styled from "styled-components/native";

const Header = styled.View`
    margin-top: ${(props) => props.theme.space[3]};
`;

const InterHeader = styled.Text`
    font-family: Inter_500Medium;
`;

export const SubHeader = ({ title, size, marginTop, marginBottom }) => {
    return (
        <Header>
            <InterHeader style={{ fontSize: size}}>{title}</InterHeader>
        </Header>
    );
};
