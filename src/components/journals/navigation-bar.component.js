import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../../infrastructure/theme/spacing";
import { Back, Close, More } from "../../icons";

const HeaderContainer = styled.View`
    padding-top: ${space[3]};
    padding-bottom: ${space[3]};
    margin-left: ${space[3]};
    margin-right: ${space[3]};
    flex-direction: row;
    align-items: center;
`;

const LeftSection = styled(TouchableOpacity)`
    flex: .25;
    align-items: flex-start;
`;

const HeaderSection = styled.View`
    flex: .5;
    align-items: center;
`;

const HeaderName = styled.Text`
    font-family: Inter_500Medium
    font-size: 14px;
`;

const RightSection = styled.View`
    flex: .25;
    align-items: flex-end;
`;

const RightPressableArea = styled.TouchableOpacity`
    border-radius: 100px;
    margin-right: -16px;
    padding: 16px;
`;

export const NavigationBar = ({ currentQuestion, headerName, previousQuestion, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <HeaderContainer>
            <LeftSection 
                accessibilityLabel={currentQuestion > 1 ? "previous-page" : "exit-journal"} 
                onPress={currentQuestion > 1 ? previousQuestion : showModal} 
            >
                <Back />
            </LeftSection>
            <HeaderSection>
                <HeaderName>
                    {headerName.toUpperCase()}
                </HeaderName>
            </HeaderSection>
            <RightSection 
                accessibilityLabel={"exit-journal"}
                onPress={showModal} 
            >
                <Close />
            </RightSection>
        </HeaderContainer>
    );
};


export const ReviewJournalNavigationBar = ({ destination, navigation, headerName, showBottomMenu, resetJournal }) => {
    return(
        <HeaderContainer>
            <LeftSection 
                accessibilityLabel={"exit-journal"}
                onPress={() => {navigation.navigate(destination); setTimeout(() => {resetJournal()}, 500)}} 
            >
                <Back />
            </LeftSection>
            <HeaderSection>
                <HeaderName>
                    {headerName.toUpperCase()}
                </HeaderName>
            </HeaderSection>
            <RightSection>
                <RightPressableArea 
                    accessibilityLabel={"more-options"}
                    onPress={() => showBottomMenu(true)}
                >
                    <More />    
                </RightPressableArea>
            </RightSection>
        </HeaderContainer>
    );
};

