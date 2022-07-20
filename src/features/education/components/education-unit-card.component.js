import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { EducationModuleIcon } from "../../../icons";
import { EducationContext } from "../../../services/education/education.context";

const ModuleCard = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding: 21px;
`;

const ModuleCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
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
    flex: .2;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const EducationUnitCard = ({ navigation }) => {
    const { currentModule } = useContext(EducationContext);
    const { name, length } = currentModule;

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("Education", { navigation })}> 
            <ModuleCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{name}</CardHeader>
                        <CardSubHeader>{length} MIN</CardSubHeader>
                    </CardTextSection>
                    <CardIconSection>
                        <EducationModuleIcon />
                    </CardIconSection>
                </ModuleCardContent>
            </ModuleCard>
        </TouchableOpacity>
    ); 
};