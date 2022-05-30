import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MovementModuleIcon } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { movementVideos } from "../data/movement-videos-data.json";

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

const Icon = styled.View`
    align-self: flex-end;
    margin-right: -3px;
`; 

export const MovementUnitCard = ({ navigation }) => {
    const { currentModule } = useContext(MovementContext);
    const { name, length, videos } = currentModule;
    const numVideosCompleted = videos.filter(video => video.completed).length;
    const totalVideos = videos.length;
    const moduleProgress = numVideosCompleted / totalVideos;

    //useEffect(() => {
        //const length = currentModule.videos.map((moduleVideo) => 
                //{
                    //const the_video = movementVideos.find(video => video.id === moduleVideo);
                    //const video_length = Math.ceil(the_video / 60);
                    
                    //return (
                        //video_length
                    //)});
    //}, [])

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("Movement", { navigation })}> 
            <ModuleCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{name}</CardHeader>
                        <CardSubHeader>{} MIN</CardSubHeader>
                        {numVideosCompleted > 0 && 
                            <UnitProgress> 
                                {numVideosCompleted}/{totalVideos} Videos Completed
                            </UnitProgress>
                        }
                    </CardTextSection>
                    <CardIconSection>
                        {numVideosCompleted > 0 && 
                            <Icon>
                                <AnimatedCircularProgress
                                    size={70}
                                    width={5}
                                    fill={moduleProgress * 100}
                                    backgroundColor="#CBD7EB"
                                    tintColor="#45D2BC" 
                                    lineCap="round"
                                    rotation={360}
                                    delay={2000}
                                    duration={1000}
                                >
                                    {(fill) => (<MovementModuleIcon />)}
                                </AnimatedCircularProgress>
                            </Icon>
                        }
                        {numVideosCompleted === 0 && <MovementModuleIcon />}
                    </CardIconSection>
                </ModuleCardContent>
            </ModuleCard>
        </TouchableOpacity>
    ); 
};