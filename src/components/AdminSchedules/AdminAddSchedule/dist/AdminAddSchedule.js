"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminAddSchedule = function () {
    var _a = react_2.useState(0), scheduleID = _a[0], setScheduleID = _a[1];
    var _b = react_2.useState(""), scheduleName = _b[0], setScheduleName = _b[1];
    var _c = react_2.useState(""), startTime = _c[0], setStartTime = _c[1];
    var _d = react_2.useState(""), endTime = _d[0], setEndTime = _d[1];
    var handleSubmit = function () {
        // Handle form submission here
        console.log({
            scheduleID: scheduleID,
            scheduleName: scheduleName,
            startTime: new Date(startTime),
            endTime: new Date(endTime)
        });
    };
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonItem, null,
            react_2["default"].createElement(react_1.IonLabel, { position: "stacked" }, "Schedule ID"),
            react_2["default"].createElement(react_1.IonInput, { value: scheduleID, onIonChange: function (e) { return setScheduleID(Number(e.detail.value)); } })),
        react_2["default"].createElement(react_1.IonItem, null,
            react_2["default"].createElement(react_1.IonLabel, { position: "stacked" }, "Schedule Name"),
            react_2["default"].createElement(react_1.IonInput, { value: scheduleName, onIonChange: function (e) { return setScheduleName(e.detail.value); } })),
        react_2["default"].createElement(react_1.IonLabel, { position: "stacked" }, "Start Time"),
        react_2["default"].createElement(react_1.IonItem, null,
            react_2["default"].createElement(react_1.IonDatetime, { presentation: "time", value: startTime, onIonChange: function (e) {
                    return setStartTime(Array.isArray(e.detail.value)
                        ? e.detail.value[0]
                        : e.detail.value);
                } })),
        react_2["default"].createElement(react_1.IonLabel, { position: "stacked" }, "End Time"),
        react_2["default"].createElement("br", null),
        react_2["default"].createElement(react_1.IonItem, null,
            react_2["default"].createElement(react_1.IonDatetime, { presentation: "time", value: endTime, onIonChange: function (e) {
                    return setEndTime(Array.isArray(e.detail.value)
                        ? e.detail.value[0]
                        : e.detail.value);
                } })),
        react_2["default"].createElement(react_1.IonButton, { expand: "full", onClick: handleSubmit }, "Submit")));
};
exports["default"] = AdminAddSchedule;
