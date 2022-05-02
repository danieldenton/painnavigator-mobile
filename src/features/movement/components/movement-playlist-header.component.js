import React from "react";

import { Header, UnitTitle,UnitSubtitle,TitleSection } from "../../education/components/education-unit.styles";

export const MovementPlaylistHeader = ({ length, name, videos }) => {
    return(
        <Header>
            <TitleSection>
                <UnitTitle>
                    {name}
                </UnitTitle>
                <UnitSubtitle>
                    {length} MIN • {videos.length} VIDEOS
                </UnitSubtitle>
            </TitleSection>
        </Header>
    );
};