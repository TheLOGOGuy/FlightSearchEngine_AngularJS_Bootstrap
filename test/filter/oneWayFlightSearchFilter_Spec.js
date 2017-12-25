describe("Unit: oneWayFlightSearchFilter", function() {
    var $filter;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });
    
    it("should test one way results on basis of origin, destination and price range", function() {
        var oneWayFlightSearchFilter = $filter("oneWayFlightSearchFilter");
        var flightData = [
            {
                "fromCityCode": "DEL",
                "fromCityName": "Delhi",
                "toCityCode": "PNQ",
                "toCityName": "Pune",
                "flightRate": 3500
            },
            {
                "fromCityCode": "BLR",
                "fromCityName": "Bangalore",
                "toCityCode": "PNQ",
                "toCityName": "Pune",
                "flightRate": 4000
            }
        ];
        var origin = "Delhi";
        var destination = "Pune";
        var priceRange = 5000;
        var expectedResult = [
            {
                "fromCityCode": "DEL",
                "fromCityName": "Delhi",
                "toCityCode": "PNQ",
                "toCityName": "Pune",
                "flightRate": 3500
            }
        ];
        expect(oneWayFlightSearchFilter(flightData, origin, destination, priceRange)).toEqual(expectedResult);
    });
});