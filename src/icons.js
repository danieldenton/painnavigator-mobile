import React from "react";
import Svg, { Circle, Path, Mask, Rect } from 'react-native-svg';

export const Add = () => {
    return (
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="22" cy="22" r="20.75" stroke="#16A28B" strokeWidth="2.5"/>
            <Path d="M22 11V22V33" stroke="#16A28B" strokeWidth="2.5" strokeLinecap="round"/>
            <Path d="M33 22L22 22L11 22" stroke="#16A28B" strokeWidth="2.5" strokeLinecap="round"/>
        </Svg>
    );  
};

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

export const Next = () => {
    return (
        <Svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 14L8 7.68571L4.5 4.34286L1 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export const FoodJournalIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#45D2BC"/>
            <Path d="M19 45.2345L19.6078 27H22.0391L22.6469 45.2345H19Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M17 11V20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M21 11V20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M25 11V20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M18.4157 26.6569C16.675 25.8067 17.0297 21.8538 17.0297 20H25C25 23.893 24.8487 26.0309 23.5672 26.6569C22.6305 27.1144 19.3523 27.1144 18.4157 26.6569Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M33.8149 45.254L34.4228 27.0195H36.854L37.4618 45.254H33.8149Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M40.3386 19.1172C40.3386 21.5223 39.7522 23.6634 38.8433 25.1782C37.9255 26.708 36.7619 27.4845 35.6183 27.4845C34.4746 27.4845 33.3111 26.708 32.3933 25.1782C31.4844 23.6634 30.8979 21.5223 30.8979 19.1172C30.8979 16.7121 31.4844 14.5711 32.3933 13.0562C33.3111 11.5265 34.4746 10.75 35.6183 10.75C36.7619 10.75 37.9255 11.5265 38.8433 13.0562C39.7522 14.5711 40.3386 16.7121 40.3386 19.1172Z" fill="white" stroke="black" strokeWidth="1.5"/>
        </Svg>
    );
};

export const MoodJournalIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#FFD60A"/>
            <Path d="M33.1743 9.50586L33.4659 12.0024" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M35.7993 31.9766L36.0909 34.4731" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M47.4827 20.0664L44.9867 20.358" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M25.0139 22.6914L22.5179 22.983" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M42.6973 12.0762L41.1171 14.0743" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M28.7917 29.6582L27.2116 31.6564" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M25.1636 14.123L27.1617 15.7032" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M42.7473 28.0293L44.7455 29.6095" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M25.1636 14.123L27.1617 15.7032" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M42.7473 28.0293L44.7455 29.6095" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Circle cx="35.0486" cy="21.9412" r="7.2094" transform="rotate(-6.66266 35.0486 21.9412)" fill="#FFD60A" stroke="black" strokeWidth="1.5"/>
            <Path d="M12.4263 37.9682C6.56146 36.0831 8.86549 27.9142 14.5208 29.171C15.3587 23.7249 18.71 20.5659 23.3181 20.3738C28.3451 20.1642 31.4171 23.8647 32.3248 26.2386C38.6085 24.3533 44.2639 33.9884 35.6761 37.9682H12.4263Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M18.9194 40.6914V43.8333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M30.4397 41.3184L30.4397 45.5075" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M24.5747 42.5762V47.6032" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export const PainJournalIcon = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#6A7AEF"/>
            <Path d="M17.1301 30.6375L34.8678 8.48394C34.9388 8.3953 35.0792 8.47477 35.0397 8.58123L29.2202 24.2652C29.196 24.3305 29.2443 24.4 29.314 24.4H38.7898C38.874 24.4 38.9205 24.4977 38.8674 24.5631L20.2329 47.4781C20.1604 47.5673 20.0193 47.4837 20.0627 47.3772L26.7735 30.9378C26.8004 30.872 26.752 30.8 26.681 30.8H17.2082C17.1243 30.8 17.0777 30.703 17.1301 30.6375Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        </Svg>
    );
};

export const ProgressDotFilled = () => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" fill="#27374E"/>
        </Svg>
    );
};

export const ProgressDotUnfilled = () => {
    return (
        <Svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="4" cy="4" r="4" fill="#CBD7EB"/>
        </Svg>
    );
};

export const Selected = () => {
    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="18" cy="18" r="17" fill="#16A28B" stroke="#16A28B" strokeWidth="2"/>
            <Path d="M11 17.5L15.5 22L24.5 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};