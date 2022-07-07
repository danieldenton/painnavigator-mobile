import React from "react";
import { SafeView } from "../../../components/safe-area.component";
import { Signup } from "../components/signup.component";

export const RegisterScreen = ({ navigation }) => {
    return(
        <SafeView>
             <Signup navigation={navigation} />
        </SafeView>
    ); 
};