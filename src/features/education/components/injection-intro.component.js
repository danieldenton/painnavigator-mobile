import React, { useContext, useEffect, useRef } from "react";
import { View } from "react-native";
import { Scroll } from "../../../components/scroll.component";
import { EducationContext } from "../../../services/education/education.context";
import { Header, TitleSection, UnitTitle } from "./education-unit.styles";
import {
  InjectionStepOne,
  InjectionStepTwo,
  InjectionStepThree,
  InjectionStepFour,
} from "./injection-steps.component";
export const PNIntroUnit = () => {
  const { currentModule, educationIntroStep } = useContext(EducationContext);
  const { pnIntroData } = currentModule;
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [educationIntroStep]);

  const educationIntroStepComponents = [
    <EducationSummaryStepZero data={pnIntroData[0]} />,
    <EducationSummaryStepOne summary={pnIntroData[1].summary} />,
    <EducationSummaryStepTwo data={pnIntroData[2]} />,
    <EducationSummaryStepThree data={pnIntroData[3]} />,
    <EducationSummaryStepFour summary={pnIntroData[4].summary} />,
  ];

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
          {educationIntroStepComponents[educationIntroStep]}
        </View>
      </Scroll>
    </>
  );
};
