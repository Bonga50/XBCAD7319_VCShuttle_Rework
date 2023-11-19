import { Schedule } from './../models/Schedule';
import { DriverRoute } from "../models/DriverRoute";
import { Locations } from '../models/Locations';

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
            departureTime: new Date(2020, 1, 1),
            startLocationID: 2,
            endLocationID: 3,
          },
          {
            driverRouteID: "2",
            scheduleID: 1,
            driverName: "Jane Smith",
            shuttleID: 2,
            departureTime: new Date(2020, 1, 1),
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

    generateRoutes(duration:number,waitTime:number,startLocation:Locations,endLocation:Locations,shuttleID:number,driverName:string,schedule:Schedule):DriverRoute[] {
      const routes: DriverRoute[] = [];
      let tripDuration = duration + waitTime;
      let startTime = new Date(schedule.startTime);
      let endTime = new Date(schedule.endTime);
      let tripCount = Math.floor((endTime.getTime() - startTime.getTime()) / (tripDuration * 1000));
  
      for (let i = 0; i < tripCount; i++) {
          let startLoc = i % 2 === 0 ? startLocation : endLocation;
          let endLoc = i % 2 === 0 ? endLocation : startLocation;
  
          let route: DriverRoute = {
              driverRouteID: `${shuttleID}-${i}`,
              scheduleID: schedule.scheduleID,
              driverName: driverName,
              shuttleID: shuttleID,
              departureTime: new Date(startTime.getTime() + i * tripDuration * 1000),
              startLocationID: startLoc.locationId,
              endLocationID: endLoc.locationId,
          };
  
          routes.push(route);
      }
  
      return routes;

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