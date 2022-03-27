import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const AccountContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    margin-top: ${(props) => props.theme.space[2]};
` 

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;