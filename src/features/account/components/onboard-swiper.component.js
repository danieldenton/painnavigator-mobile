import React from "react";
import PagerView from 'react-native-pager-view';
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader, 
    CongratulationsMessageWrapper,
    CongratulationsMessage 
} from "../../../components/completion/components/completion.styles";
import { WelcomeGraphic, MovementGraphic, ShoesGraphic, GraphGraphic } from "../../../graphics";
import { OnboardGraphicWrapper } from "../components/account.styles";
import styled from "styled-components/native";

const SwiperSection = styled.View`
    flex: .7;
`;

const OnboardPagerView = styled(PagerView)`
    width: 100%;
    height: 100%;
    margin-top: 62px;
`;

const GraphicSection = styled.View`
    flex: .5;
    align-items: center; 
    justify-content: center;
`;

const MessageSection = styled.View`
    flex: .5;
`;

export const OnboardSwiper = ({ onPageScroll }) => {
    return (
        <SwiperSection>
            <OnboardPagerView initialPage={0} onPageScroll={onPageScroll}>
                <OnboardGraphicWrapper key={"1"}>
                    <GraphicSection>
                        <WelcomeGraphic />
                    </GraphicSection>
                    <MessageSection>
                        <CongratulationsHeaderWrapper>
                            <CongratulationsHeader>Welcome to Pain Navigator!</CongratulationsHeader>
                        </CongratulationsHeaderWrapper>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>
                                Through this app, you'll learn how to
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                redefine your relationship with
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                chronic lower back pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper key="2">
                    <GraphicSection>
                        <MovementGraphic />
                    </GraphicSection>
                    <MessageSection>
                        <CongratulationsHeaderWrapper>
                            <CongratulationsHeader>Complete Movement</CongratulationsHeader>
                            <CongratulationsHeader>and Education Units</CongratulationsHeader>
                        </CongratulationsHeaderWrapper>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>
                                Learn new strategies, exercises, and
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                behaviors to manage your pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper key="3">
                    <GraphicSection>
                        <GraphGraphic />
                    </GraphicSection>
                    <MessageSection>
                        <CongratulationsHeaderWrapper>
                            <CongratulationsHeader>Log Your Activity,</CongratulationsHeader>
                            <CongratulationsHeader>See the Progress</CongratulationsHeader>
                        </CongratulationsHeaderWrapper>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>
                                Log your pain, mood, goals and
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                meals. Track your progress to see
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                how far you’ve come.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper key="4">
                    <GraphicSection>
                        <ShoesGraphic />
                    </GraphicSection>
                    <MessageSection>
                        <CongratulationsHeaderWrapper>
                            <CongratulationsHeader>Let’s Get Started!</CongratulationsHeader>
                        </CongratulationsHeaderWrapper>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>
                                Congratulations on taking the first
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                step to redefining your relationship
                            </CongratulationsMessage>
                            <CongratulationsMessage>
                                with chronic pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
            </OnboardPagerView>
        </SwiperSection>
    );
};