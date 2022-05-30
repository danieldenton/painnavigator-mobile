import React from "react";
import styled from "styled-components/native";

export const InputWrapper = styled.View`
  margin-top: 24px;
`;

const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
 
const ErrorText = styled.Text`
  color: #C12B21;
  font-family: Inter_300Light;
  font-size: 14px;
`;

export const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorText>
        {error}
      </ErrorText>
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

const OptionImageWrapper = styled.View`
`;

export const SignUpOptions = () => {
  return (
    <SignUpOptionsWrapper>
      <SignUpText>
        or
      </SignUpText>
      <OptionImageWrapper>
      </OptionImageWrapper>
    </SignUpOptionsWrapper>
  );
};

export const OnboardGraphicWrapper = styled.View`
  align-items: center;
`;