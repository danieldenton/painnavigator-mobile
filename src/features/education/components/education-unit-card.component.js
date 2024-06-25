import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { EducationModuleIcon } from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";
import { OnboardContext } from "../../../services/onboard/onboard.context";

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

const CardIconSection = styled.View`
  flex: 0.2;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const EducationUnitCard = ({ navigation }) => {
  const { currentModule } = useContext(EducationContext);
  const { tour } = useContext(OnboardContext);
  return (
    <TouchableOpacity
      onPress={() => {
        !tour ? navigation.navigate("Education", { navigation }) : null;
      }}
    >
      <ModuleCard>
        <ModuleCardContent>
          <CardTextSection>
            <CardHeader>{currentModule?.name}</CardHeader>
            {currentModule.id > 1 ? (
              <CardSubHeader>{currentModule?.length} MIN</CardSubHeader>
            ) : null}
          </CardTextSection>
          <CardIconSection>
            <EducationModuleIcon />
          </CardIconSection>
        </ModuleCardContent>
      </ModuleCard>
    </TouchableOpacity>
  );
};
