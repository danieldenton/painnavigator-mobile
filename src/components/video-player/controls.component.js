import React,  { forwardRef, useEffect, useState } from "react"
import styled from "styled-components/native";
import { Slider } from '@miblanchard/react-native-slider';
import { Play, Pause, FullScreenButton } from "../../icons";
import * as ScreenOrientation from "expo-screen-orientation";

const VideoControls = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
    justify-content: space-between;
`;

const VideoPressable = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
`;

const SliderSection = styled.View`
    flex: 1;
    margin-left: 8px;
    margin-right: 12px;
`;

const TimeIndicatorRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: -14px;
`;

const TimeTextWrapper = styled.View`
`;

const TimeText = styled.Text`
    font-family: Inter_400Regular;
    font-size: 11px;
    line-height: 24px;
    color: #27374E;
`;

export const VideoControlBar = forwardRef((props, ref) => {
    const { status, type } = props;
    const [orientation, setOrientation] = useState(null);

    function millisecondsToHuman(duration) {
        const seconds = Math.floor((duration / 1000) % 60);
        const minutes = Math.floor((duration / 1000 / 60) % 60);
        const formattedSeconds = seconds < 10 ? "0"+seconds : seconds;
      
        return minutes+":"+formattedSeconds;
    };

    const showFullscreen = () => {
        ref.current.presentFullscreenPlayer();
    };

    const checkOrientation = async () => {
        const orientation = await ScreenOrientation.getOrientationAsync();
        setOrientation(orientation);
      };
    
      const handleOrientationChange = (o) => {
        setOrientation(o.orientationInfo.orientation);
      };
    
      useEffect(() => {
        checkOrientation();
        const subscription = ScreenOrientation.addOrientationChangeListener(
          handleOrientationChange
        );
        return () => {
          ScreenOrientation.removeOrientationChangeListeners(subscription);
        };
      }, []);
    
      useEffect(() => {
        if (orientation === 3 || orientation === 4){
            showFullscreen()
        } else {
            ref.current.dismissFullscreenPlayer();
        }
        console.log(orientation);
      }, [orientation]);

    return (
        <VideoControls>
            <VideoPressable 
                onPress={() => status.isPlaying ? ref.current.pauseAsync() : ref.current.playAsync()}
                style={{ marginLeft: -6 }}
            >
                {status.isPlaying ? <Pause /> : <Play />}
            </VideoPressable>
            <SliderSection>
                <Slider 
                    minimumValue={0}
                    maximumValue={status.durationMillis}
                    minimumTrackTintColor={"#8999AF"}
                    maximumTrackTintColor={"#CBD7EB"}
                    thumbStyle={{ height: 12, width: 12 }}
                    value={status.positionMillis}
                    onSlidingStart={() => ref.current.pauseAsync()}
                    onSlidingComplete={(change) => {
                        ref.current.setStatusAsync({ positionMillis: Number(change) });
                        ref.current.playAsync()
                    }}
                    trackStyle={{ height: 2 }}
                    //onValueChange={change => ref.current.setStatusAsync({ positionMillis: Number(change) })}
                />
                <TimeIndicatorRow>
                    <TimeTextWrapper>
                        <TimeText>
                            {isNaN(status.positionMillis) ? "0:00" : millisecondsToHuman(status.positionMillis)}
                        </TimeText>
                    </TimeTextWrapper>
                    <TimeTextWrapper>
                        <TimeText>
                            {isNaN(status.positionMillis) ? "0:00" : millisecondsToHuman(status.durationMillis)}
                        </TimeText>
                    </TimeTextWrapper>
                </TimeIndicatorRow>
            </SliderSection>
            {type !== "audio" && 
                <VideoPressable 
                    onPress={showFullscreen}
                    style={{ marginRight: -6 }}
                >
                    <FullScreenButton />
                </VideoPressable>
            }
        </VideoControls>
    );
});