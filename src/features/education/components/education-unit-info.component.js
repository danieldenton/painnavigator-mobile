import React from "react";

import { Bookmark } from "../../../components/bookmark.component";
import { ScrollView } from "react-native";
import { 
    Header, 
    TitleSection, 
    BookmarkSection, 
    ModuleTypeTitle, 
    EducationUnitTitle, 
    SummarySection, 
    SummaryHeader, 
    SummaryBody 
    } from "./education-unit.styles";

export const EducationUnitInfo = ({ moduleId, name }) => {
    return(
        <>
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
                    <Bookmark moduleId={moduleId} />
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
        </>
    );
};