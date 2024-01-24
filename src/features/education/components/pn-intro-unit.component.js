import React, { useContext } from "react";
import { EducationContext } from "../../../services/education/education.context";
import { EducationUnitInfo } from "./education-unit-info.component";
import { Scroll } from "../../../components/scroll.component";
import { BulletList } from "../../../components/bullet-list.component";
import { View } from "react-native";

export const TextUnit = () => {
    const { currentModule } = useContext(EducationContext);
    const { id, name, summary, steps, type } = currentModule;

    return (
        <>
            <Scroll style={{ paddingLeft: 16, paddingRight: 16, marginBottom: 100 }}>
                <View style={{ marginBottom: 60 }}>
                    <EducationUnitInfo id={id} name={name} summary={summary} type={type} />
                    <BulletList bullets={steps}/>
                </View>
            </Scroll>
        </>
    );
};