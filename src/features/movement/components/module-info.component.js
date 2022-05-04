import React from "react";
import styled from "styled-components/native";
import { Bookmark } from "../../../components/bookmark.component";
import { BookmarkSection, Header, ModuleTypeTitle, UnitTitle, TitleSection } from "../../education/components/education-unit.styles";

const ModuleInfoWrapper = styled.View`
`;

const HeaderRow = styled.View`
    flex-direction: row;
    align-items: stretch;
    margin-top: ${(props) => props.theme.space[3]};
`;

const SubheaderRow = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const ModuleInfo = ({ chapter, videoName, videoId }) => {

    return (
        <ModuleInfoWrapper>
            <ModuleTypeTitle>{chapter.toUpperCase()}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>{videoName}</UnitTitle>
                </TitleSection>
                <BookmarkSection>
                    <Bookmark id={videoId} />
                </BookmarkSection>
            </Header>
        </ModuleInfoWrapper>
    );
};