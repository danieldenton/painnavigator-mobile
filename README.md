# PainNavigator

PainNavigator is a mobile app which utilizes the React-Native library and Expo for making native univeral apps that run on iOS and Android. It employs a server that uses Ruby on the Rails framework deployed on Heroku.

# What is it?

PainNavigator is pain management application that provides a physical and psychological therapy program for dealing with chronic low back pain. It contains two module groups. The first are the education modules which render a video, audio or text component that provide education involving the physical or psychological aspects of chronic pain management. The second group are movement modules, which are render groups of videos that provide physical therapy or yoga exercises. Another feature is the SMART goal which allows users to create their own goals as markers of progress for dealing with the limitations of their chronic pain. The application also encourages obsevration with the three journal features, the pain journal, the mood journal, and the food journal.

# Installation instructions

1. Sign up for a GitPod account at https://www.gitpod.io/ 
2. Download the Expo Go app on your phone. This app is available on iOS as well as Android. You can also run this app on the emulators provided by Xcode (iOS) or Android Studio.
3. Open a GitPod workspace. You will need an invitation to this repository as it is private. It is recommended that you work in a browser, you can however configure GitPod to work on your local code editor. 
4. In the GitPod terminal run the command "npx expo start --tunnel" or if you are working on a locally "npx expo start"
5. When working in the browser the terminal will tell you need to install ngrok globally. Do it.
6. Login to Expo with the PainNavigator account. You will need that password. 
7. Scan the QR code with your camera for iOS or the Expo Go app on Android and this will run your application.

# Testing

After making changes in the code tests should be run. Run the command "yarn test". All tests should pass and if not a detailed report about the failures will show up in the terminal.

# Dependencies

1. expo v 48.0.0 - Last updated Feburary 2023. *This update was important as EAS (Expo Application Services) builds were failing with an earlier version of the SDK.* Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web. It includes a universal runtime and libraries that let you build native apps by writing React and JavaScript.
2. @miblanchard/react-native-slider v 2.1.0 - the slider on the video components
3. @react-native-async-storage/async-storage v 1.17.11 - local storage
4. @react-native-community/slider v 4.4.2 - the slider component appearing throughout the app
5. @react-navigation/bottom-tabs v 6.2.0 - navigation
6. @react-navigation/drawer v 6.4.1 - navigation
7. @react-navigation/native v 6.0.8 - navigation
8. @react-navigation/native-stack v 6.5.0 - I'm not sure this one is being used ***
9. @react-navigation/stack v 6.1.1 - navigation
10. @sentry/react-native v 4.9.0 - Sentry tracks all errors thrown on the deployed app and should be mointored daily at https://painnavigator.sentry.io/ (you will need the PainNavigator login)
11. axios v 0.26.0 - Axios is used for the API calls
12. cloudinary-react v 4.9.0 - The video and audio units are hosted on Cloudinary.
13. date-fns v 2.29.3 - used for counting days and returning a date
14. expo-application v 5.1.1
15. expo-av v 13.2.1
16. expo-constants v 14.2.1
17. expo-device v 5.2.1
18. expo-font v 11.1.1
19. expo-haptics v 12.2.1
20. expo-keep-awake v 12.0.1 - keeps the phone from going into sleep mode
21. expo-localization v 14.1.1 - provides the local timezone for the user
22. expo-screen-orientation v 5.1.1
23. expo-splash-screen v 0.18.1
24. expo-status-bar v 1.4.4
25. expo-updates v 0.16.3