import { Shuttle } from "../models/Shuttle";
export class ShuttleDataHandler {
    private shuttles: Shuttle[];
  
    constructor() {
      this.shuttles = [
        // initialize with some dummy shuttles
        { shuttleID: 1, shuttleName: 'Shuttle 1', driverID: 'Driver1', numberOfseats: 20, status: 'Active' },
        { shuttleID: 2, shuttleName: 'Shuttle 2', driverID: 'Driver2', numberOfseats: 30, status: 'Inactive'},
      ];
    }
  
    getShuttles(): Shuttle[] {
      return this.shuttles;
    }
  
    addShuttle(shuttle: Shuttle): void {
      this.shuttles.push(shuttle);
    }
  
    removeShuttle(shuttleID: number): void {
      this.shuttles = this.shuttles.filter(shuttle => shuttle.shuttleID !== shuttleID);
    }
  }