import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../components/safe-area.component";
import { OnboardSwiper } from "../components/onboard-swiper.component";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestionButton, SkipQuestionText} from "../../../components/skip-question.component";
import { track } from "@amplitude/analytics-react-native";
import { ONBOARD_EVENTS } from "../../../amplitude-events";

export const OnboardScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const { setError } = useContext(AuthenticationContext)

    const onPageScroll = (event) => {
        const {position} = event.nativeEvent;
        if(position !== currentPage) {
            setCurrentPage(position);
        }
    };

    return(
        <SafeView>
            <OnboardSwiper onPageScroll={onPageScroll} />
            <ButtonSection>
                <JournalButton 
                    title={"Sign Up"}
                    onPress={() => {navigation.navigate("Provider")
                    track(ONBOARD_EVENTS.CHOSE_SIGN_UP)
                    setError(null)}}
                />
                <SkipQuestionButton
                    onPress={() => {navigation.navigate("Login")
                    track(ONBOARD_EVENTS.CHOSE_LOGIN)
                    setError(null)}}
                >
                    <SkipQuestionText>
                        LOGIN
                    </SkipQuestionText>
                </SkipQuestionButton>
            </ButtonSection>
        </SafeView>
    ); 
};