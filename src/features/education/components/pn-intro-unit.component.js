import React, { useContext, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Scroll } from "../../../components/scroll.component";
import { EducationContext } from "../../../services/education/education.context";
import {
  Summary,
  Header,
  TitleSection,
  UnitTitle,
} from "./education-unit.styles";
import { BulletList } from "../../../components/bullet-list.component";
import { EducationSummaryStepOne } from "./pn-intro.styles";

export const PNIntroUnit = () => {
  const { currentModule, educationIntroStep } = useContext(EducationContext);
  const { pnIntroData } = currentModule;
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [educationIntroStep]);

  return (
    <>
      <Scroll
        ref={scrollViewRef}
        style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 100 }}
      >
        <View style={{ marginBottom: 60 }}>
          <Header>
            <TitleSection>
              <UnitTitle>{pnIntroData[educationIntroStep].name}</UnitTitle>
            </TitleSection>
          </Header>
          {educationIntroStep === 1 ? (
            <EducationSummaryStepOne
              summary={pnIntroData[educationIntroStep].summary}
            />
          ) : (
            <Summary>{pnIntroData[educationIntroStep].summary}</Summary>
          )}
          {educationIntroStep === 0 ? (
            <View style={{ marginBottom: 10 }}>
              <Summary>{pnIntroData[educationIntroStep].summary_2}</Summary>
            </View>
          ) : null}
          <BulletList bullets={pnIntroData[educationIntroStep].steps} />
          {educationIntroStep === 0 ? (
            <View style={{ marginBottom: 10 }}>
              <Summary>{pnIntroData[educationIntroStep].summary_3}</Summary>
            </View>
          ) : null}
        </View>
      </Scroll>
    </>
  );
};
