import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { AuthTextInput } from "../../../components/text-input.component";
import { ErrorMessage } from "../styles/account.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { CodeGraphic } from "../../../graphics";
import { styles } from "../styles/referral-code.styles";
import { checkReferralCode } from "../../../services/authentication/authentication.service";

export const ProviderCodeScreen = ({ navigation }) => {
  const {
    changeOnboardEntry,
    error,
    onboardStep,
    previousOnboardingStep,
    setError,
    setProviderId,
  } = React.useContext(AuthenticationContext);
  const [referralCode, setReferralCode] = React.useState("");
  const [submitDisabled, setSubmitDisabled] = React.useState(true);

  React.useEffect(() => {
    if (referralCode.length === 6) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [referralCode]);

  return (
    <SafeView style={{ flex: 1 }}>
      <NavigationBarLeft
        destination={"Onboard"}
        navigation={navigation}
        screen={""}
      />
      <View style={{ flex: 0.5 }}>
        <View style={styles.rerferralHeaderWrapper}>
          <Text style={styles.referralHeader}>Enter Your Referral Code</Text>
        </View>
        <View style={styles.referralMessageWrapper}>
          <Text style={styles.referralMessage}>
            Enter your referral code from our website or the partner you
            received this app from below. If you dont have a code, visit{" "}
            <TouchableOpacity
              onPress={() => Linking.openURL("https://painnavigator.io/")}
            >
              <Text style={styles.linkText}>painnavigator.io</Text>
            </TouchableOpacity>{" "}
            to get one!
          </Text>
        </View>
      </View>
      <AuthTextInput
        accessibilityLabel={"referral-code-input"}
        value={referralCode.toUpperCase()}
        textContentType="referralCode"
        onChangeText={(referralCode) => (
          changeOnboardEntry(referralCode, "referral_code"),
          setReferralCode(referralCode)
        )}
      />
      <View style={styles.codeGraphicWrapper}>
        <CodeGraphic />
      </View>
      <ButtonSection>
        <View style={{ marginBottom: 32 }}>
          {error && <ErrorMessage error={error} />}
          <JournalButton
            disabled={submitDisabled}
            title={"Submit"}
            onPress={() => {
              checkReferralCode(
                referralCode,
                setProviderId,
                setError,
                navigation
              );
            }}
          />
        </View>
      </ButtonSection>
    </SafeView>
  );
};