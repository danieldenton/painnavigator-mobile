import React, { useContext, useEffect, useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { movementVideos } from "../../movement/data/movement-videos-data.json";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";
import { getMovementUnits } from "../../../services/movement/movement.service";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const MovementUnitsScreen = ({ navigation }) => {
  const {
    completedMovementModules,
    completeMovementSkippedUnit,
    skippedMovementModules,
    savedMovementUnits,
    setIsMovement,
    setCompletedMovementModules,
    setSkippedMovementModules,
    setSavedMovementUnits,
  } = useContext(MovementContext);
  const { uid } = useContext(AuthenticationContext);
  const [savedMovementModuleData, setSavedMovementModuleData] = useState([]);
  const [completedMovementModuleData, setCompletedMovementModuleData] =
    useState([]);
  const [skippedMovementModuleData, setSkippedMovementModuleData] = useState(
    []
  );

  useEffect(() => {
    setIsMovement(true);
    getMovementUnits(
      uid,
      setCompletedMovementModules,
      setSkippedMovementModules,
      setSavedMovementUnits
    );
  }, []);

  useEffect(() => {
    const data = savedMovementUnits?.map((module) =>
      movementVideos.find((item) => item.id === module)
    );
    setSavedMovementModuleData(data);
  }, [savedMovementUnits]);

  useEffect(() => {
    const data = completedMovementModules?.map((module) =>
      movementVideos.find((item) => item.id === module)
    );
    setCompletedMovementModuleData(data);
  }, [completedMovementModules]);

  useEffect(() => {
    const data = skippedMovementModules?.map((module) =>
      movementVideos.find((item) => item.id === module)
    );
    setSkippedMovementModuleData(data);
  }, [skippedMovementModules]);

  const movementExpandableCardData = [
    {
      moduleType: "Movement",
      title: "Saved",
      units: savedMovementModuleData,
    },
    {
      moduleType: "Movement",
      title: "Skipped",
      units: skippedMovementModuleData,
    },
    {
      moduleType: "Movement",
      title: "Completed",
      units: completedMovementModuleData,
    },
  ];

  const movementUnitCards = movementExpandableCardData.map((card, idx) => {
    return (
      <ExpandableCard
        moduleType={card.moduleType}
        navigation={navigation}
        title={card.title}
        units={card.units}
        completeSkippedUnit={completeMovementSkippedUnit}
        key={idx}
      />
    );
  });

  return (
    <SafeView>
      <NavigationBarLeft
        screen={"Movement Units"}
        destination={"UnitsHome"}
        navigation={navigation}
      />
      <Scroll style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 40 }}>
        {movementUnitCards}
        <View style={{ marginBottom: 12 }}></View>
      </Scroll>
    </SafeView>
  );
};
