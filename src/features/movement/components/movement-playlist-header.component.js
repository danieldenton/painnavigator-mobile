import React from "react";

import { Bookmark } from "../../../components/bookmark.component";

import { 
    Header, 
    EducationUnitTitle,
    UnitSubtitle,
    TitleSection, 
    BookmarkSection
     } from "../../education/components/education-unit.styles";
// these components will move to a shared component folder later

export const MovementPlaylistHeader = ({id, length, name, videos }) => {
    return(
        <Header>
            <TitleSection>
                <EducationUnitTitle>
                    {name}
                </EducationUnitTitle>
                <UnitSubtitle>
                    {length} - {videos.length} Videos
                </UnitSubtitle>
            </TitleSection>
            <BookmarkSection>
                <Bookmark moduleId={id} />
            </BookmarkSection>
        </Header>
    );
};