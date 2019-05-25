(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		new WOW().init();

		// Magnific Popup start
		

	});

	});

(jQuery);
$('.video-popup').magnificPopup({
			type:'iframe',
			iframe: {
			  markup: '<div class="mfp-iframe-scaler">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			          '</div>',
			  patterns: {
			    youtube: {
			      index: 'youtube.com/',
			      id: 'v=',
			      src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
			    },
			    vimeo: {
			      index: 'vimeo.com/',
			      id: '/',
			      src: '//player.vimeo.com/video/%id%?autoplay=1'
			    },
			    gmaps: {
			      index: '//maps.google.',
			      src: '%id%&output=embed'
			    }
			  },
			  srcAction: 'iframe_src',
			}
		});

		// Magnific Popup Ends