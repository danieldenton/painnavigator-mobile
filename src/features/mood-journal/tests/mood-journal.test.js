import { render, fireEvent, screen } from '@testing-library/react-native';
import { renderWithContext } from '../../../../test-utils';
import { NewMoodJournalScreen } from "../screens/new-mood-journal.screen";

describe('Mood journal pages are correct', () => {
    test('First page loads with correct data', () => {
        const { getByText } = renderWithContext(<NewMoodJournalScreen />);
        const feeling = getByText('Feeling');
    });
});