import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MovementModuleIcon } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { isAndroid } from "../../../utils";

const ModuleCard = styled(Card)`
  margin-top: 16px;
  border-radius: 15px;
  padding: 21px;
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

const CardSubHeader = styled.Text`
  font-family: Inter_500Medium;
  font-size: 12px;
  margin-top: 8px;
`;

const UnitProgress = styled.Text`
  font-family: Inter_400Regular;
  font-size: 13px;
  margin-top: 8px;
`;

const CardIconSection = styled.View`
  flex: 0.2;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Icon = styled.View`
  align-self: flex-end;
  margin-right: -3px;
`;

export const MovementUnitCard = ({ navigation, isFocused }) => {
  const { currentModule, playlistLength, numOfCompletedVideos, moduleComplete } =
    useContext(MovementContext);
  const { name } = currentModule;

  const moduleProgress = numOfCompletedVideos / playlistLength;
  const circleProgress = useRef(null);

  useEffect(() => {
    if (isAndroid) {
      return;
    }

    if (numOfCompletedVideos > 0) {
      circleProgress.current.reAnimate(0, moduleProgress * 100, 1000);
    }
  }, [isFocused, isAndroid]);

  useEffect(() => {
console.log(moduleComplete)
  }, [moduleComplete])


  return (
    <TouchableOpacity onPress={() => navigation.navigate("Movement")}>
      <ModuleCard>
        <ModuleCardContent>
          <CardTextSection>
            <CardHeader>{name}</CardHeader>
            <CardSubHeader>{playlistLength} MIN</CardSubHeader>
            {numOfCompletedVideos > 0 && (
              <UnitProgress>
                {numOfCompletedVideos}/{playlistLength} Videos Completed
              </UnitProgress>
            )}
          </CardTextSection>
          <CardIconSection>
            {numOfCompletedVideos > 0 && (
              <Icon>
                <AnimatedCircularProgress
                  size={70}
                  width={5}
                  fill={moduleProgress * 100}
                  backgroundColor="#CBD7EB"
                  tintColor="#45D2BC"
                  lineCap="round"
                  rotation={360}
                  delay={1000}
                  duration={1000}
                  ref={circleProgress}
                >
                  {(fill) => <MovementModuleIcon />}
                </AnimatedCircularProgress>
              </Icon>
            )}
            {numOfCompletedVideos === 0 && <MovementModuleIcon />}
          </CardIconSection>
        </ModuleCardContent>
      </ModuleCard>
    </TouchableOpacity>
  );
};
