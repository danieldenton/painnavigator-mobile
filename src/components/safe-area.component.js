import { StatusBar, SafeAreaView } from 'react-native';
import styled from "styled-components/native";
  
export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
    background-color: hsl(216, 38%, 97%);
`;