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
import { UserDataHandler } from "../../../Data/UserDataHandler";
import { Redirect } from "react-router";

const DriverBookingListPage: React.FC = () => {
    const userdataHandler = UserDataHandler.getInstance();
  if (userdataHandler.getLoggedRole() !== "driver") {
    return <Redirect to="/" />;
  }
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
