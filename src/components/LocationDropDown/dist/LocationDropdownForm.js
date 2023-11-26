"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var LocationHandler_1 = require("../../Data/LocationHandler");
var LoctionDropDownForm = function (_a) {
    var onLocationSelect = _a.onLocationSelect;
    var _b = react_2.useState([]), locations = _b[0], setLocation = _b[1];
    var dataHandler = new LocationHandler_1.LocationHandler();
    react_2.useEffect(function () {
        setLocation(dataHandler.getLocations());
    }, []);
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonList, null,
            react_2["default"].createElement(react_1.IonItem, { className: 'ion-padding' },
                react_2["default"].createElement(react_1.IonSelect, { "aria-label": "Locations", placeholder: "Select a Location", onIonChange: function (e) { return onLocationSelect(e.detail.value); } }, locations.map(function (locations) { return (react_2["default"].createElement(react_1.IonSelectOption, { key: locations.locationId, value: locations.locationId }, locations.locationName)); }))))));
};
exports["default"] = LoctionDropDownForm;
