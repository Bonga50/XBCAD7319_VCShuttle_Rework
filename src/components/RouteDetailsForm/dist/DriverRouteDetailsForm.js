"use strict";
exports.__esModule = true;
var react_1 = require("@ionic/react");
var react_2 = require("react");
var iconbus_png_1 = require("../../resources/images/iconbus.png");
var BookDataHandler_1 = require("../../Data/BookDataHandler");
var DriverRoutehandler_1 = require("../../Data/DriverRoutehandler");
var LocationHandler_1 = require("../../Data/LocationHandler");
var ScheduleDataHandler_1 = require("../../Data/ScheduleDataHandler");
var ShuttleDataHandler_1 = require("../../Data/ShuttleDataHandler");
var DriverRouteDetailsForm = function (_a) {
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
        if (trip) {
            setStartLocation(locationdataHandler.getLocationByID(trip.startLocationID));
            setEndLocation(locationdataHandler.getLocationByID(trip.endLocationID));
            setnumberOfBookedSeats(boookingdataHandler.getActiveBookingsCount(trip.shuttleID));
            setnumberOfSeats(shuttledataHandler.getSeatsByShuttleID(trip.shuttleID));
            setSelectedschedule(scheduledataHandler.getScheduleByID(trip.scheduleID));
        }
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
                trip ? startLocation === null || startLocation === void 0 ? void 0 : startLocation.locationName : 'N/A',
                " - ",
                trip ? endLocation === null || endLocation === void 0 ? void 0 : endLocation.locationName : 'N/A'),
            react_2["default"].createElement(react_1.IonProgressBar, null, "https://ionicframework.com/docs/api/progress-bar"),
            react_2["default"].createElement(react_1.IonCardContent, null,
                trip ? selectedschedule === null || selectedschedule === void 0 ? void 0 : selectedschedule.startTime.getHours() : 'N/A',
                ":",
                trip ? selectedschedule === null || selectedschedule === void 0 ? void 0 : selectedschedule.startTime.getMinutes() : 'N/A',
                "- ",
                trip ? selectedschedule === null || selectedschedule === void 0 ? void 0 : selectedschedule.endTime.getHours() : 'N/A',
                ":",
                trip ? selectedschedule === null || selectedschedule === void 0 ? void 0 : selectedschedule.endTime.getMinutes() : 'N/A'),
            react_2["default"].createElement(react_1.IonButton, { routerLink: '/StudentMap', className: 'ion-padding' }, "Track"))));
};
exports["default"] = DriverRouteDetailsForm;
