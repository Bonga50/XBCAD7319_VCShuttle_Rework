
  export type Shuttle = {
    shuttleID: number;
    shuttleName: string;
    driverID: string;
    numberOfseats: number;
    status: string;
  };
  
  export class ShuttleClass {
    shuttleID: number;
    shuttleName: string;
    driverID: string;
    numberOfseats: number;
    status: string;
  
    constructor(shuttleID: number, shuttleName: string, driverID: string, numberOfseats: number, status: string) {
      this.shuttleID = shuttleID;
      this.shuttleName = shuttleName;
      this.driverID = driverID;
      this.numberOfseats = numberOfseats;
      this.status = status;
    }
  }
  