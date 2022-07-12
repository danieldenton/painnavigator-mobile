import React from "react";
import { Bookmark } from "../../../components/bookmark.component";
import { Header, TitleSection, BookmarkSection, ModuleTypeTitle, UnitTitle, Summary } from "./education-unit.styles";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const EducationUnitInfo = ({ id, name, summary, type }) => {
    return(
        <>
            <ModuleTypeTitle>EDUCATION{type === "audio" && ": AUDIO MODULE"}</ModuleTypeTitle>
            <Header>
                <TitleSection>
                    <UnitTitle>
                        {name}
                    </UnitTitle>
                </TitleSection>
                {type === "video" && <BookmarkSection>
                    <Bookmark id={id} />
                </BookmarkSection>}
            </Header>
            {type === "video" ? 
                <Scroll style={{ marginTop: 0, paddingRight: 16, paddingLeft: 16 }}>
                    <View style={{ marginTop: 0, marginBottom: 120 }}>
                        <Summary>
                            {summary} 
                        </Summary>
                    </View>
                </Scroll>
                :
                <Summary>
                    {summary}
                </Summary>
            }
        </>
    );
};