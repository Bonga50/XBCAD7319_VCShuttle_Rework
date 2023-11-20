"use strict";
exports.__esModule = true;
exports.DriverRouteHandler = void 0;
var DriverRouteHandler = /** @class */ (function () {
    /**
     *
     */
    function DriverRouteHandler() {
        this.mapRoutes = [];
        this.fetchDriverRoutes();
    }
    /**
     *Singleton route handler
     */
    DriverRouteHandler.getInstance = function () {
        if (!DriverRouteHandler.instance) {
            DriverRouteHandler.instance = new DriverRouteHandler();
        }
        return DriverRouteHandler.instance;
    };
    DriverRouteHandler.prototype.fetchDriverRoutes = function () {
        var _this = this;
        fetch('https://localhost:3000/api/driveRoute/getDriveRoute')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            console.log(data);
            _this.mapRoutes = data.data.map(function (route) { return ({
                driverRouteID: route.driverRouteID,
                scheduleID: route.scheduleID,
                driverName: route.driverName,
                shuttleID: route.shuttleID,
                startLocationID: route.startLocationID,
                endLocationID: route.endLocationID,
                departureTime: new Date(route.departureTime ? route.departureTime : 1)
            }); });
            console.log("Map", _this.mapRoutes); // Moved inside the .then block
        })["catch"](function (error) { return console.error('Error:', error); });
    };
    /**
      *Method that will generate trips based on the start time and end time of the session,
       and the amount of time it takes to get to get from start location to end location.
      */
    DriverRouteHandler.prototype.generateRoutes = function (duration, waitTime, startLocation, endLocation, shuttleID, driverName, schedule) {
        var routes = [];
        var tripDuration = duration + waitTime;
        var now = new Date();
        var currentYear = now.getFullYear();
        var currentMonth = now.getMonth();
        var currentDay = now.getDate();
        var startTime = new Date(currentYear, currentMonth, currentDay, schedule.startTime.getHours(), schedule.startTime.getMinutes(), schedule.startTime.getSeconds());
        var endTime = new Date(currentYear, currentMonth, currentDay, schedule.endTime.getHours(), schedule.endTime.getMinutes(), schedule.endTime.getSeconds());
        // If the session time is less than the current time, use the next day's date
        if (now.getTime() > startTime.getTime()) {
            startTime.setDate(startTime.getDate() + 1);
            endTime.setDate(endTime.getDate() + 1);
        }
        var tripCount = Math.floor((endTime.getTime() - startTime.getTime()) / (tripDuration * 1000));
        for (var i = 0; i < tripCount; i++) {
            var startLoc = i % 2 === 0 ? startLocation : endLocation;
            var endLoc = i % 2 === 0 ? endLocation : startLocation;
            var route = {
                driverRouteID: "tr" + schedule.scheduleID + "-" + shuttleID + "-" + i,
                scheduleID: schedule.scheduleID,
                driverName: driverName,
                shuttleID: shuttleID,
                departureTime: new Date(startTime.getTime() + i * tripDuration * 1000),
                startLocationID: startLoc.locationId,
                endLocationID: endLoc.locationId
            };
            routes.push(route);
            this.mapRoutes.push(route);
        }
        console.log(this.mapRoutes);
        return routes;
    };
    DriverRouteHandler.prototype.getRoutesByStartAndEndLocation = function (startLocationID, endLocationID) {
        console.log(this.mapRoutes);
        return this.mapRoutes.filter(function (route) {
            return route.startLocationID === startLocationID &&
                route.endLocationID === endLocationID;
        });
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
