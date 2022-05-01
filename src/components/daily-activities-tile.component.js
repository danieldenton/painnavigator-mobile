import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { 
    Add,
    FoodJournalIcon,
    JournalEntryIcon, 
    MoodJournalIcon,  
    PainJournalIcon 
} from "../icons";

const DailyActivitiesCard = styled(Card)`
    margin-top: ${(props) => props.theme.space[3]};
    border-radius: 15px;
    padding: 21px;
`;

const ModuleCardContent = styled(Card.Content)`
    flex-direction: row;
    padding: 0px;
    align-items: center;
`;

const CardTextSection = styled.View`
    flex: .8;
`;

const CardHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 18px;
`;

const CardSubHeader = styled.Text`
    font-family: Inter_500Medium;
    font-size: 12px;
    margin-top: 8px;
`;

const CardIconSection = styled.View`
    flex: .2;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const DailyActivitiesTile = ({ destination, title, navigation }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination)}> 
            <DailyActivitiesCard>
                <ModuleCardContent>
                    <CardTextSection>
                        <CardHeader>{title}</CardHeader>
                    </CardTextSection>
                    <CardIconSection>
                        {title === "Add New Entry" && <Add />}
                        {title === "Make a Journal Entry" && <JournalEntryIcon />}
                        {title === "Pain Journal" && <PainJournalIcon />}
                        {title === "Mood Journal" && <MoodJournalIcon />}
                        {title === "Food Journal" && <FoodJournalIcon />}
                        {title === "Today's Food Journal" && <FoodJournalIcon />}
                    </CardIconSection>
                </ModuleCardContent>
            </DailyActivitiesCard>
        </TouchableOpacity>
    ); 
};