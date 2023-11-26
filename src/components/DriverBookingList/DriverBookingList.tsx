import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import DriverAllRouteDropDown from "../DriverAllRouteDropDown/DriverAllRouteDropDown";
import { UserDataHandler } from "../../Data/UserDataHandler";
import { BookDataHandler } from "../../Data/BookDataHandler";
import { ShuttleDataHandler } from "../../Data/ShuttleDataHandler";
import { Booking } from "../../models/Booking";
import { LocationHandler } from "../../Data/LocationHandler";
import { ScheduleDataHandler } from "../../Data/ScheduleDataHandler";

const DriverBookingList: React.FC = () => {
  const bookdataHandler = BookDataHandler.getInstance();
  const userdataHandler = UserDataHandler.getInstance();
  const scheduleDataHandler = ScheduleDataHandler.getInstance();
  const shuttledataHandler = ShuttleDataHandler.getInstance();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const locationdataHandler = LocationHandler.getInstance();
  const [searhTripID, setsearhTripID] = useState("");

  useEffect(() => {
    const fetchBooking = async () => {
      if (bookings.length <= 0) {
        await bookdataHandler.fetchBookings();
      }
      const allbookings = await bookdataHandler.getAllRecentBookingsByShuttleID(
        shuttledataHandler.getSelectedShuttle(),
        searhTripID
      );
      setBookings(allbookings);
    };
    fetchBooking();
  }, [searhTripID]);

  return (
    <div>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recent Bookings</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            onIonChange={(e) =>
              setsearhTripID(e.detail.value ? e.detail.value : "")
            }
          ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonList>
        {bookings.map((bookings) => (
          <IonItem button key={bookings.bookingid}>
            <IonLabel>{bookings.userId}</IonLabel>
            <IonLabel>
              {
                scheduleDataHandler.getScheduleByID(bookings.session)
                  ?.scheduleName
              }
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
};

export default DriverBookingList;
