import React, { useContext, useEffect } from "react";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { SafeView } from "../../../components/safe-area.component";
import { CompletionComponent } from "../components/completion.component";
import * as ScreenOrientation from "expo-screen-orientation"

export const CompletionScreen = ({ navigation, completionMessage }) => {
  const { resetModule } = useContext(MovementContext);

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
  }, [])

  return (
    <SafeView>
      <CompletionComponent completionMessage={completionMessage} />
      <ButtonSection>
        <ModuleButton
          title={"Back to Dashboard"}
          onPress={() => {
            navigation.navigate("Today");
            resetModule();
          }}
        />
      </ButtonSection>
    </SafeView>
  );
};
