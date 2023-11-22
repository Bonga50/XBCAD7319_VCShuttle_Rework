"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var DriverAllRouteDropDown = function (_a) {
    var shuttleId = _a.shuttleId, onDriverRouteSelect = _a.onDriverRouteSelect;
    var dataHandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    var _b = react_2.useState([]), driverRoute = _b[0], setDriverRoute = _b[1];
    react_2.useEffect(function () {
        dataHandler.fetchDriverRoutes();
        setDriverRoute(dataHandler.getRoutesByShuttleID(shuttleId));
    }, []);
    var handleDriverRouteChange = function (e) {
        var selectedDriverRoute = e.detail.value;
        onDriverRouteSelect(selectedDriverRoute);
    };
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonList, null,
            react_2["default"].createElement(react_1.IonItem, { className: 'ion-padding' },
                react_2["default"].createElement(react_1.IonSelect, { "aria-label": "Driver Route", placeholder: "Driver Route", onIonChange: handleDriverRouteChange }, driverRoute.map(function (route) { return (react_2["default"].createElement(react_1.IonSelectOption, { key: route.driverRouteID, value: route.driverRouteID }, "Departure Time: " + new Date(route.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", Seats Booked: " + route.seatsBooked)); }))))));
};
;
exports["default"] = DriverAllRouteDropDown;
