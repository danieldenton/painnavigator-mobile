import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { MovementModuleIcon } from "../../../icons";
import { MovementContext } from "../../../services/movement/movement.context";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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

export const MovementUnitCard = ({ navigation, isFocused }) => {
    const { currentModule, getPlaylistLength } = useContext(MovementContext);
    const { name, videos } = currentModule;
    const numVideosCompleted = videos.filter(video => video.completed).length;
    const totalVideos = videos.length;
    const moduleProgress = numVideosCompleted / totalVideos;
    const circleProgress = useRef(null);

    useEffect(() => {
        circleProgress.current.reAnimate(0, moduleProgress * 100, 1000);
    }, [isFocused]);

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate("Movement")}> 
            <ModuleCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{name}</CardHeader>
                        <CardSubHeader>{getPlaylistLength(videos)} MIN</CardSubHeader>
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
                                    delay={1000}
                                    duration={1000}
                                    ref={circleProgress}
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