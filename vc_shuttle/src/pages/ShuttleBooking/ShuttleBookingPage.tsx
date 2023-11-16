import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ShuttleDropDown from "../../components/ShuttleDropDown/ShuttleDropDownForm";
import ScheduleDropDown from "../../components/ScheduleDropDown/ScheduleDropDown";
import LoctionDropDownForm from "../../components/LocationDropDown/LocationDropdownForm";
import { BookDataHandler } from "../../Data/BookDataHandler";
import StudentSettings from "../../components/StudentSettings/StudentSettings";

const ShuttleBookingPage: React.FC = () => {
  const bookingDataHandler = BookDataHandler.getInstance();
  const [selectedShuttle, setSelectedShuttle] = useState<number | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);
  const [selectedStartLocation, setSelectedStartLocation] = useState<
    string | null
  >(null);
  const [selectedEndLocation, setSelectedEndLocation] = useState<string | null>(
    null
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (
      selectedShuttle === null ||
      selectedSchedule === null ||
      selectedStartLocation === null ||
      selectedEndLocation === null
    ) {
      console.error("Please select all values.");
    } else {
      event.preventDefault();

      const dummyBooking = {
        bookingId: 1, // adjust as needed
        session: selectedSchedule, // adjust as needed
        shuttleID: selectedShuttle, // adjust as needed
        bookingStatus: "Active", // adjust as needed
        startLocation: selectedStartLocation, // adjust as needed
        endLocation: selectedEndLocation, // adjust as needed
        bookingTime: new Date(), // adjust as needed
      };

      bookingDataHandler.addBooking(dummyBooking);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <IonPage id="main-studentcontent">
        <IonHeader>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonToolbar>
            <IonTitle>Shuttle Booking</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <ShuttleDropDown onShuttleSelect={setSelectedShuttle} />
          <ScheduleDropDown onScheduleSelect={setSelectedSchedule} />
          <IonLabel>Start location</IonLabel>.
          <LoctionDropDownForm onLocationSelect={setSelectedStartLocation} />
          <IonLabel>End location</IonLabel>
          <LoctionDropDownForm onLocationSelect={setSelectedEndLocation} />
          <IonButton className="ion-margin-top" type="submit">
            Submit
          </IonButton>
        </IonContent>
      </IonPage>
      <StudentSettings/>
    </form>
  );
};

export default ShuttleBookingPage;
