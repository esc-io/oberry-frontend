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
            constants: "./constants",
            layouts: "./layouts",
            screens: "./screens",
            styles: "./styles",
            containers: "./containers",
          },
        },
      ],
    ],
  };
};
