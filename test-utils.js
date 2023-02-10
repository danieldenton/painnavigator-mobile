import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from "./src/infrastructure/theme"
import { AuthenticationContext } from './src/services/authentication/authentication.context';
import { ProfileContext, ProfileContextProvider } from './src/services/profile/profile-context';
import { BookmarksContextProvider } from './src/services/bookmarks/bookmarks.context';
import { EducationContext, EducationContextProvider} from './src/services/education/education.context';
import { MovementContext, MovementContextProvider } from './src/services/movement/movement.context';
import { SmartGoalContext } from './src/services/smart-goal/smart-goal.context';
import { PainJournalContext, PainJournalContextProvider } from './src/services/pain-journal/pain-journal.context';
import { FoodJournalContext, FoodJournalContextProvider } from './src/services/food-journal/food-journal.context';
import { MoodJournalContext, MoodJournalContextProvider } from './src/services/mood-journal/mood-journal.context';
import { WellnessCoachContext, WellnessCoachContextProvider} from './src/services/wellness-coach/wellness-coach.context';
import { FavoriteActivitiesContextProvider } from './src/services/favorite-activities/favorite-activities.context';
import { NavigationContainer } from '@react-navigation/native';
import { movementModules } from './src/features/movement/data/movement-modules-data.json'



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
  // const profileContextValueProvider = {"userInfo": {}}
  // const wellnessCoachContextValueProvider = {"message": {}}
  // const educationContextValueProvider = {"educationProgress": 1}
  // let movementProgress = 1
  // const movementContextValueProvider = {"currentModule": movementModules.find(module => module.id === movementProgress)}
  // const painJournalContextValueProvider = {"painJournals": []}
  // const moodJournalContextValueProvider = {"moodJournals": []}
  // const foodJournalContextValueProvider = {"foodJournals": []}
    return (
      //   <ThemeProvider theme={theme}>
      //   <AuthenticationContext.Provider value={authenticationContextValueProvider}>
      //     <ProfileContext.Provider value={profileContextValueProvider}>
      //       <BookmarksContextProvider>
      //         <EducationContext.Provider value={educationContextValueProvider}>
      //           <MovementContextProvider>
      //             <SmartGoalContext.Provider value={smartGoalContextValueProvider}>
      //               <PainJournalContext.Provider value={painJournalContextValueProvider}>
      //                 <FoodJournalContext.Provider value={foodJournalContextValueProvider}>
      //                   <MoodJournalContext.Provider value={moodJournalContextValueProvider}>
      //                     <WellnessCoachContext.Provider value={wellnessCoachContextValueProvider}>
      //                       <FavoriteActivitiesContextProvider>
      //                         <NavigationContainer>
      //                         {children}
      //                         </NavigationContainer>
      //                       </FavoriteActivitiesContextProvider>
      //                     </WellnessCoachContext.Provider>
      //                   </MoodJournalContext.Provider>
      //                 </FoodJournalContext.Provider>
      //               </PainJournalContext.Provider>
      //             </SmartGoalContext.Provider>
      //           </MovementContextProvider>
      //         </EducationContext.Provider>
      //       </BookmarksContextProvider>
      //     </ProfileContext.Provider>
      //   </AuthenticationContext.Provider>
      // </ThemeProvider>
       <ThemeProvider theme={theme}>
       <AuthenticationContext.Provider value={authenticationContextValueProvider}>
         <ProfileContextProvider>
           <BookmarksContextProvider>
             <EducationContextProvider>
               <MovementContextProvider>
                 <SmartGoalContext.Provider value={smartGoalContextValueProvider}>
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

export const renderWithContext = (ui, options) => 
	render(ui, { wrapper: Providers, ...options});

export * from '@testing-library/react-native'

export {renderWithContext as render}