import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../../infrastructure/theme/spacing";
import { Back, Close, MenuIcon, MessageIcon, More, UnreadMessageIcon } from "../../icons";
import { Bookmark } from "../bookmark.component";

const NavContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const LeftPressableArea = styled(TouchableOpacity)`
    flex: .25;
    align-items: flex-start;
    margin-left: -16px;
    padding: 16px;
`;

const HeaderSection = styled.View`
    flex: .5;
    align-items: center;
    padding: 16px;
`;

const HeaderName = styled.Text`
    font-family: Inter_500Medium
    font-size: 14px;
`;

const RightSection = styled.View`
    flex: .25;
    align-items: flex-end;
    height: 100%;
`;

const RightPressableArea = styled.TouchableOpacity`
    border-radius: 100px;
    margin-right: -16px;
    padding: 16px;
`;

const CenterHeader = styled.View`
    align-items: center;
    flex: 1;
    padding: 16px;
`;

export const NavigationBar = ({ currentPage, headerName, previousPage, setVisible }) => {
    const showModal = () => setVisible(true);

    return(
        <NavContainer>
            <LeftPressableArea 
                accessibilityLabel={currentPage > 1 ? "previous-page" : "exit-journal"} 
                onPress={currentPage > 1 ? previousPage : showModal} 
            >
                <Back />
            </LeftPressableArea>
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

export const TodayNavBar = ({ navigation, hasUnreadMessages }) => {

    return(
        <NavContainer>
            <LeftPressableArea 
                accessibilityLabel={"menu"} 
                onPress={() => navigation.openDrawer()}
            >
                <MenuIcon />
            </LeftPressableArea>
            <HeaderSection>
            </HeaderSection>
            <RightSection>
                <RightPressableArea
                   accessibilityLabel={"messages"}
                   onPress={() => {navigation.navigate("WellnessCoach")}}
                >
                    {hasUnreadMessages ? <UnreadMessageIcon /> : <MessageIcon />}
                </RightPressableArea>
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
            <LeftPressableArea 
                accessibilityLabel={"exit-journal"}
                onPress={() => {changes ? showModal() : leave()}} 
            >
                <Back />
            </LeftPressableArea>
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
            <LeftPressableArea 
                accessibilityLabel={`go-to-${destination}`} 
                onPress={() => navigation.navigate(destination)} 
            >
                <Back />
            </LeftPressableArea>
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

export const NavigationBarLeft = ({ destination, navigation, screen, previousPage }) => {
    return (
        <NavContainer>
            <LeftPressableArea 
                accessibilityLabel={`go-to-${destination}`} 
                onPress={() => {previousPage ? previousPage() : navigation.navigate(destination)}} 
            >
                <Back />
            </LeftPressableArea>
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

export const HeaderBar = ({ screen }) => {
    return (
        <NavContainer>
            <CenterHeader>
                <HeaderName>
                    {screen.toUpperCase()}
                </HeaderName>
            </CenterHeader>
        </NavContainer>
    );
};
