import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../../infrastructure/theme/spacing";
import { Back, Close, MenuIcon, MessageIcon, More } from "../../icons";
import { Bookmark } from "../bookmark.component";

const NavContainer = styled.View`
    padding-top: 12px;
    padding-bottom: ${space[3]};
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

export const TodayNavBar = ({ navigation }) => {

    return(
        <NavContainer>
            <LeftSection 
                accessibilityLabel={"menu"} 
                onPress={() => navigation.openDrawer()}
            >
                <MenuIcon />
            </LeftSection>
            <HeaderSection>
            </HeaderSection>
            <RightSection
                accessibilityLabel={"messages"}
            >
                <MessageIcon />
            </RightSection>
        </NavContainer>
    );
};


export const ReviewJournalNavigationBar = ({ changes, destination, navigation, headerName, showBottomMenu, resetJournal, setVisible }) => {
    const showModal = () => setVisible(true);
    const leave = () => {
        navigation.navigate(destination);
        resetJournal && setTimeout(() => {resetJournal()}, 500);
    };

    return(
        <NavContainer>
            <LeftSection 
                accessibilityLabel={"exit-journal"}
                onPress={() => {changes ? showModal() : leave()}} 
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

export const TextModuleNavBar = ({ destination, navigation, screen, id }) => {
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
                <Bookmark id={id} />
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
