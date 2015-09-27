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
		urls:
			root: "http://zenobi.us"
			static:  '/static'
			media:  '/media'

		scripts: [
			{src: 'scripts/app.js', async: false}
		]

	modules:
		analytics:
			google:
				code: 'UA-43586909-1'
				domain: 'zenobi.us'

		disqus:
			shortname: 'zenobiusjiricek'
