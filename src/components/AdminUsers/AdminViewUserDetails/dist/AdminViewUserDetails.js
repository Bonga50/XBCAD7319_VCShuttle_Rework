"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var AdminViewUserDetails = function (_a) {
    var user = _a.user;
    var modal = react_2.useRef(null);
    var input = react_2.useRef(null);
    var _b = react_2.useState('This modal example uses triggers to automatically open a modal when the button is clicked.'), message = _b[0], setMessage = _b[1];
    function confirm() {
        var _a;
        (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss(null, 'confirm');
    }
    function onWillDismiss(ev) {
        if (ev.detail.role === 'confirm') {
            setMessage("Hello, " + ev.detail.data + "!");
        }
    }
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonModal, { ref: modal, trigger: "open-AddUserModal", onWillDismiss: function (ev) { return onWillDismiss(ev); } },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonButton, { onClick: function () { var _a; return (_a = modal.current) === null || _a === void 0 ? void 0 : _a.dismiss(); } }, "Cancel")),
                    react_2["default"].createElement(react_1.IonTitle, null, "Welcome"),
                    react_2["default"].createElement(react_1.IonButtons, { slot: "end" },
                        react_2["default"].createElement(react_1.IonButton, { strong: true, onClick: function () { return confirm(); } }, "Confirm")))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(react_1.IonLabel, null,
                    "User ID: ",
                    user ? user.id : 'N/A'),
                react_2["default"].createElement("br", null),
                react_2["default"].createElement(react_1.IonLabel, null,
                    "Name: ",
                    user ? user.name : 'N/A'),
                react_2["default"].createElement("br", null),
                react_2["default"].createElement(react_1.IonLabel, null,
                    "Email: ",
                    user ? user.email : 'N/A'),
                react_2["default"].createElement("br", null),
                react_2["default"].createElement(react_1.IonLabel, null,
                    "Password: ",
                    user ? user.password : 'N/A'),
                react_2["default"].createElement("br", null),
                react_2["default"].createElement(react_1.IonLabel, null,
                    "Role: ",
                    user ? user.role : 'N/A'),
                react_2["default"].createElement("br", null),
                react_2["default"].createElement(react_1.IonLabel, null,
                    "Status: ",
                    user ? user.status : 'N/A')))));
};
exports["default"] = AdminViewUserDetails;
