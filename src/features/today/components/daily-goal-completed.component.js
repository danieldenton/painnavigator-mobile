import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Selected } from "../../../icons";
import { educationModules } from "../../../services/education/data/education-module-data.json"
import { movementModules } from "../../../services/movement/movement-modules-data.json";

const DailyGoalCard = styled(Card)`
  margin-top: 16px;
  border-radius: 15px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 21px;
  padding-right: 22px;
  background-color: #cdebe6;
`;

const DailyGoalCardContent = styled(Card.Content)`
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
  justify-content: center;
`;

const DailyGoalMessageSection = styled.View`
  align-items: center;
  margin-top: 16px;
`;

const DailyGoalMessage = styled.Text`
  color: #606c81;
  font-size: 14px;
  font-family: Inter_400Regular;
`;

export const DailyGoalCompleted = ({ type, moduleId, movementProgram }) => {
  const module = moduleId
    ? type === "module"
      ? educationModules.find((module) => module.id === moduleId)
      : movementModules[movementProgram - 1].modules.find((module) => module.id === moduleId)
    : { name: "" };

  return (
    <>
      <DailyGoalCard>
        <DailyGoalCardContent>
          <CardTextSection>
            <CardHeader>{moduleId ? module.name : `${type} Logged`}</CardHeader>
          </CardTextSection>
          <CardIconSection>
            <Selected />
          </CardIconSection>
        </DailyGoalCardContent>
      </DailyGoalCard>

      {moduleId ? (
        <DailyGoalMessageSection>
          <DailyGoalMessage>
            {type === "movementModule"
              ? "You completed your daily movement unit!"
              : "Daily goal reached! Keep going?"}
          </DailyGoalMessage>
        </DailyGoalMessageSection>
      ) : null}
    </>
  );
};
