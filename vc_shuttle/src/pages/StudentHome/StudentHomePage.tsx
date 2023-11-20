import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import ShuttleDropDown from "../../components/ShuttleDropDown/ShuttleDropDownForm";
import ShuttleDetailsForm from "../../components/ShuttleDetailsForm/ShuttleDetailsFrom";
import BookingListForm from "../../components/BookingListForm/BookingListForm";
import listIcon from "../../resources/images/listicon.png";
import clockIcon from "../../resources/images/clockicon.png";
import mapPinicon from "../../resources/images/mapblackpin.png";
import StudentSettings from "../../components/StudentSettings/StudentSettings";
import { DriverRouteHandler } from "../../Data/DriverRoutehandler";
import { DriverRoute } from "../../models/DriverRoute";

const StudentHome: React.FC = () => {
  const [selectedShuttle, setSelectedShuttle] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<DriverRoute | null>(null);
  const routedataHandler = DriverRouteHandler.getInstance();

  useEffect(() => {
    if (selectedShuttle !== null) {
      let route = routedataHandler.getByShuttleID(selectedShuttle);
      console.log(selectedShuttle);
      setSelectedRoute(route);
    }
  }, [selectedShuttle]);

  return (
    <>
    <IonPage id="main-studentcontent">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton routerLink="/ShuttleBooking" className="ion-padding">
          Book
        </IonButton>
        <ShuttleDropDown
          onShuttleSelect={setSelectedShuttle}
        />

        <ShuttleDetailsForm trip={selectedRoute? selectedRoute:undefined} />
        {/* Button to show list of Bookings */}
        <IonButton routerLink="/StudentBookingList">
          <div>
            <img src={listIcon} height="48px" alt="Bookings" />
          </div>
        </IonButton>
        {/* Button to show list of Locations */}
        <IonButton routerLink="/LocationsList">
          <div>
            <img src={mapPinicon} height="48px" alt="Locations" />
          </div>
        </IonButton>
        {/* Button to show list of past schedules */}
        <IonButton routerLink="/StudentScheduledTrips">
          <div>
            <img src={clockIcon} height="48px" alt="Schedules" />
          </div>
        </IonButton>
        <BookingListForm />
      </IonContent>
    </IonPage>
    <StudentSettings/>
    </>
  );


};

export default StudentHome;
