import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
    position: absolute;
    bottom: 42px;
    right: 0px;
    left: 0px;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Body = styled.Text`
    font-family: Inter_500Medium;
    font-size: 14px;
    line-height: 20px;
`;

const LinkWrapper = styled.Pressable`
`;

const Link = styled.Text`
    color: #4056F4;
    font-family: Inter_700Bold;
    font-size: 14px;
    line-height: 20px;
`;

export const TermsAndConditions = ({ navigation }) => {
    return (
        <Wrapper>
            <Body>
                By continuing, you are agreeing to Pain Navigator’s 
            </Body>
            <LinkWrapper style={{ marginRight: 4 }}
                onPress={() => navigation.navigate("Terms")}
            >
                <Link
                    accessibilityLabel={"terms-and-conditions-link"}
                >
                    Terms and Conditions
                </Link>
            </LinkWrapper>
            <Body>
                and
            </Body>
            <LinkWrapper style={{ marginLeft: 4 }}
                onPress={() => navigation.navigate("Privacy")}
            >
                <Link
                    accessibilityLabel={"privacy-policy-link"}
                >
                    Privacy Policy
                </Link>
            </LinkWrapper>
        </Wrapper>
    );
};