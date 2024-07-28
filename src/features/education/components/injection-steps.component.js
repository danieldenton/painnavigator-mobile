import { StyleSheet, Text } from "react-native";
import {
  BulletList,
  BoldIntroBulletList,
  SubStepBullets,
} from "../../../components/bullet-list.component";

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

export const InjectionStepOne = ({ summary }) => {
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
export const InjectionStepTwo = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summaryAboveBullets}>{data.summary}</Text>
      <BoldIntroBulletList bullets={data.steps} />
      <SubStepBullets subBullets={data.subSteps} />
    </>
  );
};

export const InjectionStepThree = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summaryAboveBullets}>{data.summary}</Text>
      <BoldIntroBulletList bullets={data.steps} />
    </>
  );
};

export const InjectionStepFour = ({ summary }) => {
  return <Text style={introStyles.summary}>{summary}</Text>;
};
