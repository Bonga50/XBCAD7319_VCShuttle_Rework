"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var MapNavigation_1 = require("../../components/StudentMapForm/Mapnavigation/MapNavigation");
var MapHandler_1 = require("../../Data/MapHandler");
var MapNavigationPage = function () {
    var mapHandler = MapHandler_1.MapHandler.getInstance();
    return (react_2["default"].createElement(react_1.IonPage, null,
        react_2["default"].createElement(MapNavigation_1["default"], { endLocation: {
                locationId: 0,
                latitude: mapHandler.getTravelEndLocation().latitude,
                longitude: mapHandler.getTravelEndLocation().longitude,
                description: '',
                locationName: mapHandler.getTravelEndLocation().locationName
            } })));
};
exports["default"] = MapNavigationPage;
