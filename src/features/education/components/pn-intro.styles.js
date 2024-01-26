import { StyleSheet, Text, View } from "react-native";

const introStyles = StyleSheet.create({
  summary: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 28,
  },
  boldSummayText: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
  },
  summaryContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
});

export const EducationSummaryStepOne = ({ summary }) => {
  const firstHalfSummary = summary.slice(0, 394);
  const boldText = summary.slice(394, 410);
  const secondHalfSummary = summary.slice(410, 1104);

  return (
    <View styel={introStyles.summaryContainer}>
      <Text style={introStyles.summary}>
        {firstHalfSummary}
        <Text style={introStyles.boldSummayText}>{boldText}</Text>
        {secondHalfSummary}
      </Text>
    </View>
  );
};
// export const Summary = styled.Text`
//   margin-top: 8px;
//   font-size: 16px;
//   font-family: Inter_400Regular;
//   line-height: 28px;
// `;
