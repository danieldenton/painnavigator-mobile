import styled from "styled-components/native";

export const AccountContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[2]};
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