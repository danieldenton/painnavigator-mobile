import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/safe-area.component";
import { Signup } from "../components/signup.component";
import { ProfileSetup } from "../components/profile-setup.component";

export const RegisterScreen = () => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return(
        <SafeArea>
            {isAuthenticated ? <ProfileSetup /> : <Signup />}
        </SafeArea>
    ); 
};