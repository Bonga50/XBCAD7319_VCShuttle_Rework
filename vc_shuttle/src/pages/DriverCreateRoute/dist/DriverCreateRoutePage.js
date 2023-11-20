"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var ScheduleDropDown_1 = require("../../components/ScheduleDropDown/ScheduleDropDown");
var LocationDropdownForm_1 = require("../../components/LocationDropDown/LocationDropdownForm");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var ScheduleDataHandler_1 = require("../../Data/ScheduleDataHandler");
var LocationHandler_1 = require("../../Data/LocationHandler");
var DriverSettings_1 = require("../../components/DriverSettings/DriverSettings");
var DriverCreateRoutePage = function () {
    var _a = react_2.useState(null), selectedSchedule = _a[0], setSelectedSchedule = _a[1];
    var _b = react_2.useState(null), selectedStartLocation = _b[0], setSelectedStartLocation = _b[1];
    var _c = react_2.useState(null), selectedEndLocation = _c[0], setSelectedEndLocation = _c[1];
    var driverRouteHandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    var scheduleDataHandler = ScheduleDataHandler_1.ScheduleDataHandler.getInstance();
    var locationDataHandler = LocationHandler_1.LocationHandler.getInstance();
    var handleSubmit = function () {
        if (selectedSchedule && selectedStartLocation && selectedEndLocation) {
            var duration = 30 * 60; // Replace with actual duration
            var waitTime = 5 * 60; // Replace with actual wait time
            var shuttleID = 1; // Replace with actual shuttle ID
            var selectedSession = scheduleDataHandler.getScheduleByID(selectedSchedule);
            var start = locationDataHandler.getLocationByID(selectedStartLocation);
            var end = locationDataHandler.getLocationByID(selectedEndLocation);
            var routes = driverRouteHandler.generateRoutes(duration, waitTime, start, end, shuttleID, "User1@ie.com", selectedSession);
        }
    };
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-Drivercontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Route"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(ScheduleDropDown_1["default"], { onScheduleSelect: setSelectedSchedule }),
                "Start Location",
                react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedStartLocation }),
                "End Location",
                react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedEndLocation }),
                react_2["default"].createElement(react_1.IonButton, { className: "ion-margin-top", type: "submit", onClick: handleSubmit }, "Submit"))),
        react_2["default"].createElement(DriverSettings_1["default"], null)));
};
exports["default"] = DriverCreateRoutePage;
