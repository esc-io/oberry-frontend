module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./components",
            layouts: "./layouts",
            screens: "./screens",
            styles: "./styles",
            widgets: "./widgets",
          },
        },
      ],
    ],
  };
};
