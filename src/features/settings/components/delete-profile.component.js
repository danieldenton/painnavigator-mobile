import React from "react"
import { Text, TouchableOpacity, Linking, View } from "react-native";
import { styles } from "../../account/styles/referral-code.styles";

export const DeleteProfile = () => {
    return (
        <View style={{ marginTop: 16 }}>
        <Text style={styles.referralMessage}>
            Follow this link if you wish to{" "}
            <TouchableOpacity
              onPress={() => Linking.openURL("https://forms.gle/A35oeCfjSKTR9fje8")}
            >
              <Text style={styles.linkText}>delete your PainNavigator account</Text>
            </TouchableOpacity>{" "}
          </Text>
        
        </View>
    )
}