import React from "react";
import { Slider } from "../../../components/slider.component";
import { Input, Question, Response } from "./pain-journal.styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { painJournalQuestions } from "../data/pain-journal-question-data.json";

export const ReviewJournalEntries = ({ isEditing, painJournal, painJournalUpdate, handleChange }) => {
    const painScoreQuestion = painJournalQuestions[0].question;
    const painSettingQuestion = painJournalQuestions[1].questions[0].question;
    const painFeelingQuestion = painJournalQuestions[1].questions[1].question;
    const whoWithQuestion = painJournalQuestions[1].questions[2].question;
    const copingStrategiesQuestion = painJournalQuestions[2].question;
    const otherNotesQuestion = painJournalQuestions[3].question;
    const painAfterQuestion = painJournalQuestions[4].question;

    return(
        <KeyboardAwareScrollView>
            <Question question={painScoreQuestion} />
            {isEditing ? <Slider value={painJournal.painScore} /> : <Response>{painJournal.painScore}</Response>}

            <Question question={painSettingQuestion} />
            <Input 
                value={painJournalUpdate.painSetting} 
                disabled={!isEditing && true}
                onChangeText={(change) => handleChange(change, "painSetting")}
            />

            <Question question={painFeelingQuestion} />
            <Input 
                value={painJournalUpdate.painFeeling} 
                disabled={!isEditing && true}
                onChangeText={(change) => handleChange(change, "painFeeling")}
            />

            <Question question={whoWithQuestion} />
            <Input 
                value={painJournalUpdate.whoWith} 
                disabled={!isEditing && true} 
                onChangeText={(change) => handleChange(change, "whoWith")}
            />

            <Question question={copingStrategiesQuestion} />
            <Input 
                value={painJournal.copingStrategies} 
                disabled={!isEditing && true}
            />

            <Question question={otherNotesQuestion} />
            <Input 
                value={painJournalUpdate.otherNotes} 
                disabled={!isEditing && true}
                onChangeText={(change) => handleChange(change, "otherNotes")}
            />

            <Question question={painAfterQuestion} />
            {isEditing ? <Slider value={painJournal.painAfter} /> : <Response>{painJournal.painAfter}</Response>}
        </KeyboardAwareScrollView>
    ); 
};