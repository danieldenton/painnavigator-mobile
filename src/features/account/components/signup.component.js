import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper, SignUpOptions } from "../components/account.styles";
import { TermsAndConditions } from "./terms-and-conditions.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { View } from "react-native";
import { ActivityIndicator } from "../../../components/activity-indicator.component";
import { track } from "@amplitude/analytics-react-native"
import { ONBOARD_EVENTS } from "../../../amplitude-events";

export const Signup = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onboardingData, changeOnboardEntry, onRegister, error, userLoading } = useContext(AuthenticationContext);
    const { first_name, last_name, email } = onboardingData;
    const [showButton, setShowButton] = useState(true);

    return(
        <>
            <NavigationBarLeft screen={"Sign up"} destination={"Onboard"} navigation={navigation} />
            <KeyboardAwareScrollView style={{ marginRight: -16, paddingRight: 16 }}>
            <View style={{ marginBottom: 200 }}>
            <InputWrapper>
                <InputLabel>First Name</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"first-name-input"}
                    value={first_name}
                    
                    onFocus={() => setShowButton(false)}
                    onBlur={() => setShowButton(true)}
                    textContentType="name"
                    onChangeText={(first) => changeOnboardEntry(first, "first_name")}
                />
                <InputLabel>Last Name</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"last-name-input"}
                    value={last_name}
                    onFocus={() => setShowButton(false)}
                    onBlur={() => setShowButton(true)}
                    textContentType="name"
                    onChangeText={(last) => changeOnboardEntry(last, "last_name")}
                />
                <InputLabel>Email</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"email-input"}
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    onFocus={() => setShowButton(false)}
                    onBlur={() => setShowButton(true)}
                    autoCapitalize="none"
                    onChangeText={(u) => changeOnboardEntry(u, "email")}
                />
                <InputLabel>Password</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"password-input"}
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    onFocus={() => setShowButton(false)}
                    onBlur={() => setShowButton(true)}
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                <InputLabel>Repeat Password</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"repeat-password-input"}
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    onFocus={() => setShowButton(false)}
                    onBlur={() => setShowButton(true)}
                    autoCapitalize="none"
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
            </InputWrapper>
            {error && <ErrorMessage error={error} />}
                </View>
            </KeyboardAwareScrollView>
            {userLoading && <ActivityIndicator />}
            {showButton && <ButtonSection>
                <JournalButton 
                    accessibilityLabel={"create-account-button"}
                    title={"Create Account"} 
                    onPress={() => {track(ONBOARD_EVENTS.COMPLETE_CREATE_ACCOUNT); 
                        onRegister(password, repeatedPassword)}} 
                />
                <TermsAndConditions navigation={navigation} />
            </ButtonSection>}
        </>
    ); 
};