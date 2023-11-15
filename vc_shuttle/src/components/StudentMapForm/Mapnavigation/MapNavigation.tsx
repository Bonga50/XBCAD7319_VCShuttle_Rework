import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import geoJson from "../../../resources/images/chicago-parks.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
type newLocation = {
  lat: number;
  lng: number;
};
const MapNavigation: React.FC = () => {
  // This function gets the user's current location
  function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  // This function watches the user's current location
  function watchCurrentLocation(
    callback: (position: GeolocationPosition) => void
  ) {
    return navigator.geolocation.watchPosition(callback);
  }

  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current, // The ref to the map container element
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-74.5, 40], // Replace with your initial longitude and latitude
      zoom: 9 // Replace with your initial zoom level
    });

    map.current.on("load", function () {
      map.current.resize();
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Watch the user's current location and update the route whenever it changes
      watchCurrentLocation((position) => {
        const currentLocation: newLocation = {
          lng: position.coords.longitude,
          lat: position.coords.latitude
        };
        generateRoute(currentLocation, { lat: -26.2041027, lng: 28.1122676 });

        // Create a custom marker (a puck)
    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage =
      "url(../../src/resources/images/icons8_circle_48.png)";
    el.style.width = "48px";
    el.style.height = "48px";

    // If a marker already exists, remove it
    if (map.current.getLayer("user-location")) {
        map.current.removeLayer("user-location");
        map.current.removeSource("user-location");
    }

    // Add the custom marker to the map at the user's current location
    new mapboxgl.Marker(el)
      .setLngLat([position.coords.longitude, position.coords.latitude])
      .addTo(map.current);
      });
    });
  }, []);

  var route: any = null;
  const [lng, setLng] = useState(-70.9); // Set your initial longitude
  const [lat, setLat] = useState(42.35); // Set your initial latitude
  const [zoom, setZoom] = useState(9); // Set your initial zoom level

  async function generateRoute(
    start: newLocation,
    end: newLocation
  ): Promise<void> {
    const position = await getCurrentLocation();

    console.log(position);
    const startLocation: newLocation = {
      lng: position.coords.longitude,
      lat: position.coords.latitude
    };

    const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
    fetch(directionsRequest)
      .then((response) => response.json())
      .then((data) => {
        if (data.routes && data.routes.length) {
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
        } else {
          console.error("No route found", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching directions:", error);
      });
  }

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ width: "100%", height: "100vh" }}
      />
    </div>
  );
};

export default MapNavigation;
