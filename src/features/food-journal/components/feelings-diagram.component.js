import React from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Feelings = styled.View`
    flex-direction: row;
    align-items: center;
`;

const FeelingFaceWrapper = styled.View`
    border-radius: 100px;
    padding: 12px;
`;

export const FeelingsDiagram = ({ feelingBefore, feelingAfter }) => {
    return (
        <Feelings>
            <FeelingFaceWrapper style={{ backgroundColor: colors.feelingFaces.sad }}>
                <MaterialCommunityIcons 
                    name={`emoticon-${feelingBefore}-outline`}
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
            <AntDesign 
                name="arrowright" 
                size={24} 
                color="black" 
                style={{ marginLeft: 16, marginRight: 16 }}
            />
            <FeelingFaceWrapper
                // TODO: dynamically set background color based on feeling
                // Any thoughts are appreciated
                style={{ backgroundColor: colors.feelingFaces.happy }}
            >
                <MaterialCommunityIcons 
                    name={`emoticon-${feelingAfter}-outline`}
                    size={32} 
                    color="black" 
                />
            </FeelingFaceWrapper>
        </Feelings>
    );
};