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
    // length prop to be used in future to dynamically set dotted line length

    [...Array(10)].map((_, index) => {
        return (
            <DottedLineSegement key={index} />
        );
    });
}
