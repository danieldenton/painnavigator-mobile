import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper, ForgotPassword, ForgotPasswordWrapper } from "../styles/account.styles";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";
import styled from "styled-components/native";


export const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const { onLogin, error, userLoading } = useContext(AuthenticationContext);

    return(
        <SafeView>
            <NavigationBarLeft screen={"Password Reset"} destination={"Login"} navigation={navigation} />
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
            </InputWrapper>
            <JournalButton 
                title={"Send Reset Password Link"} 
                onPress={() => {setMessage("If there is an account associated with this email address you will recieve an email with a link to reset the password.")}}
            />
            {message &&  <ErrorMessage error={message} />}
            <ForgotPasswordWrapper onPress={() => navigation.navigate("Onboard")}>
                <ForgotPassword>
                    Back to Login
                </ForgotPassword>
            </ForgotPasswordWrapper>
        </SafeView>
    ); 
};