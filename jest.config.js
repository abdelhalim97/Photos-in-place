module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["./setupTests.ts", "@rnmapbox/maps/setup-jest"],
  transformIgnorePatterns: [
    "node_modules/(?!(...|@rnmapbox))"
  ]
};
