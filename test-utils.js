import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme"
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { ProfileContextProvider } from './src/services/profile/profile-context';
import { BookmarksContextProvider } from './src/services/bookmarks/bookmarks.context';
import { EducationContextProvider } from './src/services/education/education.context';
import { MovementContextProvider } from './src/services/movement/movement.context';
import { SmartGoalContextProvider } from './src/services/smart-goal/smart-goal.context';
import { PainJournalContextProvider } from './src/services/pain-journal/pain-journal.context';
import { FoodJournalContextProvider } from './src/services/food-journal/food-journal.context';
import { MoodJournalContextProvider } from './src/services/mood-journal/mood-journal.context';
import { WellnessCoachContextProvider } from './src/services/wellness-coach/wellness-coach.context';
import { FavoriteActivitiesContextProvider } from './src/services/favorite-activities/favorite-activities.context';
import { NavigationContainer } from '@react-navigation/native';



const Providers = ({children}) => {

  const user = { user: { uid: "6Iw0r8lNxmQ8MDt5hipTI4xrZNA2" } }

    return (
        <ThemeProvider theme={theme}>
        <AuthenticationContextProvider value={user}>
          <ProfileContextProvider>
            <BookmarksContextProvider>
              <EducationContextProvider>
                <MovementContextProvider>
                  <SmartGoalContextProvider>
                    <PainJournalContextProvider>
                      <FoodJournalContextProvider>
                        <MoodJournalContextProvider>
                          <WellnessCoachContextProvider>
                            <FavoriteActivitiesContextProvider>
                              <NavigationContainer>
                              {children}
                              </NavigationContainer>
                            </FavoriteActivitiesContextProvider>
                          </WellnessCoachContextProvider>
                        </MoodJournalContextProvider>
                      </FoodJournalContextProvider>
                    </PainJournalContextProvider>
                  </SmartGoalContextProvider>
                </MovementContextProvider>
              </EducationContextProvider>
            </BookmarksContextProvider>
          </ProfileContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    )
};

export const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options});