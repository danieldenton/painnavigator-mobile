import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/safe-area.component";
import { SmallSpacer } from "../../../components/spacer.component";
import { TextInput } from "../../../components/text-input.component";
import { Button } from "../../../components/button.component";
import { Text } from "../../../components/text.component";
import { AccountContainer, ErrorContainer } from "../components/account.styles";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, error } = useContext(AuthenticationContext);

    return(
        <SafeArea>
            <AccountContainer>
                <TextInput
                    label="Name"
                    value={name}
                    textContentType="name"
                    onChangeText={(n) => setName(n)}
                />
                <SmallSpacer>
                    <TextInput
                        label="Email"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(u) => setEmail(u)}
                    />
                </SmallSpacer>
                <SmallSpacer>
                    <TextInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </SmallSpacer>
                <SmallSpacer>
                    <TextInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                </SmallSpacer>
                {error && (
                <ErrorContainer>
                    <Text variant="error">{error}</Text>
                </ErrorContainer>
                )}
                <SmallSpacer>
                    <Button onPress={() => onRegister(name, email, password, repeatedPassword)}>
                        Create account
                    </Button>
                </SmallSpacer>
            </AccountContainer>
        </SafeArea>
    ); 
};