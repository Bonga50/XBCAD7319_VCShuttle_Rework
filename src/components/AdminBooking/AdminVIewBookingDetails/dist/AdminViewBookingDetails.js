"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminViewBookingDetails = function (_a) {
    var booking = _a.booking;
    var modal = react_2.useRef(null);
    var input = react_2.useRef(null);
    var _b = react_2.useState('This modal example uses triggers to automatically open a modal when the button is clicked.'), message = _b[0], setMessage = _b[1];
    function confirm() {
        var _a, _b;
        (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss((_b = input.current) === null || _b === void 0 ? void 0 : _b.value, 'confirm');
    }
    function onWillDismiss(ev) {
        if (ev.detail.role === 'confirm') {
            setMessage("Hello, " + ev.detail.data + "!");
        }
    }
    return (react_2["default"].createElement(react_1.IonModal, { ref: modal, trigger: "open-AddBookingmodal", onWillDismiss: function (ev) { return onWillDismiss(ev); } },
        react_2["default"].createElement(react_1.IonHeader, null,
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                    react_2["default"].createElement(react_1.IonButton, { onClick: function () { var _a; return (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss(); } }, "Cancel")),
                react_2["default"].createElement(react_1.IonTitle, null, "Welcome"),
                react_2["default"].createElement(react_1.IonButtons, { slot: "end" },
                    react_2["default"].createElement(react_1.IonButton, { strong: true, onClick: function () { return confirm(); } }, "Confirm")))),
        react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
            react_2["default"].createElement(react_1.IonLabel, null,
                "Booking ID: ",
                booking ? booking.bookingid : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Session: ",
                booking ? booking.session : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Shuttle ID: ",
                booking ? booking.shuttleID : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Booking Status: ",
                booking ? booking.bookingStatus : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Start Location: ",
                booking ? booking.startLocation : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "End Location: ",
                booking ? booking.endLocation : "N/A"),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Booking Time: ",
                booking ? booking.bookingTime.toString() : "N/A"),
            react_2["default"].createElement("br", null))));
};
exports["default"] = AdminViewBookingDetails;
