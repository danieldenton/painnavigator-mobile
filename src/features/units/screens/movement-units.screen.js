import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ExpandableCard } from "../components/expandable-card.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { movementVideos } from "../../../services/movement/movement-videos-data.json"
import { Scroll } from "../../../components/scroll.component";
import { AuthenticationContext } from "../../../services/authentication.context";

export const MovementUnitsScreen = ({ navigation }) => {
  const {
    getMovementModuleCompletions,
    completedMovementVideos,
    completeMovementSkippedUnit,
    skippedMovementVideos,
    savedMovementVideos,
    setIsMovement,
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
    getMovementModuleCompletions(uid);
  }, []);

  useEffect(() => {
    const data = savedMovementVideos?.map((module) =>
      movementVideos.find((item) => item.id === module)
    );
    setSavedMovementModuleData(data);
  }, [savedMovementVideos]);

  useEffect(() => {
    const data = completedMovementVideos?.map((videoId) =>
      movementVideos.find((item) => item.id === videoId)
    );
    setCompletedMovementModuleData(data);
  }, [completedMovementVideos]);

  useEffect(() => {
    const data = skippedMovementVideos?.map((completion) =>
      movementVideos.find((item) => item.id === completion.video_id)
    );
    setSkippedMovementModuleData(data);
  }, [skippedMovementVideos]);

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
