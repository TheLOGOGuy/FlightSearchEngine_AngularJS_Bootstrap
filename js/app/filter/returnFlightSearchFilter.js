(function() {
	"use strict";
	angular.module("flightSearchEngine")
		.filter("returnFlightSearchFilter", function() {
			return function(flightData, origin, destination, priceRange) {
				var originCity = origin.toUpperCase();
				var destinationCity = destination.toUpperCase();
                var oneWayResult = [];
                var returnResult = [];
                var matchedFlights = [];
				for(var i = 0; i < flightData.length; i++) {
					var fromCityName, fromCityCode, toCityName, toCityCode, price;
					fromCityName = flightData[i].fromCityName.toUpperCase();
					fromCityCode = flightData[i].fromCityCode.toUpperCase();
					toCityName = flightData[i].toCityName.toUpperCase();
					toCityCode = flightData[i].toCityCode.toUpperCase();
					price = flightData[i].flightRate;
					if((originCity === fromCityName || originCity === fromCityCode) && (destinationCity === toCityName || destinationCity === toCityCode)) {
						if(price <= priceRange) {
							oneWayResult.push(flightData[i]);
						}
                    }
                    else if((originCity === toCityName || originCity === toCityCode) && (destinationCity === fromCityName || destinationCity === fromCityCode)) {
						if(price <= priceRange) {
							returnResult.push(flightData[i]);
						}
                    }
                }
                if(oneWayResult.length > 0 && returnResult.length > 0) {
                    matchedFlights[0] = oneWayResult;
                    matchedFlights[1] = returnResult;
                }
                return matchedFlights;
			};
		});
})();