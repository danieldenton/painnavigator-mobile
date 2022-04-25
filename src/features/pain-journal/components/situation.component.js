import React, { useContext } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { JournalQuestion } from "../../../components/journal-question.component";
import { MultilineTextInput } from "../../../components/text-input.component";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const Situation = () => {
    const { changeEntry, currentPageData, painJournal } = useContext(PainJournalContext);
    const { questions } = currentPageData;
    const painSettingQuestion = questions[0];
    const painFeelingQuestion = questions[1];
    const whoWithQuestion = questions[2];

    return(
        <KeyboardAwareScrollView>
            <JournalQuestion question={painSettingQuestion.question} helpText={painSettingQuestion.helpText} />
            <MultilineTextInput 
                value={painJournal.situation}
                onChangeText={(change) => changeEntry(change, "situation")}
            />
            <JournalQuestion question={painFeelingQuestion.question} helpText={painFeelingQuestion.helpText} />
            <MultilineTextInput
                value={painJournal.feeling}
                onChangeText={(change) => changeEntry(change, "feeling")}
            />
            <JournalQuestion question={whoWithQuestion.question} helpText={whoWithQuestion.helpText} />
            <MultilineTextInput 
                value={painJournal.whoIWasWith}
                onChangeText={(change) => changeEntry(change, "whoIWasWith")}
            />
        </KeyboardAwareScrollView>
    );
};