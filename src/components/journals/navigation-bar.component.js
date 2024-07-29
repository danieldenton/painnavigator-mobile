import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  Back,
  Close,
  MenuIcon,
  MessageIcon,
  More,
  UnreadMessageIcon,
} from "../../icons";
import { EducationContext } from "../../services/education/education.context";
import { Bookmark } from "../bookmark.component";

const NavContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LeftPressableArea = styled(TouchableOpacity)`
  flex: 0.25;
  align-items: flex-start;
`;

const HeaderSection = styled.View`
  flex: 0.5;
  align-items: center;
  padding: 16px;
`;

const HeaderName = styled.Text`
    font-family: Inter_500Medium
    font-size: 14px;
`;

const RightSection = styled.View`
  flex: 0.25;
  align-items: flex-end;
  justify-content: center;
`;

const RightArea = styled.View`
  border-radius: 100px;
  margin-right: -16px;
  padding: 16px;
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

export const NavigationBar = ({
  currentPage,
  headerName,
  previousPage,
  setVisible,
}) => {
  const showModal = () => setVisible(true);

  return (
    <NavContainer>
      <LeftPressableArea
        accessibilityLabel={currentPage > 0 ? "previous-page" : "exit-journal"}
        onPress={currentPage > 0 ? previousPage : showModal}
      >
        <Back />
      </LeftPressableArea>
      <HeaderSection>
        <HeaderName>{headerName.toUpperCase()}</HeaderName>
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

const UnreadIconContainer = styled.View`
  margin-top: -4px;
  margin-right: -4px;
`;

export const TodayNavBar = ({ navigation, hasUnreadMessages }) => {
  return (
    <NavContainer>
      <LeftPressableArea
        accessibilityLabel={"menu"}
        testID={"menu"}
        onPress={() => navigation.openDrawer()}
      >
        <MenuIcon />
      </LeftPressableArea>
      <HeaderSection></HeaderSection>
      <RightSection>
        <RightPressableArea
          accessibilityLabel={"messages"}
          testID={"messages"}
          onPress={() => {
            navigation.navigate("WellnessCoach");
          }}
        >
          {hasUnreadMessages ? (
            <UnreadIconContainer>
              <UnreadMessageIcon testID={"unread-messages"} />
            </UnreadIconContainer>
          ) : (
            <MessageIcon />
          )}
        </RightPressableArea>
      </RightSection>
    </NavContainer>
  );
};

export const ReviewJournalNavigationBar = ({
  changes,
  destination,
  navigation,
  headerName,
  showBottomMenu,
  resetJournal,
  setVisible,
}) => {
  const showModal = () => setVisible(true);
  const leave = () => {
    navigation.navigate(destination);
    resetJournal &&
      setTimeout(() => {
        resetJournal();
      }, 500);
  };
  return (
    <NavContainer>
      <LeftPressableArea
        accessibilityLabel={"exit-journal"}
        onPress={() => {
          changes ? showModal() : leave();
        }}
      >
        <Back />
      </LeftPressableArea>
      <HeaderSection>
        <HeaderName>{headerName.toUpperCase()}</HeaderName>
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
  const { setEducationIntroStep, educationIntroStep, educationProgress } =
    useContext(EducationContext);
  return (
    <NavContainer>
      <LeftPressableArea
        accessibilityLabel={`go-to-${destination}`}
        onPress={() =>
          educationProgress === 1 && educationIntroStep > 0
            ? setEducationIntroStep(
                (educationIntroStep) => educationIntroStep - 1
              )
            : navigation.navigate(destination)
        }
      >
        <Back />
      </LeftPressableArea>
      <HeaderSection>
        <HeaderName>{screen.toUpperCase()}</HeaderName>
      </HeaderSection>
      <RightSection>
        <RightArea>{id !== 1 ? <Bookmark id={id} /> : null}</RightArea>
      </RightSection>
    </NavContainer>
  );
};

export const NavigationBarLeft = ({
  destination,
  navigation,
  screen,
  previousPage,
  orientation,
}) => {
  const handleOnPress = () => {
    if (previousPage) {
      previousPage();
    } else {
      navigation.navigate(destination);
    }

    if (orientation) {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    }
  };
  return (
    <NavContainer>
      <LeftPressableArea
        accessibilityLabel={`go-to-${destination}`}
        onPress={() => handleOnPress()}
      >
        <Back />
      </LeftPressableArea>
      <HeaderSection>
        <HeaderName>{screen.toString().toUpperCase()}</HeaderName>
      </HeaderSection>
      <RightSection></RightSection>
    </NavContainer>
  );
};

export const ModalNavBar = ({ navigation, screen }) => {
  return (
    <NavContainer>
      <RightSection></RightSection>
      <HeaderSection>
        <HeaderName>{screen.toUpperCase()}</HeaderName>
      </HeaderSection>
      <LeftPressableArea
        accessibilityLabel={`go-back`}
        onPress={() => {
          navigation.goBack();
        }}
        style={{ alignItems: "flex-end" }}
      >
        <RightSection>
          <Close />
        </RightSection>
      </LeftPressableArea>
    </NavContainer>
  );
};

export const HeaderBar = ({ screen }) => {
  return (
    <NavContainer>
      <CenterHeader>
        <HeaderName>{screen.toUpperCase()}</HeaderName>
      </CenterHeader>
    </NavContainer>
  );
};
