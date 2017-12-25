describe("Unit: commonService", function() {
    var commonService;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($injector) {
            commonService = $injector.get('commonService');
        });
    });

    it("should test if the commonService has been instantiated", function() {
        expect(commonService).toBeDefined();
    });

    it("should test if all commonService function has been defined", function() {
        expect(commonService.getCities).toBeDefined();
        expect(commonService.setCities).toBeDefined();
        expect(commonService.getDates).toBeDefined();
        expect(commonService.setDates).toBeDefined();
        expect(commonService.getPriceRange).toBeDefined();
        expect(commonService.setPriceRange).toBeDefined();
        expect(commonService.getFlightData).toBeDefined();
        expect(commonService.setFlightData).toBeDefined();
    });
});