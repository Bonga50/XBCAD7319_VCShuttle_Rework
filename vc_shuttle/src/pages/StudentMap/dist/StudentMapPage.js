"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var StudentMapForm_1 = require("../../components/StudentMapForm/StudentMapForm");
var StudentMapPage = function () {
    return (react_2["default"].createElement(react_1.IonPage, null,
        react_2["default"].createElement(react_1.IonHeader, null,
            react_2["default"].createElement(react_1.IonToolbar, null,
                react_2["default"].createElement(react_1.IonTitle, null, "Page Title"))),
        react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
            react_2["default"].createElement(StudentMapForm_1["default"], { startLocation: {
                    locationId: 0,
                    latitude: -26.093444,
                    longitude: 28.047038,
                    description: '',
                    locationName: 'Varsity College Sandton'
                }, endLocation: {
                    locationId: 0,
                    latitude: -26.107862,
                    longitude: 28.057683,
                    description: '',
                    locationName: 'Gautrain Station Sandton'
                } }))));
};
exports["default"] = StudentMapPage;
