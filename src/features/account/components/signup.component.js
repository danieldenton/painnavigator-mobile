import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper, SignUpOptions } from "../components/account.styles";
import { TermsAndConditions } from "./terms-and-conditions.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Signup = ({ navigation }) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthenticationContext);

    return(
        <>
            <NavigationBarLeft screen={"Sign up"} destination={"Onboard"} navigation={navigation} />
            <InputWrapper>
                <InputLabel>First Name</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"first-name-input"}
                    value={first_name}
                    textContentType="name"
                    onChangeText={(first) => setFirstName(first)}
                />
                <InputLabel>Last Name</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"last-name-input"}
                    value={last_name}
                    textContentType="name"
                    onChangeText={(last) => setLastName(last)}
                />
                <InputLabel>Email</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"email-input"}
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <InputLabel>Password</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"password-input"}
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                <InputLabel>Repeat Password</InputLabel>
                <AuthTextInput
                    accessibilityLabel={"repeat-password-input"}
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
            </InputWrapper>
            {error && <ErrorMessage error={error} />}
            <JournalButton 
                accessibilityLabel={"create-account-button"}
                title={"Create Account"} 
                onPress={() => onRegister(first_name, last_name, email, password, repeatedPassword)} />
            <SignUpOptions />
            <TermsAndConditions />
        </>
    ); 
};