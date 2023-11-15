import { Locations } from './../models/Locations';

export class LocationHandler {
    private locations: Locations[];
    private static instance: LocationHandler;

    /**
     *
     */
    constructor() {
        this.locations = [
            { locationId: 1, latitude: 2.44, longitude: 3.33, description: "Next to abc sign", locationName: 'Newyork' },
            { locationId: 2, latitude: 2.44, longitude: 3.33, description: "Next to abc sign", locationName: 'Tokyo' },
            { locationId: 3, latitude: 2.44, longitude: 3.33, description: "Next to abc sign", locationName: 'London' },
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