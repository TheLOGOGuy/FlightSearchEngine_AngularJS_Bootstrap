describe("Unit: fetchAllFlightDataService", function() {
    var fetchData, http, q;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function($injector) {
            fetchData = $injector.get("fetchData");
            http = $injector.get("$httpBackend");
            q = $injector.get("$q");
        });
    });

    it("should call the fecthData service", function() {
        var dataPath = "testPath";
        http.expectGET(dataPath);
        fetchData.getData();
    });
});