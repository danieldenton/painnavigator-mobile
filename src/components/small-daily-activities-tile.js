import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const DailyActivitiesCard = styled(Card)`
  margin-top: 16px;
  border-radius: 15px;
  padding: 12px;
  background-color: white;
`;

const ModuleCardContent = styled(Card.Content)`
  flex-direction: row;
  padding: 0px;
  align-items: center;
`;

const CardTextSection = styled.View`
  flex: 0.8;
`;

const CardHeader = styled.Text`
  font-family: Inter_500Medium;
  font-size: 18px;
`;

const CardIconSection = styled.View`
  flex: 0.2;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const SmallDailyActivitiesTile = ({
  destination,
  title,
  navigation,
  icon,
  screen,
  screenParams,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(destination, {
          screen: screen,
          params: { type: screenParams },
        })
      }
    >
      <DailyActivitiesCard>
        <ModuleCardContent>
          <CardTextSection>
            <CardHeader>{title}</CardHeader>
          </CardTextSection>
          <CardIconSection>{icon}</CardIconSection>
        </ModuleCardContent>
      </DailyActivitiesCard>
    </TouchableOpacity>
  );
};
