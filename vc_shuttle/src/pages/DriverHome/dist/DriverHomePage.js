"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var DriverRouteDetailsForm_1 = require("../../components/RouteDetailsForm/DriverRouteDetailsForm");
var DriverSettings_1 = require("../../components/DriverSettings/DriverSettings");
var DriverAllRouteDropDown_1 = require("../../components/DriverAllRouteDropDown/DriverAllRouteDropDown");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var DriverHomePage = function () {
    var _a = react_2.useState(), selectedDriverStatus = _a[0], setDriverStatus = _a[1];
    var _b = react_2.useState(null), selectedRoute = _b[0], setSelectedRoute = _b[1];
    var _c = react_2.useState(null), selectedDriverRouteID = _c[0], setSelectedDriverRouteID = _c[1];
    var driverRouteDatahandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    var handleDriverStatusSelect = function (status) {
        setDriverStatus(status);
        console.log("Selected Driver Status:", status); // Logging the selected driver status
    };
    react_2.useEffect(function () {
        if (selectedDriverRouteID) {
            var foundRoute = driverRouteDatahandler.getByDriverRouteID(selectedDriverRouteID);
            setSelectedRoute(foundRoute);
            console.log("Selected Route" + selectedRoute);
        }
    }, [selectedDriverRouteID]);
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-Drivercontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Driver"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(DriverAllRouteDropDown_1["default"], { shuttleId: 1, onDriverRouteSelect: setSelectedDriverRouteID }),
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/DriverCreateRoute", className: "ion-padding" }, "ROUTE"),
                react_2["default"].createElement(DriverRouteDetailsForm_1["default"], { trip: selectedRoute ? selectedRoute : undefined }))),
        react_2["default"].createElement(DriverSettings_1["default"], null)));
};
exports["default"] = DriverHomePage;
