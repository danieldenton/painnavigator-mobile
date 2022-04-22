import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { space } from "../../infrastructure/theme/spacing";
import { Back, More } from "../../icons";

const HeaderContainer = styled.View`
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
    flex-direction: row;
    align-items: center;
`;

const LeftSection = styled(TouchableOpacity)`
    flex: .15;
    align-items: flex-start;
`;

const HeaderSection = styled.View`
    flex: .7;
    align-items: center;
`;

const HeaderName = styled.Text`
    font-size: 14px;
`;

const RightSection = styled(TouchableOpacity)`
    flex: .15;
    align-items: flex-end;
`;

export const NavigationBar = ({ currentQuestion, headerName, previousQuestion, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <HeaderContainer>
            <LeftSection testID={"previous-page"} onPress={currentQuestion > 1 ? previousQuestion : showModal} >
                <Ionicons name="chevron-back-outline" size={30} color="black" />
            </LeftSection>
            <HeaderSection>
                <HeaderName>
                    {headerName.toUpperCase()}
                </HeaderName>
            </HeaderSection>
            <RightSection onPress={showModal} >
                <AntDesign name="close" size={30} color="black" />
            </RightSection>
        </HeaderContainer>
    );
};


export const ReviewJournalNavigationBar = ({ destination, navigation, headerName, setVisible }) => {
    return(
        <HeaderContainer>
            <LeftSection  onPress={() => navigation.navigate(destination)} >
                <Back />
            </LeftSection>
            <HeaderSection>
                <HeaderName>
                    {headerName.toUpperCase()}
                </HeaderName>
            </HeaderSection>
            <RightSection>
                <More />  
            </RightSection>
        </HeaderContainer>
    );
};

