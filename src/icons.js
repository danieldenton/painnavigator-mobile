import React from "react";
import Svg, { Circle, Mask, Path, Rect } from 'react-native-svg';

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

export const BookmarkIcon = () => {
    return (
        <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 18.9724V1.01C15 1.00448 14.9955 1 14.99 1H1.01C1.00448 1 1 1.00448 1 1.01V18.9724C1 18.9817 1.01169 18.986 1.01768 18.9788L7.99232 10.6092C7.99632 10.6044 8.00368 10.6044 8.00768 10.6092L14.9823 18.9788C14.9883 18.986 15 18.9817 15 18.9724Z" stroke="black" strokeWidth="2"/>
        </Svg>
    );
};

export const BookmarkedIcon = () => {
    return (
        <Svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 18.9724V1.01C15 1.00448 14.9955 1 14.99 1H1.01C1.00448 1 1 1.00448 1 1.01V18.9724C1 18.9817 1.01169 18.986 1.01768 18.9788L7.99232 10.6092C7.99632 10.6044 8.00368 10.6044 8.00768 10.6092L14.9823 18.9788C14.9883 18.986 15 18.9817 15 18.9724Z" fill="black" stroke="black" strokeWidth="2"/>
        </Svg>        
    )
};
 
export const Close = () => {
    return (
        <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 1L1 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M15 15L1 0.999999" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    ); 
}; 

export const CompletedUnit = () => {
    return (
        <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="24" cy="24" r="24" fill="#6A7AEF"/>
            <Circle cx="24" cy="24" r="12" fill="white" stroke="black" strokeWidth="2"/>
            <Path d="M18 24L22 28L30 20" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};


export const Delete = () => {
    return (
        <Svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.17212 4.58611L8.78339 1H16.1186L17.1374 4.58611" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1 4.58594H24.3097" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M3.6897 7.27539L5.43902 26.999H19.8709L21.6202 7.27539" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M8.17212 9.06836L9.06865 23.4128" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M16.241 23.4121L17.1375 9.06767" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M12.655 9.06836V23.4128" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
        </Svg>
    );
};

export const Edit = () => {
    return (
        <Svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 25.5664H27" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            <Path d="M19.4594 1.14146L3.44378 15.2016L1.08892 22.4431L8.46723 21.0648L24.4826 7.00478C25.1006 3.43792 22.5596 0.95674 19.4594 1.14146Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M3.89355 14.9316L8.92538 20.6633" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M17.8132 2.71094L22.8451 8.44256" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

export const HappyFace = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="16" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="11.3333" cy="12.666" r="2" fill="black"/>
            <Circle cx="20.6667" cy="12.666" r="2" fill="black"/>
            <Path d="M9.33325 20C14.1817 23.6771 18.3029 23.4319 22.6666 20" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const HappyFaceSelected = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#45D2BC"/>
            <Circle cx="28" cy="28" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="23.3333" cy="24.666" r="2" fill="black"/>
            <Circle cx="32.6667" cy="24.666" r="2" fill="black"/>
            <Path d="M21.3333 32C26.1817 35.6771 30.3029 35.4319 34.6666 32" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const MenuIcon = () => {
    return (
        <Svg width="31" height="19" viewBox="0 0 31 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 1H27.68" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M1 9.18555H30" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M1 18H18.4" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const MessageIcon = () => {
    return (
        <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 15.4889V5C1 2.79086 2.79086 1 5 1H23C25.2091 1 27 2.79086 27 5V15.4889C27 17.698 25.2091 19.4889 23 19.4889H13.3139C13.031 19.4889 12.7614 19.6087 12.5718 19.8187L6.95805 26.0353C6.65121 26.3751 6.08696 26.1581 6.08696 25.7002V19.9889C6.08696 19.7127 5.8631 19.4889 5.58696 19.4889H5C2.79086 19.4889 1 17.698 1 15.4889Z" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="8.25" cy="10.25" r="1.25" fill="black"/>
            <Circle cx="14.25" cy="10.25" r="1.25" fill="black"/>
            <Circle cx="20.25" cy="10.25" r="1.25" fill="black"/>
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

export const Locked = () => {
    return (
        <Svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.5926 9.14811C17.5926 11.4728 16.8666 13.541 15.7388 15.0071C14.6119 16.4721 13.1243 17.2962 11.5556 17.2962C9.98686 17.2962 8.49923 16.4721 7.37227 15.0071C6.24448 13.541 5.51855 11.4728 5.51855 9.14811C5.51855 6.82338 6.24448 4.75525 7.37227 3.28913C8.49923 1.82409 9.98686 1 11.5556 1C13.1243 1 14.6119 1.82409 15.7388 3.28913C16.8666 4.75525 17.5926 6.82338 17.5926 9.14811Z" stroke="#606C81" strokeWidth="2"/>
            <Rect x="1" y="9" width="20.6667" height="15.3333" rx="1" fill="#EDF1F5" stroke="#606C81" strokeWidth="2"/>
            <Path d="M11.4287 15.1426L11.4287 17.9997" stroke="#606C81" strokeWidth="2" strokeLinecap="round"/>
            <Circle cx="11.4286" cy="14.4286" r="1.42857" fill="#606C81"/>
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

export const NeutralFace = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="16" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="11.3333" cy="12.666" r="2" fill="black"/>
            <Circle cx="20.6667" cy="12.666" r="2" fill="black"/>
            <Path d="M9 21H23" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const NeutralFaceSelected = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#FFD60A"/>
            <Circle cx="28" cy="28" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="23.3333" cy="24.666" r="2" fill="black"/>
            <Circle cx="32.6667" cy="24.666" r="2" fill="black"/>
            <Path d="M21 33H35" stroke="black" strokeWidth="2" strokeLinecap="round"/>
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

export const JournalMenuIcon = () => {
    return (
        <Svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M10.5 3.45507C8.17241 0.738656 3.28017 0.814112 1.125 1.19139V14.4904C5.52155 13.585 9.2069 16.0939 10.5 17.32V3.45507Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M10.5 3.32769C12.8276 0.58633 17.7198 0.855651 19.875 1.2364V14.6576C15.4784 13.7438 11.7931 16.0826 10.5 17.32V3.32769Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

export const Pause = () => {
    return (
        <Svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 1V13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M7.85718 1V13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
}

export const Play = () => {
    return (
        <Svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 1L11 7.68571L1 14L1 1Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

export const ProgressMenuIcon = () => {
    return (
        <Svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0.999945 2.00089L13.1333 7.2809L0.999946 12.2676L0.999945 2.00089Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M1 1L1 22.7778" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Circle cx="1" cy="1" r="1" fill="black"/>
        </Svg>
    );
};

export const PurpleCheckMark = () => {
    return (
        <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="18" cy="18" r="17" fill="#4056F4" stroke="#4056F4" strokeWidth="2"/>
            <Path d="M11 17.5L15.5 22L24.5 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    )
} 

export const RightArrow = () => {
    return (
        <Svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 14L19 7.68571L15.5 4.34286L12 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M18.5 7.5H1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const SadFace = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="16" cy="16" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="11.3333" cy="12.666" r="2" fill="black"/>
            <Circle cx="20.6667" cy="12.666" r="2" fill="black"/>
            <Path d="M22.6665 22.666C17.818 18.9889 13.6968 19.2341 9.33317 22.666" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const SadFaceSelected = () => {
    return (
        <Svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="28" cy="28" r="28" fill="#6A7AEF"/>
            <Circle cx="28" cy="28" r="15" fill="white" stroke="black" strokeWidth="2"/>
            <Circle cx="23.3333" cy="24.666" r="2" fill="black"/>
            <Circle cx="32.6667" cy="24.666" r="2" fill="black"/>
            <Path d="M34.6665 34.666C29.818 30.9889 25.6968 31.2341 21.3332 34.666" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </Svg>
    );
};

export const SavedUnit = () => {
    return (
        <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="24" cy="24" r="24" fill="#45D2BC"/>
            <Path d="M31 32.9724V15.01C31 15.0045 30.9955 15 30.99 15H17.01C17.0045 15 17 15.0045 17 15.01V32.9724C17 32.9817 17.0117 32.986 17.0177 32.9788L23.9923 24.6092C23.9963 24.6044 24.0037 24.6044 24.0077 24.6092L30.9823 32.9788C30.9883 32.986 31 32.9817 31 32.9724Z" fill="white" stroke="black" strokeWidth="2"/>
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

export const Settings = () => {
    return (
        <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.93 4.15L5.41 2.68L2.68 5.41L3.94 7.3L3.52 8.56L1 9.4V13.18L3.52 13.81L3.94 15.07L2.47 17.59L5.2 20.32L7.51 18.85L8.77 19.48L9.4 22H13.18L13.6 19.48L15.28 18.85L17.38 20.32L20.11 17.59L18.85 15.49L19.27 14.23L22 13.6V9.82L19.27 9.19L18.85 7.93L20.32 5.41L17.8 2.68L15.28 4.15L14.23 3.73L13.39 1H9.82L9.19 3.31L7.93 4.15Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Circle cx="11.5001" cy="11.4993" r="3.3587" stroke="black" strokeWidth="1.5"/>
        </Svg>
    );
};

export const SkippedUnit = () => {
    return (
        <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="24" cy="24" r="24" fill="#FFD60A"/>
            <Path d="M31 15V32" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            <Path d="M30 23.7297L17 15V32L30 23.7297Z" fill="white" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};

export const Units = () => {
    return (
        <Svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="11.5" cy="11.5" r="10.75" stroke="black" strokeWidth="1.5"/>
            <Path d="M9.94505 6.31239L16.633 11.0417C17.0625 11.3455 17.054 11.9856 16.6165 12.2778L9.92856 16.7444C9.43019 17.0772 8.76202 16.72 8.76202 16.1207L8.76202 11.4996L8.76202 6.92475C8.76202 6.31635 9.4483 5.96111 9.94505 6.31239Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>
    );
};