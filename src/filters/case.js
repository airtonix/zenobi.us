/* @flow */

import changeCase from 'change-case';

export default Object.keys(changeCase)
  .filter((key: string) : array => key.indexOf('Case') > 0)
  .reduce((result: object, key: string) : object => {
    result[key] = changeCase[key];
    return result;
  }, {});
