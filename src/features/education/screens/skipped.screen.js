import React from "react";
import { ButtonSection, GraphicWrapper } from "../../../components/journals/journal.styles";
import { ModuleButton } from "../../../components/button.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { 
    CongratulationsHeaderWrapper, 
    CongratulationsHeader,
    CongratulationsMessageWrapper,
    CongratulationsMessage
} from "../../../components/completion/components/completion.styles";
import { ThumbsUpGraphic } from "../../../graphics";
import { Scroll } from "../../../components/scroll.component";
import { View } from "react-native";

export const SkippedScreen = ({ navigation }) => {
    return (
        <SafeView>
            <NavigationBarLeft screen={"Education"} destination={"Today"} navigation={navigation} />
            <Scroll style={{ paddingRight: 16, paddingLeft: 16 }}>
                <View style={{ marginBottom: 16 }}>
                    <GraphicWrapper>
                        <ThumbsUpGraphic />
                    </GraphicWrapper>
                    <CongratulationsHeaderWrapper>
                        <CongratulationsHeader>Module Skipped</CongratulationsHeader>
                    </CongratulationsHeaderWrapper>
                    <CongratulationsMessageWrapper>
                        <CongratulationsMessage>
                            You can revisit this module later on
                            by navigating to the Units page from
                            the Today dashboard side menu.
                        </CongratulationsMessage>
                    </CongratulationsMessageWrapper>
                    <ButtonSection>
                        <ModuleButton onPress={() => navigation.navigate("Today")} title={"Back to Dashboard"} />
                    </ButtonSection>
                </View>
            </Scroll>
        </SafeView>
    );
};