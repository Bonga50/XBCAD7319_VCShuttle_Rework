import { DriverRoute } from "../models/DriverRoute";

export class DriverRouteHandler{
    private mapRoutes:DriverRoute[] = [];
    private static instance: DriverRouteHandler;

    /**
     *
     */
    constructor() {
        this.mapRoutes = [
            {
            driverRouteID: "1",
            scheduleID: 2,
            driverName: "John Doe",
            shuttleID: 1,
            startLocationID: 2,
            endLocationID: 3,
          },
          {
            driverRouteID: "2",
            scheduleID: 1,
            driverName: "Jane Smith",
            shuttleID: 2,
            startLocationID: 1,
            endLocationID: 2,
          }
          // Add more dummy data here if needed
        ];

    }

    public static getInstance(): DriverRouteHandler {
      if (!DriverRouteHandler.instance) {
        DriverRouteHandler.instance = new DriverRouteHandler();
      }
  
      return DriverRouteHandler.instance;
    }
  

    getByShuttleID(shuttleID: number): DriverRoute | null {
      console.log(shuttleID);
      for (let route of this.mapRoutes) {
          if (route.shuttleID === shuttleID) {
              return route;
          }
      }
      return null; // Return null if no route with the given shuttleID is found
  }
}