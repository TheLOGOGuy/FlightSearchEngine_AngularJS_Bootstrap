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
         * @desc This will filter the flightData using oneWayFlightSearchFilter based on origin, destination and prize and return the result
         */
        $scope.flights = $filter("oneWayFlightSearchFilter")($scope.flightData, $scope.originCity, $scope.destinationCity, $scope.refinePriceRange);
    }
    angular.module("flightSearchEngine")
        .controller("oneWayFlightResultController", ["$scope", "fetchData", "commonService", "$filter", oneWayFlightResultControllerFunction]);
})();