import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../../infrastructure/theme/colors";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

const FeelingFacesRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const FeelingFaceWrapper = styled(TouchableOpacity)`
    border-radius: 100px;
    padding: 12px;
    margin-left: 27px;
    margin-right: 27px;
`;

export const FeelingFaces = ({ feeling, name }) => {
    const { handleChange } = useContext(FoodJournalContext);

    return (
        <FeelingFacesRow>
            <FeelingFaceWrapper
                onPress={() => handleChange("sad", name)}
                style={feeling === "sad" && { backgroundColor: colors.feelingFaces.sad }}
            >
                <MaterialCommunityIcons 
                    name="emoticon-sad-outline" 
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
            <FeelingFaceWrapper
                onPress={() => handleChange("neutral", name)}
                style={feeling === "neutral" && { backgroundColor: colors.feelingFaces.neutral }}
            >
                <MaterialCommunityIcons 
                    name="emoticon-neutral-outline" 
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
            <FeelingFaceWrapper
                onPress={() => handleChange("happy", name)}
                style={feeling === "happy" && { backgroundColor: colors.feelingFaces.happy }}
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