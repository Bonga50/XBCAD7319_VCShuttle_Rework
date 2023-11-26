export type Booking  ={
    bookingid: string;
    userId:string;
    session: number;
    shuttleID: number;
    bookingStatus: string;
    startLocation: number;
    endLocation: number;
    bookingTime: Date;
    tripId:string;
};
export class Bookingclass{
    bookingId: number;
    session: string;
    shuttleID: number;
    bookingStatus: string;
    startLocation: string;
    endLocation: string;
    bookingTime?: Date;

    constructor(bookingId: number, session: string, shuttleID: number, bookingStatus: string, startLocation: string, endLocation: string, bookingTime?: Date) {
        this.bookingId = bookingId;
        this.session = session;
        this.shuttleID = shuttleID;
        this.bookingStatus = bookingStatus;
        this.startLocation = startLocation;
        this.endLocation = endLocation;
        this.bookingTime = bookingTime;
        
    }
}