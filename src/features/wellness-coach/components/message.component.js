import React from "react";
import styled from "styled-components/native";
import format from 'date-fns/format';
import { TouchableOpacity, Linking } from "react-native";

const SentMessageWrapper = styled.View`
    background-color: #CDEBE6;
    border-bottom-right-radius: 0px;
    border-radius: 16px;
    padding: 20px;
    overflow: hidden;
`;

const RecievedMessageWrapper = styled.View`
    background-color: #E0E7F3;
    border-bottom-left-radius: 0px;
    border-radius: 16px;
    padding: 20px;
`;

const MessageText = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
`;
const LinkText = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    color: blue;
`;


const TimeStampWrapper = styled.View`
    align-items: center;
    margin-bottom: 16px;
    margin-top: 16px;
`;

const TimeStamp = styled.Text`
    color: #606C81;
    font-family: Inter_400Regular;
    font-size: 12px;
`;

export const SentMessage = ({ body, timeStamp }) => {
    return (
        <>
            <TimeStampWrapper>
                <TimeStamp>
                    {format(new Date(timeStamp), 'E h:mm a')}
                </TimeStamp>
            </TimeStampWrapper>
            <SentMessageWrapper>
                <MessageText>
                    {body}
                </MessageText>
            </SentMessageWrapper>
        </>
    );
};

export const RecievedMessage = ({ body, timeStamp }) => {
    return (
        <>
            <TimeStampWrapper>
                <TimeStamp>
                    {format(new Date(timeStamp), 'E h:mm a')}
                </TimeStamp>
            </TimeStampWrapper>
            <RecievedMessageWrapper>
                <MessageText>
                    {body}
                </MessageText>
            </RecievedMessageWrapper>
        </>
    );
};

export const LinkMessage = ({ body, timeStamp }) => {
    return (
        <>
            <TimeStampWrapper>
                <TimeStamp>
                    {format(new Date(timeStamp), 'E h:mm a')}
                </TimeStamp>
            </TimeStampWrapper>
            <RecievedMessageWrapper>
            <TouchableOpacity
                onPress={() => Linking.openURL(body)}>
                <LinkText>{body}</LinkText>
            </TouchableOpacity>
            </RecievedMessageWrapper>
        </>
    );
};