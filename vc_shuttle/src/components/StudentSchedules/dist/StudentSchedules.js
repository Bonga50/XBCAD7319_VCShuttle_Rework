"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var StudentSchedules = function (_a) {
    var startLocationId = _a.startLocationId, endLocationId = _a.endLocationId;
    var _b = react_2.useState([]), driverRoutes = _b[0], setDriverRoutes = _b[1];
    var routeHandler = new DriverRoutehandler_1.DriverRouteHandler();
    react_2.useEffect(function () {
        setDriverRoutes(routeHandler.getRoutesByStartAndEndLocation(startLocationId, endLocationId));
    }, [startLocationId, endLocationId]);
    return (react_2["default"].createElement("div", { className: "ion-padding" },
        react_2["default"].createElement(react_1.IonList, null, driverRoutes.map(function (route) { return (react_2["default"].createElement(react_1.IonItem, { key: route.driverRouteID },
            react_2["default"].createElement(react_1.IonLabel, null, route.driverName),
            react_2["default"].createElement(react_1.IonLabel, null,
                route.startLocationID,
                " to ",
                route.endLocationID))); }))));
};
exports["default"] = StudentSchedules;
