import { JournalQuestion } from './journal-question.component'
import { IntensitySlider } from './slider.component';

export const JournalQuestionAndIntensitySlider = ({ question, helpText, value, state, setState }) => {
    return (
        <>
            <JournalQuestion 
                question={question}
                helpText={helpText}
            />
            <IntensitySlider 
                value={value} 
                setState={setState}
                state={state}
            />
        </> 
    );
}