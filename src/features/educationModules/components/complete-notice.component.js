import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Button } from "../../../components/button/button.component";

const CompleteNoticeView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const CompleteNotice = ({ navigation }) => {
    return (
        <>
            <CompleteNoticeView>
                <Text>Module complete</Text>
            </CompleteNoticeView>
            <Button onPress={() => navigation.navigate("Today")}>
                Back to Dashboard
            </Button>
        </>
    );
};