import React, { useContext } from "react";
import { ModuleButton } from "../../../components/button.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { MovementContext } from "../../../services/movement/movement.context";
import { SafeView } from "../../../components/safe-area.component";
import { CompletionComponent } from "./completion.component";

export const CompletionScreen = ({ navigation }) => {
  const { resetModule } = useContext(MovementContext);

  return (
    <SafeView>
      <CompletionComponent />
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
