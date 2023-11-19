import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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

  // Define your marker locations for differnt stops
  const markerLocations = [
    { lat: -26.2041, lng: 28.0473 }, // Johannesburg Art Gallery
    { lat: -26.2386, lng: 27.9082 }, // Gold Reef City
    { lat: -26.1754, lng: 28.0083 }, // Johannesburg Zoo
    { lat: -26.1952, lng: 28.034 }, // Constitution Hill Human Rights Precinct
    { lat: -26.2384, lng: 28.0176 }, // Apartheid Museum
    // Add more locations as needed
  ];

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
      center: [-74.5, 40],
      zoom: 9,
    });

    map.current.on("load", function () {
      map.current.resize();
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add markers to the map
      for (const location of markerLocations) {
        const markerEl = document.createElement("div");
        markerEl.className = "marker";
        markerEl.style.backgroundImage =
          "url(../../src/resources/images/icons8_circle_48.png)";
        markerEl.style.width = "48px";
        markerEl.style.height = "48px";

        const marker = new mapboxgl.Marker(markerEl)
          .setLngLat([location.lng, location.lat])
          .addTo(map.current);

        // Set up a click event listener for the marker
        markerEl.addEventListener("click", function () {
          // Update the end location to the clicked marker's location
          const endLocation = location;
          // Get the current location
          watchCurrentLocation((position) => {
            const currentLocation = {
              lng: position.coords.longitude,
              lat: position.coords.latitude,
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
      }
    });
  }, []);

  var route: any = null;
  const [lng, setLng] = useState(-70.9); // Set your initial longitude
  const [lat, setLat] = useState(42.35); // Set your initial latitude
  const [zoom, setZoom] = useState(9); // Set your initial zoom level
  const [directions, setDirections] = useState('');

  async function generateRoute(
    start: newLocation,
    end: newLocation
  ): Promise<void> {
    const position = await getCurrentLocation();

    console.log(position);
    const startLocation: newLocation = {
      lng: position.coords.longitude,
      lat: position.coords.latitude,
    };

    const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
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
                geometry: data.routes[0].geometry,
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#888",
              "line-width": 8,
            },
          });
           // Create directions overlay
        const steps = data.routes[0].legs[0].steps;
        let instructions = '';
        for (const step of steps) {
          instructions += `<li>${step.maneuver.instruction}</li>`;
        }
        setDirections(instructions);
        console.log(instructions);
        const directionsOverlay = document.createElement('div');
        directionsOverlay.innerHTML = `<ol>${instructions}</ol>`;
        document.body.appendChild(directionsOverlay);
     
        } else {
          console.error("No route found", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching directions:", error);
      });
  }


  return (
    <div id="map">
    <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
    <div ref={mapContainer} className="map-container" />
    <div className="directions" dangerouslySetInnerHTML={{ __html: directions }} />
  </div>
  );
};

export default MapNavigation;
