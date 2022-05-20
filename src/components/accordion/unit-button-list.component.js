import React from "react";
import { UnitButton, UnitIconSection, UnitText } from "./accordion.styles";
import { FlatList } from "react-native";

export const UnitButtonList = ({ units, navigation, moduleType, title,  }) => {
    const unitsPresent = units.length;

    return (
        <>
     
        {unitsPresent ? <FlatList 
            data={units}
            renderItem={({ item }) => {
                return (
                    <UnitButton onPress={() => navigation.navigate("ReplayUnit", 
                        { 
                            completeSkippedUnit: completeSkippedUnit,
                            moduleType: moduleType,
                            unit: item, 
                            title: title 
                        }
                    )}> 
                        <UnitText>{item.name}</UnitText>
                        <UnitIconSection>
                            <Next />
                        </UnitIconSection>
                    </UnitButton>
                );
            }}
            keyExtractor={(item) => item.id}
        />
        :
        <UnitText style={{ marginTop: 12 }}>You have no {title.toLowerCase()} units.</UnitText>
        } 
    </>
         
    );
};
