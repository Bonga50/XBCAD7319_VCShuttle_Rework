import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import DriverBookingList from "../../../components/DriverBookingList/DriverBookingList";
import DriverSettings from "../../../components/DriverSettings/DriverSettings";

const DriverBookingListPage: React.FC = () => {
  return (
    <>
      <IonPage id="main-Drivercontent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Bookings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <DriverBookingList />
        </IonContent>
      </IonPage>
      <DriverSettings />
    </>
  );
};

export default DriverBookingListPage;
