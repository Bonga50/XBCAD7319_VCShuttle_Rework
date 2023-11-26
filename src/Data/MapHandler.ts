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

     public formatDuration(seconds: number): string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
    
        return `${hours} hours, ${minutes} minutes, and ${secs} seconds`;
    }

     setStartEndLocation(startLocation:Locations,endLocation:Locations){
        localStorage.setItem('shuttleStop_StartLocation_Latitude', startLocation.latitude.toString());
        localStorage.setItem('shuttleStop_StartLocation_Longitude', startLocation.longitude.toString());
        localStorage.setItem('shuttleStop_StartLocation_LocName', startLocation.locationName);
        localStorage.setItem('shuttleStop_EndLocation_Latitude', endLocation.latitude.toString());
        localStorage.setItem('shuttleStop_EndLocation_Longitude', endLocation.longitude.toString());
        localStorage.setItem('shuttleStop_EndLocation_LocName', endLocation.locationName);
     }
    
     getStartLocation(): myLocations {
        const latitude = parseFloat(localStorage.getItem('shuttleStop_StartLocation_Latitude') || '0');
        const longitude = parseFloat(localStorage.getItem('shuttleStop_StartLocation_Longitude') || '0');
        const locationName = localStorage.getItem('shuttleStop_StartLocation_LocName') || '';
        return { latitude, longitude, locationName };
      }
      
      getEndLocation(): myLocations {
        const latitude = parseFloat(localStorage.getItem('shuttleStop_EndLocation_Latitude') || '0');
        const longitude = parseFloat(localStorage.getItem('shuttleStop_EndLocation_Longitude') || '0');
        const locationName = localStorage.getItem('shuttleStop_EndLocation_LocName') || '';
        return { latitude, longitude, locationName };
      }
      
    // const getStartEndLocation(){}

    async getTimeToGetToDestanation(startLocation:Locations,endLocation:Locations):Promise<number> {
        const directionsRequest = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startLocation.longitude},${startLocation.latitude};${endLocation.longitude},${endLocation.latitude}?access_token=${mapboxgl.accessToken}&geometries=geojson`;
        try {
            const response = await axios.get(directionsRequest);
            const routes = response.data.routes;
    
            if (routes.length > 0) {
                // Duration is in seconds
                const duration = routes[0].duration;
                return duration;
            } else {
                console.log('No routes found');
                return 0;
            }
        } catch (error) {
            console.error('Error fetching directions:', error);
            return 0;
        }
    }

    
    async  getETATravelTimes(locations: Locations[], locationName: string): Promise<Map<string, number>> {
        const travelTimes = new Map<string, number>();
    
        // Find the start location
        const startLocation = locations.find(location => location.locationName === locationName);
    
        if (!startLocation) {
            console.error('Start location not found');
            return travelTimes;
        }
    
        // Loop through all locations and get the travel time to each one
        for (const endLocation of locations) {
            // Skip if the start and end locations are the same
            if (startLocation.locationId === endLocation.locationId) {
                continue;
            }
    
            const travelTime = await this.getTimeToGetToDestanation(startLocation, endLocation);
    
            // Create a key from the start and end location IDs
            const key = `${startLocation.locationId}-${endLocation.locationId}`;
    
            // Add the travel time to the map
            travelTimes.set(key, travelTime);
        }
    
        return travelTimes;
    }




}
type myLocations = {
    latitude: number;
    longitude: number;
    locationName: string;
  };
