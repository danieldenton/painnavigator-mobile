import React from "react";
import styled from "styled-components/native";
import Slider from '@react-native-community/slider';
import { colors } from "../infrastructure/theme/colors";
import { space } from "../infrastructure/theme/spacing";
import { setObjectState } from "../utils";

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
    font-family: Poppins_600SemiBold;
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
    font-family: Inter_400Regular;
    font-size: 16px;
    color: hsl(215, 15%, 52%);
`;

export const IntensitySlider = ({ setState, key, value, min, max, step }) => {
    return(
        <SliderWrapper>
            <SliderValueWindow>
                <SliderValue>{value}</SliderValue>
            </SliderValueWindow>
            <SliderRow>
                <LeftSection>
                    <SliderEndText>{typeof min === 'number' && !isNaN(min) ? min : 0}</SliderEndText>
                </LeftSection>
                <SliderSection>
                    <Slider
                        accessibilityLabel={"intensity-slider"}
                        maximumTrackTintColor="hsl(216, 44%, 86%)"
                        maximumValue={typeof max === 'number' && !isNaN(max) ? max : 10}
                        minimumTrackTintColor="hsl(216, 19%, 61%)"
                        minimumValue={typeof min === 'number' && !isNaN(min) ? min : 0}
                        // onValueChange={value => onValueChange(Number(value), state)} 
                        onValueChange={value => setState((object) => ({ ...object, [key]: value }))}
                        step={typeof step === 'number' && !isNaN(step) ? step : 1}
                        thumbTintColor="hsl(210, 25%, 17%)"
                        value={value} 
                    />
                </SliderSection>
                <RightSection>
                    <SliderEndText>{typeof max === 'number' && !isNaN(max) ? max : 10}</SliderEndText>
                </RightSection>
            </SliderRow>
        </SliderWrapper>
    );
};

const PaceSliderWrapper = styled.View`
    margin-right: 12px;
    margin-left: 12px;
`;

export const PaceSlider = ({ value, onValueChange, min, max, step, state }) => {
    return (
        <PaceSliderWrapper>
            <Slider
                accessibilityLabel={"intensity-slider"}
                maximumTrackTintColor="hsl(216, 44%, 86%)"
                maximumValue={typeof max === 'number' && !isNaN(max) ? max : 10}
                minimumTrackTintColor="hsl(216, 19%, 61%)"
                minimumValue={typeof min === 'number' && !isNaN(min) ? min : 0}
                onValueChange={value => onValueChange(Number(value), state)} 
                step={typeof step === 'number' && !isNaN(step) ? step : 1}
                thumbTintColor="hsl(210, 25%, 17%)"
                value={value} 
                />
        </PaceSliderWrapper>
    );
};
