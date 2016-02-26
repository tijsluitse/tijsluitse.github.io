var cf = (function() {

	// Funda API
	var baseUrl = 'http://funda.kyrandia.nl/feeds/Aanbod.svc/json/';
	var apiKey = 'e2d60e885b8742d4b0648300e3703bd7/';
	var apiResults = '/&page=1&pagesize=25';
	var rentFeed = '?type=huur&zo=/';
	var buyFeed = '?type=koop&zo=/';

	// Local Storage
	var userCity = localStorage.getItem('city');
	var userPostal = localStorage.getItem('postal');
	var userAddress = localStorage.getItem('address');

	// Location error Handling
	var locFound;

	return {
		baseUrl,
		apiKey,
		apiResults,
		rentFeed,
		buyFeed,
		userCity,
		userPostal,
		userAddress,
		locFound
	}

})()