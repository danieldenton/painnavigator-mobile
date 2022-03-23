import React, { useState, useContext } from "react";
import { SafeArea } from "../../../components/safe-area.component";
import { ReviewJournalEntries } from "../components/review-journal-entries.component";
import { Button } from "../../../components/button.component";
import { JournalContainer, ReviewJournalHeader, DateText, EditButton } from "../components/pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const ReviewPainJournal = ({ route }) => {
    const { journal, journalId } = route.params;
    const { updatePainJournal } = useContext(PainJournalContext);
    const [isEditing, setIsEditing] = useState(false);
    const [painJournal, setPainJournal] = useState(journal);

    const handleChange = (change, name) => {
        setPainJournal(journal => ({
            ...journal,
            [name]: change
        }));
    };

    return(
        <SafeArea>
            <JournalContainer>
                <ReviewJournalHeader>
                    <DateText>{painJournal.date}</DateText>
                    {!isEditing && <EditButton onPress={() => setIsEditing(true)}>Edit</EditButton>}
                </ReviewJournalHeader>
                <ReviewJournalEntries isEditing={isEditing} painJournal={painJournal} handleChange={handleChange}/>
                {isEditing && 
                    <Button 
                        onPress={() => {
                            setIsEditing(false);
                            updatePainJournal(journalId, painJournal);
                        }}
                    >
                            Save Changes
                    </Button>}
            </JournalContainer>
        </SafeArea>
    );
};