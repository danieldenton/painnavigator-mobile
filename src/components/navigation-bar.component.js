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
    flex: .33;
`;

const MiddleSection = styled.View`
    flex: .33;
    align-items: center;
`;

const HeaderName = styled.Text`
`;

const RightSection = styled(TouchableOpacity)`
    flex: .33;
`;

export const NavigationBar = ({ headerName, destination, changes, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <HeaderContainer>
            <LeftSection onPress={showModal}>
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </LeftSection>
            <MiddleSection>
                <HeaderName>{headerName}</HeaderName>
            </MiddleSection>
            <RightSection>
            </RightSection>
        </HeaderContainer>
    );
};