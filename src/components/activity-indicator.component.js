import React from "react";
import { ActivityIndicator as Activity} from 'react-native-paper';

export const ActivityIndicator = () => {
    return (
        <Activity 
            animating={true} 
            color={"#16A28B"} 
            size={"small"} 
            style={{ marginTop: 12 }}
        />
    );
}; 