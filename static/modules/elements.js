var el = (function(){

	// Rent elements
	var rentTab = document.getElementById('rentTab');
	var rentList = document.getElementById('rentList');
	var rentResults = document.getElementById('rentResults');
	var rentRangeInfo = document.getElementById('rentRangeInfo');
	var rentLoader = document.querySelector('#rentHouses .loader');

	// Buy elements
	var buyTab = document.getElementById('buyTab');
	var buyList = document.getElementById('buyList');
	var buyResults = document.getElementById('buyResults');
	var buyRangeInfo = document.getElementById('buyRangeInfo');
	var buyLoader = document.querySelector('#buyHouses .loader');

	// User elements
	var introduction = document.getElementById('introduction');
	var errorMessage = document.getElementById('errorMessage');
	var userLocation = document.getElementById('userLocation');

	// Gesture elements
	var swipe = document.querySelector('body');

	return {
		rentList, 
		buyList,
		rentLoader,
		buyLoader,
		rentResults,
		buyResults,
		rentRangeInfo,
		buyRangeInfo,
		rentTab,
		buyTab,
		introduction,
		errorMessage,
		userLocation,
		swipe
	}

})();