import { Schedule } from "../models/Schedule";
export class ScheduleDataHandler {
  schedules: Schedule[];
  private static instance: ScheduleDataHandler;

  constructor() {
    this.schedules = [];
    this.getSchedulesFromDatabase()
  }

  public static getInstance(): ScheduleDataHandler {
    if (!ScheduleDataHandler.instance) {
      ScheduleDataHandler.instance = new ScheduleDataHandler();
    }

    return ScheduleDataHandler.instance;
  }

  getSchedules(): Promise<Schedule[]> {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          if (this.schedules.length > 0) {
            clearInterval(interval);
            resolve(this.schedules);
          }
        }, 1000);
      });
  }

  getScheduleByID(id: number): Schedule | undefined {
    return this.schedules.find((schedule) => schedule.scheduleID === id);
  }

  async getSchedulesFromDatabase(): Promise<void> {
    fetch(`https://localhost:3000/api/schedule/getSchedule`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of bookings
        this.schedules = data.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  async addSchedulesToDataBAse(newSchedule: Schedule) {
    fetch("https://localhost:3000/api/schedule/AddSchedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSchedule),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }
}
