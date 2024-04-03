# PainNavigator 1.5.30

PainNavigator is a mobile app which utilizes the React-Native library and Expo for making native universal apps that run on iOS and Android. It employs a server that uses Ruby on the Rails framework deployed on Heroku.

What's new on 1.5.30?
1. Expo SDK upgraded from SDK 49 to 50.

# What is it?

PainNavigator is pain management application that provides a physical and psychological therapy program for dealing with chronic low back pain. It contains two module groups. The first are the education modules which render a video, audio or text component that provide education involving the physical or psychological aspects of chronic pain management. The second group are movement modules, which are render groups of videos that provide physical therapy or yoga exercises. Another feature is the SMART goal which allows users to create their own goals as markers of progress for dealing with the limitations of their chronic pain. The application also encourages obsevration with the three journal features, the pain journal, the mood journal, and the food journal.

# Installation instructions

1. Download the Expo Go app on your phone. This app is available on iOS as well as Android. You can also run this app on the emulators provided by Xcode (iOS) or Android Studio. but it is probably best to run it on an actual device.
2. If you're using a GitPod terminal run the command "npx expo start --tunnel" or if you are working on a locally "npx expo start"
3. Login to Expo with the PainNavigator account. You will need that password. 
4. Scan the QR code with your camera for iOS or the Expo Go app on Android and this will run your application.

# Misc

 *** If the production builds are crashing and the development builds are working correctly, try running 'npx expo start --no-dev --minify'

# Dependencies

To add any new depencies use "yarn add" or "npx expo install". Do not use npm.
To add a global depency in you GitPod you should use npm

2. @expo-google-fonts/inter ^0.2.2
3. @expo-google-fonts/poppins ^0.2.2
4. @expo/metro-runtime ^3.1.1
5. @gorhom/bottom-sheet ^4
6. @miblanchard/react-native-slider ^2.1.0 - Slider for video player.
7. @react-native-async-storage/async-storage 1.21.0 - Only the user should use local storage. Everything else should come from the backend.
8. @react-native-community/masked-view ^0.1.11
9. @react-native-community/slider 4.4.2 - This is used for the intensity slider.
10. @react-navigation/bottom-tabs ^6.2.0
11. @react-navigation/drawer ^6.6.6
12. @react-navigation/native ^6.1.9
13. @react-navigation/stack ^6.1.1
14. @sentry/react-native 5.16.0
15. axios ^0.26.0 - Axios is used for all API calls.
16. cloudinary-react ^1.7.1 - Cloudinary is used for video starage.
17. date-fns ^2.29.3 - date-fns is used to add dates according to a calendar.
18. expo ^50.0.3 - Expo SDK 50 last updated 1/23/24.
19. expo-application ~5.8.3
20. expo-av ~13.10.3 - Expo AV is used for the audio and video players.
21. expo-constants ~15.4.5
22. expo-device ~5.9.3 - Expo device is needed for expo-screen-orientaion.
23. expo-haptics ~12.8.1
24. expo-keep-awake ~12.8.2
25. expo-localization ~14.8.3 - for timeones.
26. expo-notifications ~0.27.4 - for Expo push notifications.
27. expo-screen-orientation ~6.4.1 - This is specifically to turn the video player fullscreen when the phone is tilted to landscape.
28. expo-splash-screen ~0.26.3
29. expo-status-bar ~1.11.1
30. expo-task-manager ~11.7.0
31. expo-updates ~0.24.8
32. firebase ^9.6.10 - Firebase is used for authentication.
33. intl ^1.2.5 - for dates.
34. lodash ^4.17.21
35. react 18.2.0
36. react-dom 18.2.0
37. react-native 0.73.2
38. react-native-cached-image ^1.4.3
39. react-native-circular-progress ^1.3.7
40. react-native-confetti ^0.1.0
41. react-native-dashed-line ^1.1.0
42. react-native-dotenv ^3.3.1
43. react-native-gesture-handler ~2.14.0
44. react-native-get-random-values ~1.8.0
45. react-native-keyboard-aware-scroll-view ^0.9.5
46. react-native-pager-view 6.2.3
47. react-native-paper ^4.11.2
48. react-native-progress-bar-animated ^1.0.6
49. react-native-reanimated ~3.6.1
50. react-native-safe-area-context 4.8.2
51. react-native-screens ~3.29.0
52. react-native-svg 14.1.0
53. react-native-web ~0.19.6
54. react-native-webview 13.6.4
55. styled-components ^5.3.3
56. victory-native ^36.3.2
    
# DevDependencies

1. @babel/core ^7.20.0
2. @testing-library/jest-dom ^5.16.5
3. @testing-library/jest-native ^4.0.4
4. @testing-library/react-native ^11.5.1
5. jest ^29.2.1
6. jest-expo ~50.0.1
7. msw ^1.0.0
8. react-test-renderer 17.0.2
    
# Testing

After making changes in the code tests should be run. Run the command "yarn test". All tests should pass and if not a detailed report about the failures will show up in the terminal.

# Map of Directories

The root directory of this project contains the standard React Native files, App.js, app.json, package.json, etc. It also contans the node_modules and assets directories as well as a couple auto-generated expo directories. It is the src directory which could use a brief explanation. 
Contained in this folder are a few utility files as well as 5 directories:

1. features: This is where the screens and components rendered on the device are found. Within the directory each feature has it's own directory which includes 2-4 additional directories. The screens directory contains all screen files which render the total screen including additional components. The components directory, (not to be confused with the components directory outside of the features directory) contains the component files specifically related to this feature. The tests directory will contain all test files. Not every feature will have these as testing implementation is still in progress. And finally a data folder. This will only appear in a few features.
2. components: The is where components used by multiple features will be found.
3. infastructure: This directory contains a navigation directory, for all navigation, and a theme directory for some repeat stylings.
4. services: This contains context and service files. The service files for now, contain API calls. These calls will be absorbed into the context files and deleted. This folder also contains some data files.
5. mocks: testing under construction.
