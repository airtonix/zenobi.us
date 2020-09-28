---
title: Wintersmith Plugin. Mounter
stage: published
tags: nodejs, wintersmith, plugin
icon: extension
date: 2014-05-11
comments: true
---

So I've just created a plugin for wintersmith, aimed at utilising my `bower_components` or `node_modules` directory from outside
my contents directory. Really though, you could use any directory as an additional source of content for wintersmiths `content tree`.


```sh
me@machine:~/Projects/this/one $ mythical-ls
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

At first I was just putting `bower_components` directly inside my `project/src/contents/assets/vendor/` and while this might be tenable for bower, it wasn't clean, you might come up with other reasons.

#### Installation

```bash
npm install wintersmith-mounter
```

#### Configuration

In your configuration file, describe the path you wish to mount external content at :

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

#### Contributing

Feel free to submit bug reports, pull requests over at http://github.com/airtonix/wintersmith-mounter
