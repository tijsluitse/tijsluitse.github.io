'use strict'

var launcher = (function() {

	var init = function() {

		// Launch app
		locationChecker.geolocateUser();
		sections.init();
		
		// Load all animations
		animations.onload();
		animations.scrolling();
		animations.fastClicker();
		
		// Load gestures
		gestures.shake();
		gestures.swipe();

	}

	return {
		init: init
	};

})();

launcher.init();
