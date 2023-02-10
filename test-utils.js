import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme"
import { AuthenticationContext } from './src/services/authentication/authentication.context';
import { ProfileContext } from './src/services/profile/profile-context';
import { BookmarksContextProvider } from './src/services/bookmarks/bookmarks.context';
import { EducationContext} from './src/services/education/education.context';
import { MovementContext } from './src/services/movement/movement.context';
import { SmartGoalContext } from './src/services/smart-goal/smart-goal.context';
import { PainJournalContext } from './src/services/pain-journal/pain-journal.context';
import { FoodJournalContext } from './src/services/food-journal/food-journal.context';
import { MoodJournalContext} from './src/services/mood-journal/mood-journal.context';
import { WellnessCoachContext} from './src/services/wellness-coach/wellness-coach.context';
import { FavoriteActivitiesContextProvider } from './src/services/favorite-activities/favorite-activities.context';
import { NavigationContainer } from '@react-navigation/native';
import { movementModules } from './src/features/movement/data'



const Providers = ({children}) => {

  
  const authenticationContextValueProvider =  {"user": {"user":{"uid":"6Iw0r8lNxmQ8MDt5hipTI4xrZNA2"}}}
  const smartGoalContextValueProvider = { "activeGoal": {
    "id": 54,
    "goal": "test",
    "steps": "test",
    "reward": "test",
    "end_date": null,
    "date_time_value": 1675737571419.8752,
    "status": "active",
    "goal_updates": []
   }
  }
  const profileContextValueProvider = {"userInfo": {}}
  const wellnessCoachContextValueProvider = {"message": {}}
  const educationContextValueProvider = {"educationProgress": 1}
  const movementContextValueProvider = {"movementProgress": movementModules.find(module => module.id === movementProgress)}
  const painJournalContextValueProvider = {"painJournals": []}
  const moodJournalContextValueProvider = {"moodJournals": []}
  const foodJournalContextValueProvider = {"foodJournals": []}
    return (
        <ThemeProvider theme={theme}>
        <AuthenticationContext.Provider value={authenticationContextValueProvider}>
          <ProfileContext.Provider value={profileContextValueProvider}>
            <BookmarksContextProvider>
              <EducationContext.Provider value={educationContextValueProvider}>
                <MovementContext.Provider value={movementContextValueProvider}>
                  <SmartGoalContext.Provider value={smartGoalContextValueProvider}>
                    <PainJournalContext.Provider value={painJournalContextValueProvider}>
                      <FoodJournalContext.Provider value={foodJournalContextValueProvider}>
                        <MoodJournalContext.Provider value={moodJournalContextValueProvider}>
                          <WellnessCoachContext.Provider value={wellnessCoachContextValueProvider}>
                            <FavoriteActivitiesContextProvider>
                              <NavigationContainer>
                              {children}
                              </NavigationContainer>
                            </FavoriteActivitiesContextProvider>
                          </WellnessCoachContext.Provider>
                        </MoodJournalContext.Provider>
                      </FoodJournalContext.Provider>
                    </PainJournalContext.Provider>
                  </SmartGoalContext.Provider>
                </MovementContext.Provider>
              </EducationContext.Provider>
            </BookmarksContextProvider>
          </ProfileContext.Provider>
        </AuthenticationContext.Provider>
      </ThemeProvider>
    )
};

export const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options});

export * from '@testing-library/react-native'

export {renderWithContext as render}