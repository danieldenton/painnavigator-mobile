import React from "react";
import styled from "styled-components/native";
import { ModuleTypeTitle, UnitTitle } from "../../education/components/education-unit.styles";

const ModuleInfoWrapper = styled.View`
`;

const HeaderRow = styled.View`
    flex-direction: row;
    align-items: stretch;
    margin-top: ${(props) => props.theme.space[3]};
`;

const SubheaderRow = styled.View`
    margin-top: 8px;
`;

export const ModuleInfo = ({ moduleName }) => {
    return (
        <ModuleInfoWrapper>
            <HeaderRow>
                <ModuleTypeTitle>FOUNDATIONS 1</ModuleTypeTitle>
            </HeaderRow>
            <SubheaderRow>
                <UnitTitle>{moduleName}</UnitTitle>
            </SubheaderRow>
        </ModuleInfoWrapper>
    );
};