const Config = require('nconf')
const Confine = require('confine')
const { camelCase } = require('lodash')

const schema = require('./schema.json')
const confine = new Confine()

confine.validateSchema(schema)

const ArgvConfig = {
    separator: '.',
}

const EnvConfig = {
    separator: '__',
    match: /^(frontend|dump)/,
    parseValues: true,
    transform (obj) {
        obj.key = obj.key
            .split(EnvConfig.separator)
            .map(camelCase)
            .join(EnvConfig.separator)
        if (!obj.key || !obj.key.length) return { key: '1'}
        return obj
    }
}

Config.argv(ArgvConfig)
Config.env(EnvConfig)


const config = Config.get('frontend')
const normalised = confine.normalize(config, schema)

module.exports = normalised

if (Config.get('dump')) console.dir(config)