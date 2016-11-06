/* global define */

define([
  'tests/support/CleanScreenshots'
], function(CleanScreenshots) {

  return {
    tunnel: 'NullTunnel',

    tunnelOptions: {
      hostname: process.env.SELENIUM_HOST,
      port: process.env.SELENIUM_PORT,
      protocol: 'http'
    },

    environments: [{
      browserName: 'chrome'
    }],

    setup: function() {
      return Promise.resolve()
        .then(CleanScreenshots);
    },

    reporters: [
      'Runner',
      {
        id: 'tests/support/ScreenshotOnPass'
      },
      {
        id: 'tests/support/ScreenshotOnFail'
      }
    ],

    loaderOptions: {
      packages: [
        {
          name: 'yadda',
          location: './node_modules/intern-yadda-loader'
        },
        {
          name: 'steps',
          location: './tests/steps'
        }
      ]
    },

    functionalSuites: [
      'yadda!tests/features',
    ],

    yadda: {
      steps: [
        'steps/all',
      ],
      lang: 'English'
    },

    excludeInstrumentation: /^(?:tests|node_modules)\//

  };

});