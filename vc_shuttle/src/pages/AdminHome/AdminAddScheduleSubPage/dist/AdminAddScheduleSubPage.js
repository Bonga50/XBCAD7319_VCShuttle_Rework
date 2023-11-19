"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminSettingsListComp_1 = require("../../../components/AdminSettingsList/AdminSettingsListComp");
var AdminAddSchedule_1 = require("../../../components/AdminSchedules/AdminAddSchedule/AdminAddSchedule");
var AdminAddScheduleSubPage = function () {
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-content" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Page Title"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(AdminAddSchedule_1["default"], null))),
        react_2["default"].createElement(AdminSettingsListComp_1["default"], null)));
};
exports["default"] = AdminAddScheduleSubPage;
