"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var iconbus_png_1 = require("../../resources/images/iconbus.png");
var ShuttleDataHandler_1 = require("../../Data/ShuttleDataHandler");
var LocationHandler_1 = require("../../Data/LocationHandler");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var BookDataHandler_1 = require("../../Data/BookDataHandler");
var ScheduleDataHandler_1 = require("../../Data/ScheduleDataHandler");
var ShuttleDetailsForm = function (_a) {
    var trip = _a.trip;
    var _b = react_2.useState(), startLocation = _b[0], setStartLocation = _b[1];
    var _c = react_2.useState(), endLocation = _c[0], setEndLocation = _c[1];
    var _d = react_2.useState(), numberOfSeats = _d[0], setnumberOfSeats = _d[1];
    var _e = react_2.useState(), numberOfBookedSeats = _e[0], setnumberOfBookedSeats = _e[1];
    var _f = react_2.useState(), selectedschedule = _f[0], setSelectedschedule = _f[1];
    var shuttledataHandler = ShuttleDataHandler_1.ShuttleDataHandler.getInstance();
    var boookingdataHandler = BookDataHandler_1.BookDataHandler.getInstance();
    var routedataHandler = DriverRoutehandler_1.DriverRouteHandler.getInstance();
    var locationdataHandler = LocationHandler_1.LocationHandler.getInstance();
    var scheduledataHandler = ScheduleDataHandler_1.ScheduleDataHandler.getInstance();
    react_2.useEffect(function () {
        setStartLocation(locationdataHandler.getLocationByID(trip ? trip.startLocationID : 1));
        setEndLocation(locationdataHandler.getLocationByID(trip ? trip.endLocationID : 1));
        setnumberOfBookedSeats(boookingdataHandler.getActiveBookingsCount(trip ? trip.shuttleID : 1));
        setnumberOfSeats(shuttledataHandler.getSeatsByShuttleID(trip ? trip.shuttleID : 1));
        setSelectedschedule(scheduledataHandler.getScheduleByID(trip ? trip.scheduleID : 1));
    }, [trip]);
    return (react_2["default"].createElement("div", null,
        react_2["default"].createElement(react_1.IonCard, null,
            react_2["default"].createElement(react_1.IonHeader, { title: "Title" },
                react_2["default"].createElement(react_1.IonCardTitle, { className: 'ion-padding' },
                    react_2["default"].createElement("div", null,
                        react_2["default"].createElement("img", { src: iconbus_png_1["default"], alt: 'BusIcon' })),
                    trip ? numberOfBookedSeats : 'N/A',
                    " / ",
                    trip ? numberOfSeats : 'N/A',
                    " Seats")),
            react_2["default"].createElement(react_1.IonCardSubtitle, { className: 'ion-padding' },
                " ",
                trip ? startLocation.locationName : 'N/A',
                " - ",
                trip ? endLocation.locationName : 'N/A'),
            react_2["default"].createElement(react_1.IonProgressBar, null, "https://ionicframework.com/docs/api/progress-bar"),
            react_2["default"].createElement(react_1.IonCardContent, null,
                trip ? selectedschedule.startTime.getHours() : 'N/A',
                ":",
                trip ? selectedschedule.startTime.getMinutes() : 'N/A',
                "- ",
                trip ? selectedschedule.endTime.getHours() : 'N/A',
                ":",
                trip ? selectedschedule.endTime.getMinutes() : 'N/A'),
            react_2["default"].createElement(react_1.IonCardContent, null, "Here's a small text description for the card content."),
            react_2["default"].createElement(react_1.IonButton, { routerLink: '/StudentMap', className: 'ion-padding' }, "Track"))));
};
exports["default"] = ShuttleDetailsForm;
