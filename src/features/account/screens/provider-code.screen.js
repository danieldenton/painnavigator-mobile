import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import axios from "axios";
import { API_URL } from "@env";
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
  const { error, setProviderId, setError } = useContext(AuthenticationContext);
  const [providerCode, setProviderCode] = useState("");

  async function checkProviderCode(providerCode) {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/providers/${providerCode}`
      );
      const provider_id = response.data.data.attributes.id;
      setProviderId(provider_id);
      setError(null);
      navigation.navigate("Explanation");
    } catch (error) {
      setError("Please enter a valid code");
      console.error(error);
    }
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
        value={providerCode}
        autoCapitalize="characters"
        onChangeText={(providerCode) => setProviderCode(providerCode)}
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
            }}
          />
        </View>
      </ButtonSection>
    </SafeView>
  );
};
