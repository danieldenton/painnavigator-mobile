import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { space } from "../../infrastructure/theme/spacing";
import { Back, Close, MenuIcon, MessageIcon, More } from "../../icons";

const NavContainer = styled.View`
    padding-top: 12px;
    padding-bottom: ${space[3]};
    flex-direction: row;
    align-items: center;
`;

const LeftSection = styled(TouchableOpacity)`
    flex: .25;
    align-items: flex-start;
`;

const HeaderSection = styled.View`
    flex: .5;
    align-items: center;
`;

const HeaderName = styled.Text`
    font-family: Inter_500Medium
    font-size: 14px;
`;

const RightSection = styled.View`
    flex: .25;
    align-items: flex-end;
`;

const RightPressableArea = styled.TouchableOpacity`
    border-radius: 100px;
    margin-right: -16px;
    padding: 16px;
`;