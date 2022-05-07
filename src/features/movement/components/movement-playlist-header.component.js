import React, { useContext } from "react";
import { MovementContext } from "../../../services/movement/movement.context";
import { Header, UnitTitle, UnitSubtitle, TitleSection } from "../../education/components/education-unit.styles";

export const MovementPlaylistHeader = () => {
    const { currentModule } = useContext(MovementContext);
    const { name, length, videos } = currentModule;

    return(
        <Header style={{ marginBottom: 8 }}>
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