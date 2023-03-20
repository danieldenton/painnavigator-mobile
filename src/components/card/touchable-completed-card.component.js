import React from "react";
import { TouchableOpacity } from "react-native";
import { CardWrapper, CardContentWrapper, TextSection, CardText, IconSection } from "./card.styles";
import { Selected as GreenCheck } from "../../icons";
import { track } from "@amplitude/analytics-react-native";
import { SMART_GOAL_EVENTS } from "../../amplitude-events";

export const TouchableCompletedItemCard = ({ goal, navigation, destination }) => {
    return (
        <TouchableOpacity onPress={() => (track(SMART_GOAL_EVENTS.VIEW_PREVIOUS_SMART_GOAL), navigation.navigate(destination))}> 
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
}