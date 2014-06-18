define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        class ScriptTagInjector extends sumatra.Plugin

            inject: (target, source) ->
                $ "<script>"
                    .attr
                        type: 'text/javascript'
                        async: true
                        src: source
                    .appendTo target