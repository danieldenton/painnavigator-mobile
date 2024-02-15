import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme"
import { AuthenticationContext } from './src/services/authentication/authentication.context';
import { ProfileContextProvider } from './src/services/profile/profile-context';
import { BookmarksContextProvider } from './src/services/bookmarks/bookmarks.context';
import { EducationContextProvider } from './src/services/education/education.context';
import { MovementContextProvider } from './src/services/movement/movement.context';
import { SmartGoalContext } from './src/services/smart-goal/smart-goal.context';
import { PainJournalContextProvider } from './src/services/pain-journal/pain-journal.context';
import { FoodJournalContextProvider } from './src/services/food-journal/food-journal.context';
import { MoodJournalContextProvider } from './src/services/mood-journal/mood-journal.context';
import { WellnessCoachContextProvider} from './src/services/wellness-coach/wellness-coach.context';
import { FavoriteActivitiesContextProvider } from './src/services/favorite-activities/favorite-activities.context';
import { NavigationContainer } from '@react-navigation/native';

const Providers = ({children}) => {

  
  const authenticationContextValueProvider =  {"user": {"user":{"uid":"bLoeq82MXWacR4N42bcweyrA08X2"}}}
  // const smartGoalContextValueProvider = { "activeGoal": {
  //   "id": 54,
  //   "goal": "test",
  //   "steps": "test",
  //   "reward": "test",
  //   "end_date": null,
  //   "date_time_value": 1675737571419.8752,
  //   "status": "active",
  //   "goal_updates": []
  //  }
  // }

    return (
       <ThemeProvider theme={theme}>
       <AuthenticationContext.Provider value={authenticationContextValueProvider}>
         <ProfileContextProvider>
           <BookmarksContextProvider>
             <EducationContextProvider>
               <MovementContextProvider>
                 <SmartGoalContext.Provider>
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
                 </SmartGoalContext.Provider>
               </MovementContextProvider>
             </EducationContextProvider>
           </BookmarksContextProvider>
         </ProfileContextProvider>
       </AuthenticationContext.Provider>
     </ThemeProvider>
    )
};

const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options});

export * from '@testing-library/react-native'

export {renderWithContext as render}