
const CWD = process.cwd();
const chalk = require('chalk');
const write = require('write');
const Config = require('webpack-config').default;
const BasePackage = require(`${CWD}/package.json`);
const {scripts} = require(`${CWD}/project/package.json`);

const output = new Config()
    .merge({scripts})
    .merge(BasePackage);

write('./package.json', JSON.stringify(output, null, 2), function(err) {
    if (err) console.log(chalk.red('error'), err.message);
});
