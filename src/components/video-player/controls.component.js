import React,  { forwardRef } from "react"
import styled from "styled-components/native";
import { Slider } from '@miblanchard/react-native-slider';
import { Play, Pause, FullScreenButton } from "../../icons";

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

export const VideoControlBar = forwardRef((props, ref) => {
    const { status } = props;

    const showFullscreen = () => {
        ref.current.presentFullscreenPlayer();
    };

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
                    //onValueChange={change => ref.current.setStatusAsync({ positionMillis: Number(change) })}
                />
            </SliderSection>
            <VideoPressable 
                onPress={showFullscreen}
                style={{ marginRight: -6 }}
            >
                <FullScreenButton />
            </VideoPressable>
        </VideoControls>
    );
});