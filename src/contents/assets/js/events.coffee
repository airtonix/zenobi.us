define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        sumatra.export 'events', ->

            class EventDispatcher extends sumatra.Plugin
                event: null

                disectTarget: (item, key) ->
                    target = item
                    
                initialize: =>
                    actionables = @element.find "[data-action]"
                    actionables.each (index, item) =>
                        $item = $ item
                        action = $item.data 'action'

                        $item.on action, =>

                            [target, emit] = @disect $item, 'emit'
                            if emit?
                                $(target).trigger emit

                            [target, load] = @disect $item, 'load'
                            if load?
                                $(target).load load
                                    