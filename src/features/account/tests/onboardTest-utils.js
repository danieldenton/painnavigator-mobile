import { render } from '@testing-library/react-native';
import { AuthenticationContextProvider } from "../../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

const Providers1 = ({children}) => {
    return (
          <AuthenticationContextProvider>   
                {children}
          </AuthenticationContextProvider>  
    )
}

export const renderWithContext1 = (ui, options) => 
	render(ui, { wrapper: Providers1, ...options})

