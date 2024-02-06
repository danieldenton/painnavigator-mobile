import React from "react";
import { WebView } from 'react-native-webview';
import { SafeArea } from "../../../components/safe-area.component";
import { ModalNavBar } from "../../../components/journals/navigation-bar.component";
import { View } from "react-native";

export const TermsOfUse = ({ navigation }) => {
    return (
        <SafeArea>
            <View style={{ marginLeft: 16, marginRight: 16 }}>
                <ModalNavBar navigation={navigation} screen={"Terms of Use"} />
            </View>
            <WebView 
                source={{ uri: "https://www.navigatemypain.com/terms-of-use" }} 
            />
        </SafeArea>
    );
};