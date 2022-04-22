import { fireEvent } from '@testing-library/react-native';
import { renderWithContext } from '../../../../test-utils';
import { NewMoodJournalScreen } from "../screens/new-mood-journal.screen";
import { theme } from "../../../infrastructure/theme";

describe('Mood journal pages are correct', () => {
    test('First page loads with correct data', () => {
        const { getByText, getByRole, getByTestId } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        const feelingQuestion = getByText('How are you feeling today?');
        const feelingInput = getByTestId('feeling');
        const nextButton = getByRole('button', { name: /next/i });
    });

    test('User can enter feeling on page 1', () => {
        const { getByTestId, getByDisplayValue } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        const feelingInput = getByTestId('feeling');
        fireEvent.changeText(feelingInput, 'Happy');
        const response = getByDisplayValue('Happy')
    });

    test('User can navigate between pages', () => {
        const { getByTestId, getByText, getByRole } = renderWithContext(<NewMoodJournalScreen theme={theme} />);
        const nextButton = getByRole('button', { name: /next/i });
        
        const feelingInput = getByTestId('feeling');
        fireEvent.changeText(feelingInput, 'Happy');
        
        fireEvent.press(nextButton);
        const intensityQuestion = getByText('How intense is this feeling?');
        fireEvent.press(nextButton);

        const previousPageButton = getByTestId('previous-page');
        fireEvent.press(previousPageButton);

        const intensityValue = getByText('5');
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
