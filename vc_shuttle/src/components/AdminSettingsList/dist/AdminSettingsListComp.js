"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminSettingsList = function () {
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonMenu, { contentId: "main-content" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonTitle, null, "Menu"))),
            react_2["default"].createElement(react_1.IonContent, null,
                react_2["default"].createElement(react_1.IonList, null,
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminHomePage" }, "Home"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminBooking" }, "Bookings"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminShuttle" }, "Shuttles"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminLocations" }, "Locations"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminSchedules" }, "Schedules"),
                    react_2["default"].createElement(react_1.IonItem, { routerLink: "/AdminUsers" }, "Users"),
                    react_2["default"].createElement(react_1.IonItem, null, "Reviews"))))));
};
exports["default"] = AdminSettingsList;
