import React from "react";
import Svg, { Circle, Path, Mask, Rect } from 'react-native-svg';

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
            <Path d="M15 1L1 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M15 15L1 0.999999" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    ); 
}; 

export const EducationModuleIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#45D2BC"/>
            <Mask id="path-2-inside-1_983_4676" fill="white">
                <Rect x="11" y="18.0605" width="34" height="22.44" rx="1"/>
            </Mask>
            <Rect x="11" y="18.0605" width="34" height="22.44" rx="1" fill="white" stroke="black" strokeWidth="3" strokeLinejoin="round" mask="url(#path-2-inside-1_983_4676)"/>
            <Path d="M28 18.6826C24.8345 14.608 18.181 14.7212 15.25 15.2871V35.2356C21.2293 33.8774 26.2414 37.6407 28 39.48V18.6826Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M28 18.4915C31.1655 14.3795 37.819 14.7835 40.75 15.3546V35.4863C34.7707 34.1157 29.7586 37.6239 28 39.48V18.4915Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

export const MovementModuleIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#6A7AEF"/>
            <Rect x="7" y="25" width="42" height="6" rx="3" fill="white" stroke="black" strokeWidth="1.5"/>
            <Rect x="14.875" y="18.75" width="18.375" height="4.375" rx="2.1875" transform="rotate(90 14.875 18.75)" fill="white" stroke="black" strokeWidth="1.5"/>
            <Rect x="45.5" y="18.75" width="18.375" height="4.375" rx="2.1875" transform="rotate(90 45.5 18.75)" fill="white" stroke="black" strokeWidth="1.5"/>
            <Rect x="41.125" y="17" width="21.875" height="4.375" rx="2.1875" transform="rotate(90 41.125 17)" fill="white" stroke="black" strokeWidth="1.5"/>
            <Rect x="19.25" y="17" width="21.875" height="4.375" rx="2.1875" transform="rotate(90 19.25 17)" fill="white" stroke="black" strokeWidth="1.5"/>
        </Svg>
    );
};

export const JournalEntryIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#45D2BC"/>
            <Path d="M36.8442 13.4816L16.0566 31.7311L13.0001 41.1302L22.5768 39.3412L43.3641 21.0919C44.1662 16.4623 40.8682 13.2418 36.8442 13.4816Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M15 37L17.6593 40.0429" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16.6404 31.3789L23.1715 38.8183" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M34.7075 15.5176L41.2386 22.957" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M21.1421 31.501L34.4268 19.8383" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M23.4746 34.1573L36.7594 22.4946" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};