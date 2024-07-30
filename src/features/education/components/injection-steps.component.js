import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  BulletList,
  BoldIntroBulletList,
  SubStepBullets,
} from "../../../components/bullet-list.component";

const introStyles = StyleSheet.create({
  summary_header: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    marginTop: 20,
    marginBottom: 16,
  },
  summary: {
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 28,
    marginBottom: 16,
  },
  boldSummary: {
    marginTop: 18,
    fontSize: 16,
    fontFamily: "Inter_700Bold",
    lineHeight: 28,
  },
});

export const InjectionSteps = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summary_header}>{data.summary_header}</Text>

      {data.summary ? (
        <Text style={introStyles.summary}>{data.summary}</Text>
      ) : null}

      {data.bullets ? <BulletList bullets={data.bullets} /> : null}

      {data.bold_bullets ? (
        <BoldIntroBulletList bullets={data.bold_bullets} />
      ) : null}

      {data.sub_bullets ? (
        <SubStepBullets subBullets={data.sub_bullets} />
      ) : null}

      {data.summary_header2 ? (
        <Text style={introStyles.summary_header}>{data.summary_header2}</Text>
      ) : null}

      {data.summary2 ? (
        <Text style={introStyles.summary}>{data.summary2}</Text>
      ) : null}

      {data.bullets2 ? <BulletList bullets={data.bullets2} /> : null}

      {data.bold_bullets2 ? (
        <BoldIntroBulletList bullets={data.bold_bullets2} />
      ) : null}

      {data.sub_bullets2 ? (
        <SubStepBullets subBullets={data.sub_bullets2} />
      ) : null}

      {data.summary_header3 ? (
        <Text style={introStyles.summary_header}>{data.summary_header3}</Text>
      ) : null}

      {data.summary3 ? (
        <Text style={introStyles.boldSummary}>{data.summary3}</Text>
      ) : null}
      {data.bold_bullets3 ? (
        <BoldIntroBulletList bullets={data.bold_bullets3} />
      ) : null}
      {data.sub_bullets3 ? (
        <SubStepBullets subBullets={data.sub_bullets2} />
      ) : null}
    </>
  );
};
