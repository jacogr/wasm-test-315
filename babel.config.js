module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        exclude: ['transform-exponentiation-operator'],
      },
    ],
  ],
};
