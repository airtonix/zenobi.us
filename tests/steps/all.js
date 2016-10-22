/* global define */

define(function(require) {

  var expect = require('intern/chai!expect');
  var Constants = require('tests/support/constants');
  var Helpers = require('tests/support/Helpers');
  var Selectors = require('tests/support/Selectors');

  /**
   * [description]
   * @param  {Object} library Yadda.Library
   * @return {Function}
   */
  return function(library) {

    library

      /**
       * Start scenario at certain URL
       * @param String url    url to open browser
       */
      .given('I am on the page "$URL"', function(url) {
        this.remote.get(require.toUrl('http://jadakren:3000' + url))
          .findByXpath(Selectors.body())
          .then(() => {
            this.takeScreenShot();
          });
      })

      .then('there should be a card titled "$title"', function(title) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.cardWithTitle(title));
      })

      .define('And the field "$label" should be visible', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.fieldWithLabel(label));
      })

      .define('And the "$label" button should be visible', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.buttonWithLabel(label));
      });

  };
});