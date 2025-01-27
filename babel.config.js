module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // fix for .useUnicodeFlag issue, see https://babeljs.io/docs/en/babel-plugin-proposal-unicode-property-regex
    plugins: ["react-native-reanimated/plugin",
      [ "@babel/plugin-proposal-unicode-property-regex",
        { useUnicodeFlag: false },
      ],
    ],
  };
};
