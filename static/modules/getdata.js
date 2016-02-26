var getData = (function(range) {

	var rent = function(range) {
	
		el.rentLoader.classList.add('show');

		aja()
			.method('get')
			.url(cf.baseUrl + cf.apiKey + cf.rentFeed + cf.userCity + '/' + cf.userPostal + '/' + range  + cf.apiResults)
		    .type('json')
		    .cache('false')
		    .on('success', function(data){	

		    	console.log('Request url: ' + cf.baseUrl + cf.apiKey + cf.rentFeed + cf.userCity + '/' + cf.userPostal + '/' + range  + cf.apiResults);

		    	data = _.map(data.Objects, function(rentData){
		    		return _.pick(rentData, 'URL', 'FotoMedium', 'FotoLarge', 'WGS84_Y', 'WGS84_X', 'Adres', 'Postcode', 'Woonplaats', 'PrijsGeformatteerdHtml', 'Woonoppervlakte');
		    	});

		    	var viewportWidth = window.outerWidth;
		    	el.rentResults.innerHTML = data.length + ' resultaten gevonden.';

				var directives = {	      			       
					houseLink: {
						href: function(params) {
							return this.URL;			        		
						}
					},
					housePhoto: {
						src: function(params) {
							if (viewportWidth < 600) {
								return this.FotoMedium;
							} else {
								return this.FotoLarge;
							}
						}			        	
					},
					mapsLink: {
						href: function(params) {					
							return 'http://maps.google.com/maps?saddr=Current%20Location&daddr=' + this.WGS84_Y + ',' + this.WGS84_X;
						}
					},
					houseAddress: {
						html: function(params) {
							return '<img class="mapIcon" src="img/map.svg"/> ' + this.Adres;
						}
					},
					houseCity: {
						text: function(params) {
							return this.Postcode + ' ' + this.Woonplaats;
						}
					},
					houseType: {
						html: function(params) {
							return this.Woonoppervlakte + 'm²';
						}
					},
					housePrice: {
						html: function(params) {
							return this.PrijsGeformatteerdHtml;
						}
					},
					resultsNumber: {
						text: function(params) {
							return 'Aantal resultaten: ' + data.length;
						}
					}			        	
				}

				Transparency.render(el.rentList, data, directives);
				el.rentLoader.classList.remove('show');

		    })
			.go();
		}

	var buy = function(range) {

		el.buyLoader.classList.add('show');

		aja()
			.method('get')
			.url(cf.baseUrl + cf.apiKey + cf.buyFeed + cf.userCity + '/' + cf.userPostal + '/' + range + cf.apiResults)
		    .type('json')
		    .cache('false')
		    .on('success', function(data){	

		    	console.log('Request url: ' + cf.baseUrl + cf.apiKey + cf.rentFeed + cf.userCity + '/' + cf.userPostal + '/' + range  + cf.apiResults);

		    	data = _.map(data.Objects, function(rentData){
		    		return _.pick(rentData, 'URL', 'FotoMedium', 'FotoLarge', 'WGS84_Y', 'WGS84_X', 'Adres', 'Postcode', 'Woonplaats', 'PrijsGeformatteerdHtml', 'Woonoppervlakte');
		    	});

		    	var viewportWidth = window.outerWidth;
		    	el.buyResults.innerHTML = data.length + ' resultaten gevonden.';

		    	var directives = {
		    		houseLink: {
						href: function(params) {
							return this.URL;			        		
						}
					},
					housePhoto: {
						src: function(params) {
							if (viewportWidth < 600) {
								return this.FotoMedium;
							} else {
								return this.FotoLarge;
							}
						}			        	
					},
					mapsLink: {
						href: function(params) {					
							return 'http://maps.google.com/maps?saddr=Current%20Location&daddr=' + this.WGS84_Y + ',' + this.WGS84_X;
						}
					},
					houseAddress: {
						html: function(params) {
							return '<img class="mapIcon" src="img/map.svg"/> ' + this.Adres;
						}
					},
					houseCity: {
						text: function(params) {
							return this.Postcode + ' ' + this.Woonplaats;
						}
					},
					houseType: {
						html: function(params) {
							return this.Woonoppervlakte + 'm²';
						}
					},
					housePrice: {
						html: function(params) {
							return this.PrijsGeformatteerdHtml;
						}
					},
					resultsNumber: {
						text: function(params) {
							return 'Aantal resultaten: ' + data.length;
						}
					}			        	
				}

				Transparency.render(el.buyList, data, directives);
				el.buyLoader.classList.remove('show');
		    })
			.go();

	}

	return {
		rent, 
		buy
	}

})();