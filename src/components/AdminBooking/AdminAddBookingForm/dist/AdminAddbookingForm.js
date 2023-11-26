"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var ScheduleDropDown_1 = require("../../ScheduleDropDown/ScheduleDropDown");
var LocationDropdownForm_1 = require("../../LocationDropDown/LocationDropdownForm");
var BookDataHandler_1 = require("../../../Data/BookDataHandler");
var react_router_1 = require("react-router");
var AvailableShuttleDropDownForm_1 = require("../../AvailableDriverShuttle/AvailableShuttleDropDownForm");
var DriverRouterDropDown_1 = require("../../DriverRouterDropDown/DriverRouterDropDown");
var AdminAddBookingForm = function () {
    var bookingDataHandler = BookDataHandler_1.BookDataHandler.getInstance();
    var _a = react_2.useState(null), selectedDriverRoute = _a[0], setSelectedDriverRoute = _a[1];
    var _b = react_2.useState(null), selectedShuttle = _b[0], setSelectedShuttle = _b[1];
    var _c = react_2.useState(null), selectedSchedule = _c[0], setSelectedSchedule = _c[1];
    var _d = react_2.useState(null), selectedStartLocation = _d[0], setSelectedStartLocation = _d[1];
    var _e = react_2.useState(null), selectedEndLocation = _e[0], setSelectedEndLocation = _e[1];
    var _f = react_2.useState(null), studentNumber = _f[0], setStudentNumber = _f[1];
    var history = react_router_1.useHistory();
    var handleSubmit = function (event) {
        // Save data here
        console.log(studentNumber, selectedSchedule, selectedShuttle, selectedStartLocation, selectedEndLocation);
        if (selectedShuttle === null ||
            selectedSchedule === null ||
            selectedStartLocation === null ||
            selectedEndLocation === null ||
            selectedDriverRoute === null) {
            console.error("Please select all values.");
        }
        else {
            event.preventDefault();
            var newBooking = {
                bookingid: bookingDataHandler.generateBookingID(),
                userId: studentNumber,
                session: selectedSchedule,
                shuttleID: selectedShuttle,
                bookingStatus: "Active",
                startLocation: selectedStartLocation,
                endLocation: selectedEndLocation,
                bookingTime: new Date(),
                tripId: selectedDriverRoute
            };
            bookingDataHandler.addBookingsForUser(newBooking);
            history.push('/');
        }
        ;
    };
    return (react_2["default"].createElement("form", { onSubmit: handleSubmit },
        react_2["default"].createElement("div", { className: "ion-padding" },
            react_2["default"].createElement(react_1.IonSearchbar, { className: "ion-padding" }),
            react_2["default"].createElement(react_1.IonLabel, null, "Student ID/email :"),
            react_2["default"].createElement(react_1.IonInput, { className: 'ion-padding', value: studentNumber, onIonChange: function (e) { return setStudentNumber(e.detail.value || ""); } }),
            react_2["default"].createElement(ScheduleDropDown_1["default"], { onScheduleSelect: setSelectedSchedule }),
            react_2["default"].createElement(react_1.IonLabel, null, "Start location"),
            ".",
            react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedStartLocation }),
            react_2["default"].createElement(react_1.IonLabel, null, "End location"),
            react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedEndLocation }),
            react_2["default"].createElement(DriverRouterDropDown_1["default"], { onDriverRouteSelect: setSelectedDriverRoute, startLocation: selectedStartLocation ? selectedStartLocation : 0, endLocation: selectedEndLocation ? selectedEndLocation : 0 }),
            react_2["default"].createElement(AvailableShuttleDropDownForm_1["default"], { onShuttleSelect: setSelectedShuttle, sessionId: selectedSchedule ? selectedSchedule : 0, startLocation: selectedStartLocation ? selectedStartLocation : 0, endLocation: selectedEndLocation ? selectedEndLocation : 0 }),
            react_2["default"].createElement(react_1.IonButton, { expand: "full", type: "submit" }, "Save"))));
};
exports["default"] = AdminAddBookingForm;
