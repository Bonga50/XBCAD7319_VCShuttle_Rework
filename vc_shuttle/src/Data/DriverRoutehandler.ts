import { DriverRoute } from "../models/DriverRoute";

export class DriverRouteHandler{
    private mapRoutes:DriverRoute[] = [];
    /**
     *
     */
    constructor() {
        this.mapRoutes = [
            {
            driverRouteID: "1",
            scheduleID: 123,
            driverName: "John Doe",
            shuttleName: "Shuttle A",
            startLocationID: "A1",
            endLocationID: "B1",
          },
          {
            driverRouteID: "2",
            scheduleID: 456,
            driverName: "Jane Smith",
            shuttleName: "Shuttle B",
            startLocationID: "C1",
            endLocationID: "D1",
          }
          // Add more dummy data here if needed
        ];

    }
}