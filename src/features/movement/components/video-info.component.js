import React, { useContext } from "react";
import { Bookmark } from "../../../components/bookmark.component";
import { BookmarkSection, Header, ModuleTypeTitle, UnitTitle, TitleSection } from "../../education/components/education-unit.styles";
import { MovementContext } from "../../../services/movement/movement.context";

export const VideoInfo = () => {
    const { currentVideo } = useContext(MovementContext);
    const { id, name } = currentVideo;
    const { currentModule } = useContext(MovementContext);
    const { name: moduleName } = currentModule;

    return (
        <>
            <ModuleTypeTitle>{moduleName.toUpperCase()}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>{name}</UnitTitle>
                </TitleSection>
                <BookmarkSection>
                    <Bookmark id={id} />
                </BookmarkSection>
            </Header>
        </>
    );
};