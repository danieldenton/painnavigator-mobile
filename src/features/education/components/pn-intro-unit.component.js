import React, { useContext } from "react";
import { View, Text } from "react-native";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Scroll } from "../../../components/scroll.component";
import { Summary } from "./education-unit.styles";
import { BulletList } from "../../../components/bullet-list.component";


export const PNIntroUnit = () => {
  const { currentModule, educationIntroStep } = useContext(EducationContext);
  const { pnIntroData } = currentModule;

  const check = () => {
    if (pnIntroData[educationIntroStep].summary_2) {
      return true;
    }
    return false;
  };
  console.log(check());

  return (
    <>
      <Scroll style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 100 }}>
        <View style={{ marginBottom: 60 }}>
          <EducationUnitInfo
            id={educationIntroStep}
            name={pnIntroData[educationIntroStep].name}
            summary={pnIntroData[educationIntroStep].summary}
            type={"text"}
          />
          {pnIntroData[educationIntroStep].summary_2 ? (
            <View style={{ marginBottom: 10 }}>
            <Summary>{pnIntroData[educationIntroStep].summary_2}</Summary>  
            </View>
          ) : null}
          <BulletList bullets={pnIntroData[educationIntroStep].steps} />
          {pnIntroData[educationIntroStep].summary_3 ? (
            <View style={{ marginBottom: 10 }}>
            <Summary>{pnIntroData[educationIntroStep].summary_3}</Summary>  
            </View>
          ) : null}
        </View>
      </Scroll>
    </>
  );
};
