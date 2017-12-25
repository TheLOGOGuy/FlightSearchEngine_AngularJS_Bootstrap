describe("Unit: returnFlightSearchFilter", function() {
    var $filter;
    beforeEach(function() {
        module("flightSearchEngine");
        inject(function(_$filter_) {
            $filter = _$filter_;
        });
    });
    
    it("should test return flight results on basis of origin, destination and price range", function() {
        var returnFlightSearchFilter = $filter("returnFlightSearchFilter");
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
            },
            {
                "fromCityCode": "PNQ",
                "fromCityName": "Pune",
                "toCityCode": "BLR",
                "toCityName": "Bangalore",
                "flightRate": 4500
            }
        ];
        var origin = "Pune";
        var destination = "Bangalore";
        var priceRange = 5000;
        var expectedResult = [
            [{
                "fromCityCode": "PNQ",
                "fromCityName": "Pune",
                "toCityCode": "BLR",
                "toCityName": "Bangalore",
                "flightRate": 4500
            }],
            [{
                "fromCityCode": "BLR",
                "fromCityName": "Bangalore",
                "toCityCode": "PNQ",
                "toCityName": "Pune",
                "flightRate": 4000
            }]
        ];
        expect(returnFlightSearchFilter(flightData, origin, destination, priceRange)).toEqual(expectedResult);
    });
});