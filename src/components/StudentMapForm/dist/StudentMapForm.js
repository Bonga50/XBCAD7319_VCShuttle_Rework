"use strict";
exports.__esModule = true;
var react_1 = require("react");
var mapbox_gl_1 = require("mapbox-gl");
require("./StudentMapForm.css");
mapbox_gl_1["default"].accessToken =
    "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
var StudentMapForm = function (_a) {
    var startLocation = _a.startLocation, endLocation = _a.endLocation;
    var mapContainer = react_1.useRef(null);
    var map = react_1.useRef(null);
    var _b = react_1.useState(-70.9), lng = _b[0], setLng = _b[1];
    var _c = react_1.useState(42.35), lat = _c[0], setLat = _c[1];
    var _d = react_1.useState(9), zoom = _d[0], setZoom = _d[1];
    var tooltipRef = react_1.useRef(new mapbox_gl_1["default"].Popup({ offset: 15 }));
    // Initialize map when component mounts
    react_1.useEffect(function () {
        if (mapContainer.current) {
            var map_1 = new mapbox_gl_1["default"].Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [startLocation.longitude, startLocation.latitude],
                zoom: 15
            });
            console.log("Locations" + startLocation.longitude);
            map_1.on("load", function () {
                // Add an image to use as a custom marker
                map_1.loadImage("https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png", function (error, image) {
                    if (error)
                        throw error;
                    if (image) {
                        map_1.addImage("custom-marker", image);
                        map_1.resize();
                        // Create GeoJSON data for the start and end locations
                        var data = {
                            type: "FeatureCollection",
                            features: [
                                {
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: [
                                            startLocation.longitude,
                                            startLocation.latitude
                                        ]
                                    },
                                    properties: {
                                        title: startLocation.locationName
                                    }
                                },
                                {
                                    type: "Feature",
                                    geometry: {
                                        type: "Point",
                                        coordinates: [endLocation.longitude, endLocation.latitude]
                                    },
                                    properties: {
                                        title: endLocation.locationName
                                    }
                                }
                            ]
                        };
                        // Add a GeoJSON source with the start and end locations
                        map_1.addSource("points", {
                            type: "geojson",
                            data: data
                        });
                        map_1.addLayer({
                            id: "points",
                            type: "symbol",
                            source: "points",
                            layout: {
                                "icon-image": "custom-marker",
                                // get the title name from the source's "title" property
                                "text-field": ["get", "title"],
                                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                                "text-offset": [0, 1.25],
                                "text-anchor": "top"
                            }
                        });
                        // Get the route data from the Mapbox Directions API
                        fetch("https://api.mapbox.com/directions/v5/mapbox/driving-traffic/" + startLocation.longitude + "," + startLocation.latitude + ";" + endLocation.longitude + "," + endLocation.latitude + "?geometries=geojson&access_token=" + mapbox_gl_1["default"].accessToken)
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            // Add a source and layer for the route
                            map_1.addSource("route", {
                                type: "geojson",
                                data: {
                                    type: "Feature",
                                    properties: {},
                                    geometry: data.routes[0].geometry
                                }
                            });
                            map_1.addLayer({
                                id: "route",
                                type: "line",
                                source: "route",
                                paint: {
                                    "line-width": 2,
                                    "line-color": "#007cbf"
                                }
                            });
                        });
                    }
                    else {
                        console.error("Failed to load image");
                    }
                });
            });
            // Add navigation control (the +/- zoom buttons)
            map_1.addControl(new mapbox_gl_1["default"].NavigationControl(), "top-right");
            // Clean up on unmount
            return function () { return map_1.remove(); };
        }
        else {
            console.error("Failed to initialize map: mapContainer.current is null");
        }
    }, []);
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
exports["default"] = StudentMapForm;
