import React from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export const BottomModal = ({ ref }) => {
    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={['30%']}
        >
            <View>
                <Text>Awesome 🎉</Text>
            </View>
        </BottomSheetModal>
    );
};