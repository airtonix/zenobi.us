#
# Default Template Context
#
module.exports =
	mode: null
	site:
		url: "http://zenobi.us"
		baseUrl:  "/"
		name:  "zenobi.us"
		byline: "Web Developer"

		owner:
			name: "Zenobius Jiricek"
			email: "its@zenobi.us"

	mandrill:
		apikey: 'changed'
		endpoint: 'https://mandrillapp.com/api/1.0/messages/send.json'
		recipients:
			contact: [
				email: "changed"
				name: "Zenobius Jiricek"
				type: 'to'
			]

	analytics:
		google:
			code: 'UA-43586909-1'
			domain: 'zenobi.us'

	disqus:
		shortname: 'zenobiusjiricek'
