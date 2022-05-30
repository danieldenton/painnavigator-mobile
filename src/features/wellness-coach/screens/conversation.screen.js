import React, { useContext, useEffect } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SentMessage, RecievedMessage } from "../components/message.component";
import { Scroll } from "../../../components/scroll.component";
import { WellnessCoachContext } from "../../../services/wellness-coach/wellness-coach.context";
import { MessageInput } from "../components/message_input.component";
import { ConversationWrapper, ConversationSection, InputSection } from "../components/styles"; 
import format from 'date-fns/format';

export const ConversationScreen = ({ navigation }) => {
    const { clearUnreadMessages, message, messages, sendMessage, writeMessage } = useContext(WellnessCoachContext);

    const messageElements = messages?.map(message => message.sender_id === 1 ? 
        <RecievedMessage body={message.body} timeStamp={message.time_stamp} key={message.id} />
        :
        <SentMessage body={message.body} timeStamp={message.time_stamp} key={message.id} />
    );

    useEffect(() => {
        clearUnreadMessages();
    }, []);

    return (
        <SafeView>
            <NavigationBarLeft navigation={navigation} destination={"Today"} screen={"Wellness Coach"} />
            <Scroll style={{ paddingLeft: 16, paddingRight: 16 }}>
                {messageElements}
            </Scroll>
            <MessageInput 
                body={message.body}
                navigation={navigation}
                sendMessage={sendMessage}
                writeMessage={writeMessage}
            />
        </SafeView>
    );
};