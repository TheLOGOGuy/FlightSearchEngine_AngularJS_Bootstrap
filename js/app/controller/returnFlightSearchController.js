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