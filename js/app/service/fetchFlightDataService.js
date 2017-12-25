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