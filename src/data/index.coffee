#
# System
#

#
# Framework
#

#
# Default Template Context
#
module.exports =
	site:
		title:  "zenobi.us"
		description: "Web Developer"
		owner:
			name: "Zenobius Jiricek"
			email: "its@zenobi.us"

		scripts: [
			{ src: 'scripts/app.js', async: false }
		]
		stylesheets: [
			{ src: 'styles/screen.css', media: 'all' }
			{ src: 'styles/print.css', media: 'print' }
		]

	modules:
		analytics:
			google:
				code: 'UA-43586909-1'
				domain: 'zenobi.us'

		disqus:
			shortname: 'zenobiusjiricek'

