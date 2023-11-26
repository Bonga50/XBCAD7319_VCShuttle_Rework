import { Locations } from './../models/Locations';

export class LocationHandler {
    private locations: Locations[];
    private static instance: LocationHandler;

    /**
     *
     */
    constructor() {
        this.locations = [];
        this.getLocationsFromDB();
    }

    public static getInstance(): LocationHandler {
        if (!LocationHandler.instance) {
            LocationHandler.instance = new LocationHandler();
        }

        return LocationHandler.instance;
    }

    getLocations():Promise<Locations[]>  {
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
              if (this.locations.length > 0) {
                clearInterval(interval);
                resolve(this.locations);
              }
            }, 1000);
          });
    }

    public generateRandomLocationID(): number {
        // Replace this with your actual logic for generating a random ID
        return Math.floor(Math.random() * 1000);
    }

    public getLocationByID(locationId: number): Locations | undefined {
        console.log("Given"+this.locations.find((location) => location.locationId === locationId)?.locationName);

        return this.locations.find((location) => location.locationId == locationId);
    }

    getexcludedLocations(locationName: String): Locations[] {
        var tempLoaction: Locations[] = this.locations.filter(loc => loc.locationName === locationName);
        return tempLoaction;
    }

    //method that will get locations from database
    public async getLocationsFromDB(): Promise<void> {
        fetch(`https://localhost:3000/api/locations/getLocation`)
        .then((response) => response.json())
        .then((data) => {
          // Assuming the data is an array of bookings
          this.locations = data.data;
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    //method that will add locations to the databse
    public async addLocation(location: Locations): Promise<void> {
        const response = await fetch('https://localhost:3000/api/locations/AddLocation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(location),
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
    
        return new Promise((resolve, reject) => {
            if (data.Message === 'Location Added') {
                this.locations.push(location);
                resolve();
            } else {
                reject('Location added successfully');
            }
        });
    }
    
    


}