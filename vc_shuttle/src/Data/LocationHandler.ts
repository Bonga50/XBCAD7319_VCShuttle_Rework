import { Locations } from './../models/Locations';

export class LocationHandler {
    private locations: Locations[];
    private static instance: LocationHandler;

    /**
     *
     */
    constructor() {
        this.locations = [
            { locationId: 7, latitude: -26.0789, longitude: 28.0536, description: "Varsity College Sandton", locationName: 'Varsity College Sandton' },
            { locationId: 8, latitude: -26.1076, longitude: 28.0567, description: "Gautrain Station Sandton", locationName: 'Gautrain Station Sandton' },
            { locationId: 9, latitude: -26.0891, longitude: 28.0524, description: "Benmore Mall Sandton", locationName: 'Benmore Mall Sandton' }            
        ]

    }

    public static getInstance(): LocationHandler {
        if (!LocationHandler.instance) {
            LocationHandler.instance = new LocationHandler();
        }

        return LocationHandler.instance;
    }

    getLocations(): Locations[] {
        return this.locations;
    }

    public generateRandomLocationID(): number {
        // Replace this with your actual logic for generating a random ID
        return Math.floor(Math.random() * 1000);
    }

    public getLocationByID(locationId: number): Locations | undefined {
        return this.locations.find((location) => location.locationId === locationId);
    }

    getexcludedLocations(locationName: String): Locations[] {
        var tempLoaction: Locations[] = this.locations.filter(loc => loc.locationName === locationName);
        return tempLoaction;
    }

}