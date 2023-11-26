"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var DriverRouteDropDown = function (_a) {
    var shuttleId = _a.shuttleId, onDriverRouteSelect = _a.onDriverRouteSelect;
    var _b = react_2.useState([]), driverRoutes = _b[0], setDriverRoutes = _b[1];
    var dataHandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    react_2.useEffect(function () {
        setDriverRoutes(dataHandler.getRoutesByStartAndEndLocation(startLocation, endLocation));
    }, [startLocation, endLocation]);
    var handleDriverRouteChange = function (e) {
        var selectedDriverRoute = e.detail.value;
        onDriverRouteSelect(selectedDriverRoute);
    };
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonList, null,
            react_2["default"].createElement(react_1.IonItem, { className: 'ion-padding' },
                react_2["default"].createElement(react_1.IonSelect, { "aria-label": "Driver Route", placeholder: "Driver Route", onIonChange: handleDriverRouteChange }, driverRoutes.map(function (route) { return (react_2["default"].createElement(react_1.IonSelectOption, { key: route.driverRouteID, value: route.driverRouteID }, "Departure Time: " + new Date(route.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ", Seats Booked: " + route.seatsBooked)); }))))));
};
;
exports["default"] = DriverRouteDropDown;
