#!/usr/bin/env node
var debug = require('debug')('tests/selenium');

var argv = require('yargs')
  .command('start', 'start selenium')
  .example('$0 start', 'start selenium')
  .command('stop', 'stop selenium')
  .example('$0 stop', 'stop selenium')
  .help('h')
  .alias('h', 'help')
  .argv;


