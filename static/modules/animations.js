var animations = (function() {
	
	var scrolling = function() {

	 	window.onscroll = function() {

	 		var vheight = window.innerHeight - 300;

		    if (window.scrollY > vheight) {
		        el.rentRangeInfo.classList.add('fixed');
		        el.buyRangeInfo.classList.add('fixed');

		    }  else {
		    	el.rentRangeInfo.classList.remove('fixed');
		    	el.buyRangeInfo.classList.remove('fixed');

		    }      
 		}

	};

	var onload = function() {

		window.scrollTo(0,0);

	};

	var fastClicker = function() {

		if ('addEventListener' in document) {
		    document.addEventListener('DOMContentLoaded', function() {
		        FastClick.attach(document.body);
		    }, false);
		}

	};

	return {
		scrolling,
		onload,
		fastClicker
	}

})();