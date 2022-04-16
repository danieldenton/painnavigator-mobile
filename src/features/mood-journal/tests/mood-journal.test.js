import { renderWithContext } from '../../../../test-utils';
import { NewMoodJournalScreen } from "../screens/new-mood-journal.screen";

describe('Mood journal pages are correct', () => {
    test('First page loads with correct data', () => {
        const { getByText, getByRole } = renderWithContext(<NewMoodJournalScreen />);
        const feelingQuestion = getByText('How are you feeling today?');
        const nextButton = getByRole('button', { name: /next/i })
    });
});