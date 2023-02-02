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

  const user = {"user":{"uid":"6Iw0r8lNxmQ8MDt5hipTI4xrZNA2"}}
  // {"operationType":"signIn","credential":null,"additionalUserInfo":{"isNewUser":false,"providerId":"password","profile":{}},"user":{"uid":"6Iw0r8lNxmQ8MDt5hipTI4xrZNA2","email":"test3@user.com","emailVerified":false,"isAnonymous":false,"providerData":[{"providerId":"password","uid":"test3@user.com","displayName":null,"email":"test3@user.com","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"APJWN8fA6s9PloQbgTeYqEIhTxX8yyV_KOWUr35cgyXOF5Fj02TKe3ryXF1FfDZqI1upZckPiKMwxR5nCxnCBDx_buPLLvIz9nmBALurPphyCzlbXGQSUK11azZT-zECz-Ldsi-GkRquY7igJd3kusTNLGuE1v6-eGisR-mpBuYhgy25XtRbaF2IFbum26ekFj5Mjkc_s5g6_Hux9mXDPfd3rxzIgkWpBw","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImQwNWI0MDljNmYyMmM0MDNlMWY5MWY5ODY3YWM0OTJhOTA2MTk1NTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcGFpbm5hdmlnYXRvci1jY2FiZCIsImF1ZCI6InBhaW5uYXZpZ2F0b3ItY2NhYmQiLCJhdXRoX3RpbWUiOjE2NzUzNjM0MDAsInVzZXJfaWQiOiI2SXcwcjhsTnhtUThNRHQ1aGlwVEk0eHJaTkEyIiwic3ViIjoiNkl3MHI4bE54bVE4TUR0NWhpcFRJNHhyWk5BMiIsImlhdCI6MTY3NTM2MzQwMCwiZXhwIjoxNjc1MzY3MDAwLCJlbWFpbCI6InRlc3QzQHVzZXIuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInRlc3QzQHVzZXIuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.JNQEVKLEWGeKe9ScJ45rL7qVV77yal7KVuMSJ3f_mJjMDMnlbAYecnlwmnWX4Xay356pgdp96UdCjDbiu4z3aAhPEYz6XiM0ZE15IpwLAceW49f3UAl5XfPQ_WRO1gYBLvYVLI84MWhUUof4Pty8OVNS2ogif7O7IDZ5sMChgUmw5cFL029_2QziR719zqTEYPSLjlq_1LAjlRbfvcexq-Ras1QqHiGVnykdo9c546PcHMAJEb9BCnSur2S7BN3b9KrVo5m1RE4Q3MZ51DLk7KWrzFyJLVZu90uE59DKdif5cjnfcqOVCvq4rdAx_zhZHqgm3_MrhezYb12xWpZ9UA","expirationTime":1675367000798},"createdAt":"1674508422963","lastLoginAt":"1675363400747","apiKey":"AIzaSyCzgZ9b1f-a-wYoGeelMvZfbFvjs2amnL0","appName":"[DEFAULT]"}}
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