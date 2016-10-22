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

      /**
       * Require an visible MDL card containing desired text in the header
       * @param  {String} title  title in the card header
       * @return Intern.Leadfoot.Command
       */
      .then('there should be a card titled "$title"', function(title) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.cardWithTitle(title));
      })

      /**
       * Require a form field (found by it's label) to be visible
       * @param  {String} label  text to be found in the fields label.
       * @return Intern.Leadfoot.Command
       */
      .define('And the field "$label" should be visible', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.fieldWithLabel(label));
      })

      /**
       * Require a button be visible containing text as its label.
       * @param  {String} label  text to be found in the buttons label.
       * @return Intern.Leadfoot.Command
       */
      .define('And the "$label" button should be visible', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.buttonWithLabel(label));
      })

      /**
       * Perform a click on a button having certain label
       * @param  {String} label  text to be found in the buttons label.
       * @return Intern.Leadfoot.Command
       */
      .when('I click the "$label" button', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.buttonWithLabel(label))
          .click();
      })

      /**
       * Form field containing a label should not have any validation errors visible
       * @param  {String} label  text to be found in the fields label.
       * @return Intern.Leadfoot.Command
       */
      .then('"$label" should be invalid', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.validationErrorsForLabel(label));
      })

      /**
       * Form field containing a label should have some validation errors visible
       * @param  {String} label  text to be found in the fields label.
       * @return Intern.Leadfoot.Command
       */
      .then('"$label" should be valid', function(label) {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .waitForDeletedByXpath(Selectors.validationErrorsForLabel(label));
      })

      /**
       * There should be some validation errors visible
       * @return Intern.Leadfoot.Command
       */
      .then('there should be some Validation Errors visible', function() {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .findByXpath(Selectors.anyValidationErrors());

      })

      /**
       * There should not be any validation errors visible
       * @return Intern.Leadfoot.Command
       */
      .then('there should not be any Validation Errors visible', function() {
        return this.remote
          .setFindTimeout(Constants.ELEMENT_TIMEOUT)
          .waitForDeletedByXpath(Selectors.anyValidationErrors());
      });

  };
});