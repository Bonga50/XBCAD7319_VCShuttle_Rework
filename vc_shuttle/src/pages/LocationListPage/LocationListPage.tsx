import {
    IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import LocationList from "../../components/LocationList/LocationList";
import StudentSettings from "../../components/StudentSettings/StudentSettings";

const LocationListPage: React.FC = () => {
  return (
    <>
    <IonPage id="main-studentcontent">
      <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
        
          <IonTitle>Locations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <LocationList />
      </IonContent>
    </IonPage>
    <StudentSettings/>
    </>
  );
};

export default LocationListPage;
