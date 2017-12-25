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