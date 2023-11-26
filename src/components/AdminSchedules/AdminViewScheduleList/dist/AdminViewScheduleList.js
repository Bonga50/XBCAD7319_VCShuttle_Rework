"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var ScheduleDataHandler_1 = require("../../../Data/ScheduleDataHandler");
var AdminViewScheduleDetails_1 = require("../AdminViewScheduleDetails/AdminViewScheduleDetails");
var AdminViewScheduleList = function () {
    var _a = react_2.useState([]), schedules = _a[0], setSchedules = _a[1];
    var dataHandler = ScheduleDataHandler_1.ScheduleDataHandler.getInstance(); // Replace with your actual data handler
    var _b = react_2.useState(), selectedSchedule = _b[0], setSelectedSchedule = _b[1];
    react_2.useEffect(function () {
        setSchedules(dataHandler.getSchedules());
    }, []);
    react_2.useEffect(function () {
        console.log(selectedSchedule);
    }, [selectedSchedule]);
    function setSelectedItem(scheduleID) {
        setSelectedSchedule(dataHandler.getScheduleByID(scheduleID));
    }
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonHeader, null,
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonTitle, null, "Schedules")),
            react_2["default"].createElement(react_1.IonButtons, { slot: "end" },
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/AdminAddSchedules" }, "ADD"),
                " "),
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonSearchbar, null))),
        react_2["default"].createElement(react_1.IonList, { id: "open-AddScheduleModal", inset: true }, schedules.map(function (schedule) { return (react_2["default"].createElement(react_1.IonItem, { button: true, key: schedule.scheduleID, onClick: function () { return setSelectedItem(schedule.scheduleID); } },
            react_2["default"].createElement(react_1.IonLabel, null, schedule.scheduleName))); })),
        selectedSchedule && react_2["default"].createElement(AdminViewScheduleDetails_1["default"], { schedule: selectedSchedule }),
        " "));
};
exports["default"] = AdminViewScheduleList;
