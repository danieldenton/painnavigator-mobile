import React, { useState } from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { space } from "../../../infrastructure/theme/spacing";
import { CompletedUnit, Next, SavedUnit, SkippedUnit } from "../../../icons";

const AccordionPressableSection = styled.Pressable`
    align-items: center; 
    flex-direction: row;
    justify-content: space-between;
    margin-right: ${space[2]};
`;

const AccordionTitleSection = styled.View`
`;

const AccordionTitle = styled.Text`
    font-size: 18px; 
    font-family: "Inter_500Medium";
`;

const AccordionIconSection = styled.View`
    flex-direction: row;
    align-items: center;
`;

const AccordionContent = styled.View`
    margin-top: 12px;
    margin-bottom: 6px;
`;

const AccordionCard = styled(Card)`
    border-radius: 15px;
    margin-top: 16px;
`;

const OptionButtonsList = styled.View`
    border-bottom-color: hsl(218, 44%, 86%);
    border-bottom-width: .5px;
`;

const OptionButton = styled.TouchableOpacity`
    align-items: center;
    border-top-color: hsl(218, 44%, 86%);
    border-top-width: .5px;
    flex-direction: row;
    height: 53px;
    justify-content: space-between;
`;

const OptionIconSection = styled.View`
    flex-direction: row;
    width: 24px;
    justify-content: flex-end;
    margin-right: 7px;
`;

const OptionTextSection = styled.View`
    flex: .95;
`;

const OptionText = styled.Text`
    font-family: Inter_400Regular;
    font-size: 16px;
    margin-left: ${space[2]};
`;

const NextRotated = styled.View`
    transform: rotate(90deg);
`;

export const ExpandableCard = ({ moduleType, navigation, title, units }) => {
    const [expanded, setExpanded] = useState(false);
    const unitsPresent = units?.length;

    const unitButtons = units?.map((unit) => {
        return (
            <OptionButton 
                onPress={() => navigation.navigate("ReplayUnit", 
                    { 
                        moduleType: moduleType,
                        unit: unit, 
                        title: title 
                    }
                )}
                key={unit.id}
            > 
                <OptionTextSection>
                    <OptionText>{unit.name}</OptionText>
                </OptionTextSection>
                <OptionIconSection>
                    <Next />
                </OptionIconSection>
            </OptionButton>
        );
    });

    return (
        <AccordionCard>
            <Card.Content>
                <AccordionPressableSection 
                    onPress={() => setExpanded(prevExpanded => !prevExpanded)}
                >
                    <AccordionTitleSection>
                        <AccordionTitle>{title} Units</AccordionTitle>
                    </AccordionTitleSection>
                    <AccordionIconSection>
                        {title === "Completed" && <CompletedUnit />}
                        {title === "Saved" && <SavedUnit />}
                        {title === "Skipped" && <SkippedUnit />}  
                        {expanded ? 
                            <NextRotated style={{ marginLeft: 22 }}>
                                <Next />                         
                            </NextRotated>   
                            :  
                            <View style={{ marginLeft: 22 }}>
                                <Next />                         
                            </View>
                        }
                    </AccordionIconSection>
                </AccordionPressableSection>
                {expanded &&
                    <AccordionContent style={{ marginTop: units.length > 0 ? 12 : 0, marginBottom: 0}}>
                        {unitsPresent ?
                            <OptionButtonsList>
                                {unitButtons}
                            </OptionButtonsList> 
                            :
                            <OptionText style={{ marginTop: 12 }}>You have no {title.toLowerCase()} units.</OptionText>
                        }    
                    </AccordionContent>
                }
            </Card.Content>
        </AccordionCard>
    );
};