"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var mapbox_gl_1 = require("mapbox-gl");
require("mapbox-gl/dist/mapbox-gl.css");
require("./MapNavigation.css");
mapbox_gl_1["default"].accessToken =
    "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
var MapNavigation = function (_a) {
    var endLocation = _a.endLocation;
    // This function gets the user's current location
    function getCurrentLocation() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
    // This function watches the user's current location
    function watchCurrentLocation(callback) {
        return navigator.geolocation.watchPosition(callback);
    }
    var mapContainer = react_1.useRef(null);
    var map = react_1.useRef(null);
    react_1.useEffect(function () {
        if (mapContainer.current) {
            map.current = new mapbox_gl_1["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [28.047038, -26.093444],
                zoom: 15
            });
            if (map.current) {
                // Add a 'load' event listener to resize the map once it's loaded
                map.current.on("load", function () {
                    if (map.current) {
                        map.current.resize();
                    }
                });
                // Add a 'resize' event listener to resize the map once it's loaded
                map.current.on("resize", function () {
                    if (map.current) {
                        map.current.resize();
                    }
                });
            }
            else {
                console.error("Failed to initialize map: map.current is null");
            }
        }
        else {
            console.error("Failed to initialize map: mapContainer.current is null");
        }
    }, []);
    react_1.useEffect(function () {
        var fetchRoute = function () { return __awaiter(void 0, void 0, void 0, function () {
            var position, startLocation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getCurrentLocation()];
                    case 1:
                        position = _a.sent();
                        startLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        generateRoute(startLocation, endLocation);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchRoute();
        if (map.current) {
            map.current.resize();
        }
    }, [endLocation]);
    var route = null;
    var _b = react_1.useState(-70.9), lng = _b[0], setLng = _b[1]; // Set your initial longitude
    var _c = react_1.useState(42.35), lat = _c[0], setLat = _c[1]; // Set your initial latitude
    var _d = react_1.useState(9), zoom = _d[0], setZoom = _d[1]; // Set your initial zoom level
    var _e = react_1.useState(""), directions = _e[0], setDirections = _e[1];
    function generateRoute(start, end) {
        return __awaiter(this, void 0, Promise, function () {
            var position, directionsRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getCurrentLocation()];
                    case 1:
                        position = _a.sent();
                        console.log(position);
                        directionsRequest = "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/" + start.lng + "," + start.lat + ";" + end.longitude + "," + end.latitude + "?access_token=" + mapbox_gl_1["default"].accessToken + "&geometries=geojson";
                        console.log(directionsRequest);
                        fetch(directionsRequest)
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data.routes && data.routes.length) {
                                console.log(data);
                                // If a route was found
                                if (route) {
                                    // If a route is currently displayed on the map, remove it
                                    if (map.current) {
                                        map.current.removeLayer("route");
                                        map.current.removeSource("route");
                                    }
                                }
                                // Add a new layer to the map for the route
                                if (map.current) {
                                    map.current.addLayer({
                                        id: "route",
                                        type: "line",
                                        source: {
                                            type: "geojson",
                                            data: {
                                                type: "Feature",
                                                properties: {},
                                                geometry: data.routes[0].geometry
                                            }
                                        },
                                        layout: {
                                            "line-join": "round",
                                            "line-cap": "round"
                                        },
                                        paint: {
                                            "line-color": "#888",
                                            "line-width": 8
                                        }
                                    });
                                    // Add a marker at the start location
                                    new mapbox_gl_1["default"].Marker()
                                        .setLngLat([start.lng, start.lat])
                                        .addTo(map.current);
                                    // Add a red marker at the end location
                                    new mapbox_gl_1["default"].Marker({ color: "red" })
                                        .setLngLat([end.longitude, end.latitude])
                                        .addTo(map.current);
                                }
                            }
                            else {
                                console.error("No route found", data);
                            }
                        })["catch"](function (error) {
                            console.error("Error fetching directions:", error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: "sidebar" },
            "Longitude: ",
            lng,
            " | Latitude: ",
            lat,
            " | Zoom: ",
            zoom),
        react_1["default"].createElement("div", { ref: mapContainer, className: "map-container" })));
};
exports["default"] = MapNavigation;
