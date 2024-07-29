import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import {
  BulletList,
  BoldIntroBulletList,
  SubStepBullets,
} from "../../../components/bullet-list.component";
import { EducationContext } from "../../../services/education/education.context";

const introStyles = StyleSheet.create({
  summary_header: {
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    fontWeight: "bold",
    marginTop: 16,
  },
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
});

export const InjectionSteps = ({ data }) => {
  const { injectionModuleType, educationIntroStep } =
    useContext(EducationContext);
    console.log(educationIntroStep)
  return (
    <>
      <Text style={introStyles.summary_header}>{data.summary_header}</Text>

      {data.summary ? (
        <Text style={introStyles.summary}>{data.summary}</Text>
      ) : null}

      {data.bullets ? (
        <>
          {educationIntroStep === 2 ? (
            <BulletList bullets={data.bullets} />
          ) : (
            <BoldIntroBulletList bullets={data.bullets} />
          )}
        </>
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

      {data.bullets2 ? (
        educationIntroStep <= 1 ? (
          <BoldIntroBulletList bullets={data.bullets2} />
        ) : (
          <BulletList bullets={data.bullets2} />
        )
      ) : null}

      {data.subBullets ? (
        <SubStepBullets subBullets={data.subBullets2} />
      ) : null}

      {data.summary_header3 ? (
        <Text style={introStyles.summary_header}>{data.summary_header3}</Text>
      ) : null}

      {data.summary3 ? (
        <Text style={introStyles.summary}>{data.summary3}</Text>
      ) : null}

      {data.bullets3 ? <BulletList bullets={data.bullets3} /> : null}
    </>
  );
};

export const InjectionStepOne = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summary_header}>{data.summary_header}</Text>
      <Text style={introStyles.summary}>{data.summary}</Text>
      <Text style={introStyles.summary_header}>{data.summary_header2}</Text>
      <Text style={introStyles.summary}>{data.summary2}</Text>
      {data.bullets2 ? (
        <BulletList bullets={data.bullets2} />
      ) : (
        <>
          <Text style={introStyles.summary_header}>{data.summary_header3}</Text>
          {data.summary3 ? (
            <Text style={introStyles.summary}>{data.summary3}</Text>
          ) : (
            <BulletList bullets={data.bullets3} />
          )}
        </>
      )}
    </>
  );
};

export const InjectionStepTwo = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summary_header}>{data.summary_header}</Text>
      <BoldIntroBulletList bullets={data.bullets} />
      <Text style={introStyles.summary_header}>{data.summary_header2}</Text>
      <BoldIntroBulletList bullets={data.bullets2} />
      {data.sub_bullets2 ? (
        <SubStepBullets subBullets={data.sub_bullets2} />
      ) : null}
      {data.summary_header3 ? (
        <Text style={introStyles.summary_header}>{data.summary_header3}</Text>
      ) : null}
      {data.bullets3 ? <BoldIntroBulletList bullets={data.bullets3} /> : null}
    </>
  );
};

export const InjectionStepThree = ({ data }) => {
  return (
    <>
      <Text style={introStyles.summary_header}>{data.summary_header}</Text>
      {injectionModuleType === 0 ? (
        <BoldIntroBulletList bullets={data.bullets} />
      ) : (
        <BulletList bullets={data.bullets} />
      )}
      {data.sub_bullets ? <SubStepBullets subBullets={data.bullets} /> : null}
      {data.summary_header2 ? (
        <Text style={introStyles.summary_header}>{data.summary_header2}</Text>
      ) : null}
      <BoldIntroBulletList bullets={data.bullets2} />
      {data.subBullets ? (
        <SubStepBullets subBullets={data.subBullets2} />
      ) : null}

      {data.sub_bullets2 ? (
        <SubStepBullets subBullets={data.sub_bullets2} />
      ) : null}
      {data.summary_header3 ? (
        <Text style={introStyles.summary_header}>{data.summary_header3}</Text>
      ) : null}
      {data.bullets3 ? <BoldIntroBulletList bullets={data.bullets3} /> : null}
    </>
  );
};

export const InjectionStepFour = ({ data }) => {
  return <Text style={introStyles.summary}>{summary}</Text>;
};
