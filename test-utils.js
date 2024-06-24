import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import { ProfileContextProvider } from "./src/services/profile/profile-context";
import { EducationContextProvider } from "./src/services/education/education.context";
import { MovementContextProvider } from "./src/services/movement/movement.context";
import { OnboardContextProvider } from "./src/services/onboard.context";
import { OutcomeContextProvider } from "./src/services/outcome.context";
import { WellnessCoachContextProvider } from "./src/services/wellness-coach.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { DailyPainContextProvider } from "./src/services/daily-pain/daily-pain.context";
import { BookmarksContextProvider } from "./src/services/bookmarks/bookmarks.context";
import { SmartGoalContextProvider } from "./src/services/smart-goal/smart-goal.context";
import { PainJournalContextProvider } from "./src/services/pain-journal/pain-journal.context";
import { FoodJournalContextProvider } from "./src/services/food-journal.context";
import { MoodJournalContextProvider } from "./src/services/mood-journal.context";
import { FavoriteActivitiesContextProvider } from "./src/services/favorite-activities/favorite-activities.context";
import { NavigationContainer } from "@react-navigation/native";

const Providers = ({ children }) => {
  const authenticationContextValueProvider = {
    uid: "86VEnz5oaSSxMUOODN1VGxiqeMA2",
  };

  return (
    <ThemeProvider theme={theme}>
      <ProfileContextProvider>
        <EducationContextProvider>
          <MovementContextProvider>
            <OnboardContextProvider>
              <OutcomeContextProvider>
                <WellnessCoachContextProvider>
                  <AuthenticationContextProvider>
                    <DailyPainContextProvider>
                      <BookmarksContextProvider>
                        <SmartGoalContextProvider>
                          <PainJournalContextProvider>
                            <FoodJournalContextProvider>
                              <MoodJournalContextProvider>
                                <FavoriteActivitiesContextProvider>
                                  <NavigationContainer>
                                    {children}
                                  </NavigationContainer>
                                </FavoriteActivitiesContextProvider>
                              </MoodJournalContextProvider>
                            </FoodJournalContextProvider>
                          </PainJournalContextProvider>
                        </SmartGoalContextProvider>
                      </BookmarksContextProvider>
                    </DailyPainContextProvider>
                  </AuthenticationContextProvider>
                </WellnessCoachContextProvider>
              </OutcomeContextProvider>
            </OnboardContextProvider>
          </MovementContextProvider>
        </EducationContextProvider>
      </ProfileContextProvider>
    </ThemeProvider>
  );
};

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";

export { renderWithContext as render };
