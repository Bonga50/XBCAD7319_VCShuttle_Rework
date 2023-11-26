"use strict";
exports.__esModule = true;
exports.BookDataHandler = void 0;
var BookDataHandler = /** @class */ (function () {
    function BookDataHandler() {
        this.bookings = [
            // initialize with some dummy shuttles
            {
                bookingId: 1,
                session: "Morning",
                shuttleID: 1,
                bookingStatus: "inActive",
                startLocation: "ABC Street",
                endLocation: "XYZ Avenue",
                bookingTime: new Date("2022-01-01T09:00:00")
            },
            {
                bookingId: 2,
                session: "Afternoon",
                shuttleID: 1,
                bookingStatus: "Active",
                startLocation: "DEF Road",
                endLocation: "LMN Lane",
                bookingTime: new Date("2022-01-02T14:30:00")
            },
            {
                bookingId: 3,
                session: "Evening",
                shuttleID: 2,
                bookingStatus: "Active",
                startLocation: "Helo Road",
                endLocation: "Ball Lane",
                bookingTime: new Date("2022-01-02T14:30:00")
            },
            {
                bookingId: 4,
                session: "MidAfternoon",
                shuttleID: 2,
                bookingStatus: "inActive",
                startLocation: "Helo Road",
                endLocation: "Ball Lane",
                bookingTime: new Date("2022-01-02T14:30:00")
            }
        ];
    }
    BookDataHandler.getInstance = function () {
        if (!BookDataHandler.instance) {
            BookDataHandler.instance = new BookDataHandler();
        }
        return BookDataHandler.instance;
    };
    BookDataHandler.prototype.getBookings = function () {
        console.log(this.bookings.length);
        return this.bookings;
    };
    BookDataHandler.prototype.getActiveBookings = function () {
        return this.bookings.filter(function (bookings) { return bookings.bookingStatus === "Active"; });
    };
    BookDataHandler.prototype.addBooking = function (booking) {
        this.bookings.push(booking);
        console.log(booking);
    };
    BookDataHandler.prototype.getBookingById = function (id) {
        return this.bookings.find(function (booking) { return booking.bookingId === id; });
    };
    BookDataHandler.prototype.removeBooking = function (bookingID) {
        this.bookings = this.bookings.filter(function (booking) { return booking.bookingId !== bookingID; });
    };
    BookDataHandler.prototype.getActiveBookingsCount = function (shuttleID) {
        var count = 0;
        for (var _i = 0, _a = this.bookings; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (booking.shuttleID === shuttleID && booking.bookingStatus === "Active") {
                count++;
            }
        }
        return count;
    };
    BookDataHandler.prototype.fetchBookingsForUser = function (userId) {
        var _this = this;
        fetch("https://localhost:3000/api/bookings/getBookings")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            // Assuming the data is an array of bookings
            _this.bookings = data;
            console.log(data);
        })["catch"](function (error) {
            console.error('Error:', error);
        });
    };
    return BookDataHandler;
}());
exports.BookDataHandler = BookDataHandler;
