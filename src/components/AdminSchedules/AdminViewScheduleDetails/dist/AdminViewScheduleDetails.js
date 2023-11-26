"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminViewScheduleDetails = function (_a) {
    var schedule = _a.schedule;
    var modal = react_2.useRef(null);
    var handleEdit = function () {
        // Handle edit action here
    };
    var handleDelete = function () {
        // Handle delete action here
    };
    var handleClose = function () {
        // Handle close action here
    };
    return (react_2["default"].createElement(react_1.IonModal, { ref: modal, trigger: "open-AddScheduleModal" },
        react_2["default"].createElement(react_1.IonHeader, null,
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                    react_2["default"].createElement(react_1.IonButton, { onClick: function () { var _a; return (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss(); } }, "Cancel")),
                react_2["default"].createElement(react_1.IonTitle, null, "Schedule Details"),
                react_2["default"].createElement(react_1.IonButtons, { slot: "end" },
                    react_2["default"].createElement(react_1.IonButton, { strong: true, onClick: handleClose }, "Close")))),
        react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
            react_2["default"].createElement(react_1.IonLabel, null,
                "Schedule ID: ",
                schedule ? schedule.scheduleID : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Schedule Name: ",
                schedule ? schedule.scheduleName : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Start Time: ",
                schedule ? new Date(schedule.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "End Time: ",
                schedule ? new Date(schedule.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonButton, { expand: "full", onClick: handleEdit }, "Edit"),
            react_2["default"].createElement(react_1.IonButton, { expand: "full", onClick: handleDelete }, "Delete"))));
};
exports["default"] = AdminViewScheduleDetails;
