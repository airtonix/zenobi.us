/* @flow */
import tinydown from 'tinydown';

export const markdown = (value: string) : string => tinydown(value || '');
