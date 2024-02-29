import React, { useContext } from "react";
import { MovementContext } from "../../../services/movement/movement.context";
import { Header, UnitTitle, UnitSubtitle, TitleSection } from "../../education/components/education-unit.styles";

export const MovementPlaylistHeader = () => {
    const { currentModule, getPlaylistLength} = useContext(MovementContext);
    const { name, videos } = currentModule;

    return(
        <Header style={{ marginBottom: 8 }}>
            <TitleSection>
                <UnitTitle>
                    {name}
                </UnitTitle>
                <UnitSubtitle>
                    {getPlaylistLength(videos)} MIN • {videos.length} VIDEOS
                </UnitSubtitle>
            </TitleSection>
        </Header>
    );
};