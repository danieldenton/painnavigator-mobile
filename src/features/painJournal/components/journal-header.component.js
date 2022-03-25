import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HeaderContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const LeftSection = styled(TouchableOpacity)`
`;

const HeaderName = styled.Text`
`;

const RightSection = styled(TouchableOpacity)`
`;

export const JournalHeader = ({ currentQuestion, headerName, previousQuestion, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <HeaderContainer>
            <LeftSection onPress={currentQuestion > 1 ? previousQuestion : showModal} >
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </LeftSection>
            <HeaderName>
                {headerName}
            </HeaderName>
            <RightSection onPress={() => setVisible(true)} >
                <MaterialCommunityIcons name="cancel" size={24} color="black" />
            </RightSection>
        </HeaderContainer>
    );
};