import React from "react";
import styled from "styled-components/native";
import { Add } from "../icons";
import { Card } from "react-native-paper";
import { SubHeader } from "../components/typography.component"; 
import { TouchableOpacity } from "react-native";

const NewJournalEntryCard = styled(Card)`
    height: 88px;
    margin-left: ${(props) => props.theme.space[3]};
    border-radius: 15px;
`;

const CardContentWrapper = styled(Card.Content)`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: -8px;
`;

export const NewJournalEntry = ({ title, destination, navigation }) => {

    return ( 
        <TouchableOpacity onPress={() => navigation.navigate(destination)}> 
            <NewJournalEntryCard>
                <CardContentWrapper>
                    <SubHeader title={title} size={18} />
                    <Add />
                </CardContentWrapper>
            </NewJournalEntryCard>
        </TouchableOpacity>
    ); 
};
