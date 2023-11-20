"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var LocationDropdownForm_1 = require("../../components/LocationDropDown/LocationDropdownForm");
var StudentSchedules_1 = require("../../components/StudentSchedules/StudentSchedules");
var StudentSettings_1 = require("../../components/StudentSettings/StudentSettings");
var StudentScheduledTrips = function () {
    var _a = react_2.useState(null), selectedStartLocation = _a[0], setSelectedStartLocation = _a[1];
    var _b = react_2.useState(null), selectedEndLocation = _b[0], setSelectedEndLocation = _b[1];
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-studentcontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Trips"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                "Start Location",
                react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedStartLocation }),
                "End Location",
                react_2["default"].createElement(LocationDropdownForm_1["default"], { onLocationSelect: setSelectedEndLocation }),
                "Trips",
                react_2["default"].createElement(StudentSchedules_1["default"], { startLocationId: selectedStartLocation ? selectedStartLocation : 1, endLocationId: selectedEndLocation ? selectedEndLocation : 2 }))),
        react_2["default"].createElement(StudentSettings_1["default"], null)));
};
exports["default"] = StudentScheduledTrips;
