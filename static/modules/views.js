var views = (function(){

	var rentHouses = function() {

		var htmlRange = document.querySelector('#rentHouses .range');
		var minCount = document.querySelector('#rentHouses .minCount')
		var plusCount = document.querySelector('#rentHouses .plusCount');

		var range;
		var rangeIndex = 0;
		var ranges = [1, 2, 5, 10, 15];

		htmlRange.innerHTML = '+ ' + ranges[rangeIndex] + ' km';
		getData.rent('+' + ranges[rangeIndex] + 'km');

		// Credits to Casper
		plusCount.addEventListener('click', function(evt) {
			evt.preventDefault();
			rangePlus();
		});

		minCount.addEventListener('click', function(evt) {
			evt.preventDefault();
			rangeMinus();
		});

		function rangePlus() {
			rangeIndex ++;
			if(rangeIndex > ranges.length - 1) rangeIndex = 0;
			editHTML();
		};

		function rangeMinus() {
			rangeIndex --;
			if(rangeIndex < 0) rangeIndex = ranges.length - 1;
			editHTML();
		};

		function editHTML() {
			htmlRange.innerHTML = '+ ' + ranges[rangeIndex] + ' km';
			getData.rent('+' + ranges[rangeIndex] + 'km');
		};

		el.rentTab.classList.toggle('active');
		el.introduction.classList.add('seeContent');
		el.buyTab.classList.remove('active');
		
	};

	var buyHouses = function() {

		var htmlRange = document.querySelector('#buyHouses .range');
		var minCount = document.querySelector('#buyHouses .minCount')
		var plusCount = document.querySelector('#buyHouses .plusCount');

		var range;
		var rangeIndex = 0;
		var ranges = [1, 2, 5, 10, 15];

		htmlRange.innerHTML = '+ ' + ranges[rangeIndex] + ' km';
		getData.buy('+' + ranges[rangeIndex] + 'km');

		// Credits to Casper
		plusCount.addEventListener('click', function(evt) {
			evt.preventDefault();
			rangePlus();
		});

		minCount.addEventListener('click', function(evt) {
			evt.preventDefault();
			rangeMinus();
		});

		function rangePlus() {
			rangeIndex ++;
			if(rangeIndex > ranges.length - 1) rangeIndex = 0;
			editHTML();
		};

		function rangeMinus() {
			rangeIndex --;
			if(rangeIndex < 0) rangeIndex = ranges.length - 1;
			editHTML();
		};

		function editHTML() {
			console.log('render!');
			htmlRange.innerHTML = '+ ' + ranges[rangeIndex] + ' km';
			getData.buy('+' + ranges[rangeIndex] + 'km');
		};
		
		el.buyTab.classList.toggle('active');
		el.introduction.classList.add('seeContent');
		el.rentTab.classList.remove('active');

	};

	var toggle = function(hashName) {

		// declare all sections and get active section by hashHame
		var section = document.getElementById(hashName);
		var allSections = document.querySelectorAll('section');

		// for all sections remove active class
		for (var i = 0; i < allSections.length; i++) {
			allSections[i].classList.remove('active');
		};

		// toggle active class for active section
		section.classList.toggle('active');

	};

	return {
		rentHouses, 
		buyHouses,
		toggle
	}

})();