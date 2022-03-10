import React from "react";
import styled from "styled-components/native";
import { Text, ScrollView } from "react-native";
import { SummaryBody} from "../../educationModules/components/education-unit.styles";

const ModuleInfoWrapper = styled.View`
    height: 30%; 
`;

const HeaderRow = styled.View`
    flex-direction: row;
    align-items: stretch;
    margin-top: ${(props) => props.theme.space[3]};
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`;

const VideoNameSection = styled.Text`
    flex: 1;
`;

const VideoLengthSection = styled.Text`
    align-self: flex-end;
`;

const SubheaderRow = styled.View`
    margin: ${(props) => props.theme.space[3]};
`;

export const ModuleInfo = ({videoName, videoLength, moduleName, videoInfo}) => {
    return (
        <ModuleInfoWrapper>
            <HeaderRow>
                <VideoNameSection>{videoName}</VideoNameSection>
                <VideoLengthSection>{videoLength} min</VideoLengthSection>
            </HeaderRow>
            <SubheaderRow>
                <Text>MOVEMENT</Text>
                <Text>{moduleName}</Text>
            </SubheaderRow>
            <ScrollView>
                <SummaryBody>{videoInfo}</SummaryBody>
            </ScrollView>
        </ModuleInfoWrapper>
    );
};