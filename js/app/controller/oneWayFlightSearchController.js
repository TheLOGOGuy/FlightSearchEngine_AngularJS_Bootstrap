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