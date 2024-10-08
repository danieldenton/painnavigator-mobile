import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { isAndroid } from "../../../utils";

export const InputWrapper = styled.View`
  margin-top: 24px;
`;

export const ForgotPasswordWrapper = styled.Pressable`
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  height: 40px;
  width: 160px;
`

export const ForgotPassword = styled.Text`
  font-family: Inter_500Medium;
  color: #4056F4;
  font-size: 16px;
  text-align: center;
`

const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const ErrorText = styled.Text`
  color: #c12b21;
  font-family: Inter_300Light;
  font-size: 14px;
  text-align: center;
`;

export const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorText>{error}</ErrorText>
    </ErrorContainer>
  );
};

const SignUpOptionsWrapper = styled.View`
  align-items: center;
`;

const SignUpText = styled.Text`
  font-family: Inter_300Light;
  font-size: 14px;
  margin-top: 16px;
`;

const OptionImageWrapper = styled.View``;

export const SignUpOptions = () => {
  return (
    <SignUpOptionsWrapper>
      <SignUpText>or</SignUpText>
      <OptionImageWrapper></OptionImageWrapper>
    </SignUpOptionsWrapper>
  );
};

export const OnboardGraphicWrapper = styled.View`
  align-items: center;
`;

export const styles = StyleSheet.create({
  rerferralHeaderWrapper: {
    alignItems: "center",
    marginTop: 8,
  },
  referralHeader: {
    fontFamily: "Inter_500Medium",
    fontSize: 20,
  },
  referralMessageWrapper: {
    alignItems: "center",
    marginLeft: 4,
    marginRight: 4,
  },
  referralMessage: {
    textAlign: "center",
    flexWrap: 'wrap',
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    lineHeight: 26,
  },
  explanationMessageWrapper: {
    alignItems: "center",
    marginTop: 80,
    marginLeft: 8,
    marginRight: 8,
  },
  almostThereMessageWrapper: {
    alignItems: "center",
    marginTop: isAndroid ? 40 : 60,
    marginLeft: 4,
    marginRight: 4,
  },
  graphicWrapper: {
    alignItems: "center",
    marginTop: isAndroid ? 35 : 80,
  },
  linkText: {
    fontFamily: "Inter_400Regular",
    fontSize: isAndroid ? 16 : 18,
    color: "blue",
    lineHeight: 26,
  },
  codeGraphicWrapper: {
    alignItems: "center",
    marginTop: 45,
  },
});