import mapboxgl from "mapbox-gl";
import { Locations } from "../models/Locations";
import axios from "axios";
mapboxgl.accessToken =
"pk.eyJ1IjoidGhlcmVhbGJvbmdhIiwiYSI6ImNsbG0yMXF2dTJqZm0zZ21nbm43b3RyamYifQ.DeWMvQ5HgM53BMjgWqc2TQ";

export class MapHandler {
    private static instance: MapHandler;

    /**
     *
     */
    constructor() {
        
    }

    public static getInstance(): MapHandler {
        if (!MapHandler.instance) {
            MapHandler.instance = new MapHandler();
        }
        
        return MapHandler.instance;
    }

     formatDuration(seconds: number): string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
    
        return `${hours} hours, ${minutes} minutes, and ${secs} seconds`;
    }

    async getTimeToGetToDestanation(startLocation:Locations,endLocation:Locations) {
        const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLocation.longitude},${startLocation.latitude};${endLocation.longitude},${endLocation.latitude}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
        try {
            const response = await axios.get(directionsRequest);
            const routes = response.data.routes;
    
            if (routes.length > 0) {
                // Duration is in seconds
                const duration = routes[0].duration;
                return duration;
            } else {
                console.log('No routes found');
                return null;
            }
        } catch (error) {
            console.error('Error fetching directions:', error);
            return null;
        }
    }





}