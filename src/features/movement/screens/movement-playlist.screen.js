import React, { useContext } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { ModuleButton } from "../../../components/button.component";
import { MovementPlaylistHeader } from "../components/movement-playlist-header.component";
import { MovementPlaylist } from "../components/movement-playlist.component";
import { MovementContext } from "../../../services/movement/movement.context";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { track } from "@amplitude/analytics-react-native";
import { MOVEMENT_UNIT_EVENTS } from "../../../amplitude-events";

export const MovementPlaylistScreen = ({ navigation }) => {
  const { currentModule } = useContext(MovementContext);
  const { videos } = currentModule;
  const numVideosCompleted = videos.filter((video) => video.completed).length;

  return (
    <SafeView>
      <NavigationBarLeft
        screen={"Movement"}
        navigation={navigation}
        destination={"Today"}
      />
      <MovementPlaylistHeader />
      <MovementPlaylist navigation={navigation} />
      <ButtonSection>
        <ModuleButton
          onPress={() => (
            track(MOVEMENT_UNIT_EVENTS.START_MOVEMENT_UNIT),
            navigation.navigate("MovementUnit", { navigation })
          )}
          title={numVideosCompleted > 0 ? "Play Next" : "Play All"}
        />
      </ButtonSection>
    </SafeView>
  );
};
