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