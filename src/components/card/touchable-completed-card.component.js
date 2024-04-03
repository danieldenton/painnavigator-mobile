import React from "react";
import { TouchableOpacity } from "react-native";
import {
  CardWrapper,
  CardContentWrapper,
  TextSection,
  CardText,
  IconSection,
} from "./card.styles";
import { Selected as GreenCheck } from "../../icons";

export const TouchableCompletedItemCard = ({
  navigation,
  destination,
  goal,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(destination, { goal: goal })}
    >
      <CardWrapper>
        <CardContentWrapper>
          <TextSection>
            <CardText>{goal.goal}</CardText>
          </TextSection>
          <IconSection>
            <GreenCheck />
          </IconSection>
        </CardContentWrapper>
      </CardWrapper>
    </TouchableOpacity>
  );
};
