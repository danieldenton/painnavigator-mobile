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

const BackButton = styled(TouchableOpacity)`
`;

const JournalName = styled.Text`
`;

const ExitButton = styled(TouchableOpacity)`
`;

export const JournalHeader = ({ currentQuestion, journalName, previousQuestion, showModal }) => {
    return(
        <HeaderContainer>
            <BackButton onPress={currentQuestion > 1 ? previousQuestion : showModal} >
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </BackButton>
            <JournalName>
                {journalName}
            </JournalName>
            <ExitButton onPress={showModal} >
                <MaterialCommunityIcons name="cancel" size={24} color="black" />
            </ExitButton>
        </HeaderContainer>
    );
};