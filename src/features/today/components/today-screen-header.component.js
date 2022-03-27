import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Header = styled.View`
    margin-left: ${(props) => props.theme.space[3]};
`;

export const TodayScreenHeader = ({ headerName }) => {
    return (
        <Header>
            <Text>{headerName}</Text>
        </Header>
    );
};
