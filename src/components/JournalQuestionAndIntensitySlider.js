import { JournalQuestion } from './journal-question.component'
import { IntensitySlider } from './slider.component';

export const JournalQuestionAndIntensitySlider = ({ question, helpText, value, onValueChange, state }) => {
    return (
        <>
            <JournalQuestion 
                question={question}
                helpText={helpText}
            />
            <IntensitySlider 
                value={value} 
                onValueChange={onValueChange} 
                state={state}
            />
        </> 
    );
}