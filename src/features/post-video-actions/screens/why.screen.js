import React, { useState, useEffect } from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { SmartGoal } from "../components/smart-goal.component";
import { PainJournal } from "../components/pain-journal.component";
import { MoodJournal } from "../components/mood-journal.component";
import { FoodJournal } from "../components/food-journal.component";
import { DailyPainScores } from "../components/daily-pain.component";
import { FavoriteActivities } from "../components/favorite-activities.component";
import { CompletedUnits } from "../components/completed-units.component";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { handleTrackEvent } from "../../../utils";
import {
  SMART_GOAL_EVENTS,
  PAIN_JOURNAL_EVENTS,
  MOOD_JOURNAL_EVENTS,
  FOOD_JOURNAL_EVENTS,
  MY_ACTIVITIES_EVENTS,
} from "../../../amplitude-events";

export const Why = ({ navigation, route }) => {
  const { post_video_destination } = route.params;
  const screen = post_video_destination.replace(/[A-Z]/g, " $&").trim();
  const [trackPostVideoEvent, setTrackPostVideoEvent] = useState("");

  const videoDestinationNavigation = () => {
    switch (post_video_destination) {
      case "DailyPainScore":
        return <DailyPainScores />;
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
        // TODO add this to amplitude. Also see if Daily Pain Score makes sense.
      case "CompletedUnits":
        return <CompletedUnits />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (post_video_destination === "SmartGoal") {
      setTrackPostVideoEvent(SMART_GOAL_EVENTS.POST_VIDEO_FIRST_SMART_GOAL);
    } else if (post_video_destination === "PainJournal") {
      setTrackPostVideoEvent(PAIN_JOURNAL_EVENTS.POST_VIDEO_FIRST_PAIN_JOURNAL);
    } else if (post_video_destination === "MoodJournal") {
      setTrackPostVideoEvent(MOOD_JOURNAL_EVENTS.POST_VIDEO_FIRST_MOOD_JOURNAL);
    } else if (post_video_destination === "FoodJournal") {
      setTrackPostVideoEvent(FOOD_JOURNAL_EVENTS.POST_VIDEO_FIRST_FOOD_JOURNAL);
    } else if (post_video_destination === "MyActivities") {
      setTrackPostVideoEvent(
        MY_ACTIVITIES_EVENTS.POST_VIDEO_GET_STARTED_WITH_MY_ACTIVITIES
      );
    }
  }, [post_video_destination]);

  return (
    <SafeView>
      <NavigationBarLeft
        screen={screen}
        navigation={navigation}
        destination={"Today"}
      />
      <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
        <View style={{ marginBottom: 16 }}>{videoDestinationNavigation()}</View>
      </Scroll>
      <ButtonSection>
        <ModuleButton
          onPress={() => (
            handleTrackEvent(trackPostVideoEvent),
            navigation.navigate(post_video_destination)
          )}
          title={"Let's get started!"}
        />
      </ButtonSection>
    </SafeView>
  );
};
