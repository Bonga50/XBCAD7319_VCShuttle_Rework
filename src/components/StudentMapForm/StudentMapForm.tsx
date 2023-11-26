import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./StudentMapForm.css";
import geoJson from "../../resources/images/chicago-parks.json";
import { Locations } from "../../models/Locations";

interface ContainerProps {
  startLocation: Locations;
  endLocation: Locations;
}
mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
const StudentMapForm: React.FC<ContainerProps> = ({
  startLocation,
  endLocation
}) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  // Initialize map when component mounts
  useEffect(() => {
    if (mapContainer.current) {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [startLocation.longitude, startLocation.latitude], // Set initial center to start location
        zoom: 15
      });

      console.log("Locations" + startLocation.longitude);

      map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage(
          "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
          function (error, image) {
            if (error) throw error;
            if (image) {
              map.addImage("custom-marker", image);
              map.resize();

              // Create GeoJSON data for the start and end locations
              const data: GeoJSON.FeatureCollection = {
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
              map.addSource("points", {
                type: "geojson",
                data: data
              });

              map.addLayer({
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
              fetch(
                `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startLocation.longitude},${startLocation.latitude};${endLocation.longitude},${endLocation.latitude}?geometries=geojson&access_token=${mapboxgl.accessToken}`
              )
                .then((response) => response.json())
                .then((data) => {
                  // Add a source and layer for the route
                  map.addSource("route", {
                    type: "geojson",
                    data: {
                      type: "Feature",
                      properties: {},
                      geometry: data.routes[0].geometry
                    }
                  });

                  map.addLayer({
                    id: "route",
                    type: "line",
                    source: "route",
                    paint: {
                      "line-width": 2,
                      "line-color": "#007cbf"
                    }
                  });
                });
            } else {
              console.error("Failed to load image");
            }
          }
        );
      });

      // Add navigation control (the +/- zoom buttons)
      map.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Clean up on unmount
      return () => map.remove();
    } else {
      console.error("Failed to initialize map: mapContainer.current is null");
    }
  }, []);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default StudentMapForm;
