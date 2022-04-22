import React from "react";
import styled from "styled-components/native";
import Slider from '@react-native-community/slider';
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";

//TODO: complete ProgramPaceGraphic
const ProgramPaceGraphic = styled.View`
`;

const SliderWrapper = styled.View`
    flex: 1;
    margin: ${space[3]};
`;

const SliderValueWindow = styled.View`
    flex: .5;
    align-items: center;
    justify-content: center;
`;

const SliderValue = styled.Text`
    font-size: 96px;
    color: ${colors.brand.primary};
`;

const SliderRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: -8px;
    margin-right: -8px;
`;

const LeftSection = styled.View`
`;

const RightSection = styled.View`
`;

const SliderSection = styled.View`
    flex: 1;
    margin-left: 4px;
    margin-right: 4px;
`;

const SliderEndText = styled.Text`
    font-size: 16px;
    color: hsl(215, 15%, 52%);
`;

export const IntensitySlider = ({ value, onValueChange, min, max, step, variant, state }) => {
    return(
        <SliderWrapper>
            <SliderValueWindow>
                <SliderValue>{value}</SliderValue>
            </SliderValueWindow>
            {variant === "ProgramPace" && <ProgramPaceGraphic />}
            <SliderRow>
                <LeftSection>
                    <SliderEndText>{typeof min === 'number' && !isNaN(min) ? min : 0}</SliderEndText>
                </LeftSection>
                <SliderSection>
                    <Slider
                        value={value} 
                        onValueChange={value => onValueChange(Number(value), state)} 
                        step={typeof step === 'number' && !isNaN(step) ? step : 1}
                        //should try to make step smaller and add a smoother function that only shows whole numbers above
                        minimumValue={typeof min === 'number' && !isNaN(min) ? min : 0}
                        maximumValue={typeof max === 'number' && !isNaN(max) ? max : 10}
                        minimumTrackTintColor="hsl(216, 19%, 61%)"
                        maximumTrackTintColor="hsl(216, 44%, 86%)"
                        thumbTintColor="hsl(210, 25%, 17%)"
                    />
                </SliderSection>
                <RightSection>
                    <SliderEndText>{typeof max === 'number' && !isNaN(max) ? max : 10}</SliderEndText>
                </RightSection>
            </SliderRow>
        </SliderWrapper>
    );
};
