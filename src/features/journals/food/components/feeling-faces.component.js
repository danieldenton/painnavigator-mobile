import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../../../infrastructure/theme/colors";
import { FoodJournalContext } from "../../../../services/food-journal/food-journal.context";

const FeelingFacesRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const FeelingFaceWrapper = styled(TouchableOpacity)`
    border-radius: 100px;
    padding: 12px;
`;

export const FeelingFaces = ({ feeling, setter }) => {
    console.log(feeling);

    return (
        <FeelingFacesRow>
            <FeelingFaceWrapper
                onPress={() => setter("sad")}
                style={{ backgroundColor: `${feeling === "sad" && colors.feelingFaces.sad}` }}
            >
                <MaterialCommunityIcons 
                    name="emoticon-sad-outline" 
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
            <FeelingFaceWrapper
                onPress={() => {setter("neutral"); console.log(feeling);}}
                style={{ 
                    backgroundColor: `${feeling === "neutral" && colors.feelingFaces.neutral}`, 
                    marginLeft: 27,
                    marginRight: 27
                }}
            >
                <MaterialCommunityIcons 
                    name="emoticon-neutral-outline" 
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
            <FeelingFaceWrapper
                onPress={() => setter("happy")}
                style={{ backgroundColor: `${feeling === "happy" && colors.feelingFaces.happy}` }}
            >
                <MaterialCommunityIcons 
                    name="emoticon-happy-outline" 
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
        </FeelingFacesRow>
    );
};