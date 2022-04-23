import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MovementModuleIcon } from "../../../icons";

const ModuleCard = styled(Card)`
    margin: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding: 21px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
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

const UnitProgress = styled.Text`
    font-family: Inter_400Regular;
    font-size: 13px;
    margin-top: 8px;
`;  

const CardIconSection = styled.View`
    flex: .2;
    align-items: center;
    justify-content: center;
`;

export const MovementUnitCard = ({ navigation, currentMovementModule, videosCompleted }) => {
    const { name, length, videos } = currentMovementModule;
    const numVideosCompleted = videosCompleted.length;
    const totalVideos = videos.length;

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("Movement", { navigation })}> 
            <ModuleCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{name}</CardHeader>
                        <CardSubHeader>{length.toUpperCase()}</CardSubHeader>
                        {numVideosCompleted > 0 && 
                            <UnitProgress> 
                                {numVideosCompleted}/{totalVideos} Videos Completed
                            </UnitProgress>
                        }
                    </CardTextSection>
                    <CardIconSection>
                        <MovementModuleIcon />
                    </CardIconSection>
                </ModuleCardContent>
            </ModuleCard>
        </TouchableOpacity>
    ); 
};