import { Schedule } from "./../models/Schedule";
import { DriverRoute } from "../models/DriverRoute";
import { Locations } from "../models/Locations";



export class DriverRouteHandler {
  private mapRoutes: DriverRoute[] = [];
  private static instance: DriverRouteHandler;

  /**
   *
   */
  constructor() {
    this.fetchDriverRoutes();
  }
  /**
   *Singleton route handler
   */
  public static getInstance(): DriverRouteHandler {
    if (!DriverRouteHandler.instance) {
      DriverRouteHandler.instance = new DriverRouteHandler();
    }

    return DriverRouteHandler.instance;
  }

  public fetchDriverRoutes(): void {
    fetch("https://localhost:3000/api/driveRoute/getDriveRoute")
      .then((response) => response.json())
      .then((data) => {
        
        this.mapRoutes = data.data.map((route: any) => ({
          driverRouteID: route.driverRouteID,
          scheduleID: route.scheduleID,
          driverName: route.driverName,
          shuttleID: route.shuttleID,
          startLocationID: route.startLocationID,
          endLocationID: route.endLocationID,
          departureTime: new Date(
            route.departureTime ? route.departureTime : 1
          ),
        }));
        console.log("Map", this.mapRoutes); // Moved inside the .then block
      })
      .catch((error) => console.error("Error:", error));
  }

  public addDriverRoutesToDatabase(newRoute: DriverRoute) {
    
    fetch("https://localhost:3000/api/driveRoute/AddDriveRoute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRoute),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  /**
   *Method that will generate trips based on the start time and end time of the session,
    and the amount of time it takes to get to get from start location to end location.
   */
  generateRoutes(
    duration: number,
    waitTime: number,
    startLocation: Locations,
    endLocation: Locations,
    shuttleID: number,
    driverName: string,
    schedule: Schedule
  ): DriverRoute[] {
    const routes: DriverRoute[] = [];
    let tripDuration = duration + waitTime;
    let now = new Date();
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let startTime = new Date(
      currentYear,
      currentMonth,
      currentDay,
      schedule.startTime.getHours(),
      schedule.startTime.getMinutes(),
      schedule.startTime.getSeconds()
    );
    let endTime = new Date(
      currentYear,
      currentMonth,
      currentDay,
      schedule.endTime.getHours(),
      schedule.endTime.getMinutes(),
      schedule.endTime.getSeconds()
    );

    // If the session time is less than the current time, use the next day's date
    if (now.getTime() > startTime.getTime()) {
      startTime.setDate(startTime.getDate() + 1);
      endTime.setDate(endTime.getDate() + 1);
    }

    let tripCount = Math.floor(
      (endTime.getTime() - startTime.getTime()) / (tripDuration * 1000)
    );

    for (let i = 0; i < tripCount; i++) {
      let startLoc = i % 2 === 0 ? startLocation : endLocation;
      let endLoc = i % 2 === 0 ? endLocation : startLocation;

      let route: DriverRoute = {
        driverRouteID: `tr${schedule.scheduleID}-${shuttleID}-${i}`,
        scheduleID: schedule.scheduleID,
        driverName: driverName,
        seatsBooked:0,
        shuttleID: shuttleID,
        departureTime: new Date(startTime.getTime() + i * tripDuration * 1000),
        startLocationID: startLoc.locationId,
        endLocationID: endLoc.locationId,
      };
      console.log("preRoute"+route)
      this.addDriverRoutesToDatabase(route);
      routes.push(route);
      this.mapRoutes.push(route);
    }
    this.fetchDriverRoutes()
    console.log(this.mapRoutes);
    return routes;
  }

  getRoutesByStartAndEndLocation(
    startLocationID: number,
    endLocationID: number
  ): DriverRoute[] {
    console.log(this.mapRoutes);
    return this.mapRoutes.filter(
      (route) =>
        route.startLocationID === startLocationID &&
        route.endLocationID === endLocationID
    );
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
