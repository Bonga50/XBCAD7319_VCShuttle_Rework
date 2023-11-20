"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverSettings = function () {
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonMenu, { contentId: "main-Drivercontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonTitle, null, "Menu"))),
            react_2["default"].createElement(react_1.IonContent, null,
                react_2["default"].createElement(react_1.IonList, null,
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/DriverHomePage" }, "Home"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/DriverCreateRoute" }, "Trips"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/" }, "Logout"))))));
};
exports["default"] = DriverSettings;
