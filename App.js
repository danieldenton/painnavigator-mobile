import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { ProfileContextProvider } from "./src/services/profile/profile-context";
import { BookmarksContextProvider } from "./src/services/bookmarks/bookmarks.context";
import { EducationContextProvider } from "./src/services/education/education.context";
import { MovementContextProvider } from "./src/services/movement/movement.context";
import { PainJournalContextProvider } from "./src/services/pain-journal/pain-journal.context";
import { FoodJournalContextProvider } from "./src/services/food-journal/food-journal.context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation/index";

const firebaseConfig = {
  apiKey: "AIzaSyCzgZ9b1f-a-wYoGeelMvZfbFvjs2amnL0",
  authDomain: "painnavigator-ccabd.firebaseapp.com",
  projectId: "painnavigator-ccabd",
  storageBucket: "painnavigator-ccabd.appspot.com",
  messagingSenderId: "479858520400",
  appId: "1:479858520400:web:aabfba6f7058a798d0fc55",
  measurementId: "G-5565KEDFC6"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <ProfileContextProvider>
            <BookmarksContextProvider>
              <EducationContextProvider>
                <MovementContextProvider>
                  <PainJournalContextProvider>
                    <FoodJournalContextProvider>
                      <Navigation />
                    </FoodJournalContextProvider>
                  </PainJournalContextProvider>
                </MovementContextProvider>
              </EducationContextProvider>
            </BookmarksContextProvider>
          </ProfileContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
