define [
    'lodash'
    'jquery'
    './plugin'
    ], (_, $, sumatra) ->
        
        sumatra.exports 'disqus', 
        
            class DisqusPlugin
                defaults:
                    shortname: null
                
                initialize: ->
                    $ "<script>"
                        .attrs
                            type: 'text/javascript'
                            async: true
                            src: "//#{@options.shortname}.disqus.com/embed.js"
                        .appendTo $ "head"

        