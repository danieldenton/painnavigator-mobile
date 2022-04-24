import { fireEvent } from '@testing-library/react-native';
import { renderWithContext } from '../../../../test-utils';
import { NewMoodJournalScreen } from "../screens/new-mood-journal.screen";
import { theme } from "../../../infrastructure/theme";

describe('Mood journal pages are correct', () => {
    test('First page loads with correct data', () => {
        const { getByText, getByRole, getByLabelText } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        expect(getByText('How are you feeling today?')).toBeDefined();
        const feelingInput = getByLabelText('feeling-input');
        expect(feelingInput.props.value).toBe('');
        const nextButton = getByRole('button', { name: /next/i });
        expect(nextButton.props.disabled).toBeUndefined();
    });

    test('User can enter feeling on page 1', () => {
        const { getByLabelText, getByRole } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        
        // User can enter text which will enable submit button
        const feelingInput = getByLabelText('feeling-input');
        fireEvent.changeText(feelingInput, 'Happy');
        expect(feelingInput.props.value).toBe('Happy');
        const nextButton = getByRole('button', { name: /next/i });
        expect(nextButton.props.disabled).toBeFalsy();

        // Clearing text will disable submit button
        fireEvent.changeText(feelingInput, '');
        expect(feelingInput.props.value).toBe('');
        expect(nextButton.props.disabled).toBeUndefined();
    });

    test('User can navigate between mood journal pages', () => {
        const { getByLabelText, getByText, getByRole } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        const nextButton = getByRole('button', { name: /next/i });

        // User enters text into feeling input and presses 'next'
        const feelingInput = getByLabelText('feeling-input');
        fireEvent.changeText(feelingInput, 'Happy');
        fireEvent.press(nextButton);

        // Page 2 loads feeling intensity question - default value of 5 is displayed
        expect(getByText('How intense is this feeling?')).toBeDefined();
        const intensitySlider = getByLabelText('intensity-slider');
        expect(intensitySlider.props.value).toBe(5);
        // TODO: .change resulting in "fireEvent.change is not a function" error 
        // fireEvent.change(intensitySlider, { target: { value: 8 } });
        // expect(intensitySlider.props.value).toBe(8);
        fireEvent.press(nextButton);

        // Expect to be on page 3
        expect(getByText('What was the situation when you first noticed this feeling?')).toBeDefined();

        // User presses previous page button and expects to be on page 2
        const previousPageButton = getByLabelText('previous-page');
        fireEvent.press(previousPageButton);
        expect(getByText('How intense is this feeling?')).toBeDefined();

        fireEvent.press(nextButton);
        
        
        const situationQuestion = getByText('What was the situation when you first noticed this feeling?');
        const situationInput = getByTestId('situation');
        fireEvent.changeText(situationInput, 'At home');
        fireEvent.press(nextButton);
        
        const whoWereYouWithQuestion = getByText('Who were you with?');
       
        fireEvent.press(nextButton);
        const primaryThoughtQuestion = getByText('What was the primary thought that gave rise to this feeling?');
       
        fireEvent.press(nextButton);
        const cognitiveDistortionQuestion = getByText('Identify any cognitive distortions');
    });

});
