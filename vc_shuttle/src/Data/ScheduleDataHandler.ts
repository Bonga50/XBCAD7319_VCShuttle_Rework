import { Schedule } from "../models/Schedule";
export class ScheduleDataHandler {

    schedules: Schedule[];

    constructor() {
        this.schedules = [
         {scheduleID : 1,scheduleName: "Session 1",startTime: new Date(2023, 8, 5, 9, 0, 0),endTime: new Date(2023, 8, 5, 10, 0, 0)},
         {scheduleID :2,scheduleName: "Session 2",startTime: new Date(2023, 8, 6, 9, 0, 0), endTime: new Date(2023, 8, 6, 10, 0, 0)},
         {scheduleID :3,scheduleName: "Session 3",startTime: new Date(2023, 8, 7, 9, 0, 0), endTime: new Date(2023, 8, 7, 10, 0, 0)},
         {scheduleID :4,scheduleName: "Session 4", startTime: new Date(2023 ,8 ,8 ,9 ,0 ,0), endTime: new Date(2023 ,8 ,8 ,10 ,0 ,0)},
         {scheduleID :5,scheduleName: "Session 5", startTime: new Date(2023 ,8 ,9 ,9 ,0 ,0), endTime: new Date(2023 ,8 ,9 ,10 ,0 ,0)}
        ]
    }

    getSchedules(): Schedule[] {
        return this.schedules;
    }

}