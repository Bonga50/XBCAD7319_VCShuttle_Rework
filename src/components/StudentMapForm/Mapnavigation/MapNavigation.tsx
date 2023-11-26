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
import { Locations } from "../../../models/Locations";
import "./MapNavigation.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";
type newLocation = {
  lat: number;
  lng: number;
};
interface ContainerProps {
  endLocation: Locations;
}
const MapNavigation: React.FC<ContainerProps> = ({ endLocation }) => {
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
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [28.047038, -26.093444],
      zoom: 15
    });
    // Add a 'load' event listener to resize the map once it's loaded
    map.current.on("load", () => {
      map.current.resize();
    });
    // Add a 'resize' event listener to resize the map once it's loaded
    map.current.on("resize", () => {
      map.current.resize();
    });
  }, []);

  useEffect(() => {
    const fetchRoute = async () => {
      const position = await getCurrentLocation();
      const startLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      generateRoute(startLocation, endLocation);
    };

    fetchRoute();
    map.current.resize();
  }, [endLocation]);

  var route: any = null;
  const [lng, setLng] = useState(-70.9); // Set your initial longitude
  const [lat, setLat] = useState(42.35); // Set your initial latitude
  const [zoom, setZoom] = useState(9); // Set your initial zoom level
  const [directions, setDirections] = useState("");

  async function generateRoute(
    start: newLocation,
    end: Locations
  ): Promise<void> {
    const position = await getCurrentLocation();
    console.log(position);
    const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${start.lng},${start.lat};${end.longitude},${end.latitude}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
    console.log(directionsRequest);
    fetch(directionsRequest)
      .then((response) => response.json())
      .then((data) => {
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
          // Add a marker at the start location
          new mapboxgl.Marker()
            .setLngLat([start.lng, start.lat])
            .addTo(map.current);
          // Add a red marker at the end location
          new mapboxgl.Marker({ color: "red" })
            .setLngLat([end.longitude, end.latitude])
            .addTo(map.current);
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
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default MapNavigation;
