import React, { useEffect } from "react";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { SafeView } from "../../../components/safe-area.component";
import { CompletionComponent } from "../components/completion.component";
import * as ScreenOrientation from "expo-screen-orientation";

export const CompletionScreen = ({ navigation, completionMessage }) => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  return (
    <SafeView>
      <CompletionComponent completionMessage={completionMessage} />
      <ButtonSection>
        <ModuleButton
          title={"Back to Dashboard"}
          onPress={() => {
            navigation.navigate("Today");
          }}
        />
      </ButtonSection>
    </SafeView>
  );
};
