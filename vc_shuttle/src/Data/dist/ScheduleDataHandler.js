"use strict";
exports.__esModule = true;
exports.ScheduleDataHandler = void 0;
var ScheduleDataHandler = /** @class */ (function () {
    function ScheduleDataHandler() {
        this.schedules = [
            { scheduleID: 6, scheduleName: "Morning Session", startTime: new Date(2000, 0, 1, 6, 0, 0), endTime: new Date(2000, 0, 1, 9, 0, 0) },
            { scheduleID: 7, scheduleName: "Midday Session", startTime: new Date(2000, 0, 1, 11, 30, 0), endTime: new Date(2000, 0, 1, 13, 0, 0) },
            { scheduleID: 8, scheduleName: "Afternoon Session", startTime: new Date(2000, 0, 1, 15, 30, 0), endTime: new Date(2000, 0, 1, 17, 0, 0) }
        ];
    }
    ScheduleDataHandler.getInstance = function () {
        if (!ScheduleDataHandler.instance) {
            ScheduleDataHandler.instance = new ScheduleDataHandler();
        }
        return ScheduleDataHandler.instance;
    };
    ScheduleDataHandler.prototype.getSchedules = function () {
        return this.schedules;
    };
    ScheduleDataHandler.prototype.getScheduleByID = function (id) {
        return this.schedules.find(function (schedule) { return schedule.scheduleID === id; });
    };
    return ScheduleDataHandler;
}());
exports.ScheduleDataHandler = ScheduleDataHandler;
