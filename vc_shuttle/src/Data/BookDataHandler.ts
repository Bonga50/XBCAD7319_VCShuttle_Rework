import { Booking } from './../models/Booking';



export class BookDataHandler {
  private static instance: BookDataHandler;
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
        bookingTime: new Date("2022-01-01T09:00:00")
      },
      {
        bookingId: 2,
        session: "Afternoon",
        shuttleID: 456,
        bookingStatus: "Active",
        startLocation: "DEF Road",
        endLocation: "LMN Lane",
        bookingTime: new Date("2022-01-02T14:30:00")
      },
      {
        bookingId: 3,
        session: "Evening",
        shuttleID: 456,
        bookingStatus: "Active",
        startLocation: "Helo Road",
        endLocation: "Ball Lane",
        bookingTime: new Date("2022-01-02T14:30:00")
      },
      {
        bookingId: 4,
        session: "MidAfternoon",
        shuttleID: 456,
        bookingStatus: "inActive",
        startLocation: "Helo Road",
        endLocation: "Ball Lane",
        bookingTime: new Date("2022-01-02T14:30:00")
      }
    ];
  }

  public static getInstance(): BookDataHandler {
    if (!BookDataHandler.instance) {
      BookDataHandler.instance = new BookDataHandler();
    }

    return BookDataHandler.instance;
  }

  getBookings(): Booking[] {
    console.log(this.bookings.length);
    return this.bookings;
  }

  getActiveBookings(): Booking[] {
    return this.bookings.filter(
      (bookings) => bookings.bookingStatus === "Active"
    );
  }

  addBooking(booking: Booking) {
    this.bookings.push(booking);
    console.log(booking);
  }

  getBookingById(id: number): Booking | undefined {
    return this.bookings.find((booking) => booking.bookingId === id);
  }

  removeBooking(bookingID: number): void {
    this.bookings = this.bookings.filter(
      (booking) => booking.bookingId !== bookingID
    );
  }

  fetchBookingsForUser(userId:string) {
    fetch(`https://localhost:3000/api/bookings/getBookings`)
      .then(response => response.json())
      .then(data => {
        // Assuming the data is an array of bookings
        this.bookings = data;
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}