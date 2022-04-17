import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
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
    font-size: 14px;
`;

const RightSection = styled(TouchableOpacity)`
`;

export const NavigationBar = ({ currentQuestion, headerName, previousQuestion, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <HeaderContainer>
            <LeftSection onPress={currentQuestion > 1 ? previousQuestion : showModal} >
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </LeftSection>
            <HeaderName>
                {headerName.toUpperCase()}
            </HeaderName>
            <RightSection onPress={showModal} >
                <AntDesign name="close" size={24} color="black" />
            </RightSection>
        </HeaderContainer>
    );
};


export const ReviewJournalNavigationBar = ({ destination, navigation, headerName, setVisible }) => {
    return(
        <HeaderContainer>
            <LeftSection  onPress={() => navigation.navigate(destination)} >
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </LeftSection>
            <HeaderName>
                {headerName.toUpperCase()}
            </HeaderName>
            <RightSection>
                <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />  
            </RightSection>
        </HeaderContainer>
    );
};

