import React, { useContext } from "react";
import {
  ButtonSection,
  GraphicWrapper,
} from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import {
  CongratulationsHeaderWrapper,
  CongratulationsHeader,
  CongratulationsMessageWrapper,
  CongratulationsMessage,
} from "../../../components/completion/components/completion.styles";
import { ThumbsUpGraphic } from "../../../graphics";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";
import { MovementContext } from "../../../services/movement/movement.context";

export const CompletedUnitsScreen = ({ navigation }) => {
  const { isMovement } = useContext(MovementContext);
  return (
    <SafeView>
      <NavigationBarLeft
    //   TODO fix this navigation.
        screen={"Education"}
        destination={"Today"}
        navigation={navigation}
      />
      <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <GraphicWrapper>
            <ThumbsUpGraphic />
          </GraphicWrapper>
          <CongratulationsHeaderWrapper>
            <CongratulationsHeader>
              Congratulations! You've completed all of the{" "}
              {isMovement ? "movement" : "education"} units in your program!
            </CongratulationsHeader>
          </CongratulationsHeaderWrapper>
          <CongratulationsMessageWrapper>
            <CongratulationsMessage>
              You can revisit any of these videos at anytime. They can be found
              in the "Units" section in the side menu.
            </CongratulationsMessage>
          </CongratulationsMessageWrapper>
        </View>
      </Scroll>
      <ButtonSection>
        <ModuleButton
          onPress={() => navigation.navigate("Today")}
          title={"Back to Dashboard"}
        />
      </ButtonSection>
    </SafeView>
  );
};
