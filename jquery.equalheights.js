/**
 * Equal heights little jQuery plugin by Status201
 * @version 1.0.4
 * @requires jQuery 1.7+
 * @author Gijs Oliemans <gijs[at]status201.nl>
 * @license MIT
 */

(function( $ ) {

	$.fn.equalHeights = function( options ) {
		var defaults = {
			onResize: 	true,
			onLoad: 	true
		};
		var settings = $.extend( {}, defaults, options );
		
		var topPositions = {},
			foundPosition = 0,
			$el = [],
			curHeight = 0,
			topPosition = 0,
			resizeTimer,
			$elements = $(this);
	 
		if ($elements.length < 2) return this;
		
		if ( settings.onResize ) {
			$( window ).resize(function() {
				if ( resizeTimer ) window.clearTimeout(resizeTimer);
				resizeTimer = window.setTimeout(function() {
					$elements.equalHeights( { onResize: false, onLoad: false } );
				}, 100);
			});
		};

		if ( settings.onLoad ) {
			$( window ).load(function() {
				$elements.equalHeights( { onResize: false, onLoad: false } );
			});
		}
	 
		$elements.each(function() {
			$el = $(this);
			$el.height('auto');// restore original height from possible previous equalHeights()
			curHeight = $el.height();
	 
			if ( curHeight > 0 ) {
				topPosition = $el.position().top;
				foundPosition = topPosition in topPositions;
					 
				if(!foundPosition) {
					// First at this position, only store and set height
					topPositions[topPosition] = curHeight;
					$el.height(topPositions[topPosition]);
				} else {
					if(curHeight > topPositions[topPosition]) {
						// Tallest so far for this position, remember tallest and stretch others on this position
						topPositions[topPosition] = curHeight;
						$($elements).filter(function() {
							return $(this).position().top == topPosition;
						}).height(curHeight);
					} else {
						// Same or less high, maximize this one
						$el.height(topPositions[topPosition]);
					}
				}
			}
		});
	 
		return this;
	 
	};

}( jQuery ));
