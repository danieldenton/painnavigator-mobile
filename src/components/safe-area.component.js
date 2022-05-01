import { StatusBar, SafeAreaView } from 'react-native';
import styled from "styled-components/native";
import { colors } from "../infrastructure/theme/colors";
import { space } from '../infrastructure/theme/spacing';
  
export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
    background-color: ${colors.bg.primary};
`;

export const ScreenContainer = styled.View`
    flex: 1;
    background-color: ${colors.bg.primary};
    margin-left: ${space[3]};
    margin-right: ${space[3]};
`

export const SafeView = ({ children }) => {
    return (
        <SafeArea>
            <ScreenContainer>
                {children}
            </ScreenContainer>
        </SafeArea>
    );
};