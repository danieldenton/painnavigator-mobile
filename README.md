# PainNavigator 1.4.8

PainNavigator is a mobile app which utilizes the React-Native library and Expo for making native universal apps that run on iOS and Android. It employs a server that uses Ruby on the Rails framework deployed on Heroku.

What's new on v1.4.8?
1. Expo SDK updated to 48
2. React updated to 18
3. Amplitude tracking re-added
4. Minor bug fixes

# What is it?

PainNavigator is pain management application that provides a physical and psychological therapy program for dealing with chronic low back pain. It contains two module groups. The first are the education modules which render a video, audio or text component that provide education involving the physical or psychological aspects of chronic pain management. The second group are movement modules, which are render groups of videos that provide physical therapy or yoga exercises. Another feature is the SMART goal which allows users to create their own goals as markers of progress for dealing with the limitations of their chronic pain. The application also encourages obsevration with the three journal features, the pain journal, the mood journal, and the food journal.

# Installation instructions

1. Sign up for a GitPod account at https://www.gitpod.io/ 
2. Download the Expo Go app on your phone. This app is available on iOS as well as Android. You can also run this app on the emulators provided by Xcode (iOS) or Android Studio. but it is probably best to run it on an actual device.
3. Open a GitPod workspace. You will need an invitation to this repository as it is private. It is recommended that you work in a browser, you can however configure GitPod to work on your local code editor. 
4. In the GitPod terminal run the command "npx expo start --tunnel" or if you are working on a locally "npx expo start"
5. When working in the browser the terminal will tell you need to install eas-cli and then ngrok globally. Do it. It may not require eas-cli at first but to run any eas commands you will need it later. To install it type commandnpm i eas-cli -g".
6. Login to Expo with the PainNavigator account. You will need that password. 
7. Scan the QR code with your camera for iOS or the Expo Go app on Android and this will run your application.

# Dependencies

To add sany new depencies use the command "yarn add". Do not use npm as that will create another lock file which we do not want.
To add a global depency in you GitPod you should use npm

1. expo v48.0.0 - Last updated Feburary 2023. *This update was important as EAS (Expo Application Services) builds were failing with an earlier version of the SDK.* Expo is an open-source platform for making universal native apps that run on Android, iOS, and the web. It includes a universal runtime and libraries that let you build native apps by writing React and JavaScript.
2. @miblanchard/react-native-slider v2.1.0 - the slider on the video components
3. @react-native-async-storage/async-storage v1.17.11 - local storage
4. @react-native-community/slider v4.4.2 - the slider component appearing throughout the app
5. @react-navigation/bottom-tabs v6.2.0 - navigation
6. @react-navigation/drawer v6.4.1 - navigation
7. @react-navigation/native v6.0.8 - navigation
8. @react-navigation/native-stack 6.5.0 - I'm not sure this one is being used ***
9. @react-navigation/stack v6.1.1 - navigation
10. @sentry/react-native v4.9.0 - Sentry tracks all errors thrown on the deployed app and should be mointored daily at https://painnavigator.sentry.io/ (you will need the PainNavigator login)
11. axios v0.26.0 - Axios is used for the API calls.
12. cloudinary-react v4.9.0 - The video and audio units are hosted on Cloudinary.
13. date-fns v2.29.3 - used for counting days and returning a date
14. expo-application v5.1.1
15. expo-av v13.2.1
16. expo-constants v14.2.1
17. expo-device v5.2.1
18. expo-font v11.1.1
19. expo-haptics v12.2.1
20. expo-keep-awake v12.0.1 - keeps the phone from going into sleep mode
21. expo-localization v14.1.1 - provides the local timezone for the user
22. expo-screen-orientation v5.1.1
23. expo-splash-screen v0.18.1
24. expo-status-bar v1.4.4
25. expo-updates v0.16.3
26. firebase v9.6.10 - firebase is used for auth encryption
27. intl v1.2.5 - provides timezone information as well as date formatting
28. jest v29.2.1 - test runnner as well as test library
29. jest-expo v48.0.0 - test runnner as well as test library
30. lodash v4.17.21
31. react v18.2.0 - library using JSX  to break code down into reusable components as well as fast rendering
32. react-dom v18.2.0
33. react-native v0.71.3 - React for devolping on iOS and Android platforms. Last updated on 3/22/23
34. react-native-cached-image v1.4.3
35. react-native-circular-progress v1.3.7
36. react-native-confetti v0.1.0
37. react-native-dashed-line v1.1.0
38. react-native-dotenv v3.3.1 - required for the dotenv file
39. react-native-gesture-handler v2.9.0
40. react-native-get-random-values v1.8.0
41. react-native-keyboard-aware-scroll-view v0.9.5
42. react-native-pager-view v6.1.2
44. react-native-paper v4.11.2
45. react-native-progress-bar-animated v1.0.6
46. react-native-reanimated v2.14.4
47. react-native-safe-area-context v4.5.0
48. react-native-screens v3.20.0
49. react-native-svg v13.4.0
50. react-native-web v0.18.11
51. react-native-webview v11.26.0
52. sentry-expo v6.0.0 - see above for Sentry details. Both Sentry for React-Native and Expo needed.
53. styled-components v5.3.3 - create components with styling added
54. victory-native v - 36.3.2

# Dev Dependencies

1. @babel/core v7.20.0
2. @testing-library/jest-dom v5.16.5 - Check to see if this can be removed
3. @testing-library/jest-native v4.0.4
4. @testing-library/react-native v11.5.1 - Testing Library is the primary testing library used for testing React/React Native code.
5. msw v1.0.0 - Mock Service Worker is for micking API calls
6. react-native-clean-project v4.0.1 - See if this should be removed.
7. react-test-renderer v17.0.2

# Testing

After making changes in the code tests should be run. Run the command "yarn test". All tests should pass and if not a detailed report about the failures will show up in the terminal.

# Map of Directories

The root directory of this project contains the standard React Native files, App.js, app.json, package.json, etc. It also contans the node_modules and assets directories as well as a couple auto-generated expo directories. It is the src directory which could use a brief explanation. 
Contained in this folder are a few utility files as well as 5 directories:

1. features: This is where the screens and components rendered on the device are found. Within the directory each feature has it's own directory which includes 2-4 additional directories. The screens directory contains all screen files which render the total screen including additional components. The components directory, (not to be confused with the components directory outside of the features directory) contains the component files specifically related to this feature. The tests directory will contain all test files. Not every feature will have these as testing implementation is still in progress. And finally a data folder. This will only appear in a few features.

2. components: The is where components used by multiple features will be found.

3. infastructure: This directory contains a navigation directory, for all navigation, a theme directory for some repeat stylings as well as a helper function file.

4. mocks: This is specifically for Mock Service Worker which mocks API calls for testing

5. services: This directory contains a directory for each feature which contains 2 more directories. The context files contain all global context. The service files make all of the API calls. In some of these there are additional data files.