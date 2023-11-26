"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminViewLocation = function (_a) {
    var location = _a.location;
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
    return (react_2["default"].createElement(react_1.IonModal, { ref: modal, trigger: "open-AddLocationModal", onWillDismiss: function (ev) { return onWillDismiss(ev); } },
        react_2["default"].createElement(react_1.IonHeader, null,
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                    react_2["default"].createElement(react_1.IonButton, { onClick: function () { var _a; return (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss(); } }, "Cancel")),
                react_2["default"].createElement(react_1.IonTitle, null, "Welcome"),
                react_2["default"].createElement(react_1.IonButtons, { slot: "end" },
                    react_2["default"].createElement(react_1.IonButton, { strong: true, onClick: function () { return confirm(); } }, "Confirm")))),
        react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
            react_2["default"].createElement(react_1.IonLabel, null,
                "Location ID: ",
                location ? location.locationId : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Location Name: ",
                location ? location.locationName : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Latitude: ",
                location ? location.latitude : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Longitude: ",
                location ? location.longitude : 'N/A'),
            react_2["default"].createElement("br", null),
            react_2["default"].createElement(react_1.IonLabel, null,
                "Description: ",
                location ? location.description : 'N/A'))));
};
exports["default"] = AdminViewLocation;
