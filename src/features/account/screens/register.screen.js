import React, { useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../components/safe-area.component";
import { Signup } from "../components/signup.component";
import { ProfileSetup } from "../components/profile-setup.component";

export const RegisterScreen = ({ navigation }) => {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return(
        <SafeView>
            {isAuthenticated ? <ProfileSetup navigation={navigation} /> : <Signup navigation={navigation} />}
        </SafeView>
    ); 
};