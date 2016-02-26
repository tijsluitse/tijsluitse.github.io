var gestures = (function() {

	var shake = function() {

	    var rangeShuffle = new Shake ({
	    	threshold: 15, 
	    	timeout: 1000 
	    });

	    rangeShuffle.start();
	   
	    window.addEventListener('shake', function() {
	    	location.reload();
	    }, false);

	    if (!('ondevicemotion' in window)){
	    	alert('Not Supported');
	    };

	};

	var swipe = function() {

		var swiping = new Hammer(el.swipe);

		swiping.on('swiperight', function() {
		    window.location.hash = '#buyHouses';
		});

		swiping.on('swipeleft', function() {
		    window.location.hash = '#rentHouses';
		});

	};

	return {
		shake, 
		swipe
	}

})();

