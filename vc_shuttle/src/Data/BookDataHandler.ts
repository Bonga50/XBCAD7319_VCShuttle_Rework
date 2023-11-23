import { Booking } from "./../models/Booking";

export class BookDataHandler {
  private static instance: BookDataHandler;
  private bookings: Booking[];
  constructor() {
    this.fetchBookings()
    this.bookings = [];
  }

  public static getInstance(): BookDataHandler {
    if (!BookDataHandler.instance) {
      BookDataHandler.instance = new BookDataHandler();
    }

    return BookDataHandler.instance;
  }

  getBookings(): Promise<Booking[]>  {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.bookings.length > 0) {
          clearInterval(interval);
          resolve(this.bookings);
        }
      }, 1000);
    });
    
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

  getBookingById(id: string): Booking | undefined {
    return this.bookings.find((booking) => booking.bookingid === id);
  }

  removeBooking(bookingID: string): void {
    this.bookings = this.bookings.filter(
      (booking) => booking.bookingid !== bookingID
    );
  }

  getNumberOfBookingsForTrip(tripId: string): number {
    console.log("trip id = "+tripId);
    console.log("number of bookings"+ this.bookings.length);
    return this.bookings.filter(booking => booking.tripId === tripId).length;
  }

   generateBookingID() {
    length = 10
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = 'bk';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  getBookingsByUserId(userId: string): Booking[] {
    return this.bookings.filter(booking => booking.userId === userId);
  }

  getBookingsByTripId(tripId: string): Booking[] {
    return this.bookings.filter(booking => booking.tripId === tripId);
  }

  getActiveBookingsCount(shuttleID: Number): number {
    let count = 0;
    for (let booking of this.bookings) {
      if (
        booking.shuttleID === shuttleID &&
        booking.bookingStatus === "Active"
      ) {
        count++;
      }
    }
    return count;
  }

  public addBookingsForUser(booking:Booking) {
    fetch("https://localhost:3000/api/bookings/AddBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }

  public fetchBookings() {
    fetch(`https://localhost:3000/api/bookings/getBookings`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of bookings
        this.bookings = data.data;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
