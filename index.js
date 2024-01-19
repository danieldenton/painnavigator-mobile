import { registerRootComponent } from 'expo';
import * as Sentry from '@sentry/react-native';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

export default Sentry.wrap(App);
