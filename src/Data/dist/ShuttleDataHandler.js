"use strict";
exports.__esModule = true;
exports.ShuttleDataHandler = void 0;
var ShuttleDataHandler = /** @class */ (function () {
    function ShuttleDataHandler() {
        this.shuttles = [
            // initialize with some dummy shuttles
            { shuttleID: 1, shuttleName: 'Shuttle 1', driverID: 'Driver1', numberOfseats: 20, status: 'Active' },
            { shuttleID: 2, shuttleName: 'Shuttle 2', driverID: 'Driver2', numberOfseats: 30, status: 'Inactive' },
            { shuttleID: 3, shuttleName: 'Shuttle 3', driverID: 'Driver3', numberOfseats: 30, status: 'Inactive' },
        ];
    }
    ShuttleDataHandler.getInstance = function () {
        if (!ShuttleDataHandler.instance) {
            ShuttleDataHandler.instance = new ShuttleDataHandler();
        }
        return ShuttleDataHandler.instance;
    };
    ShuttleDataHandler.prototype.getShuttles = function () {
        return this.shuttles;
    };
    ShuttleDataHandler.prototype.addShuttle = function (shuttle) {
        this.shuttles.push(shuttle);
    };
    ShuttleDataHandler.prototype.generateRandomShuttleID = function () {
        return Math.floor(Math.random() * 10000);
    };
    ShuttleDataHandler.prototype.getShuttleByID = function (id) {
        return this.shuttles.find(function (shuttle) { return shuttle.shuttleID === id; });
    };
    ShuttleDataHandler.prototype.getSeatsByShuttleID = function (id) {
        var shuttle = this.shuttles.find(function (shuttle) { return shuttle.shuttleID === id; });
        return shuttle ? shuttle.numberOfseats : undefined;
    };
    ShuttleDataHandler.prototype.removeShuttle = function (shuttleID) {
        this.shuttles = this.shuttles.filter(function (shuttle) { return shuttle.shuttleID !== shuttleID; });
    };
    return ShuttleDataHandler;
}());
exports.ShuttleDataHandler = ShuttleDataHandler;
