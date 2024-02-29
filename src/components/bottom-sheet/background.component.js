import React from "react";
import { View } from "react-native";

export const BottomSheetBackground = ({ style }) => {
    return (
        <View
            style={[
                {
                    backgroundColor: 'white',
                    borderRadius: 15,
                },
                {...style}
            ]}
        />
    );
};
