import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import DriverStatusDropDown from "../../components/DriverStatusDropDown/DriverStatusDropDownForm";
import DriverRouteDetailsForm from "../../components/RouteDetailsForm/DriverRouteDetailsForm";
import DriverSettings from "../../components/DriverSettings/DriverSettings";

const DriverHomePage: React.FC = () => {
  const [selectedDriverStatus, setDriverStatus] = useState<string>();

  const handleDriverStatusSelect = (status: string) => {
    setDriverStatus(status);
    console.log("Selected Driver Status:", status); // Logging the selected driver status
  };

  return (
    <>
      <IonPage id="main-Drivercontent">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Driver</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <DriverStatusDropDown
            onDriverStatusSelect={handleDriverStatusSelect}
          />
          <IonButton routerLink="/DriverCreateRoute" className="ion-padding">
            ROUTE
          </IonButton>
          <DriverRouteDetailsForm />
        </IonContent>
      </IonPage>
      <DriverSettings />
    </>
  );
};

export default DriverHomePage;
