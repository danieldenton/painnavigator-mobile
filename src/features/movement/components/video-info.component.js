import React, { useContext } from "react";
import styled from "styled-components/native";
import { Bookmark } from "../../../components/bookmark.component";
import { BookmarkSection, Header, ModuleTypeTitle, UnitTitle, TitleSection } from "../../education/components/education-unit.styles";
import { MovementContext } from "../../../services/movement/movement.context";

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

export const VideoInfo = () => {
    const { currentVideo } = useContext(MovementContext);
    const { id, chapter, name } = currentVideo;

    return (
        <ModuleInfoWrapper>
            <ModuleTypeTitle>{chapter.toUpperCase()}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>{name}</UnitTitle>
                </TitleSection>
                <BookmarkSection>
                    <Bookmark id={id} />
                </BookmarkSection>
            </Header>
        </ModuleInfoWrapper>
    );
};