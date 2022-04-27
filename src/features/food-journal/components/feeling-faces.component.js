import React, { useContext } from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";
import { 
    HappyFace, 
    HappyFaceSelected, 
    NeutralFace, 
    NeutralFaceSelected, 
    SadFace, 
    SadFaceSelected 
} from "../../../icons";

const FeelingFacesRow = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 14px;
`;

const FeelingFaceWrapper = styled(Pressable)`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: 27px;
    margin-right: 27px;
    height: 56px;
    width: 56px;
`;

export const FeelingFaces = ({ feeling, name }) => {
    const { changeEntry } = useContext(FoodJournalContext);

    return (
        <FeelingFacesRow>
            <FeelingFaceWrapper 
                onPress={() => { feeling === "sad" ? changeEntry("", name) : changeEntry("sad", name) }}
            >
                {feeling === "sad" ? <SadFaceSelected /> : <SadFace />}
            </FeelingFaceWrapper>
            <FeelingFaceWrapper 
                onPress={() => { feeling === "neutral" ? changeEntry("", name) : changeEntry("neutral", name) }}
            >
                {feeling === "neutral" ? <NeutralFaceSelected /> : <NeutralFace />}
            </FeelingFaceWrapper>
            <FeelingFaceWrapper 
                onPress={() => { feeling === "happy" ? changeEntry("", name) : changeEntry("happy", name) }}
            >
                {feeling === "happy" ? <HappyFaceSelected /> : <HappyFace />}
            </FeelingFaceWrapper>
        </FeelingFacesRow>
    );
};