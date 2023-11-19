"use strict";
exports.__esModule = true;
exports.DriverRouteHandler = void 0;
var DriverRouteHandler = /** @class */ (function () {
    /**
     *
     */
    function DriverRouteHandler() {
        this.mapRoutes = [];
        this.mapRoutes = [
            {
                driverRouteID: "1",
                scheduleID: 2,
                driverName: "John Doe",
                shuttleID: 1,
                departureTime: new Date(2020, 1, 1),
                startLocationID: 2,
                endLocationID: 3
            },
            {
                driverRouteID: "2",
                scheduleID: 1,
                driverName: "Jane Smith",
                shuttleID: 2,
                departureTime: new Date(2020, 1, 1),
                startLocationID: 1,
                endLocationID: 2
            }
            // Add more dummy data here if needed
        ];
    }
    DriverRouteHandler.getInstance = function () {
        if (!DriverRouteHandler.instance) {
            DriverRouteHandler.instance = new DriverRouteHandler();
        }
        return DriverRouteHandler.instance;
    };
    DriverRouteHandler.prototype.generateRoutes = function (duration, waitTime, startLocation, endLocation, shuttleID, driverName, schedule) {
        var routes = [];
        var tripDuration = duration + waitTime;
        var startTime = new Date(schedule.startTime);
        var endTime = new Date(schedule.endTime);
        var tripCount = Math.floor((endTime.getTime() - startTime.getTime()) / (tripDuration * 1000));
        for (var i = 0; i < tripCount; i++) {
            var startLoc = i % 2 === 0 ? startLocation : endLocation;
            var endLoc = i % 2 === 0 ? endLocation : startLocation;
            var route = {
                driverRouteID: shuttleID + "-" + i,
                scheduleID: schedule.scheduleID,
                driverName: driverName,
                shuttleID: shuttleID,
                departureTime: new Date(startTime.getTime() + i * tripDuration * 1000),
                startLocationID: startLoc.locationId,
                endLocationID: endLoc.locationId
            };
            routes.push(route);
        }
        return routes;
    };
    DriverRouteHandler.prototype.getByShuttleID = function (shuttleID) {
        console.log(shuttleID);
        for (var _i = 0, _a = this.mapRoutes; _i < _a.length; _i++) {
            var route = _a[_i];
            if (route.shuttleID === shuttleID) {
                return route;
            }
        }
        return null; // Return null if no route with the given shuttleID is found
    };
    return DriverRouteHandler;
}());
exports.DriverRouteHandler = DriverRouteHandler;
