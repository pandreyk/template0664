module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          assets: './src/assets',
          contexts: './src/contexts',
          helpers: './src/helpers',
          hooks: './src/hooks',
          icons: './src/icons',
          navigation: './src/navigation',
          screens: './src/screens',
          services: './src/services',
          containers: './src/shared/containers',
          generic: './src/shared/generic',
          layouts: './src/shared/layouts',
          types: './src/types',
        },
      },
    ],
  ],
}
