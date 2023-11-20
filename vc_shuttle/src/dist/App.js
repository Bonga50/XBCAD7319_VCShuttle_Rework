"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("@ionic/react");
var react_router_1 = require("@ionic/react-router");
var LoginPage_1 = require("./pages/Login/LoginPage");
var StudentHomePage_1 = require("./pages/StudentHome/StudentHomePage");
var ShuttleBookingPage_1 = require("./pages/ShuttleBooking/ShuttleBookingPage");
var StudentBookingList_1 = require("./pages/StudentBookingList/StudentBookingList");
var DriverHomePage_1 = require("./pages/DriverHome/DriverHomePage");
/* Core CSS required for Ionic components to work properly */
require("@ionic/react/css/core.css");
/* Basic CSS for apps built with Ionic */
require("@ionic/react/css/normalize.css");
require("@ionic/react/css/structure.css");
require("@ionic/react/css/typography.css");
/* Optional CSS utils that can be commented out */
require("@ionic/react/css/padding.css");
require("@ionic/react/css/float-elements.css");
require("@ionic/react/css/text-alignment.css");
require("@ionic/react/css/text-transformation.css");
require("@ionic/react/css/flex-utils.css");
require("@ionic/react/css/display.css");
/* Theme variables */
require("./theme/variables.css");
var StudentMapPage_1 = require("./pages/StudentMap/StudentMapPage");
var AdminHomePage_1 = require("./pages/AdminHome/AdminHomePage");
var DriverCreateRoutePage_1 = require("./pages/DriverCreateRoute/DriverCreateRoutePage");
var AdminBookingSubPage_1 = require("./pages/AdminHome/AdminBookingSubPage/AdminBookingSubPage");
var AdminAddBookingSubPage_1 = require("./pages/AdminHome/AdminAddBookingSubPage/AdminAddBookingSubPage");
var AdminAddShuttleSubPage_1 = require("./pages/AdminHome/AdminAddShuttleSubPage/AdminAddShuttleSubPage");
var AdminShuttleSubPage_1 = require("./pages/AdminHome/AdminShuttleSubPage/AdminShuttleSubPage");
var AdminUsersSubPage_1 = require("./pages/AdminHome/AdminUsersSubPage/AdminUsersSubPage");
var AdminAddUserSubPage_1 = require("./pages/AdminHome/AdminAddUserSubPage/AdminAddUserSubPage");
var AdminAddLocationSubPage_1 = require("./pages/AdminHome/AdminAddLocationSubPage/AdminAddLocationSubPage");
var AdminLocationSubPage_1 = require("./pages/AdminHome/AdminLocationSubPage/AdminLocationSubPage");
var MapNavigationPage_1 = require("./pages/MapNavigationPage/MapNavigationPage");
var LocationListPage_1 = require("./pages/LocationListPage/LocationListPage");
var AdminAddScheduleSubPage_1 = require("./pages/AdminHome/AdminAddScheduleSubPage/AdminAddScheduleSubPage");
var AdminScheduleSubPage_1 = require("./pages/AdminHome/AdminScheduleSubPage/AdminScheduleSubPage");
var StudentScheduledTrips_1 = require("./pages/StudentScheduledTrips/StudentScheduledTrips");
react_1.setupIonicReact();
var App = function () { return (React.createElement(react_1.IonApp, null,
    React.createElement(react_router_1.IonReactRouter, null,
        React.createElement(react_1.IonRouterOutlet, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/" },
                React.createElement(LoginPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/StudentHome" },
                React.createElement(StudentHomePage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/DriverCreateRoute" },
                React.createElement(DriverCreateRoutePage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/DriverHomePage" },
                React.createElement(DriverHomePage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminHomePage" },
                React.createElement(AdminHomePage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/ShuttleBooking" },
                React.createElement(ShuttleBookingPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/StudentBookingList" },
                React.createElement(StudentBookingList_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/StudentMap" },
                React.createElement(StudentMapPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminBooking" },
                React.createElement(AdminBookingSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminShuttle" },
                React.createElement(AdminShuttleSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminUsers" },
                React.createElement(AdminUsersSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminLocations" },
                React.createElement(AdminLocationSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminSchedules" },
                React.createElement(AdminScheduleSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminAddBooking" },
                React.createElement(AdminAddBookingSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminAddShuttle" },
                React.createElement(AdminAddShuttleSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminAddUser" },
                React.createElement(AdminAddUserSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminAddLocation" },
                React.createElement(AdminAddLocationSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/AdminAddSchedules" },
                React.createElement(AdminAddScheduleSubPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/MapNavigation" },
                React.createElement(MapNavigationPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/LocationsList" },
                React.createElement(LocationListPage_1["default"], null)),
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/StudentScheduledTrips" },
                React.createElement(StudentScheduledTrips_1["default"], null)))))); };
exports["default"] = App;
