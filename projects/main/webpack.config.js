const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

/* module.exports = withModuleFederationPlugin({

  remotes: {
    "payment": "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

}); */


const moduleFederationConfig = withModuleFederationPlugin({
  //module.exports = withModuleFederationPlugin({
  remotes: {
    payment: "http://localhost:4201/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath = "http://localhost:4200/";
module.exports = moduleFederationConfig;

