import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Bookmark } from "../../../components/bookmark/bookmark.component";
import { MarkCompleteButton } from "../components/mark-complete-button.component";

import { VideoPlayer } from "../components/video-player.component";

const Header = styled.View`
    flex-direction: row;
`;

const TitleSection = styled.View`
    flex: 1;
`;

const BookmarkSection = styled.View`
    align-self: flex-end;
`;

const ModuleTypeTitle = styled.Text`
`;

const EducationUnitTitle = styled.Text`
`;

const SummarySection = styled.View`
`;

const SummaryHeader = styled.Text`
`;

const SummaryBody = styled.Text`
`;

export const EducationUnit = () => {
    // const video = React.useRef(null);
    return (
        <SafeArea>
             <VideoPlayer
                source="https://res.cloudinary.com/stephenavocado/video/upload/v1645662155/Suppl.mp4"
             />
            <Header>
                <TitleSection>
                    <ModuleTypeTitle>
                        Education
                    </ModuleTypeTitle>
                    <EducationUnitTitle>
                        Pain Navigator Introduction
                    </EducationUnitTitle>
                </TitleSection>
                <BookmarkSection>
                    <Bookmark />
                </BookmarkSection>
            </Header>
            <SummarySection>
                <SummaryHeader>
                    Summary
                </SummaryHeader>
            </SummarySection>
            <ScrollView>
                <SummaryBody>Video information</SummaryBody>     
            </ScrollView>
            <MarkCompleteButton>
                Mark Complete
            </MarkCompleteButton>
        </SafeArea>
    );
}
