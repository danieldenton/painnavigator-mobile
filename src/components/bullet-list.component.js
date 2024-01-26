import React from "react";
import styled from "styled-components/native";

const BulletWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-right: 8px;
  margin-top: 16px;
`;

const SubBulletWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-right: 8px;
  margin-left: 30px;
  margin-top: 16px;
`;

const BulletDot = styled.View`
  border-radius: 100px;
  background-color: #16a28b;
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

const BoldBulletText = styled.Text`
  font-size: 16px;
  font-family: Inter_700Bold;
  line-height: 28px;
`;

export const BulletList = ({ bullets }) => {
  const bulletElements = bullets.map((bullet, index) => {
    return (
      <BulletWrapper key={index}>
        <BulletDot />
        <BulletTextSection>
          <BulletText>{bullet}</BulletText>
        </BulletTextSection>
      </BulletWrapper>
    );
  });

  return <>{bulletElements}</>;
};

export const SubStepBullets = ({ subBullets }) => {
  const bulletElements = subBullets.map((bullet, index) => {
    return (
      <SubBulletWrapper key={index}>
        <BulletDot />
        <BulletTextSection>
          <BulletText>{bullet}</BulletText>
        </BulletTextSection>
      </SubBulletWrapper>
    );
  });

  return <>{bulletElements}</>;
};

export const BoldIntroBulletList = ({ bullets }) => {
  const bulletElements = bullets.map((bullet, index) => {
    const colonIndex = bullet.startsWith("SMART")
      ? bullet.indexOf(".") - 1
      : bullet.indexOf(":") - 1;
    const boldText = bullet.slice(0, colonIndex + 1);
    const text = bullet.slice(colonIndex + 1);

    return (
      <BulletWrapper key={index}>
        <BulletDot />
        <BulletTextSection>
          <BulletText>
            <BoldBulletText>{boldText}</BoldBulletText>
            {text}
          </BulletText>
        </BulletTextSection>
      </BulletWrapper>
    );
  });

  return <>{bulletElements}</>;
};
