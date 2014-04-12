
# My Personal Site

Using [wintersmith](https://github.com/jnordberg/wintersmith)

# Preinstall

1. Install NodeJs
2. Follow this gist: https://gist.github.com/airtonix/9925531

### Windows users

1. Install MsysGit
2. I **highly** recommend you use Cmder with Msysgit and Setup a default Bash task.


# Installing

1. `$ git pull git@github.com:airtonix/zenobi.us.git`
2. `$ cd zenobi.us`
3. `$ npm install`
4. `$ bower install`


# local development

`$ grunt`

1. Runs wintersmith in local development mode.
	- nothing is minified
	- nothing is revved
	- calls to following filetypes cause a lookup for their source filetype, which if exists gets compiled to css and returned:
		js -> coffee
		css -> scss
	- New files in `src/templates` or `src/contents` will require you to restart the server with Ctrl-C.
	- Modifying the `src/config/*` or `src/plugins/*` will require you to restart the server with Ctrl-C.

# Build Only

`$ grunt build`

1. Runs the wintersmith compile routine with the `src/config/production.coffee` settings
3. Concatenates and minifies all the `.scss` and `.coffee` into `screen.css`, `print.css` and `application.js`
2. Adds 8 char md5 hash strings to the end of all the asset files (png,js,css,fonts)
3. Replaces all references to those files with the new filenames.

# Testing Deployment

`$ grunt test`

1. Runs the build steps above
2. Serves it up with a static `connectjs` server.

# Deployment

`$ grunt deploy`

1. Runs the build steps above
2. Bumps the version numbers in `bower.json` and `package.json`
3. Copies the build output to a clone of this repos `gh-pages` branch
4. Tags the commit with the same version as found in `bower.json` and `package.json`
5. Pushes the new commit back to github causing github to refresh the static site.
