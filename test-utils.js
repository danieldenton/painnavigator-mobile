import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme"
import { MoodJournalContextProvider } from './src/services/mood-journal/mood-journal.context';

const Providers = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <MoodJournalContextProvider>
                {children}
            </MoodJournalContextProvider>
        </ThemeProvider>
    )
};

export const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options});