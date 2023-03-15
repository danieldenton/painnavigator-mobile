import { JournalQuestion } from "./journal-question.component"
import { TextInputMedium } from "./text-input.component"

export const QuestionAndInput = ({ question, input }) => {
    return (<>
        <JournalQuestion question={question.question} helpText={question.helpText} />
            <TextInputMedium
                onChangeText={(change) => input(change, question.state)}   
                accessibilityLabel={"answer-input"}
            />
            </>)
}