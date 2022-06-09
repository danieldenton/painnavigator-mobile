import React from "react";
import { View } from "react-native";
import { ReviewOptionButton } from "../../../components/review-journal-question.component";

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
            show: educationProgress > 38 ? true : false
        },
        {
            id: 3,
            option: "Sign Out",
            destination: "FavoriteActivities",
            show: true
        },
        {
            id: 4,
            option: "Delete Account",
            destination: "FavoriteActivities",
            show: true
        },
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