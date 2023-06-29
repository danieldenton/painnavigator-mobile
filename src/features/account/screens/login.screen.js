import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper, SignUpOptions } from "../styles/account.styles";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import { ActivityIndicator } from "../../../components/activity-indicator.component";
import { track } from "@amplitude/analytics-react-native"
import { ONBOARD_EVENTS } from "../../../amplitude-events";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, userLoading } = useContext(AuthenticationContext);

    return(
        <SafeView>
            <NavigationBarLeft screen={"Login"} destination={"Onboard"} navigation={navigation} />
            <InputWrapper>
                <InputLabel>Email</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"Enter your email"}
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <InputLabel>Password</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"Enter your password"}
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
            </InputWrapper>
            {error && <ErrorMessage error={error} />}
            <JournalButton 
                title={"Login"} 
                onPress={() => {
                    track(ONBOARD_EVENTS.COMPLETE_LOGIN);
                    onLogin(email, password)}}
            />
            {userLoading && <ActivityIndicator />}
        </SafeView>
    ); 
};