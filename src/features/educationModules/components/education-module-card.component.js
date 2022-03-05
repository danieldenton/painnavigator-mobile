import React, { useState, useContext } from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

const ModuleCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
`;

export const EducationModuleCard = ({navigation, nextEducationModule}) => {
    const { name, length, source } = nextEducationModule;

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("EducationUnit", 
            {
                name,
                source,
                navigation
            })}> 
            <ModuleCard>
                <Card.Content>
                    <Text>{name}</Text>
                    <Text>{length}</Text>
                </Card.Content>
            </ModuleCard>
        </TouchableOpacity>
    ); 
};