blocks =
	hero:
		template: templates.contentBlockHero
		data:
			heading: text: "Zenobi.us"

layouts =
	hero:
		template: templates.layoutOneColumn
		blocks: [
			blocks.hero
		]

segments =
	hero:
		layouts: [
			layouts.hero
		]

module.exports =
	title: "Home"

	segments: [
		segments.hero
	]