"use strict";
exports.__esModule = true;
exports.LocationHandler = void 0;
var LocationHandler = /** @class */ (function () {
    /**
     *
     */
    function LocationHandler() {
        this.locations = [
            { locationId: 7, latitude: -26.093444, longitude: 28.047038, description: "Varsity College Sandton", locationName: 'Varsity College Sandton' },
            { locationId: 8, latitude: -26.107862, longitude: 28.057683, description: "Gautrain Station Sandton", locationName: 'Gautrain Station Sandton' },
            { locationId: 9, latitude: -26.100766, longitude: 28.049716, description: "Benmore Mall Sandton", locationName: 'Benmore Mall Sandton' }
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
