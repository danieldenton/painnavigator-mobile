import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper, SignUpOptions } from "../components/account.styles";
import { TermsAndConditions } from "./terms-and-conditions.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";

export const Signup = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthenticationContext);

    return(
        <>
            <NavigationBarLeft screen={"Sign up"} destination={"Onboard"} navigation={navigation} />
            <InputWrapper>
                <InputLabel>Name</InputLabel>
                <AuthTextInput
                    value={name}
                    textContentType="name"
                    onChangeText={(n) => setName(n)}
                />
                <InputLabel>Email</InputLabel>
                <AuthTextInput
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <InputLabel>Password</InputLabel>
                <AuthTextInput
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                <InputLabel>Repeat Password</InputLabel>
                <AuthTextInput
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
            </InputWrapper>
            {error && <ErrorMessage error={error} />}
            <JournalButton title={"Create Account"} onPress={() => onRegister(name, email, password, repeatedPassword)} />
            <SignUpOptions />
            <TermsAndConditions />
        </>
    ); 
};