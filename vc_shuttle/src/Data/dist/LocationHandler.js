"use strict";
exports.__esModule = true;
exports.LocationHandler = void 0;
var LocationHandler = /** @class */ (function () {
    /**
     *
     */
    function LocationHandler() {
        this.locations = [
            { locationId: 7, latitude: -26.0789, longitude: 28.0536, description: "Varsity College Sandton", locationName: 'Varsity College Sandton' },
            { locationId: 8, latitude: -26.1076, longitude: 28.0567, description: "Gautrain Station Sandton", locationName: 'Gautrain Station Sandton' },
            { locationId: 9, latitude: -26.0891, longitude: 28.0524, description: "Benmore Mall Sandton", locationName: 'Benmore Mall Sandton' }
        ];
    }
    LocationHandler.getInstance = function () {
        if (!LocationHandler.instance) {
            LocationHandler.instance = new LocationHandler();
        }
        return LocationHandler.instance;
    };
    LocationHandler.prototype.getLocations = function () {
        return this.locations;
    };
    LocationHandler.prototype.generateRandomLocationID = function () {
        // Replace this with your actual logic for generating a random ID
        return Math.floor(Math.random() * 1000);
    };
    LocationHandler.prototype.getLocationByID = function (locationId) {
        return this.locations.find(function (location) { return location.locationId === locationId; });
    };
    LocationHandler.prototype.getexcludedLocations = function (locationName) {
        var tempLoaction = this.locations.filter(function (loc) { return loc.locationName === locationName; });
        return tempLoaction;
    };
    return LocationHandler;
}());
exports.LocationHandler = LocationHandler;
