import { Shuttle } from "../models/Shuttle";
export class ShuttleDataHandler {
    private shuttles: Shuttle[]
    private static instance: ShuttleDataHandler;

    constructor() {
      this.shuttles = [];
      this.getShuttlesFromDatabse();
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

    getShuttleByDriverID(id: string):Shuttle|undefined{
      return this.shuttles.find((shuttle) => shuttle.driverID===id);
    }

    getSeatsByShuttleID(id: number): number | undefined {
      let shuttle = this.shuttles.find((shuttle) => shuttle.shuttleID === id);
      return shuttle ? shuttle.numberOfseats : undefined;
  }
  
  
    removeShuttle(shuttleID: number): void {
      this.shuttles = this.shuttles.filter(shuttle => shuttle.shuttleID !== shuttleID);
    }

    getShuttlesByIDs(ids: Set<number>): Shuttle[] {
      console.log("Parsed IDs"+ids);
      let result: Shuttle[] = [];
      ids.forEach(id => {
          let shuttle = this.shuttles.find(shuttle => shuttle.shuttleID === id);
          if (shuttle) {
              result.push(shuttle);
          }
      });
      console.log("Results"+result);
      return result;
  }
  setSelectedShuttle(shuttleId:number){ localStorage.setItem('shuttleId', shuttleId.toString());}
  getSelectedShuttle(): number {
    const shuttleId = localStorage.getItem('shuttleId');
    console.log("Selected"+shuttleId)
    return shuttleId ? parseInt(shuttleId) : 0; // Returns 0 if shuttleId is null or undefined
  }

  async getShuttlesFromDatabse():Promise<void>{
    fetch(`https://localhost:3000/api/shuttle/getShuttle`)
    .then((response) => response.json())
    .then((data) => {
      // Assuming the data is an array of bookings
      this.shuttles = data.data;
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  
  public addShuttles(shuttle:Shuttle){

    fetch("https://localhost:3000/api/shuttle/AddShuttle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shuttle),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

      this.getShuttlesFromDatabse();
  }
  }
  