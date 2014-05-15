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
		apikey: 'oMstGBYNlE0KhW0DEd8Wdg'
		endpoint: 'https://mandrillapp.com/api/1.0/messages/send.json'
		recipients:
			contact: [
				email: "its@zenobi.us"
				name: "Zenobius Jiricek"
				type: 'to'
			]

	analytics:
		google:
			code: 'UA-43586909-1'
			domain: 'zenobi.us'

	disqus:
		shortname: 'zenobiusjiricek'