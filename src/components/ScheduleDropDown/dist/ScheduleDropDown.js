"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var ScheduleDataHandler_1 = require("../../Data/ScheduleDataHandler");
var ScheduleDropDown = function (_a) {
    var onScheduleSelect = _a.onScheduleSelect;
    var _b = react_2.useState([]), schedules = _b[0], setSchedules = _b[1];
    var dataHandler = new ScheduleDataHandler_1.ScheduleDataHandler();
    react_2.useEffect(function () {
        setSchedules(dataHandler.getSchedules());
    }, []);
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonList, null,
            react_2["default"].createElement(react_1.IonItem, { className: 'ion-padding' },
                react_2["default"].createElement(react_1.IonSelect, { "aria-label": "Schedules", placeholder: "Select a Time slot", onIonChange: function (e) { return onScheduleSelect(e.detail.value); } }, schedules.map(function (schedules) { return (react_2["default"].createElement(react_1.IonSelectOption, { key: schedules.scheduleID, value: schedules.scheduleID }, schedules.scheduleName)); }))))));
};
exports["default"] = ScheduleDropDown;
