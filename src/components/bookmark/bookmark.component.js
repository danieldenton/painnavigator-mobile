import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const Bookmark = () => {
    return (
        <TouchableOpacity>
            <Ionicons 
                name="ios-bookmark-outline" 
                size={24} 
                color="black" 
            />
        </TouchableOpacity>
    )
}