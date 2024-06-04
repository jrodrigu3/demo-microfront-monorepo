const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

/* module.exports = withModuleFederationPlugin({

  name: 'payment',

  exposes: {
    './AppComponwent': './projects/payment/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
 */

const moduleFederationConfig = withModuleFederationPlugin({
  //module.exports = withModuleFederationPlugin({

  name: 'payment',

  exposes: {
    './AppComponent': './projects/payment/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath = "http://localhost:4201/";
module.exports = moduleFederationConfig;
