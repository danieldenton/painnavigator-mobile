import React from "react";
import { CardWrapper, CardContentWrapper, TextSection, CardText, IconSection } from "./card.styles";
import { Selected as GreenCheck } from "../../icons";

export const CompletedItemCard = ({ text }) => {
    return (
        <CardWrapper>
            <CardContentWrapper>
                <TextSection>
                    <CardText>{text}</CardText>
                </TextSection>
                <IconSection>
                    <GreenCheck />
                </IconSection>
            </CardContentWrapper>
        </CardWrapper>
    );
};