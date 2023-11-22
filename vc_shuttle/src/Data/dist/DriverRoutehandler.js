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
    //methods that will fetch all valid trips from the data base
    DriverRouteHandler.prototype.fetchDriverRoutes = function () {
        var _this = this;
        fetch("https://localhost:3000/api/driveRoute/getDriveRoute")
            .then(function (response) { return response.json(); })
            .then(function (data) {
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
        })["catch"](function (error) { return console.error("Error:", error); });
    };
    //Method that will add the trips to the driver routes/trips to a database
    DriverRouteHandler.prototype.addDriverRoutesToDatabase = function (newRoute) {
        fetch("https://localhost:3000/api/driveRoute/AddDriveRoute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRoute)
        })
            .then(function (response) { return response.json(); })
            .then(function (data) { return console.log(data); })["catch"](function (error) { return console.error("Error:", error); });
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
        var date = new Date();
        var dateString = "" + date.getFullYear() + ("0" +
            (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2);
        for (var i = 0; i < tripCount; i++) {
            var startLoc = i % 2 === 0 ? startLocation : endLocation;
            var endLoc = i % 2 === 0 ? endLocation : startLocation;
            var route = {
                driverRouteID: "tr" + schedule.scheduleID + "-" + shuttleID + "-" + i + "-" + dateString,
                scheduleID: schedule.scheduleID,
                driverName: driverName,
                seatsBooked: 0,
                shuttleID: shuttleID,
                departureTime: new Date(startTime.getTime() + i * tripDuration * 1000),
                startLocationID: startLoc.locationId,
                endLocationID: endLoc.locationId
            };
            console.log("preRoute" + route);
            this.addDriverRoutesToDatabase(route);
            routes.push(route);
            this.mapRoutes.push(route);
        }
        this.fetchDriverRoutes();
        console.log(this.mapRoutes);
        return routes;
    };
    /**
     *Method that will get all the trips/routes by a given start location and a given end location.
     */
    DriverRouteHandler.prototype.getRoutesByStartAndEndLocation = function (startLocationID, endLocationID) {
        console.log(this.mapRoutes);
        return this.mapRoutes.filter(function (route) {
            return route.startLocationID === startLocationID &&
                route.endLocationID === endLocationID;
        });
    };
    /**
     *Method that will look for trips with specific shuttles
     */
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
    //Will look for all available shuttles for a specific session.
    //for a given stat and end location
    DriverRouteHandler.prototype.getRoutesForSession = function (sessionID, startLocation, endLocation) {
        var routesForSession = this.mapRoutes.filter(function (route) {
            return route.scheduleID === sessionID &&
                route.startLocationID === startLocation &&
                route.endLocationID === endLocation;
        });
        console.log("Available routes" + routesForSession.length);
        return routesForSession;
    };
    //will get all trips for a specific shuttle
    DriverRouteHandler.prototype.getRoutesByShuttleID = function (shuttleID) {
        console.log("Available routes" + this.mapRoutes.length);
        return this.mapRoutes.filter(function (route) { return route.shuttleID === shuttleID; });
    };
    //will get a trip by a specific id
    DriverRouteHandler.prototype.getByDriverRouteID = function (driverRouteID) {
        return this.mapRoutes.find(function (route) { return route.driverRouteID === driverRouteID; });
    };
    return DriverRouteHandler;
}());
exports.DriverRouteHandler = DriverRouteHandler;
