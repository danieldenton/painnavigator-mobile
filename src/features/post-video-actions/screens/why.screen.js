import React from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { SmartGoal } from "../components/smart-goal.component";
import { PainJournal } from "../components/pain-journal.component";
import { MoodJournal } from "../components/mood-journal.component";
import { FoodJournal } from "../components/food-journal.component";
import { FavoriteActivities } from "../components/favorite-activities.component";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";

export const Why = ({ navigation, route }) => {
    const { post_video_destination } = route.params;
    const screen = post_video_destination.replace(/[A-Z]/g, ' $&').trim();

    const videoDestinationNavigation = () => {
        switch (post_video_destination) {
          case "SmartGoal":
            return <SmartGoal />;
          case "PainJournal":
            return <PainJournal />;
          case "MoodJournal":
            return <MoodJournal />;
          case "FoodJournal":
            return <FoodJournal />;
          case "MyActivities":
            return <FavoriteActivities />;
          default:
            return null;
        }
      };
      
      return (
        <SafeView>
          <NavigationBarLeft
            screen={screen}
            navigation={navigation}
            destination={"Today"}
          />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
              <View style={{ marginBottom: 16 }}>
                {videoDestinationNavigation()}
              </View>
            </Scroll>
            <ButtonSection>
                <ModuleButton
                    onPress={() => navigation.navigate(post_video_destination)}
                    title={"Let's get started!"} 
                />
            </ButtonSection>
        </SafeView>
      );
};