import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../../infrastructure/theme/spacing";
import { Back, Close, More } from "../../icons";

const NavContainer = styled.View`
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

export const NavigationBar = ({ currentPage, headerName, previousPage, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <NavContainer>
            <LeftSection 
                accessibilityLabel={currentPage > 1 ? "previous-page" : "exit-journal"} 
                onPress={currentPage > 1 ? previousPage : showModal} 
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
                    accessibilityLabel={"exit-journal"}
                    onPress={showModal} 
                >
                    <Close />
                </RightPressableArea>
            </RightSection>
        </NavContainer>
    );
};


export const ReviewJournalNavigationBar = ({ destination, navigation, headerName, showBottomMenu, resetJournal }) => {
    return(
        <NavContainer>
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
        </NavContainer>
    );
};

export const NavigationBarLeft = ({ destination, navigation, screen }) => {
    return (
        <NavContainer>
            <LeftSection 
                accessibilityLabel={`go-to-${destination}`} 
                onPress={() => navigation.navigate(destination)} 
            >
                <Back />
            </LeftSection>
            <HeaderSection>
                <HeaderName>
                    {screen.toUpperCase()}
                </HeaderName>
            </HeaderSection>
            <RightSection>
            </RightSection>
        </NavContainer>
    );
};
