import React, { useContext } from "react";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { SelectedCheckBox } from "../../../components/multi-select-checkbox.component";
import { FavoriteActivitiesContext } from "../../../services/favorite-activities/favorite-activities.context";
import { JournalQuestion } from "../../../components/journal-question.component";
import { options } from "../data/favorite-activity-data.json";
import { Scroll } from "../../../components/scroll.component";
import { DailyActivitiesTile } from "../../../components/daily-activities-tile.component";
import { Add } from "../../../icons";
import { MY_ACTIVITIES_EVENTS } from "../../../amplitude-events";

export const FavoriteActivitiesHomeScreen = ({ navigation }) => {
    const { additionalActivities, favoriteActivities } = useContext(FavoriteActivitiesContext);

    const activityElements = favoriteActivities?.map((activity) => {
        const activityData = options.find(option => option.id === activity);

        return (
            <SelectedCheckBox value={activityData.option} key={activity} />
        );
    });

    const addedActivities = additionalActivities?.filter(item => item.option !== "").filter(item => item.selected === true).map((activity) => {
        return (
            <SelectedCheckBox value={activity.option} key={activity.id} />
        );
    });

    return (
        <SafeView>
            <NavigationBarLeft screen={"My Activities"} destination={"ProfileHome"} navigation={navigation} />
            <JournalQuestion question={"My Favorite Activities"} />
            <Scroll style={{ marginTop: 16, paddingLeft: 16, paddingRight: 16 }}>
                {activityElements}
                {addedActivities}
                <DailyActivitiesTile 
                    destination={"NewFavoriteActivities"} 
                    icon={<Add />} 
                    navigation={navigation} 
                    title={"Update"}
                    trackEvent={MY_ACTIVITIES_EVENTS.UPDATE_MY_ACTIVITIES}
                 />
            </Scroll>
        </SafeView>
    );
};