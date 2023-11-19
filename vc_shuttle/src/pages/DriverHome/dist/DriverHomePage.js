"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverStatusDropDownForm_1 = require("../../components/DriverStatusDropDown/DriverStatusDropDownForm");
var DriverRouteDetailsForm_1 = require("../../components/RouteDetailsForm/DriverRouteDetailsForm");
var DriverSettings_1 = require("../../components/DriverSettings/DriverSettings");
var DriverHomePage = function () {
    var _a = react_2.useState(), selectedDriverStatus = _a[0], setDriverStatus = _a[1];
    var handleDriverStatusSelect = function (status) {
        setDriverStatus(status);
        console.log("Selected Driver Status:", status); // Logging the selected driver status
    };
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-Drivercontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Driver"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(DriverStatusDropDownForm_1["default"], { onDriverStatusSelect: handleDriverStatusSelect }),
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/DriverCreateRoute", className: "ion-padding" }, "ROUTE"),
                react_2["default"].createElement(DriverRouteDetailsForm_1["default"], null))),
        react_2["default"].createElement(DriverSettings_1["default"], null)));
};
exports["default"] = DriverHomePage;
