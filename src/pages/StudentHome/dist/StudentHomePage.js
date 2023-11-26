"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var ShuttleDropDownForm_1 = require("../../components/ShuttleDropDown/ShuttleDropDownForm");
var ShuttleDetailsFrom_1 = require("../../components/ShuttleDetailsForm/ShuttleDetailsFrom");
var BookingListForm_1 = require("../../components/BookingListForm/BookingListForm");
var listicon_png_1 = require("../../resources/images/listicon.png");
var clockicon_png_1 = require("../../resources/images/clockicon.png");
var mapblackpin_png_1 = require("../../resources/images/mapblackpin.png");
var StudentSettings_1 = require("../../components/StudentSettings/StudentSettings");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var StudentHome = function () {
    var _a = react_2.useState(null), selectedShuttle = _a[0], setSelectedShuttle = _a[1];
    var _b = react_2.useState(null), selectedRoute = _b[0], setSelectedRoute = _b[1];
    var routedataHandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    react_2.useEffect(function () {
        if (selectedShuttle !== null) {
            var route = routedataHandler.getByShuttleID(selectedShuttle);
            console.log(selectedShuttle);
            setSelectedRoute(route);
        }
    }, [selectedShuttle]);
    return (react_2["default"].createElement(react_2["default"].Fragment, null,
        react_2["default"].createElement(react_1.IonPage, { id: "main-studentcontent" },
            react_2["default"].createElement(react_1.IonHeader, null,
                react_2["default"].createElement(react_1.IonToolbar, null,
                    react_2["default"].createElement(react_1.IonButtons, { slot: "start" },
                        react_2["default"].createElement(react_1.IonMenuButton, null)),
                    react_2["default"].createElement(react_1.IonTitle, null, "Home"))),
            react_2["default"].createElement(react_1.IonContent, { className: "ion-padding" },
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/ShuttleBooking", className: "ion-padding" }, "Book"),
                react_2["default"].createElement(ShuttleDropDownForm_1["default"], { onShuttleSelect: setSelectedShuttle }),
                react_2["default"].createElement(ShuttleDetailsFrom_1["default"], { trip: selectedRoute ? selectedRoute : undefined }),
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/StudentBookingList" },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement("img", { src: listicon_png_1["default"], height: "48px", alt: "Bookings" }))),
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/LocationsList" },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement("img", { src: mapblackpin_png_1["default"], height: "48px", alt: "Locations" }))),
                react_2["default"].createElement(react_1.IonButton, { routerLink: "/StudentScheduledTrips" },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement("img", { src: clockicon_png_1["default"], height: "48px", alt: "Schedules" }))),
                react_2["default"].createElement(BookingListForm_1["default"], null))),
        react_2["default"].createElement(StudentSettings_1["default"], null)));
};
exports["default"] = StudentHome;
