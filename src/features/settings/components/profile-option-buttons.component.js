import React, { useContext} from "react";
import { View } from "react-native";
import { ReviewOptionButton } from "../../../components/review-journal-question.component";
import { ProfileContext } from "../../../services/profile/profile-context";


export const ProfileOptionsButtons = ({
  navigation,
  currentModule,
}) => {
  const { userInfo } = useContext(ProfileContext)
  const { profile_status } = userInfo
  
  const profileButtonOptions = [
    {
      id: 1,
      option: "Finish Setting Up Profile",
      destination: "ProfileSetup",
      show: !profile_status ? true : false,
    },
    {
      id: 2,
      option: "My Activities",
      destination: "FavoriteActivities",
      show: currentModule?.id > 38 ? true : false,
    },
    {
      id: 3,
      option: "Sign Out",
      destination: "Onboard",
      show: false,
    },
  ];

  const profileButtons = profileButtonOptions.map((option) =>
    option.show === true ? (
      <ReviewOptionButton
        destination={option.destination}
        option={option.option}
        key={option.id}
        navigation={navigation}
      />
    ) : (
      <View key={option.id}></View>
    )
  );

  return <>{profileButtons}</>;
};
