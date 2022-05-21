import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../components/safe-area.component";
import { SmallSpacer } from "../../../components/spacer.component";
import { AuthTextInput } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { Text } from "../../../components/text.component";
import { ErrorMessage } from "../components/account.styles";
import { TermsAndConditions } from "./terms-and-conditions.component";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthenticationContext);

    return(
        <SafeView>
            <AuthTextInput
                label="Name"
                value={name}
                textContentType="name"
                onChangeText={(n) => setName(n)}
            />
            <AuthTextInput
                label="Email"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
            />
            <AuthTextInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
            />
            <AuthTextInput
                label="Repeat Password"
                value={repeatedPassword}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setRepeatedPassword(p)}
            />
            {error && <ErrorMessage error={error} />}
            <SmallSpacer>
                <JournalButton title={"Create Account"} onPress={() => onRegister(name, email, password, repeatedPassword)} />
            </SmallSpacer>
            <TermsAndConditions />
        </SafeView>
    ); 
};