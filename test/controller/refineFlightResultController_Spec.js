describe("Unit: refineFlightResultController", function() {
    var scope, controller, commonService;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($rootScope, $controller, _commonService_) {
            scope = $rootScope.$new();
            commonService = _commonService_;
            controller = $controller("refineFlightResultController", {
                $scope: scope,
                commonService: commonService
            });
        });
    });

    it("should test if the controller has been instantiated", function() {
        expect(controller).toBeDefined();
    });

    it("should test initial values", function() {
        expect(scope.refinePrice).toBe(10000);
    });

    it("should test RefineValue function", function() {
        spyOn(commonService, 'setPriceRange');
        scope.refineValue(5000);        
    });
});