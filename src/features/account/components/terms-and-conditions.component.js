import React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
    position: absolute;
    bottom: 42px;
    right: 0px;
    left: 0px;
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

export const TermsAndConditions = () => {
    return (
        <Wrapper>
            <Body>
                By continuing, you are agreeing to Pain Navigator’s 
            </Body>
            <LinkWrapper>
                <Link>
                    Terms and conditions
                </Link>
            </LinkWrapper>
            <Body>
                and
            </Body>
            <LinkWrapper>
                <Link>
                    Privacy Policy
                </Link>
            </LinkWrapper>
        </Wrapper>
    );
};