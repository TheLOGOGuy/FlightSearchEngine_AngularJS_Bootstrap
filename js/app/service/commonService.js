(function() {
	"use strict";
	angular.module("flightSearchEngine")
		.service("commonService", function() {
            /**
             * @desc This is commonService to share updated data between controllers using setter getter functions
             */
            var originCity, destinationCity, departureDate, arrivalDate, refineRange, allFlightData;
            return {
                getCities: getCities,
                setCities: setCities,
                getDates: getDates,
                setDates: setDates,
                getPriceRange: getPriceRange,
                setPriceRange: setPriceRange,
                getFlightData: getFlightData,
                setFlightData: setFlightData
            };
            function getCities() {
                return {
                    originCity: originCity,
                    destinationCity: destinationCity
                };
            }
            function setCities(origin, destination) {
                originCity = origin;
                destinationCity = destination;
            }
            function getDates() {
                return {
                    departureDate: departureDate,
                    arrivalDate: arrivalDate
                };
            }
            function setDates(departure, arrival) {
                departureDate = departure;
                arrivalDate = arrival;
            }
            function getPriceRange() {
                return refineRange;
            }
            function setPriceRange(range) {
                refineRange = range;
            }
            function getFlightData() {
                return allFlightData;
            }
            function setFlightData(flightData) {
                allFlightData = flightData;
            }
		});
})();