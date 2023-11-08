import React from "react";
import PagerView from 'react-native-pager-view';
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader, 
    CongratulationsMessageWrapper,
    CongratulationsMessage 
} from "../../../components/completion/completion.styles";
import { WelcomeGraphic, MovementGraphic, ShoesGraphic, GraphGraphic } from "../../../graphics";
import { OnboardGraphicWrapper } from "../styles/account.styles"
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
                <OnboardGraphicWrapper 
                    accessibilityLabel={"pain-navigator-introduction-graphic"} 
                    key={"1"}
                >
                    <GraphicSection>
                        <WelcomeGraphic />
                    </GraphicSection>
                    <MessageSection>
                        <CongratulationsHeaderWrapper>
                            <CongratulationsHeader>Welcome to PainNavigator!</CongratulationsHeader>
                        </CongratulationsHeaderWrapper>
                        <CongratulationsMessageWrapper>
                            <CongratulationsMessage>
                                Through this app, you'll learn how to
                                redefine your relationship with
                                chronic lower back pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper 
                    accessibilityLabel={"movement-and-education-units-graphic"} 
                    key="2"
                >
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
                                behaviors to manage your pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper 
                    accessibilityLabel={"pain-mood-food-journal-logging-graphic"}
                    key="3"
                >
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
                                meals. Track your progress to see
                                how far you’ve come.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
                <OnboardGraphicWrapper 
                    accessibilityLabel={"get-started-graphic"}
                    key="4"
                >
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
                                step to redefining your relationship
                                with chronic pain.
                            </CongratulationsMessage>
                        </CongratulationsMessageWrapper>
                    </MessageSection>
                </OnboardGraphicWrapper>
            </OnboardPagerView>
        </SwiperSection>
    );
};