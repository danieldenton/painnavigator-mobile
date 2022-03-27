import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';

const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${(props) => props.theme.space[3]};
`;

// TODO: alignment
const LeftSection = styled(TouchableOpacity)`
    flex: .5;
    align-self: flex-start;
`;

const HeaderName = styled.Text`
    flex: 1;
`;

export const ProfileSetupHeader = ({ profileProgress, headerName, previousQuestion }) => {
    return(
        <HeaderContainer>
            {profileProgress > 1 && 
                <LeftSection onPress={previousQuestion} >
                    <Ionicons name="chevron-back-outline" size={24} color="black" />
                </LeftSection>
            }
            <HeaderName>
                Create Account
            </HeaderName>
        </HeaderContainer>
    );
};