import React, { useContext, useEffect, useRef } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SentMessage, RecievedMessage } from "../components/message.component";
import { Scroll } from "../../../components/scroll.component";
import { WellnessCoachContext } from "../../../services/wellness-coach/wellness-coach.context";
import { MessageInput } from "../components/message_input.component";
import { View } from "react-native";

export const ConversationScreen = ({ navigation }) => {
    const { clearUnreadMessages, hasUnreadMessages, message, messages, sendMessage, writeMessage } = useContext(WellnessCoachContext);

    const messageElements = messages?.map(message => message.sender_id === 1 ? 
        <RecievedMessage body={message.body} timeStamp={message.date_time_value} key={message.id} />
        :
        <SentMessage body={message.body} timeStamp={message.date_time_value} key={message.id} />
    );

    const scrollViewRef = useRef();

    return (

        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Today"} screen={"Wellness Coach"} />
            <Scroll 
                style={{ paddingLeft: 16, paddingRight: 16 }}
                ref={scrollViewRef}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: false })}
            >
                <View style={{ paddingBottom: 160 }}>
                    {messageElements}
                </View>
            </Scroll>
            <MessageInput 
                body={message.body}
                navigation={navigation}
                sendMessage={sendMessage}
                writeMessage={writeMessage}
                hasUnreadMessages={hasUnreadMessages}
                clearUnreadMessages={clearUnreadMessages}
            />
        </SafeView>
    );
};