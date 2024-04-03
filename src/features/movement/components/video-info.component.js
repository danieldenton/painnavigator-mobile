import React, { useContext } from "react";
import { Bookmark } from "../../../components/bookmark.component";
import { BookmarkSection, Header, ModuleTypeTitle, UnitTitle, TitleSection } from "../../education/components/education-unit.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { MOVEMENT_UNIT_EVENTS } from "../../../amplitude-events";

export const VideoInfo = () => {
    const { currentVideo } = useContext(MovementContext);
    const { id, name } = currentVideo;
    const { currentModule } = useContext(MovementContext);
    const { name: moduleName } = currentModule;
    const upperCaseName = moduleName?.toUpperCase()

    const trackEvent = MOVEMENT_UNIT_EVENTS.BOOKMARK_MOVEMENT_UNIT;

    return (
        <>
            <ModuleTypeTitle>{upperCaseName}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>{name}</UnitTitle>
                </TitleSection>
                <BookmarkSection>
                    <Bookmark id={id} trackEvent={trackEvent} />
                </BookmarkSection>
            </Header>
        </>
    );
};