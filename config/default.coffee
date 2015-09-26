module.exports =

	target =
		root: './dist/development'
		fonts: './fonts'
		images: './images'
		styles: './styles'
		scripts: './scripts'
		pages: '' # target root is the site root

	source =
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
				"src/contents/assets/css"
				"src/assets/scss"
				"bower_components/"
				"bower_components/bourbon/app/assets/stylesheets"
				"bower_components/foundation/scss"
				"bower_components/foundation/scss/foundation/components"
			]