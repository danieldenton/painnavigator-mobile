import resetPleasantActivity from "react";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../../../components/completion/components/completion.styles";
import { ThumbsUpGraphic } from "../../../graphics";

export const FavoriteActivitiesCompletedScreen = ({ navigation }) => {

    return (
        <SafeView>
            <NavigationBarLeft screen={"My Activities"} navigation={navigation} destination={"Today"} />
            <GraphicWrapper>
                <ThumbsUpGraphic />
            </GraphicWrapper>
            <CongratulationsHeaderWrapper style={{ marginTop: 16 }}>
                <CongratulationsHeader>
                    Nice Work!
                </CongratulationsHeader>
                <CongratulationsMessageWrapper>
                    <CongratulationsMessage>
                        Here’s your call to action! 
                        Look through your list and let’s get started with adding 
                        some of these activities back into your life!
                    </CongratulationsMessage>
                    <CongratulationsMessage style={{ marginTop: 8 }}>
                        Consider one of these activities for your next SMART Goal 
                        and make sure to use pacing as you add in a new activity 
                        to avoid pain flare ups. 
                    </CongratulationsMessage>
                </CongratulationsMessageWrapper>
            </CongratulationsHeaderWrapper>
            <ButtonSection>
                <JournalButton 
                    title={"See my list!"}
                    onPress={() => {navigation.navigate("Today")}}
                />
            </ButtonSection>
        </SafeView>
    )
};