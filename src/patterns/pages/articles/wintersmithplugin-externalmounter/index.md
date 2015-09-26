---
template: article.jade
title: Wintersmith Plugin. Mounter
tags: nodejs, wintersmith, plugin
date: May 11, 2014
icon: doc
comments: true
---

So I've just created a plugin for wintersmith, aimed at utilising my `bower_components` from outside
my contents directory.


```shell
project
	bower_components
	node_modules
	src
		assets
			scss
		config
		contents
			articles
			etc
			...
			index.md
		plugins
		templates
		tests
		app.coffee
	CNAME
	Gruntfile.coffee
	bower.json
	package.json
	readme.md
```

At first I was just putting `bower_components` directly inside my `project/src/contents/assets/vendor/`
and while this might be tenable for bower, it wasn' scalable. There might be more.

### Installation


```
npm install wintersmith-mounter
```

### Configuration

in your configuration file, describe the path you wish to mount external content at : 

```yaml

  ...

  mounter:
    mounts:
      '/assets/vendor/': 
        src: './bower_components'

  ...
```

Now, any content inside `./bower_components` will be available in your templates, 
javascript or stylesheets under `/assets/vendor/`


### Contributing

Feel free to submit bug reports, pull requests over at http://github.com/airtonix/wintersmith-mounter