import React, { useState } from "react";
import { SafeView } from "../../../components/safe-area.component";
import { OnboardSwiper } from "../components/onboard-swiper.component";
import { ProgressDots, SwiperDots } from "../../../components/progress-dots.component";
import { View } from "react-native";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { SkipQuestionButton, SkipQuestionText} from "../../../components/skip-question.component";

export const OnboardScreen = ({ navigation }) => {
    const [currentPage, setCurrentPage] = useState(0);
    //TODO: fix page zero interaction when you hit the back button

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
                <View style={{ marginBottom: 32 }}>
                <SwiperDots progress={currentPage + 1} total={4} />
                </View>
                <JournalButton 
                    title={"Sign Up"}
                    onPress={() => {navigation.navigate("Register")}}
                />
                <SkipQuestionButton
                    onPress={() => {navigation.navigate("Login")}}
                >
                    <SkipQuestionText>
                        LOGIN
                    </SkipQuestionText>
                </SkipQuestionButton>
            </ButtonSection>
        </SafeView>
    ); 
};