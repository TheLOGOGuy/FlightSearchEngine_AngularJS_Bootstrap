describe("Unit: returnFlightSearchController", function() {
    var scope, controller, commonService, route, location;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($rootScope, $controller, _commonService_, $route, $location) {
            scope = $rootScope.$new();
            commonService = _commonService_;
            route = $route;
            location = $location;
            controller = $controller("returnFlightSearchController", {
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
        expect(scope.returnOrigin).toBe("");
        expect(scope.returnDestination).toBe("");
        expect(scope.returnDepartureDate).toBe("");
        expect(scope.returnArrivalDate).toBe("");
        expect(scope.returnPassengers).toBe("");
    });
    
    it("should test if returnFlightSearch function has been defined", function() {
        expect(scope.returnFlightSearch).toBeDefined();
    }); 
});