import { Shuttle } from "../models/Shuttle";
export class ShuttleDataHandler {
    private shuttles: Shuttle[]
    private static instance: ShuttleDataHandler;

    constructor() {
      this.shuttles = [
        // initialize with some dummy shuttles
        { shuttleID: 1, shuttleName: 'Shuttle 1', driverID: 'Driver1', numberOfseats: 20, status: 'Active' },
        { shuttleID: 2, shuttleName: 'Shuttle 2', driverID: 'Driver2', numberOfseats: 30, status: 'Inactive'},
        { shuttleID: 3, shuttleName: 'Shuttle 3', driverID: 'Driver3', numberOfseats: 30, status: 'Inactive'},
      ];
    }

    public static getInstance(): ShuttleDataHandler {
      if (!ShuttleDataHandler.instance) {
        ShuttleDataHandler.instance = new ShuttleDataHandler();
      }
  
      return ShuttleDataHandler.instance;
    }
  
    getShuttles(): Shuttle[] {
      return this.shuttles;
    }
  
    addShuttle(shuttle: Shuttle): void {
      this.shuttles.push(shuttle);
    }

    generateRandomShuttleID():number{
      return Math.floor(Math.random() * 10000); 
    }

    getShuttleByID(id: number):Shuttle|undefined{
      return this.shuttles.find((shuttle) => shuttle.shuttleID===id);
    }
  
    removeShuttle(shuttleID: number): void {
      this.shuttles = this.shuttles.filter(shuttle => shuttle.shuttleID !== shuttleID);
    }
  }