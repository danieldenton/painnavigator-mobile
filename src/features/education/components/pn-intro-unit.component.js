import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Scroll } from "../../../components/scroll.component";
import { Summary } from "./education-unit.styles";
import { BulletList } from "../../../components/bullet-list.component";
import { View } from "react-native";

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
          {/* {pnIntroData[educationIntroStep].summary_2 ? ( */}
            <Summary summary={pnIntroData[educationIntroStep].summary_2} />
          {/* ) : null} */}
          <BulletList bullets={pnIntroData[educationIntroStep].steps} />
          {pnIntroData[educationIntroStep].summary_3 ? (
            <Summary summary={pnIntroData[educationIntroStep].summary_3} />
          ) : null}
        </View>
      </Scroll>
    </>
  );
};
