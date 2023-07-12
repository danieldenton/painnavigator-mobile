import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthTextInput, InputLabel } from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper } from "../styles/account.styles";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { SafeView } from "../../../components/safe-area.component";


export const ForgotPasswordScreen = ({ navigation }) => {
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
            </InputWrapper>
            {/* {error && <ErrorMessage error={error} />} */}
            <JournalButton 
                title={"Send Reset Password Link"} 
                onPress={() => {}}
            />
    
        </SafeView>
    ); 
};