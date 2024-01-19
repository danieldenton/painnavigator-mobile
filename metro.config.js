const { getSentryExpoConfig } = require('@sentry/react-native/metro');

const config = getSentryExpoConfig(__dirname);

module.exports = config;
// const { getDefaultConfig, mergeConfig } = require("@expo/metro-config");
// const {createSentryMetroSerializer} = require('@sentry/react-native/dist/js/tools/sentryMetroSerializer');

// const config = {
//   serializer: {
//     customSerializer: createSentryMetroSerializer(),
//   },
// };

// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push("cjs");

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);