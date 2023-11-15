import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ';
type newLocation = {
    lat: number;
    lng: number;
};
const MapNavigation: React.FC = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    useEffect(() => {
         map.current = new mapboxgl.Map({
            container: mapContainer.current, // The ref to the map container element
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-74.5, 40], // Replace with your initial longitude and latitude
            zoom: 9 // Replace with your initial zoom level
        });

        // Add your route request function here
        // Example: map.on('load', () => { /* Add route logic here */ });
        generateRoute({ lat: 40.748817, lng: -73.985428 }, { lat: 40.730610, lng: -73.935242 });
    }, []);
    var route: any = null;
    const [lng, setLng] = useState(-70.9); // Set your initial longitude
    const [lat, setLat] = useState(42.35); // Set your initial latitude
    const [zoom, setZoom] = useState(9); // Set your initial zoom level

    async function generateRoute(start: newLocation, end: newLocation): Promise<void> {
        const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${end.lng},${end.lat}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
        fetch(directionsRequest)
            .then(response => response.json())
            .then(data => {
                if (data.routes && data.routes.length) {
                    // If a route was found
                    if (route) {
                        // If a route is currently displayed on the map, remove it
                        map.current.removeLayer('route');
                        map.current.removeSource('route');
                    }

                    // Add a new layer to the map for the route
                    map.current.addLayer({
                        id: 'route',
                        type: 'line',
                        source: {
                            type: 'geojson',
                            data: {
                                type: 'Feature',
                                properties: {},
                                geometry: data.routes[0].geometry
                            }
                        },
                        layout: {
                            'line-join': 'round',
                            'line-cap': 'round'
                        },
                        paint: {
                            'line-color': '#888',
                            'line-width': 8
                        }
                    });
                } else {
                    console.error('No route found', data);
                }
            })
            .catch(error => {
                console.error('Error fetching directions:', error);
            });
    }



    


    return (
        <div>
            <div ref={mapContainer} className="map-container" style={{ width: '100%', height: '400px' }} />
        </div>
    );
};

export default MapNavigation;