import React from "react";
import { View, Text } from "react-native";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { EducationProgress } from "../components/education-progress.component";
import { MovementProgress } from "../components/movement-progress.component";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { progressStyles } from "../components/progress.styles";

export const MyProgress = ({ navigation }) => {
  return (
    <SafeView>
      <NavigationBarLeft
        destination={"Today"}
        navigation={navigation}
        screen={"My Progress"}
      />
      <View style={progressStyles.screenWrapper}>
        <EducationProgress />
        <MovementProgress />
      </View>

      <View style={progressStyles.moveOnQuestionWrapper}>
        <Text style={progressStyles.moveOnQuestion}>
          Do you feel like you're ready to move into the maintenance portion of
          our program?
        </Text>
      </View>
      <ButtonSection>
        <ModuleButton
          onPress={() => {
            navigation.navigate("Completion");
          }}
          title={"Move Into Maintenance"}
        />
      </ButtonSection>
    </SafeView>
  );
};
