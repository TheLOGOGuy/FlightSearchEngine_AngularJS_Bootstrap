describe("Unit: oneWayFlightSearchController", function() {
    var scope, controller, commonService, route, location;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($rootScope, $controller, _commonService_, $route, $location) {
            scope = $rootScope.$new();
            commonService = _commonService_;
            route = $route;
            location = $location;
            controller = $controller("oneWayFlightSearchController", {
                $scope: scope,
                commonService: commonService,
                $route: route,
                $location: location
            });
        });
    });

    it("should test if the controller has been instantiated", function() {
        expect(controller).toBeDefined();
    });

    it("should test initial values", function() {
        expect(scope.origin).toBe("");
        expect(scope.destination).toBe("");
        expect(scope.passengers).toBe("");
        expect(scope.departureDate).toBe("");
    });
    
    it("should test if oneWayFlightSearch function has been defined", function() {
        expect(scope.oneWayFlightSearch).toBeDefined();
    }); 
});