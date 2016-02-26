var sections = (function() {

	var init = function() {

		routie({
		    'rentHouses': function() {	  		    
		    	views.rentHouses();
		    	views.toggle(this.path);
		    	localStorage.setItem('houseType', 'huur');
		    },
		    'buyHouses': function() {
		    	views.buyHouses();
		    	views.toggle(this.path);			    	
		    	localStorage.setItem('houseType', 'koop');
		    }
		});
	};

	return {
		init
	}

})();
