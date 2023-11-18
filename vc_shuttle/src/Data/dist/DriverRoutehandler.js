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
                startLocationID: 2,
                endLocationID: 3
            },
            {
                driverRouteID: "2",
                scheduleID: 1,
                driverName: "Jane Smith",
                shuttleID: 2,
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
