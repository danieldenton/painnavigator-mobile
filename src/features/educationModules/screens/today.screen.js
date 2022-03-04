import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { EducationModulesContext } from "../../../services/educationModules/education-modules.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Card } from "react-native-paper";
import { educationModules } from "../data/education-module-data.json";

const ModuleCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
`;

export const TodayScreen = ({ navigation }) => {
    const { nextEducationModule } = useContext(EducationModulesContext);
    const { name, length, source } = nextEducationModule;
    
    return (
        <SafeArea>
            <TouchableOpacity onPress={() => navigation.navigate("EducationUnit", 
                {
                    name: name,
                    source: source,
                })}> 
                <ModuleCard>
                    <Card.Content>
                        <Text>{name}</Text>
                        <Text>{length}</Text>
                    </Card.Content>
                </ModuleCard>
            </TouchableOpacity>
        </SafeArea>
    )
};