import React, { useContext } from "react";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Card } from "react-native-paper";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, Text} from "react-native";
import { FoodJournalContext } from "../../../services/food-journal/food-journal.context";

const EntryCard = styled(Card)`
    flex: 1;
    margin: ${(props) => props.theme.space[3]};
    padding: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    min-height: 169px;
`;

const EntryInfoSection = styled.View`
    flex: 1;
`;

const Feelings = styled.View`
    flex-direction: row;
    align-items: center;
`;

const FeelingFaceWrapper = styled.View`
    border-radius: 100px;
    padding: 12px;
`;

const BottomSection = styled.View`
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`;

export const CompletedEntryCard = ({ meal, navigation }) => {
    const {food, feelingBefore, feelingAfter} = JSON.parse(meal.entry);
    const { setMeal, setNewFoodJournalEntry } = useContext(FoodJournalContext);

    return (
        <EntryCard>
            <EntryInfoSection>
                <Text>{meal.meal}</Text> 
                <Text>{food}</Text> 
            </EntryInfoSection>
            <BottomSection>
                <Feelings>
                    <FeelingFaceWrapper style={{ backgroundColor: colors.feelingFaces.sad }}>
                        <MaterialCommunityIcons 
                            name={`emoticon-${feelingBefore}-outline`}
                            size={32} 
                            color="black" 
                        />
                    </FeelingFaceWrapper>
                    <AntDesign 
                        name="arrowright" 
                        size={24} 
                        color="black" 
                        style={{ marginLeft: 16, marginRight: 16 }}
                    />
                    <FeelingFaceWrapper
                        // TODO: dynamically set background color based on feeling
                        // Any thoughts are appreciated
                        style={{ backgroundColor: colors.feelingFaces.happy }}
                    >
                        <MaterialCommunityIcons 
                            name={`emoticon-${feelingAfter}-outline`}
                            size={32} 
                            color="black" 
                        />
                    </FeelingFaceWrapper>
                </Feelings>
                <TouchableOpacity
                    onPress={() => { 
                        setMeal(meal.meal);
                        setNewFoodJournalEntry({food: food, feelingBefore: feelingBefore, feelingAfter: feelingAfter});
                        navigation.navigate("FoodJournalEntry", { journalId: meal.id });
                    }}
                >   
                    <Text>EDIT</Text>
                </TouchableOpacity>
            </BottomSection>
        </EntryCard>
    );
};