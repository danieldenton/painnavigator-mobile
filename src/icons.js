import React from "react";
import Svg, { Circle, Path } from 'react-native-svg';

export const Back = () => {
    return (
        <Svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.5 1L1 9.5L10.5 18.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

export const More = () => {
    return (
        <Svg width="19" height="3" viewBox="0 0 19 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="1.5" cy="1.5" r="1.5" fill="black"/>
            <Circle cx="9.5" cy="1.5" r="1.5" fill="black"/>
            <Circle cx="17.5" cy="1.5" r="1.5" fill="black"/>
        </Svg>
    );
};
 
export const Close = () => {
    return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 1L1 15" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <Path d="M15 15L1 0.999999" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </Svg>
    ); 
}; 
