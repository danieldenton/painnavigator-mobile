import { useState, useContext } from "react";
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

export const ProviderCodeScreen = ({ navigation }) => {
  const { changeOnboardEntry, error, handleProgram, checkProviderCode } =
    useContext(AuthenticationContext);
  const [providerCode, setProviderCode] = useState("");

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
        value={providerCode}
        autoCapitalize="characters"
        onChangeText={(providerCode) => (
          changeOnboardEntry(providerCode, "referral_code"),
          setProviderCode(providerCode)
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
            disabled={providerCode.length === 6 ? false : true}
            title={"Submit"}
            onPress={() => {
              checkProviderCode(providerCode);
              handleProgram(providerCode);
              navigation.navigate("Explanation")
            }}
          />
        </View>
      </ButtonSection>
    </SafeView>
  );
};
