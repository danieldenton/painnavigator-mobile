import { useState, useContext }from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { AuthTextInput } from "../../../components/text-input.component";
import { ErrorMessage } from "../styles/account.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { CodeGraphic } from "../../../graphics";
import { styles } from "../styles/account.styles";
import { checkReferralCode } from "../../../services/authentication/authentication.service";
import { ONBOARD_EVENTS } from "../../../amplitude-events";
import { track } from "@amplitude/analytics-react-native";

export const ProviderCodeScreen = ({ navigation }) => {
  const { changeOnboardEntry, error, setError, setEducationProgram, setProviderId, setProgramSafety } = useContext(AuthenticationContext);
  const [referralCode, setReferralCode] = useState("");

    const handleProviderCode = async () => {
        try {
          const response = await checkReferralCode(referralCode);
          response ? 
          (setProviderId(response), setError(null), track(ONBOARD_EVENTS.ENTER_REFERRAL_CODE), navigation.navigate("Explanation"))
        :
          setError("Please enter a valid code")
        } catch (err) {
          setError("Please enter a valid code");
          console.error(err); 
      };
    }
    const handleProgram = () => {
      referralCode === "ASC112" || referralCode === "EXPL22" || referralCode === "CORE55" ? setProgramSafety(true) : null
      referralCode === "ISCS23" ? (setEducationProgram(2), setProgramSafety(true)) : null
    }
  
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
        value={referralCode}
        autoCapitalize="characters"
        onChangeText={(referralCode) => (
          changeOnboardEntry(referralCode, "referral_code"),
          setReferralCode(referralCode)
        )}
        keyboardType="visible-password"
        testID={"code-input"}
      />
      <View style={styles.codeGraphicWrapper}>
        <CodeGraphic />
      </View>
      <ButtonSection>
        <View style={{ marginBottom: 32 }}>
          {error && <ErrorMessage error={error} />}
          <JournalButton
            disabled={referralCode.length === 6 ? false : true}
            title={"Submit"}
            onPress={() => {
              handleProviderCode()
              handleProgram()
            }}
          />
        </View>
      </ButtonSection>
    </SafeView>
  );
};