export type Schedule  ={
    scheduleID: number;
    scheduleName: string;
    startTime: Date;
    endTime: Date;
}
export class SchedulClass {
    scheduleID: number;
    scheduleName: string;
    startTime: Date;
    endTime: Date;

    constructor(scheduleID: number, scheduleName: string, startTime: Date, endTime: Date) {
        this.scheduleID = scheduleID;
        this.scheduleName = scheduleName;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}