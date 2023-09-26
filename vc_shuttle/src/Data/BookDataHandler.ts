import { Booking } from './../models/Booking';



export class BookDataHandler {
    private bookings: Booking[];

    constructor() {
        this.bookings = [
          // initialize with some dummy shuttles
          { 
            bookingId: 1, 
            session: "Morning", 
            shuttleID: 123, 
            bookingStatus: "inActive", 
            startLocation: "ABC Street", 
            endLocation: "XYZ Avenue", 
            bookingTime: new Date("2022-01-01T09:00:00"), 
        }, 
        { 
            bookingId: 2, 
            session: "Afternoon", 
            shuttleID: 456, 
            bookingStatus: "Active", 
            startLocation: "DEF Road", 
            endLocation: "LMN Lane", 
            bookingTime: new Date("2022-01-02T14:30:00"), 
        }, 
        { 
          bookingId: 3, 
          session: "Evening", 
          shuttleID: 456, 
          bookingStatus: "Active", 
          startLocation: "Helo Road", 
          endLocation: "Ball Lane", 
          bookingTime: new Date("2022-01-02T14:30:00"), 
      }, 
      { 
        bookingId: 4, 
        session: "MidAfternoon", 
        shuttleID: 456, 
        bookingStatus: "inActive", 
        startLocation: "Helo Road", 
        endLocation: "Ball Lane", 
        bookingTime: new Date("2022-01-02T14:30:00"), 
    }, 
        ];
      }

      getBookings():Booking[]{
        return this.bookings;
      }

      getActiveBookings():Booking[]{
        return this.bookings.filter(bookings => bookings.bookingStatus==="Active");
      }

      addBooking(booking : Booking){
        this.bookings.push(booking);
      }

      removeBooking(bookingID: number):void{
        this.bookings = this.bookings.filter(booking => booking.bookingId !== bookingID);
      }

}