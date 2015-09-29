
module.exports =

	target:
		root: './dist'
		fonts: './static/fonts'
		images: './static/images'
		styles: './static/styles'
		scripts: './static/scripts'
		pages: '' # target root is the site root

	source:
		root: './src'
		data: './data'
		fonts:
			internal: './fonts'
			vendor: './node_modules/ratchet/fonts'
		images: './images'
		styles: './styles'
		scripts: './scripts'
		patterns: './patterns'
		pages: './patterns/pages'

	plugins:
		sass:
			minify: false
			includePaths: [
				"src/styles"
				"node_modules/bourbon/app/assets/stylesheets"
				"node_modules/bourbon-neat/app/assets/stylesheets"
			]