import { JournalQuestion } from "./journal-question.component"
import { TextInputMedium } from "./text-input.component"

export const QuestionAndInput = ({ question, input} ) => {
    return (<>
        <JournalQuestion question={question.question} helpText={question.helpText} />
            <TextInputMedium
                value={question.value}
                onChangeText={(change) => input(change, question.inputSting)}   
                accessibilityLabel={question.accessibilityLabel}
            />
            </>)
}