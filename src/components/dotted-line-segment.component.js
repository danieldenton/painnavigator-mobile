import React from "react";
import styled from "styled-components/native";

export const DottedLineSegement = styled.View`
    height: 6px;
    border-radius: 100px;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 8px;
    border: #CBD7EB;
    width: 0px;
`;

export const DottedLine = ({ length }) => {
    [...Array(10)].map((element, index) => {
        return (
            <DottedLineSegement key={index} />
        );
    });
}
