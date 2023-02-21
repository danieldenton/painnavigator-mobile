import React from "react";
import { View } from "react-native";
import { ReviewOptionButton } from "../../../components/review-journal-question.component";
import { MY_ACTIVITIES_EVENTS } from "../../../amplitude-events";

export const ProfileOptionsButtons = ({ navigation, profileComplete, educationProgress }) => {

    const profileButtonOptions = [
        {
            id: 1,
            option: "Finish Setting Up Profile",
            destination: "ProfileSetup",
            show: !profileComplete ?  true : false
        },
        {
            id: 2,
            option: "My Activities",
            destination: "FavoriteActivities",
            show: educationProgress > 38 ? true : false,
            trackEvent: MY_ACTIVITIES_EVENTS.VIEW_MY_ACTIVITIES
        },
        {
            id: 3,
            option: "Sign Out",
            destination: "FavoriteActivities",
            show: false
        }
    ];

    const profileButtons = profileButtonOptions.map(option => option.show === true ?
        <ReviewOptionButton destination={option.destination} option={option.option} key={option.id} navigation={navigation} />
        :
        <View key={option.id}></View>
    );

    return(
        <>
            {profileButtons}
        </>
    );
};