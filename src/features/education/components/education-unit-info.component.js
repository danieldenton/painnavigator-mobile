import React from "react";
import { Bookmark } from "../../../components/bookmark.component";
import { Header, TitleSection, BookmarkSection, ModuleTypeTitle, UnitTitle, Summary } from "./education-unit.styles";

export const EducationUnitInfo = ({ id, name, summary, type }) => {
    return(
        <>
            <ModuleTypeTitle>EDUCATION</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>
                        {name}
                    </UnitTitle>
                </TitleSection>
                {type ==="video" && <BookmarkSection>
                    <Bookmark id={id} />
                </BookmarkSection>}
            </Header>
            <Summary>
                {summary} 
            </Summary>
        </>
    );
};