
# My Personal Site

Using [Gastropod](https://www.npmjs.com/package/gastropod)

# Preinstall

1. Install NodeJs (protip: use nvm, zsh, antigen and zsh-autoenv)

### Windows users

1. Use powershell
2. Install psget
3. Install ps-nvm ith psget
4. Set-NodeVersion 0.12.7
5. Bonus points: create a custom prompt command to autoenv a `.env-ps` file


# Installing

1. `$ git pull git@github.com:airtonix/zenobi.us.git`
2. `$ cd zenobi.us`
3. `$ npm i`


# Development

`$ DEBUG=gastro* npm start`

1. Runs Gastropod in local development mode.
	- nothing is minified
    - scripts are run through `Browserify`
    - scripts/fonts/images/styles are fingerprinted
    - Site structure is in `src/patterns/pages`, templates are in `Swig.Js`
        + Uses [PatternLab](http://patternlab.io/) principle
        + Global template context is in `src/data/index.coffee`
        + A matching `*.{coffee,json,js,yml}` will expose it as `{{ page }}` to that page only.
        + each template supports frontmatter
    - Site is served via [BrowserSync](http://www.browsersync.io/), see terminal for connection details.
        + multiple instances will auto find next available port
2. `DEBUG=<string>`
    - uses [debug](https://www.npmjs.com/package/debug) package.
    - where string is any logger name.

# Versioning

1. work on `develop` branch
2. release from `master`
2. commit changes regularly to `develop` or branches based on `develop`
2. `$ npm version patch`
    - `patch`: when you make backwards-compatible bug fixes.
    - `minor`: when you add functionality in a backwards-compatible manner, and
    - `major`: when you make incompatible API changes,
    - for more information: [semver.org](http://semver.org/)
3. following happens:
    - `version` key in `package.json` is bumped appropriately
    - changes are merged into `master`
    - a tag matching `version` in `package.json` is created
    - `master` is pushed to `remote:origin`
    - branch is changed back to `develop`

# Production Build

`$ npm run production`

1. Runs `gastropod run default --config=config/production`
