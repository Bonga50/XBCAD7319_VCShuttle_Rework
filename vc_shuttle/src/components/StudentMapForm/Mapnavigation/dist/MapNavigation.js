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
mapbox_gl_1["default"].accessToken =
    "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
var MapNavigation = function () {
    // This function gets the user's current location
    function getCurrentLocation() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
    // Define your marker locations for differnt stops
    var markerLocations = [
        { lat: -26.2041, lng: 28.0473 },
        { lat: -26.2386, lng: 27.9082 },
        { lat: -26.1754, lng: 28.0083 },
        { lat: -26.1952, lng: 28.034 },
        { lat: -26.2384, lng: 28.0176 },
    ];
    // This function watches the user's current location
    function watchCurrentLocation(callback) {
        return navigator.geolocation.watchPosition(callback);
    }
    var mapContainer = react_1.useRef(null);
    var map = react_1.useRef(null);
    react_1.useEffect(function () {
        map.current = new mapbox_gl_1["default"].Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-74.5, 40],
            zoom: 9
        });
        map.current.on("load", function () {
            map.current.resize();
            map.current.addControl(new mapbox_gl_1["default"].NavigationControl(), "top-right");
            var _loop_1 = function (location) {
                var markerEl = document.createElement("div");
                markerEl.className = "marker";
                markerEl.style.backgroundImage =
                    "url(../../src/resources/images/icons8_circle_48.png)";
                markerEl.style.width = "48px";
                markerEl.style.height = "48px";
                var marker = new mapbox_gl_1["default"].Marker(markerEl)
                    .setLngLat([location.lng, location.lat])
                    .addTo(map.current);
                // Set up a click event listener for the marker
                markerEl.addEventListener("click", function () {
                    // Update the end location to the clicked marker's location
                    var endLocation = location;
                    // Get the current location
                    watchCurrentLocation(function (position) {
                        var currentLocation = {
                            lng: position.coords.longitude,
                            lat: position.coords.latitude
                        };
                        // If a route is currently displayed on the map, remove it
                        if (map.current.getLayer("route")) {
                            map.current.removeLayer("route");
                            map.current.removeSource("route");
                        }
                        // Generate a new route
                        generateRoute(currentLocation, endLocation);
                    });
                });
            };
            // Add markers to the map
            for (var _i = 0, markerLocations_1 = markerLocations; _i < markerLocations_1.length; _i++) {
                var location = markerLocations_1[_i];
                _loop_1(location);
            }
        });
    }, []);
    var route = null;
    var _a = react_1.useState(-70.9), lng = _a[0], setLng = _a[1]; // Set your initial longitude
    var _b = react_1.useState(42.35), lat = _b[0], setLat = _b[1]; // Set your initial latitude
    var _c = react_1.useState(9), zoom = _c[0], setZoom = _c[1]; // Set your initial zoom level
    var _d = react_1.useState(''), directions = _d[0], setDirections = _d[1];
    function generateRoute(start, end) {
        return __awaiter(this, void 0, Promise, function () {
            var position, startLocation, directionsRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getCurrentLocation()];
                    case 1:
                        position = _a.sent();
                        console.log(position);
                        startLocation = {
                            lng: position.coords.longitude,
                            lat: position.coords.latitude
                        };
                        directionsRequest = "https://api.mapbox.com/directions/v5/mapbox/driving/" + start.lng + "," + start.lat + ";" + end.lng + "," + end.lat + "?access_token=" + mapbox_gl_1["default"].accessToken + "&geometries=geojson";
                        console.log(directionsRequest);
                        fetch(directionsRequest)
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data.routes && data.routes.length) {
                                console.log(data);
                                // If a route was found
                                if (route) {
                                    // If a route is currently displayed on the map, remove it
                                    map.current.removeLayer("route");
                                    map.current.removeSource("route");
                                }
                                // Add a new layer to the map for the route
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
                                // Create directions overlay
                                var steps = data.routes[0].legs[0].steps;
                                var instructions = '';
                                for (var _i = 0, steps_1 = steps; _i < steps_1.length; _i++) {
                                    var step = steps_1[_i];
                                    instructions += "<li>" + step.maneuver.instruction + "</li>";
                                }
                                setDirections(instructions);
                                console.log(instructions);
                                var directionsOverlay = document.createElement('div');
                                directionsOverlay.innerHTML = "<ol>" + instructions + "</ol>";
                                document.body.appendChild(directionsOverlay);
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
    return (react_1["default"].createElement("div", { id: "map" },
        react_1["default"].createElement("div", { className: "sidebar" },
            "Longitude: ",
            lng,
            " | Latitude: ",
            lat,
            " | Zoom: ",
            zoom),
        react_1["default"].createElement("div", { ref: mapContainer, className: "map-container" }),
        react_1["default"].createElement("div", { className: "directions", dangerouslySetInnerHTML: { __html: directions } })));
};
exports["default"] = MapNavigation;
