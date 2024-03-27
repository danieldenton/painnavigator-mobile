import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import axios from "axios";
import { API_URL } from "@env";
import { OnboardContext } from "../../../services/onboard.context";
import { SafeView } from "../../../components/safe-area.component";
import { NavigationBarLeft } from "../../../components/journals/navigation-bar.component";
import { AuthTextInput } from "../../../components/text-input.component";
import { ErrorMessage } from "../styles/account.styles";
import { ButtonSection } from "../../../components/journals/journal.styles";
import { JournalButton } from "../../../components/button.component";
import { CodeGraphic } from "../../../graphics";
import { styles } from "../styles/account.styles";

export const ProviderCodeScreen = ({ navigation }) => {
  const { error, setProviderId, setError } = useContext(OnboardContext);
  const [providerCode, setProviderCode] = useState("");

  async function checkProviderCode(providerCode) {
    try {
      const response = await axios.get(
        `${API_URL}/api/v1/providers/${providerCode}`
      );
      setProviderId(response.data.data.id);
      if (error) {
        setError(null);
      }
      navigation.navigate("Explanation");
    } catch (error) {
      setError("Please enter a valid code");
      console.error(error);
    }
  }

  const handleEmailPress = () => {
    const emailAddress = "support@painnavigator.io";
    const subject = "Pain Navigator Referral Code";
    const body = "I need help with my referral code.";

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
  };

  return (
    <SafeView style={{ flex: 1 }}>
      <NavigationBarLeft
        destination={"Onboard"}
        navigation={navigation}
        screen={""}
      />
      <View style={{ flex: 0.5 }}>
        <View style={styles.rerferralHeaderWrapper}><Text style={styles.referralHeader}>Enter your referral code</Text></View>
        <View style={styles.referralMessageWrapper}>
          
          <Text style={styles.referralMessage}>
            from the clinic that you received the referral from. Check your text
            messages for the code or email
          </Text>
          <TouchableOpacity onPress={() => (onPress = { handleEmailPress })}>
            <Text style={styles.linkText}>support@painnavigator.io</Text>
          </TouchableOpacity>
          <Text style={styles.referralMessage}>with questions.</Text>
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
