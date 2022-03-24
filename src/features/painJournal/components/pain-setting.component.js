import React, { useContext } from "react";
// TODO: find something less janky than keyboardawarescrollview
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Question, Input } from "./pain-journal.styles";
import { PainJournalContext } from "../../../services/pain-journal/pain-journal.context";

export const PainSetting = () => {
    const { currentQuestionData, painJournal, setPainJournal } = useContext(PainJournalContext);
    const { questions } = currentQuestionData;
    const painSettingQuestion = questions[0];
    const painFeelingQuestion = questions[1];
    const whoWithQuestion = questions[2];

    const handleChange = (change, name) => {
        setPainJournal(journal => ({
            ...journal,
            [name]: change
        }));
    };

    return(
        <KeyboardAwareScrollView>
            <Question question={painSettingQuestion.question} helpText={painSettingQuestion.helpText} />
            <Input 
                value={painJournal.painSetting}
                onChangeText={(change) => handleChange(change, "painSetting")}
            />
            <Question question={painFeelingQuestion.question} helpText={painFeelingQuestion.helpText} />
            <Input
                value={painJournal.painFeeling}
                onChangeText={(change) => handleChange(change, "painFeeling")}
            />
            <Question question={whoWithQuestion.question} helpText={whoWithQuestion.helpText} />
            <Input 
                value={painJournal.whoWith}
                onChangeText={(change) => handleChange(change, "whoWith")}
            />
        </KeyboardAwareScrollView>
    );
};