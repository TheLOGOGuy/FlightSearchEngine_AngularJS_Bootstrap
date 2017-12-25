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