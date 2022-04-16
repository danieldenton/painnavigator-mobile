import { fireEvent } from '@testing-library/react-native';
import { renderWithContext } from '../../../../test-utils';
import { NewMoodJournalScreen } from "../screens/new-mood-journal.screen";

describe('Mood journal pages are correct', () => {
    test('First page loads with correct data', () => {
        const { getByText, getByRole, getByPlaceholderText } = renderWithContext(<NewMoodJournalScreen />);
        const feelingQuestion = getByText('How are you feeling today?');
        const feelingInput = getByPlaceholderText('Feeling');
        const nextButton = getByRole('button', { name: /next/i });
    });
});
