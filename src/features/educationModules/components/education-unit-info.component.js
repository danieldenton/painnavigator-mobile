import React from "react";

import { Bookmark } from "../../../components/bookmark/bookmark.component";
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

export const EducationUnitInfo = ({ name }) => {
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
                    <Bookmark />
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