const { getDefaultConfig } = require("@expo/metro-config");
const { mergeConfig } = require('@react-native/metro-config')
const {createSentryMetroSerializer} = require('@sentry/react-native/dist/js/tools/sentryMetroSerializer');

const config = {
  serializer: {
    customSerializer: createSentryMetroSerializer(),
  },
};

// const defaultConfig = getDefaultConfig(__dirname);

// defaultConfig.resolver.assetExts.push("cjs");

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = defaultConfig;