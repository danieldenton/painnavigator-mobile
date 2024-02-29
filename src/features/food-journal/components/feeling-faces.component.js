import React, { useContext } from "react";
import styled from "styled-components/native";
import { Pressable } from "react-native";
import { FoodJournalContext } from "../../../services/food-journal.context";
import { 
    HappyFace, 
    HappyFaceSelected, 
    NeutralFace, 
    NeutralFaceSelected, 
    SadFace, 
    SadFaceSelected 
} from "../../../icons";
import * as Haptics from 'expo-haptics';

const FeelingFacesRow = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 14px;
`;

const FeelingFaceWrapper = styled(Pressable)`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-left: 27px;
    margin-right: 27px;
    height: 56px;
    width: 56px;
`;

export const FeelingFaces = ({ feeling, name }) => {
    const { changeEntry } = useContext(FoodJournalContext);

    const feelingData = [
        {
          emotion: "sad",
          selectedFace: <SadFaceSelected />,
          nonSelectedFace: <SadFace />,
        },
        {
          emotion: "neutral",
          selectedFace: <NeutralFaceSelected />,
          nonSelectedFace: <NeutralFace />,
        },
        {
          emotion: "happy",
          selectedFace: <HappyFaceSelected />,
          nonSelectedFace: <HappyFace />,
        },
      ];
      
      return (
        <FeelingFacesRow>
          {feelingData.map(({ emotion, selectedFace, nonSelectedFace }) => {
            return (
              <FeelingFaceWrapper
                onPress={() => {
                  feeling === emotion
                    ? changeEntry("", name)
                    : changeEntry(emotion, name);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }}
                key={emotion}
              >
                {feeling === emotion ? selectedFace : nonSelectedFace}
              </FeelingFaceWrapper>
            );
          })}
        </FeelingFacesRow>
      );      
};