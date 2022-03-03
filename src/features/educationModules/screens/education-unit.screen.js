import React, { useState } from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { Video } from 'expo-av';
import styled from "styled-components/native";
import { Bookmark } from "../../../components/bookmark/bookmark.component";
import { MarkCompleteButton } from "../components/mark-complete-button.component";

import { modules } from "../data/education-module-data.json";

import { VideoPlayer } from "../components/video-player.component";

import { 
    Header, 
    TitleSection, 
    BookmarkSection, 
    ModuleTypeTitle, 
    EducationUnitTitle, 
    SummarySection, 
    SummaryHeader, 
    SummaryBody} 
    from "../components/education-unit.styles";

export const EducationUnit = () => {
    // const video = React.useRef(null);
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const [moduleComplete, setModuleComplete] = useState(false);
    const { name, source } = modules[educationModuleProgress];

    return (
        <SafeArea>
             <VideoPlayer
                source={source}
             />
            <Header>
                <TitleSection>
                    <ModuleTypeTitle>
                        Education
                    </ModuleTypeTitle>
                    <EducationUnitTitle>
                        {name}
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
