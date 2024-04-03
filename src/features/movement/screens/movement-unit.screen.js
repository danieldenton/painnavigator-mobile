import React, { useContext, useEffect, useState } from "react";
import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "./completion-screen";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";

export const MovementUnitScreen = ({ navigation }) => {
  const {
    moduleComplete,
    setIsMovement,
    currentModule,
  } = useContext(MovementContext);
  const [completionMessage, setCompletionMessage] = useState(
    "You completed a movement unit! You’re on your way to mastering new skills and redefining your relationship with pain."
  );
  const destination = moduleComplete ? "Today" : "MovementPlaylist"

  useEffect(() => {
    setIsMovement(true);
    if (currentModule?.id > 37) {
      setCompletionMessage(
        "You've completed ALL of the movement units in your program! You can revisit any of these videos at anytime. They can be found in the 'Units' section in the side menu."
      );
    }
  }, []);

  return (
    <SafeView>
      <NavigationBarLeft
        screen={"Movement"}
        navigation={navigation}
        destination={destination}
        orientation={true}
      />
      {moduleComplete ? (
        <CompletionScreen
          navigation={navigation}
          completionMessage={completionMessage}
        />
      ) : (
        <MovementUnit />
      )}
    </SafeView>
  );
};
