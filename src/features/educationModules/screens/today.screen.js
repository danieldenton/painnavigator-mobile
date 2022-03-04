import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Card } from "react-native-paper";
import { educationModules } from "../data/education-module-data.json";

const ModuleCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
`;

export const TodayScreen = ({ navigation }) => {
    const [educationModuleProgress, setEducationModuleProgress] = useState(0);
    const { name, length, source } = educationModules[educationModuleProgress];
    
    return (
        <SafeArea>
            <TouchableOpacity onPress={() => navigation.navigate("EducationUnit")}> 
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