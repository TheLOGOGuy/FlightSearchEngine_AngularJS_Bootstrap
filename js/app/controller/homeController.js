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