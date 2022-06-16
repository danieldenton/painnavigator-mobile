import React from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { SmartGoal } from "../components/smart-goal.component";
import { PainJournal } from "../components/pain-journal.component";
import { MoodJournal } from "../components/mood-journal.component";
import { FoodJournal } from "../components/food-journal.component";
import { FavoriteActivities } from "../components/favorite-activities.component";

export const Why = ({ navigation, route }) => {
    const { post_video_destination } = route.params;
    const screen = post_video_destination.replace(/[A-Z]/g, ' $&').trim();

    return (
        <SafeView>
            <NavigationBarLeft screen={screen} navigation={navigation} destination={"Today"} />
            {post_video_destination === "SmartGoal" && <SmartGoal navigation={navigation} />}
            {post_video_destination === "PainJournal" && <PainJournal navigation={navigation} />}
            {post_video_destination === "MoodJournal" && <MoodJournal navigation={navigation} />}
            {post_video_destination === "FoodJournal" && <FoodJournal navigation={navigation} />}
            {post_video_destination === "FavoriteActivities" && <FavoriteActivities navigation={navigation} />}
        </SafeView>
    );
};