(function() {
	"use strict";
	angular.module("flightSearchEngine", ["ngRoute"]);
})();
/*************/
(function() {
	"use strict";
	angular.module("flightSearchEngine")
		.config(function($routeProvider) {
			$routeProvider
				.when("/home", {
					templateUrl: "../../templates/flightSearchResults.html",
					controller: "homeController"
				})
				.when("/oneWayFlightResults", {
					templateUrl: "../../templates/oneWayFlightSearchResults.html",
					controller: "oneWayFlightResultController"
				})
				.when("/returnFlightResults", {
					templateUrl: "../../templates/returnFlightSearchResults.html",
					controller: "returnFlightResultController"
				})
				.otherwise({
					redirectTo: "/home"
				});
		});
})();
/*************/
(function() {
    "use strict";
    /**
     * @desc homeControllerFunction will fetch all flights data from fetchData service and will set data in commonService
     */
    function homeControllerFunction($scope, fetchData, commonService) {
        fetchData.getData().then(function(response) {
            $scope.flightData = response.data;
            commonService.setFlightData($scope.flightData);
        });
    }
    angular.module("flightSearchEngine")
        .controller("homeController", ["$scope", "fetchData", "commonService", homeControllerFunction]);
})();
/*************/
(function() {
    "use strict";
    function oneWayFlightResultControllerFunction($scope, fetchData, commonService, $filter) {
        $scope.flightData = commonService.getFlightData();
        $scope.cities = commonService.getCities();
        $scope.dates = commonService.getDates();
        $scope.originCity = $scope.cities.originCity;
        $scope.destinationCity = $scope.cities.destinationCity;
        $scope.departureDate = $scope.dates.departureDate;
        $scope.refinePriceRange = commonService.getPriceRange();
        /**
         * @desc This will filter the flightData using oneWayFlightSearchFilter based on origin, destinatiion and prize and return the result
         */
        $scope.flights = $filter("oneWayFlightSearchFilter")($scope.flightData, $scope.originCity, $scope.destinationCity, $scope.refinePriceRange);
    }
    angular.module("flightSearchEngine")
        .controller("oneWayFlightResultController", ["$scope", "fetchData", "commonService", "$filter", oneWayFlightResultControllerFunction]);
})();
/*************/
(function() {
    "use strict";
    function oneWayFlightSearchControllerFunction($scope, commonService, $route, $location) {
        $scope.origin = "";
        $scope.destination = "";        
        $scope.passengers = "";
        $scope.departureDate = "";
        $scope.oneWayFormErrorFlag = false;
        /**
         * @desc This function will check one-way flight search form valid status and will navigate page to one-way flight results page
         * @param {Object} form - contains one-way flight search form data
         */
        $scope.oneWayFlightSearch = function(form){
            if(form.$valid) {
                $scope.oneWayFormErrorFlag = false;
                $scope.departureDate = $("#oneWayFromDate").val();
                commonService.setCities($scope.origin, $scope.destination);
                commonService.setDates($scope.departureDate);
                if($location.$$path === "/oneWayFlightResults") {
                    $route.reload();
                } else {
                    $location.path("/oneWayFlightResults");
                }
            } else {
                $scope.oneWayFormErrorFlag = true;
            }          
        };
    }
    angular.module("flightSearchEngine")
        .controller("oneWayFlightSearchController", ["$scope", "commonService", "$route", "$location", oneWayFlightSearchControllerFunction]);
})();
/*************/
(function() {
    "use strict";
    function refineFlightResultControllerFunction($scope, commonService) {
        $scope.refinePrice = 10000; //initialize slider value
        commonService.setPriceRange($scope.refinePrice);
        /**
         * @desc This function will check slider value and when the value changes it will update new value in commonService method
        */
        $scope.refineValue = function(newVal) {
            commonService.setPriceRange(newVal);
        };        
    }
    angular.module("flightSearchEngine")
        .controller("refineFlightResultController", ["$scope", "commonService", refineFlightResultControllerFunction]);
})();
/*************/
(function() {
    "use strict";
    function returnFlightResultControllerFunction($scope, fetchData, commonService, $filter) {
        $scope.flights = [];
        $scope.firstFlightData = {};
        $scope.secondFlightData = {};
        $scope.flightData = commonService.getFlightData();
        $scope.cities = commonService.getCities();
        $scope.originCity = $scope.cities.originCity;
        $scope.destinationCity = $scope.cities.destinationCity;
        $scope.dates = commonService.getDates();
        $scope.departureDate = $scope.dates.departureDate;
        $scope.arrivalDate = $scope.dates.arrivalDate;
        $scope.refinePriceRange = commonService.getPriceRange();
        /**
         * @desc This will filter the flightData using returnFlightSearchFilter based on origin, destinatiion and prize and return the result
         */
        $scope.flights = $filter("returnFlightSearchFilter")($scope.flightData, $scope.originCity, $scope.destinationCity, $scope.refinePriceRange);
        if($scope.flights.length > 0) {
            $scope.firstFlightData = $scope.flights[0][0];
            $scope.secondFlightData = $scope.flights[1][0];
        }
        $scope.firstSelectedFlight = function(firstSelectedFlightData) {
            $scope.firstFlightData = firstSelectedFlightData;
        };
        $scope.secondSelectedFlight = function(secondSelectedFlightData) {
            $scope.secondFlightData = secondSelectedFlightData;
        };
    }
    angular.module("flightSearchEngine")
        .controller("returnFlightResultController", ["$scope", "fetchData", "commonService", "$filter", returnFlightResultControllerFunction]);
})();
/*************/
(function() {
    "use strict";
    function returnFlightSearchControllerFunction($scope, commonService, $route, $location) {
        $scope.returnOrigin = "";
        $scope.returnDestination = "";
        $scope.returnDepartureDate = "";
        $scope.returnArrivalDate = "";
        $scope.returnPassengers = "";
        $scope.returnFormErrorFlag = false;
        /**
         * @desc This function will check return flight search form valid status and will navigate page to return flight results page
         * @param {Object} form - contains return flight search form data
         */
        $scope.returnFlightSearch = function(form){
            if(form.$valid) {
                $scope.returnFormErrorFlag = false;
                $scope.returnDepartureDate = $("#returnFromDate").val();
                $scope.returnArrivalDate = $("#returnToDate").val();
                commonService.setCities($scope.returnOrigin, $scope.returnDestination);
                commonService.setDates($scope.returnDepartureDate, $scope.returnArrivalDate);
                if($location.$$path === "/returnFlightResults") {
                    $route.reload();
                } else {
                    $location.path("/returnFlightResults");
                }
            } else {
                $scope.returnFormErrorFlag = true;
            }          
        };
    }
    angular.module("flightSearchEngine")
        .controller("returnFlightSearchController", ["$scope", "commonService", "$route", "$location", returnFlightSearchControllerFunction]);
})();
/*************/
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
/*************/
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
/*************/
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
/*************/
(function() {
	"use strict";
	angular.module("flightSearchEngine")
		.service("fetchData", ["$http", "$q", function($http, $q) {
			/**
			 * @desc This method will call http GET service and return flight data from flightData.json file as a response
			 */
			this.getData = function() {
				return $q(function(resolve, reject) {
                    var successFunction = function(response) {
                        resolve(response);
                    };
                    var failureFunction = function() {
                        console.log("Failed to fetch data");
                    };
                    $http.get("../../../data/flightData.json").then(successFunction, failureFunction);
				});
			};
		}]);
})();