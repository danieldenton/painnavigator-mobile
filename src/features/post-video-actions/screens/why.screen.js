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

    return (
        <SafeView>
            <NavigationBarLeft screen={"Smart Goal"} navigation={navigation} destination={"Today"} />
            {post_video_destination === "NewSmartGoal" && <SmartGoal navigation={navigation} />}
            {post_video_destination === "NewPainJournal" && <PainJournal navigation={navigation} />}
            {post_video_destination === "NewMoodJournal" && <MoodJournal navigation={navigation} />}
            {post_video_destination === "NewFoodJournal" && <FoodJournal navigation={navigation} />}
            {post_video_destination === "UpdateFavoriteActivities" && <FavoriteActivities navigation={navigation} />}
        </SafeView>
    );
};