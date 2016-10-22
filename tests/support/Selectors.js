/* global define */

define([
  'tests/support/Helpers'
], (Helpers) => {

  return {

    /**
     * Xpath for the body tag.
     * @return {[type]} [description]
     */
    body: () => '//body',

    /**
     * Xpath for an MDL card found via it's title text
     * @param  {[type]} title [description]
     * @return {[type]}       [description]
     */
    cardWithTitle: (title) => {
      return [
        // find a card
        `//div[contains(@class, 'mdl-card')]`,
        // whose title text contains our title
        `//*[contains(@class, 'mdl-card__title-text')]`,
        `[contains(., ${Helpers.prepareStringForXpath(title)} )]`,
        // then select the containing card again
        `//parent::div[contains(@class, 'mdl-card')]`,
      ].join('');
    },

    /**
     * Xpath for a form field found via it's label text
     * @param  {[type]} label [description]
     * @return {[type]}       [description]
     */
    fieldWithLabel: (label) => {
      return [
        // find the label containing the text
        `//label[contains(., ${Helpers.prepareStringForXpath(label)})]`,
        // match the containing div
        `//parent::div[contains(@class, 'mdl-textfield')]`,
        // match the contained field
        `//*[(local-name() = 'input' or local-name() = 'select' or local-name() = 'textarea')]`
      ].join('');
    },

    /**
     * Xpath for a button found via its text
     * @param  {[type]} label [description]
     * @return {[type]}       [description]
     */
    buttonWithLabel: (label) => {
      return [
        // find a button
        `//*[contains(@class, "mdl-button")]`,
        // that contains the label
        `[contains(., ${Helpers.prepareStringForXpath(label)} )]`,
      ].join('');
    },

    anyValidationErrors: () => {
      return [
        // find a field
        `//div[contains(@class, 'mdl-textfield')]`,
        `/span[@class='mdl-textfield__error']`
      ].join('');
    },

    validationErrorsForLabel: (label) => {
      return [
        // find the label containing the text
        `//label[contains(., ${Helpers.prepareStringForXpath(label)})]`,
        `//following::span[@class='mdl-textfield__error']`
      ].join('');
    }

  };

});