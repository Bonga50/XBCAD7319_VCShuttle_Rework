import { Schedule } from "../models/Schedule";
export class ScheduleDataHandler {

    schedules: Schedule[];
    private static instance: ScheduleDataHandler;

    constructor() {
        this.schedules = [
            {scheduleID :6, scheduleName: "Morning Session", startTime: new Date(2000, 0, 1, 6, 0, 0), endTime: new Date(2000, 0, 1, 9, 0, 0)},
            {scheduleID :7, scheduleName: "Midday Session", startTime: new Date(2000, 0, 1, 11, 30, 0), endTime: new Date(2000, 0, 1, 13, 0, 0)},
            {scheduleID :8, scheduleName: "Afternoon Session", startTime: new Date(2000, 0, 1, 15, 30, 0), endTime: new Date(2000, 0, 1, 17, 0, 0)}
        ]
    }

    public static getInstance(): ScheduleDataHandler {
        if (!ScheduleDataHandler.instance) {
            ScheduleDataHandler.instance = new ScheduleDataHandler();
        }

        return ScheduleDataHandler.instance;
    }

    getSchedules(): Schedule[] {
        return this.schedules;
    }

    getScheduleByID(id: number): Schedule | undefined {
        return this.schedules.find((schedule) => schedule.scheduleID === id);
    }

}