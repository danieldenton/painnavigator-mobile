import styled from "styled-components/native";

export const UnitInfoWrapper = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const TitleSection = styled.View`
  flex: 1;
`;

export const BookmarkSection = styled.View`
  align-self: flex-start;
  margin-top: 8px;
`;

export const ModuleTypeTitle = styled.Text`
  font-size: 12px;
  font-family: Inter_500Medium;
  margin-top: 16px;
`;

export const UnitTitle = styled.Text`
  font-size: 25px;
  font-family: Poppins_600SemiBold;
  text-align: center;
`;

export const UnitSubtitle = styled.Text`
  font-size: 12px;
  font-family: Inter_500Medium;
  margin-top: 8px;
`;

export const SummarySection = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const Summary = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-family: Inter_400Regular;
  line-height: 28px;
`;

export const ButtonSection = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
  margin-right: ${(props) => props.theme.space[3]};
`;

const NextUpWrapper = styled.View`
  border-top-width: 0.5px;
  border-top-color: #8999af;
  margin-left: -16px;
  margin-right: -16px;
  margin-top: 16px;
`;

const NextUpText = styled.Text`
  font-size: 14px;
  font-family: Inter_500Medium;
  margin-left: 16px;
  margin-top: 16px;
`;

export const NextUp = () => {
  return (
    <NextUpWrapper>
      <NextUpText>NEXT UP</NextUpText>
    </NextUpWrapper>
  );
};
