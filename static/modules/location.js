var locationChecker = (function(){

    // -- Start of Google Maps Api
    var writeAddressName = function(latLng) {
        
        var geocoder = new google.maps.Geocoder();
        
        geocoder.geocode({
            'location': latLng
        },
        
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                
                // Save geolocation
                var city = results[0].address_components[3].long_name;
                var address = results[0].formatted_address;
                var components = results[0].address_components;
                
                // Filter postal code
                var postalCode = components.filter(function(component){
                    return component.types.indexOf('postal_code') >= 0;
                });

                // Save postal code
                postalCode = postalCode[0].long_name.split(' ').join('');

                // Store variables in LS
                localStorage.setItem('address', address);
                localStorage.setItem('city', city);
                localStorage.setItem('postal', postalCode);
                
                // Render to HTML
                el.userLocation.innerHTML = address;
                el.userLocation.addEventListener('click', function(){
                    location.reload();
                });

                cf.locFound = true;

            } else {
                locationChecker.errorHandling(); 
            }
        });
    };

    var geolocationSuccess = function(position) {
        var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        locationChecker.writeAddressName(userLatLng);
    }

    var geolocationError = function(positionError) {
        locationChecker.errorHandling(); 
    };

    var geolocateUser = function() {        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(locationChecker.geolocationSuccess, locationChecker.geolocationError);
        } else {
           locationChecker.errorHandling(); 
        }
    };
    // -- End of Google Maps Api

    // Error handling
    var errorHandling = function() {
        cf.locFound = false;
        if (localStorage.getItem('address') == null && localStorage.getItem('city') == null && localStorage.getItem('postal') == null) {
            el.userLocation.innerHTML = 'Stel u locatie instellingen opnieuw in om te zoeken naar huizen bij u in de buurt.';
            console.log('No adress, city and postal in LS.');
        } else if (localStorage.getItem('address') == null && localStorage.getItem('city') == null) {
            cf.userPostal = localStorage.getItem('postal');
            el.userLocation.innerHTML = cf.userPostal;
            console.log('No address & no city in LS.');
        } else if (localStorage.getItem('city') == null) {
            cf.userAddress = localStorage.getItem('address');
            el.userLocation.innerHTML = cf.userAddress;
            console.log('No city in LS.');
        } else {
            el.userLocation.innerHTML = 'Stel u locatie instellingen opnieuw in om te zoeken naar huizen bij u in de buurt.';
        }

    };

    return {
        writeAddressName,
        geolocationSuccess,
        geolocationError,
        geolocateUser,
        errorHandling
    }

})();



	
