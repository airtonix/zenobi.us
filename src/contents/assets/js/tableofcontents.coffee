define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, Plugin) ->

		class TableOfContents extends Plugin
			items: []
			routes: "!/contact"
			defaults:
				selector: "[data-table-of-contents]"
				headings: "h2,h3,h4,h5"
				toggleSelector: '.toggle'

			build: ->
				$(@selector).each (index, item) =>
					self = $ item
					self.contents = $ self.data('tableOfContents')
					self.list = $ """<ul class='side-nav'></ul>"""
					self.toggle = self.find @toggleSelector

					self.append self.list

					headings = self.contents.find(@headings)

					if !headings.length
						self.list.remove()
						self.toggle.remove()

					else
						self.addClass 'enabled'
						headings.each (index, item) ->
							heading = $ item
							self.list.append """<li><a href='##{heading.attr "id"}'>#{heading.text()}</li>"""

					@items.push self

			run: ->
				for item in @items when item.hasClass('enabled')
					item.toggle.on 'click', ->
						item.toggleClass 'expanded'

		return TableOfContents