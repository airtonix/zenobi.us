
# My Personal Site

Using [webpack](https://webpack.github.io/) [vue](https://vuejs.org/) [vuex](https://github.com/vuejs/vuex) [vue-router](http://router.vuejs.org/) and [vue-resource](https://github.com/vuejs/vue-resource).

# Preinstall

1. Install NodeJs (protip: use nvm or nodist)

### Windows users

1. Use powershell
2. install nodist

### Linux users

1. Use bash/zsh
2. install nvm

# Installing

1. `$ git pull git@github.com:airtonix/zenobi.us.git`
2. `$ cd zenobi.us`
3. `$ nodist/nvm use 6`
3. `$ npm i`


# Development

`$ DEBUG=app* npm run dev`

Runs webpack dev/hot middleware with json-server.

# Versioning

1. work on `develop` branch
2. merge changes into `master`
3. `npm run release <version>`

# Production Build

`$ npm run prod`
