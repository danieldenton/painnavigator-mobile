import React from "react";
import styled from "styled-components/native";

import { Slider as Slide } from '@miblanchard/react-native-slider';

//TODO: complete ProgramPaceGraphic
const ProgramPaceGraphic = styled.View`
`;

const SliderWrapper = styled.View`
    flex: 1;
    margin: ${(props) => props.theme.space[3]};
`;

const SliderValueWindow = styled.View`
    flex: .5;
    align-items: center;
    justify-content: center;
`;

const SliderValue = styled.Text`
    font-size: 72px;
`;

export const Slider = ({ value, onValueChange, min, max, step, variant }) => {
    return(
        <SliderWrapper>
            <SliderValueWindow>
                <SliderValue>{value}</SliderValue>
            </SliderValueWindow>
            {variant === "ProgramPace" && <ProgramPaceGraphic />}
            <Slide 
                value={value} 
                onValueChange={value => onValueChange(Number(value))} 
                step={typeof step === 'number' && !isNaN(step) ? step : 1}
                //should try to make step smaller and add a smoother function that only shows whole numbers above
                minimumValue={typeof min === 'number' && !isNaN(min) ? min : 0}
                maximumValue={typeof max === 'number' && !isNaN(max) ? max : 10}
            />
        </SliderWrapper>
    );
};
