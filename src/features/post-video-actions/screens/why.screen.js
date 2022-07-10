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

export const Why = ({ navigation, route }) => {
    const { post_video_destination } = route.params;
    const screen = post_video_destination.replace(/[A-Z]/g, ' $&').trim();

    const videoDestinationNavigation = () => {
        switch (post_video_destination) {
          case "SmartGoal":
            return <SmartGoal navigation={navigation} />;
          case "PainJournal":
            return <PainJournal navigation={navigation} />;
          case "MoodJournal":
            return <MoodJournal navigation={navigation} />;
          case "FoodJournal":
            return <FoodJournal navigation={navigation} />;
          case "FavoriteActivities":
            return <FavoriteActivities navigation={navigation} />;
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
        </SafeView>
      );
};