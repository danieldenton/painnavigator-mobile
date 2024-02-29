import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication.context";
import { TextInput } from "react-native-paper";
import { SendIcon } from "../../../icons";
import { Pressable } from "react-native";
import { KeyboardAvoidingView, Platform } from "react-native";
import styled from "styled-components/native";
import { track } from "@amplitude/analytics-react-native";
import { MESSAGE_EVENTS } from "../../../amplitude-events";

const InputWrapper = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === "ios" ? "padding" : "",
})`
  background-color: #f6f8fb;
  border-top-width: 1px;
  border-top-color: #cbd7eb;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  flex: 1;
  margin-left: -16px;
  margin-right: -16px;
`;

const Wrapper = styled.View`
  flex-direction: row;
`;

const InputSection = styled.View`
  flex: 0.83;
`;

const SendButtonSection = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.17;
  margin-top: 20px;
`;

const Input = styled(TextInput).attrs({
  blurOnSubmit: true,
  mode: "outlined",
  activeOutlineColor: "#F6F8FB",
  outlineColor: "#F6F8FB",
  placeholder: "Write a message",
  multiline: true,
  selectionColor: "#16A28B",
})`
  background-color: #f6f8fb;
  margin-left: 12px;
  font-family: Inter_400Regular;
  font-size: 16px;
`;

const ExtraPadding = styled.View`
  margin-bottom: 60px;
`;

export const MessageInput = ({
  body,
  clearUnreadMessages,
  hasUnreadMessages,
  navigation,
  sendMessage,
  writeMessage,
}) => {
  const [useExtraPadding, setUseExtraPadding] = useState(false);
  const { uid } = useContext(AuthenticationContext);

  function markUnread() {
    if (hasUnreadMessages) {
      clearUnreadMessages(uid);
    }
  }

  return (
    <InputWrapper>
      <Wrapper>
        <InputSection>
          <Input
            value={body}
            onChangeText={(change) => writeMessage(change)}
            onFocus={() => setUseExtraPadding(true)}
            onBlur={() => setUseExtraPadding(false)}
          />
        </InputSection>
        <SendButtonSection>
          {body.length > 0 && (
            <Pressable
              onPress={() => {
                navigation.navigate("MessageSent");
                sendMessage();
                markUnread();
                track(MESSAGE_EVENTS.REPLIED_TO_WELLNESS_COACH);
              }}
            >
              <SendIcon />
            </Pressable>
          )}
        </SendButtonSection>
      </Wrapper>
      {useExtraPadding && <ExtraPadding></ExtraPadding>}
    </InputWrapper>
  );
};
