import styled from "styled-components/native";
import { ScrollView, Text, StyleSheet, View } from "react-native";

export const Header = styled.View`
    flex-direction: row;
    margin: ${(props) => props.theme.space[3]};
`;

export const TitleSection = styled.View`
    flex: 1;
`;

export const BookmarkSection = styled.View`
    align-self: flex-end;
`;

export const ModuleTypeTitle = styled.Text`
`;

export const EducationUnitTitle = styled.Text`
`;

export const SummarySection = styled.View`
    margin: ${(props) => props.theme.space[3]};
`;

export const SummaryHeader = styled.Text`
`;

export const SummaryBody = styled.Text`
    margin-left: ${(props) => props.theme.space[3]};
    margin-right: ${(props) => props.theme.space[3]};
`;
