import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { OnboardContext } from "../../../services/onboard.context";
import {
  AuthTextInput,
  InputLabel,
} from "../../../components/text-input.component";
import { JournalButton } from "../../../components/button.component";
import { ErrorMessage, InputWrapper } from "../styles/account.styles";
import { TermsAndConditions } from "./terms-and-conditions.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { View } from "react-native";
import { ActivityIndicator } from "../../../components/activity-indicator.component";

export const Signup = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, userLoading } = useContext(AuthenticationContext);
  const { onboardingData, setOnboardingData, error, setTour } =
    useContext(OnboardContext);
  const { firstName, lastName, email } = onboardingData;
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <NavigationBarLeft
        screen={"Sign up"}
        destination={"ProfileSetup"}
        navigation={navigation}
      />
      <KeyboardAwareScrollView style={{ marginRight: -16, paddingRight: 16 }}>
        <View style={{ marginBottom: 200 }}>
          <InputWrapper>
            <InputLabel>First Name</InputLabel>
            <AuthTextInput
              accessibilityLabel={"first-name-input"}
              value={firstName}
              onFocus={() => setShowButton(false)}
              onBlur={() => setShowButton(true)}
              textContentType="name"
              onChangeText={(first) =>
                setOnboardingData((object) => ({ ...object, firstName: first }))
              }
            />
            <InputLabel>Last Name</InputLabel>
            <AuthTextInput
              accessibilityLabel={"last-name-input"}
              value={lastName}
              onFocus={() => setShowButton(false)}
              onBlur={() => setShowButton(true)}
              textContentType="name"
              onChangeText={(last) =>
                setOnboardingData((object) => ({ ...object, lastName: last }))
              }
            />
            <InputLabel>Email</InputLabel>
            <AuthTextInput
              accessibilityLabel={"email-input"}
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              onFocus={() => setShowButton(false)}
              onBlur={() => setShowButton(true)}
              autoCapitalize="none"
              onChangeText={(email) =>
                setOnboardingData((object) => ({ ...object, email: email }))
              }
            />
            <InputLabel>Password</InputLabel>
            <AuthTextInput
              accessibilityLabel={"password-input"}
              value={password}
              textContentType="password"
              secureTextEntry
              onFocus={() => setShowButton(false)}
              onBlur={() => setShowButton(true)}
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
            />
            <InputLabel>Repeat Password</InputLabel>
            <AuthTextInput
              accessibilityLabel={"repeat-password-input"}
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              onFocus={() => setShowButton(false)}
              onBlur={() => setShowButton(true)}
              autoCapitalize="none"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </InputWrapper>
          {error && <ErrorMessage error={error} />}
        </View>
      </KeyboardAwareScrollView>
      {userLoading && <ActivityIndicator />}
      {showButton && (
        <ButtonSection>
          <JournalButton
            accessibilityLabel={"create-account-button"}
            title={"Create Account"}
            onPress={() => {
              setTour(0)
              onRegister(password, repeatedPassword);
            }}
          />
          <TermsAndConditions navigation={navigation} />
        </ButtonSection>
      )}
    </>
  );
};
