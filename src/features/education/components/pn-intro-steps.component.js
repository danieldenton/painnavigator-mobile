import { StyleSheet, Text } from "react-native";
import { BulletList } from "../../../components/bullet-list.component";

const introStyles = StyleSheet.create({
  summary: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 28,
  },
  summaryAboveBullets: {
    marginTop: 8,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 28,
  },
  boldSummayText: {
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
  },
});

export const EducationSummaryStepZero = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summary}>{data.summary}</Text>
      <Text style={introStyles.summaryAboveBullets}>{data.summary_2}</Text>
      <BulletList bullets={data.steps} />
      <Text style={introStyles.summary}>{data.summary_3}</Text>
    </>
  );
};

export const EducationSummaryStepOne = ({ summary }) => {
  const firstHalfSummary = summary.slice(0, 394);
  const boldText = summary.slice(394, 409);
  const secondHalfSummary = summary.slice(409, 1104);

  return (
    <Text style={introStyles.summary}>
      {firstHalfSummary}
      <Text style={introStyles.boldSummayText}>{boldText}</Text>
      {secondHalfSummary}
    </Text>
  );
};

