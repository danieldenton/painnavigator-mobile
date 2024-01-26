import React from "react";
import styled from "styled-components/native";

const BulletWrapper = styled.View`
    flex-direction: row; 
    align-items: flex-start;
    margin-right: 8px;
    margin-top: 16px;
`;

const BulletDot = styled.View`
    border-radius: 100px;
    background-color: #16A28B;
    height: 6px;
    width: 6px;
    margin-right: 9px;
`;

const BulletTextSection = styled.View`
    margin-top: -11px;
`;

const BulletText = styled.Text`
    font-size: 16px;
    font-family: Inter_400Regular;
    line-height: 28px;
`;

export const BulletList = ({ bullets }) => {

    const bulletElements = bullets.map((bullet, index) => {
        return (
            <BulletWrapper key={index}>     
                <BulletDot />
                <BulletTextSection>
                    <BulletText>
                        {bullet}
                    </BulletText>
                </BulletTextSection>
            </BulletWrapper>
        );
    });

    return (
        <>
            {bulletElements}
        </>
    );
};