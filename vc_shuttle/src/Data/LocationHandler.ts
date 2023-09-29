import { Locations } from "../models/Locations";

export class LocationHandler{
    private locations: Locations[];

    /**
     *
     */
    constructor() {
      this.locations = [
        {locationId: 1, locationName: 'Newyork'},
        {locationId: 2, locationName: 'Tokyo'},
        {locationId: 3, locationName: 'London'},
        ] 

    }

    getLocations():Locations[] {
        return this.locations;
    }

}