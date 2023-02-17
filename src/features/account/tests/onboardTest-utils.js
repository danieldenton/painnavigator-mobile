import { render } from '@testing-library/react-native';
import { AuthenticationContextProvider } from "../../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";

const Providers = ({children}) => {
    return (
          <AuthenticationContextProvider>   
                {children}
          </AuthenticationContextProvider>  
    )
}

export const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options})

export * from '@testing-library/react-native'

export {renderWithContext as render}

