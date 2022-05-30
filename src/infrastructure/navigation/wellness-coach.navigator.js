import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ConversationScreen } from "../../features/wellness-coach/screens/conversation.screen";
//import { ConversationsScreen } from "../../features/wellness-coach/screens/conversations.screen";
import { MessageSentScreen } from "../../features/wellness-coach/screens/message-sent.screen";

const WellnessCoachStack = createStackNavigator();

export const WellnessCoachNavigator = () => {
    return (
        <WellnessCoachStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <WellnessCoachStack.Screen name="Conversation" component={ConversationScreen} />
            <WellnessCoachStack.Screen name="MessageSent" component={MessageSentScreen} />
        </WellnessCoachStack.Navigator>
    );
};