;(function(){

	'use strict';
	
	window.addEventListener('load', function(){
		var $ = require('../vendor/jquery/jquery');
		require('../vendor/jquery.avgrund/jquery.avgrund')($);

		$(function(){
			$('[data-modal]').each(function(){
				var $source = $(this).data('modal');
				console.log($source)
				$(this).avgrund({
					holderClass: 'modal',
					showClose: true,
					showCloseText: 'close',
					onBlurContainer: '.container',
					template: $($source)
				});
			});

			$(".toggle-topbar").on('mouseup touchend', function(){
				$(this).parents('nav').toggleClass("expanded")
			});
		});

	}, false);
})();