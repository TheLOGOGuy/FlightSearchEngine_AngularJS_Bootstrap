describe("Unit: homeController", function() {
    var scope, controller, fetchData, commonService;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($rootScope, $controller, _fetchData_, _commonService_) {
            scope = $rootScope.$new();
            fetchData = _fetchData_;
            commonService = _commonService_;
            controller = $controller("homeController", {
                $scope: scope,
                fetchData: fetchData,
                commonService: commonService
            });
        });
    });    

    it("should test if the controller has been instantiated", function() {
        expect(controller).toBeDefined();
    });

    it("should test if flightData is fetched or not", function() {
        var obj = jasmine.createSpyObj('obj', ['then']);
        spyOn(fetchData, 'getData');
        var response = {
            data: "All Flight Details"
        };
        obj.then.and.callFake(function(fn) {
            fn(response);
        });
        fetchData.getData.and.returnValue(obj);
    });
});