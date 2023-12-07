import React from "react";
import { ButtonSection } from "../journals/journal.styles";
import { LinkWrapper } from "../../features/account/components/terms-and-conditions.component";
import styled from "styled-components/native";

const LinkText = styled.Text`
    font-family: Inter_300Light;
    font-size: 14px;
    color: #4056F4;
`;

export const CompanyLinks = ({ navigation }) => {
    return (
        <ButtonSection
            style={{ paddingLeft: 16 }}
        >
            <LinkWrapper
                onPress={() => navigation.navigate("Privacy")}
            >
                <LinkText>
                    Privacy Policy
                </LinkText>
            </LinkWrapper>
            <LinkWrapper
                onPress={() => navigation.navigate("Terms")}
                style={{ marginTop: 12 }}
            >
                <LinkText>
                    Terms of Use
                </LinkText>
            </LinkWrapper>
            <LinkWrapper
                style={{ marginTop: 12 }}
            >
                <LinkText
                    style={{ color: "black" }}
                >
                    PainNavigator Version 1.5.27
                </LinkText>
            </LinkWrapper>
        </ButtonSection>
    );
};