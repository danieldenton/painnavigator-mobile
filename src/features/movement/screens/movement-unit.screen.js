import React, { useContext, useEffect } from "react";
import { MovementUnit } from "../components/movement-unit.component";
import { CompletionScreen } from "./completion-screen";
import { MovementContext } from "../../../services/movement/movement.context";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { getMovementUnits } from "../../../services/movement/movement.service";

export const MovementUnitScreen = ({ navigation }) => {
  const { moduleComplete, resetModule, setIsMovement, setCompletedMovementModules, setSkippedMovementModules, setSavedMovementUnits } =
    useContext(MovementContext);
    const { uid } = useContext(AuthenticationContext)

  useEffect(() => {
    setIsMovement(true);
    getMovementUnits(
      uid,
      setCompletedMovementModules,
      setSkippedMovementModules,
      setSavedMovementUnits
    );
  }, []);

  function finishModule() {
    navigation.navigate("Today");
    resetModule();
  }

  return (
    <SafeView>
      <NavigationBarLeft
        screen={"Movement"}
        navigation={navigation}
        destination={"MovementPlaylist"}
        previousPage={moduleComplete ? finishModule : null}
      />
      {moduleComplete ? (
        <CompletionScreen navigation={navigation} />
      ) : (
        <MovementUnit />
      )}
    </SafeView>
  );
};
