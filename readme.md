
# My Personal Site

Using [wintersmith](https://github.com/jnordberg/wintersmith)

# Preinstall

1. Install NodeJs
2. Follow this gist: https://gist.github.com/airtonix/9925531

### Windows users

1. Install MsysGit
2. I **highly** recommend you use Cmder with Msysgit and Setup a default Bash task.


# Installing

1. git pull git@github.com:airtonix/zenobi.us.git
2. cd zenobi.us
3. npm install
4. bower install


# local development

$ grunt preview

Runs a local nodejs server with a wintersmith middleware that compiles 
all the markdown into html.

New files will require you to restart the server with Ctrl-C.

# building deployment

$ grunt deploy

1. Runs the wintersmith compile routine with the `src/config/production.coffee` settings
3. concatenates and minifies all the `.scss` and `.coffee` into `screen.css`, `print.css` and `application.js`
2. adds 8 char md5 hash strings to the end of all the asset files (png,js,css,fonts)
3. replaces all references to those files with the new filenames.
4. bumps the version numbers in `bower.json` and `package.json`
5. copies the build output to a clone of this repos `gh-pages` branch
6. tags the commit with the same version as found in `bower.json` and `package.json`
7. pushes the new commit back to github causing github to refresh the static site.

# testing deployment

$ grunt test

Same and deploy but only does steps 1, 2, 3 then serves it up with a static `connectjs` server.