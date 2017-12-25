(function() {
	"use strict";
	angular.module("flightSearchEngine")
		.filter("oneWayFlightSearchFilter", function() {
			return function(flightData, origin, destination, priceRange) {
				var originCity = origin.toUpperCase();
				var destinationCity = destination.toUpperCase();
				var result = [];
				for(var i = 0; i < flightData.length; i++) {
					var fromCityName, fromCityCode, toCityName, toCityCode, price;
					fromCityName = flightData[i].fromCityName.toUpperCase();
					fromCityCode = flightData[i].fromCityCode.toUpperCase();
					toCityName = flightData[i].toCityName.toUpperCase();
					toCityCode = flightData[i].toCityCode.toUpperCase();
					price = flightData[i].flightRate;
					if((originCity === fromCityName || originCity === fromCityCode) && (destinationCity === toCityName || destinationCity === toCityCode)) {
						if(price <= priceRange) {
							result.push(flightData[i]);
						}
					}
				}
				return result;
			};
		});
})();