import React, { useContext, useEffect, useState } from "react";
import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "./completion-screen";
import { MovementContext } from "../../../services/movement/movement.context";
import { AuthenticationContext } from "../../../services/authentication.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const MovementUnitScreen = ({ navigation }) => {
  const {
    getMovementModuleCompletions,
    moduleComplete,
    setIsMovement,
    currentModule,
  } = useContext(MovementContext);
  const { uid } = useContext(AuthenticationContext);
  const [completionMessage, setCompletionMessage] = useState(
    "You completed a movement unit! You’re on your way to mastering new skills and redefining your relationship with pain."
  );

  useEffect(() => {
    setIsMovement(true);
    getMovementModuleCompletions(uid);
    if (currentModule?.id > 37) {
      setCompletionMessage(
        "You've completed ALL of the movement units in your program! You can revisit any of these videos at anytime. They can be found in the 'Units' section in the side menu."
      );
    }
  }, []);
  // useEffect(() => {
  //   navigation.navigate("Completion");
  // }, [moduleComplete]);
  return (
    <SafeView>
      <NavigationBarLeft
        screen={"Movement"}
        navigation={navigation}
        destination={"MovementPlaylist"}
        previousPage={moduleComplete ? navigation.navigate("Today") : null}
        orientation={true}
      />
      <MovementUnit navigation={navigation} />
    </SafeView>
  );
};
