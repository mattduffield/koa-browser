module.exports = {
  "presets": [
    ["env", {
      targets: {
        safari: 10
      },
      "forceAllTransforms": true
    }],
    "modules": false,
    "useBuiltIns": true,
    "loose": true,
    "stage-1",
    "debug": true
  ],
  "plugins": [
    "babel-plugin-add-module-exports",
    ["babel-transform-es2015-classes", {
      "loose": true
    }]
  ]
};