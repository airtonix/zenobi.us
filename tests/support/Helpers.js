/* global define */

define({
  /**
   * Prepares complex strings for use in the Xpath function `contains`
   * @param  {String} text input
   * @return {String}
   */
  prepareStringForXpath: (text) => ['\"', text, '\"'].join(''),
});