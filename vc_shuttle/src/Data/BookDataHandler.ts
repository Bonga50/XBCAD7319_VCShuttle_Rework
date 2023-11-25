import { Booking } from "./../models/Booking";

export class BookDataHandler {
  private static instance: BookDataHandler;
  private bookings: Booking[];
  constructor() {
    this.fetchBookings();
    this.bookings = [];
  }

  public static getInstance(): BookDataHandler {
    if (!BookDataHandler.instance) {
      BookDataHandler.instance = new BookDataHandler();
    }

    return BookDataHandler.instance;
  }

  getBookings(userId: string): Promise<Booking[]> {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.bookings.length > 0) {
          clearInterval(interval);
          resolve(this.bookings.filter((booking) => booking.userId == userId));
        }
      }, 1000);
    });
  }

  getActiveBookings(userId: string): Promise<Booking[]> {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.bookings.length > 0) {
          clearInterval(interval);
          resolve(
            this.bookings.filter((booking) => {
              let currentDate = new Date();
              let bookingDate = new Date(booking.bookingTime);
              return (
                bookingDate.getFullYear() === currentDate.getFullYear() &&
                bookingDate.getMonth() === currentDate.getMonth() &&
                bookingDate.getDate() === currentDate.getDate() &&
                booking.userId == userId
              );
            })
          );
        }
      }, 1000);
    });
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
    console.log("trip id = " + tripId);
    console.log("number of bookings" + this.bookings.length);
    return this.bookings.filter((booking) => booking.tripId === tripId).length;
  }

  generateBookingID() {
    length = 10;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "bk";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  getBookingsByUserId(userId: string): Booking[] {
    return this.bookings.filter((booking) => booking.userId === userId);
  }

  getBookingsByTripId(tripId: string): Booking[] {
    return this.bookings.filter((booking) => booking.tripId === tripId);
  }

  getActiveBookingsCount(shuttleID: Number): number {
    let count = 0;
    let currentDate = new Date();
    for (let booking of this.bookings) {
      if (
        booking.shuttleID === shuttleID &&
        booking.bookingTime > currentDate
      ) {
        count++;
      }
    }
    return count;
  }

  public addBookingsForUser(booking: Booking) {
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

  public getBookingsForToday(userId: string): Booking[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // set the time to 00:00:00
  
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate()+1); // get the date for tomorrow
  
    return this.bookings.filter(booking => {
      const bookingTime = new Date(booking.bookingTime);
      return booking.userId === userId && bookingTime >= today && bookingTime < tomorrow;
    });
  }
}
