import React from "react";
import { Next } from "../../../icons";
import { TouchableOpacity } from "react-native";
import {
  GoalCard,
  CardContentWrapper,
  GoalTextSection,
  GoalText,
} from "./goal.styles";

export const OngoingGoalTile = ({ goal, navigation, destination }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(destination)}>
      <GoalCard>
        <CardContentWrapper>
          <GoalTextSection>
            <GoalText>"{goal.goal}"</GoalText>
          </GoalTextSection>
          <Next />
        </CardContentWrapper>
      </GoalCard>
    </TouchableOpacity>
  );
};
