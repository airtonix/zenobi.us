define [
	'lodash'
	'jquery'
	'./plugin'
	], (_, $, sumatra) ->

		sumatra.export 'tableOfContents', ->
			class TableOfContents extends sumatra.Plugin
				action: 'click'
				defaults:
					template: "<ol class='side-nav'></ol>"
					headings: "h2,h3,h4,h5,h6"
					toggle: '.toggle'
					content: '.content'

				initialize: ->
					@contents = $ @options.content
					@toggle = @element.find @options.toggle
					@list = $ @options.template
					@headings = @contents.find @options.headings
					@element.append @list

					if @headings.length > 0
						@element.addClass 'enabled'
						@headings.each (index, item) =>
							heading = $ item
							@list.append $ "<li class='#{heading.get(0).nodeName.toLowerCase()}'><a href='##{heading.attr('id')}'>#{heading.html()}</a></li>"

					else
						@list.remove()
						@toggle.remove()

				bindEvents: ->
					if @element.hasClass 'enabled'
						@toggle.on @action, =>
							@element.toggleClass 'expanded'

			return TableOfContents